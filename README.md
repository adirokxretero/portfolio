# Adithya M — Personal Portfolio

### [adithya-m.in](https://adithya-m.in)

---

## About This Project

This is my personal portfolio website — designed and built entirely by me
using my own imagination and ideas. Version 2 is a full rebuild on
**Astro** with a refined editorial dark design.

**Inspiration:** Took visual and interaction inspiration from
[utopiatokyo.com](https://www.utopiatokyo.com/) — particularly the
scroll animations, editorial typography, and dark aesthetic.

**How it was built:** 100% vibe coded using
[Claude](https://claude.ai) and [Cursor](https://cursor.sh) as AI
coding assistants. Every design decision, layout choice, content, and
creative direction came from my own vision — the AI helped me execute
it technically.

> "I had the ideas. The AI wrote the code. The result is entirely mine."

---

## Features

- 🖤 Editorial dark design — serif display type (Fraunces), mono details, hairline rules, numbered sections
- 🖥️ Terminal-style logo (`root@adithya:~$ ./portfolio`)
- 🎯 Full-screen overlay navigation with numbered links
- ✨ GSAP + ScrollTrigger reveals, parallax project images, marquee ticker
- ⌨️ Typewriter role rotation & animated hero counters
- 📊 Animated skill bars with categories
- ♿ Respects `prefers-reduced-motion`
- 🔍 SEO: OG/Twitter meta, JSON-LD person schema, sitemap, canonical, robots.txt
- 📱 Fully mobile responsive

---

## Tech Stack

| Technology | Usage |
|---|---|
| Astro | Static site framework, component structure |
| TypeScript | Typed content data (`src/data/site.ts`) |
| GSAP 3 + ScrollTrigger | Scroll animations, parallax, counters |
| Vercel | Hosting & deployment |
| Hostinger | Custom domain `adithya-m.in` |

---

## Project Structure

```
src/
├── data/site.ts        # All content — edit here, not in components
├── layouts/Base.astro  # HTML shell, meta tags, fonts, JSON-LD
├── components/         # Nav, Hero, Ticker, About, Projects, Skills,
│                       # Education, Hobbies, Contact, Footer
├── scripts/animations.ts  # GSAP scroll animations
├── styles/global.css   # Design tokens & shared styles
└── pages/index.astro   # The page
```

---

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

---

## Projects Featured

- **Dishcovery** — AI-powered recipe & diet planner · Python · Cohere · Firebase
- **ResumeForge** — AI resume builder · React · Vite · Tailwind CSS · Cohere AI

---

## Deployment

Hosted on **Vercel** with custom domain via **Hostinger DNS**
```
adithya-m.in  →  Vercel  →  adirokxretero/portfolio
```

---

## License

MIT — feel free to take inspiration, but build your own version.
Don't copy directly.

---

*Designed & built by Adithya M · Bangalore, India · 2026*
