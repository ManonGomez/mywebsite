import fs from 'node:fs';
import path from 'node:path';

// Root layout is shared by both locales. Give exported English HTML its language
// before JavaScript loads, for screen readers and search engines.
function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) visit(file);
    else if (entry.name.endsWith('.html')) {
      const html = fs.readFileSync(file, 'utf8');
      fs.writeFileSync(file, html.replace(/<html\b[^>]*\blang="fr"/, match => match.replace('lang="fr"', 'lang="en"')));
    }
  }
}
if (fs.existsSync('out/en')) visit('out/en');
