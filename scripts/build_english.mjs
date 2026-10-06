// Generate static English pages from the shared French layouts and reviewed copy.
// Run before development/build so both languages always share the same design.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const dictionary = JSON.parse(fs.readFileSync('scripts/translations-en.json', 'utf8'));
const normalize = value => value.replace(/\s+/g, ' ').trim();
const translations = new Map(Object.entries(dictionary).filter(([fr]) => normalize(fr)).map(([fr, en]) => [normalize(fr), en]));
const files = [
  'resources/content.tsx', 'resources/about-profiles.tsx',
  'components/about/AboutPage.tsx', 'components/about/TableOfContents.tsx',
  'components/work/PortfolioExplorer.tsx', 'components/work/Projects.tsx',
  'components/ProjectCard.tsx',
  'app/page.tsx', 'app/about/page.tsx',
  'app/about/developpeur-full-stack/page.tsx', 'app/about/chef-de-projet/page.tsx',
  'app/work/page.tsx', 'app/work/[slug]/page.tsx',
  'app/contact/page.tsx', 'app/contact/CalEmbed.tsx', 'app/contact/TallyEmbed.tsx',
  'app/mentions-legales/page.tsx',
];
const localizedModules = new Set(files.filter(file => !file.startsWith('app/')).map(file => '@/' + file.replace(/\.tsx$/, '')));
const route = value => /^\/(?:about|work|contact|mentions-legales)(?:[\/#]|$)/.test(value) || value === '/' ? '/en' + (value === '/' ? '' : value) : value;
const missing = new Set();
function translate(value) {
  const key = normalize(value);
  const translated = translations.get(key) ?? (key.endsWith('.') && translations.has(key.slice(0,-1)) ? translations.get(key.slice(0,-1)) + '.' : undefined);
  if (translated !== undefined) {
    const leading = /^\s/.test(value) && !/^\s/.test(translated) ? ' ' : '';
    const trailing = /\s$/.test(value) && !/\s$/.test(translated) ? ' ' : '';
    return leading + translated + trailing;
  }
  if (/[àâçéèêëîïôùûüœ]/i.test(value) && !value.startsWith('/')) missing.add(normalize(value));
  return value;
}
for (const file of files) {
  const source = fs.readFileSync('src/' + file, 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  function visit(node) {
    let value, replacement;
    if (ts.isJsxText(node)) {
      value = node.text;
      // JSX discards indentation at line boundaries. Preserve meaningful inline spaces.
      const lines = value.replace(/\r/g, '').split('\n');
      const rendered = lines.map((line,index) => {
        let text = line.replace(/\t/g,' ');
        if (index > 0) text = text.replace(/^ +/,'');
        if (index < lines.length-1) text = text.replace(/ +$/,'');
        return text;
      }).filter(Boolean).join(' ');
      const translated = translate(rendered);
      if (translated !== rendered) replacement = '{' + JSON.stringify(translated) + '}';
    } else if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      value = node.text;
      let result = translate(value);
      if (localizedModules.has(value)) result = value.replace('@/', '@/locales/en/');
      if (value === '@/resources') result = '@/locales/en/resources';
      if (value === '@/components') result = '@/locales/en/components';
      if (value === '@/resources/cv-profiles.json') result = '@/locales/en/resources/cv-profiles.json';
      if (value.endsWith('.scss') && value.startsWith('.')) result = '@/' + path.posix.normalize(path.posix.join(path.posix.dirname(file), value));
      result = route(result).replace(/-FR\.pdf$/, '-EN.pdf');
      if (result !== value) replacement = JSON.stringify(result);
    } else if (ts.isTemplateHead(node) || ts.isTemplateMiddle(node) || ts.isTemplateTail(node)) {
      value = node.text;
      const result = route(translate(value));
      if (result !== value) {
        const raw = node.getText(ast);
        replacement = raw.replace(value, result);
      }
    }
    if (replacement !== undefined) edits.push([node.getStart(ast), node.end, replacement]);
    ts.forEachChild(node, visit);
  }
  visit(ast);
  let output = source;
  for (const [start, end, replacement] of edits.sort((a,b) => b[0]-a[0])) output = output.slice(0,start)+replacement+output.slice(end);
  output = output.replaceAll('["src", "app", "work", "projects"]', '["src", "locales", "en", "projects"]');
  output = output.replace(/formatDate\((post\.metadata\.publishedAt)\)/g, 'formatDate($1, false, "en-GB")');
  if (file.endsWith('PortfolioExplorer.tsx')) output = output.replace(/<p className=\{styles.count\}[^\n]+<\/p>/, '<p className={styles.count} role="status" aria-live="polite" aria-atomic="true">{visible.length} project{visible.length !== 1 ? "s" : ""} shown out of {projects.length}</p>');
  if (file.endsWith('CalEmbed.tsx')) output = output.replace('config={{ layout:', 'config={{ lang: "en", layout:');
  if (file.endsWith('TallyEmbed.tsx')) output = 'export { default } from "@/components/EnglishContact";\n';
  const target = file.startsWith('app/') ? 'src/app/en/' + file.slice(4) : 'src/locales/en/' + file;
  fs.mkdirSync(path.dirname(target), {recursive:true});
  fs.writeFileSync(target, '// Generated by scripts/build_english.mjs; edit the shared layout or scripts/translations-en.json.\n'+output);
}
function translateData(value) {
  if (typeof value === 'string') return translate(value);
  if (Array.isArray(value)) return value.map(translateData);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k,v]) => [k,translateData(v)]));
  return value;
}
fs.writeFileSync('src/locales/en/resources/cv-profiles.json', JSON.stringify(translateData(JSON.parse(fs.readFileSync('src/resources/cv-profiles.json','utf8'))),null,2)+'\n');
fs.writeFileSync('src/locales/en/resources/index.ts', 'export * from "./content";\nexport * from "@/resources/once-ui.config";\n');
fs.mkdirSync('src/locales/en/components',{recursive:true});
fs.writeFileSync('src/locales/en/components/index.ts', 'export { ProjectCard } from "./ProjectCard";\nexport { ScrollToHash, CustomMDX } from "@/components";\n');
fs.mkdirSync('src/locales/en/projects', {recursive:true});
for (const file of fs.readdirSync('src/app/work/projects')) {
  if (!file.endsWith('.mdx')) continue;
  const source = fs.readFileSync('src/app/work/projects/' + file, 'utf8');
  let separators = 0;
  const output = source.split('\n').map(line => {
    if (line === '---') { separators++; return line; }
    const field = line.match(/^(summary|subtitle|product|development): "(.*)"$/);
    if (field) return `${field[1]}: ${JSON.stringify(translate(field[2]))}`;
    if (separators < 2) return line;
    if (line.startsWith('## ')) return '## ' + translate(line.slice(3));
    if (line.startsWith('- ') && !line.includes('/images/')) return '- ' + translate(line.slice(2));
    if (line) return translate(line);
    return line;
  }).join('\n');
  fs.writeFileSync('src/locales/en/projects/' + file, output);
}
if (process.argv.includes('--audit')) console.log(JSON.stringify([...missing],null,2));
