# Jie Chen (Danna) - Personal Portfolio

A minimalist, elegant personal portfolio built with [Astro](https://astro.build/), featuring bilingual support (English / 中文).

## Features

- **Bilingual** - Full English and Chinese support with language switcher
- **Minimalist Design** - Clean, elegant aesthetic with thoughtful typography
- **Responsive** - Looks great on desktop, tablet, and mobile
- **Fast** - Static site generation with Astro for optimal performance
- **GitHub Pages** - Auto-deployed via GitHub Actions

## Sections

- **Hero** - Personal introduction with avatar
- **Skills & Interests** - Technical skills and AI exploration areas
- **AI Projects** - Showcase of 3 AI projects
- **Contact** - Email, GitHub, LinkedIn links

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Push to `main` branch to auto-deploy via GitHub Actions to GitHub Pages.

### Manual Setup

1. Create a repo named `JieDannaChen.github.io` on GitHub
2. Push this code to the `main` branch
3. Go to **Settings > Pages** and set source to **GitHub Actions**
4. The site will be live at `https://JieDannaChen.github.io`

## Customization

- **Content**: Edit `src/i18n/translations.ts` for text, `src/data/skills.ts` and `src/data/projects.ts` for data
- **Styles**: Edit `src/styles/global.css` for colors, fonts, and spacing
- **Avatar**: Replace the `JC` placeholder in `Hero.astro` with an `<img>` tag pointing to your photo
- **Contact**: Update email and LinkedIn URLs in `src/components/Contact.astro`
