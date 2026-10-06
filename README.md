# Magic Portfolio

Magic Portfolio is a simple, clean, beginner-friendly portfolio template. It supports an MDX-based content system for projects and blog posts, an about / CV page and a gallery.

View the demo [here](https://demo.magic-portfolio.com).

![Magic Portfolio](public/images/og/home.jpg)

## Getting started

**1. Clone the repository**
```
git clone https://github.com/once-ui-system/magic-portfolio.git
```

**2. Install dependencies**
```
npm install
```

**3. Run dev server**
```
npm run dev
```

**4. Edit config**
```
src/resources/once-ui.config.js
```

**5. Edit content**
```
src/resources/content.js
```

**6. Create blog posts / projects**
```
Add a new .mdx file to src/app/blog/posts or src/app/work/projects
```

Magic Portfolio was built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org). It requires Node.js v18.17+.

## Documentation

Docs available at: [docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start)

## Features

### Once UI
- All tokens, components & features of [Once UI](https://once-ui.com)

### SEO
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

### Content
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization
- A localized, earlier version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

## Creators

Lorant One: [Threads](https://www.threads.net/@lorant.one) / [LinkedIn](https://www.linkedin.com/in/lorant-one/)

## Get involved

- Join the Design Engineers Club on [Discord](https://discord.com/invite/5EyAQ4eNdS) and share your project with us!
- Deployed your docs? Share it on the [Once UI Hub](https://once-ui.com/hub) too! We feature our favorite apps on our landing page.

## License

Distributed under the CC BY-NC 4.0 License.
- Attribution is required.
- Commercial usage is not allowed.
- You can extend the license to [Dopler CC](https://dopler.app/license) by purchasing a [Once UI Pro](https://once-ui.com/pricing) license.

See `LICENSE.txt` for more information.

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fog%2Fhome.jpg)
# Français et anglais

Le français est disponible à la racine, l’anglais sous `/en/`. Le bouton globe
FR/EN du menu ouvre la même page dans l’autre langue. Les liens de navigation
restent dans la langue courante. Les liens `?lang=en` et `?lang=fr` sont également
acceptés et redirigent vers la version correspondante.

Les vues anglaises sont générées depuis les composants partagés et les traductions
de `scripts/translations-en.json`. `npm run dev`,
`npm run build` et `npm run export` les régénèrent automatiquement. Ne pas modifier
les fichiers générés dans `src/locales/en` ou les pages générées dans `src/app/en`.
Ces fichiers générés sont aussi versionnés pour que les hébergeurs lançant
directement `next build` disposent de toutes les routes anglaises. Après une
modification, régénérer les vues avec `node scripts/build_english.mjs` et inclure
les fichiers générés dans le commit.
Après une modification de texte français, ajouter sa traduction au catalogue.
`node scripts/build_english.mjs --audit` signale les textes contenant des accents
encore absents du catalogue (les noms propres peuvent rester identiques).

Les profils développement et projet téléchargent le CV FR ou EN selon leur URL.
La page de contact française conserve son formulaire Tally. Pour afficher un
formulaire anglais, définir `NEXT_PUBLIC_TALLY_EN_FORM_URL` avec l’URL embed d’un
formulaire traduit dans Tally, puis reconstruire le site. En attendant, la page
anglaise propose un contact par e-mail en anglais et le calendrier de réservation.
Les QR codes anglais pointent vers `/en/about/developpeur-full-stack/` et
`/en/about/chef-de-projet/`. `scripts/update_cv_qr.py` actualise les QR codes et leurs
liens ; `scripts/build_cvs.py` utilise ces mêmes adresses lors d’une régénération.
