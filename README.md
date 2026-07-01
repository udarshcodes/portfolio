# Udarsh Goyal Portfolio

A personal portfolio website showcasing web development, AI, and cloud projects.

## Live Demo

**[View the Live Portfolio Here](https://udarshgoyal.onrender.com/)**

Hosted via Render.

## About

This is my personal portfolio built to serve as a central hub for my skills, educational background, certifications, and hands-on projects. I built it to target recruiters and technical peers to demonstrate my competence in web development, machine learning, and cloud computing. The application is a frontend-only static site without a backend database.

## Features

- **Premium Glassmorphism UI:** Semi-transparent frosted-glass cards with subtle highlights and responsive drop shadows.
- **Dynamic Theming:** Toggle between dark and light themes using the navigation bar.
- **Interactive Background:** A network particle effect rendered on an HTML5 canvas that adapts to the active theme, with reduced-motion support for accessibility.
- **Tiered Projects Portfolio:** A structured three-tier architecture (Featured, Foundational, Labs) showcasing full-stack, AI, and hardware integrations.
- **Detailed Timelines:** Scroll through an academic and professional timeline detailing coursework, research internships, and core committee roles.
- **Categorized Skills:** Browse a grid of technical skills structured by domain (AI/ML, Frontend, Backend, Cloud).
- **Achievements & Certifications:** View 28 verified credentials from industry leaders like Meta, MongoDB, Oracle, Harvard, and Microsoft, complete with dynamically fetched company logos and direct verification links.
- **SEO & Mobile Optimized:** Fully responsive design featuring a stateful mobile hamburger menu, comprehensive Open Graph metadata, and search engine crawler configurations (sitemap and robots.txt).

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React |
| Build Tool | Vite |
| Styling | Vanilla CSS / CSS Variables |
| Icons | react-icons, lucide-react |
| Animations | typewriter-effect, HTML5 Canvas |

## Architecture

The application is a single-page React frontend. The root `App.jsx` container manages the global light and dark theme state and passes it down. The `NetworkBackground` component operates an HTML5 Canvas to render a dynamic particle effect independent of the main content flow. The site is structured into distinct functional components—such as `Hero`, `About`, `Experience`, and `Projects`—that are sequentially rendered to create a cohesive, scrollable landing page.

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/udarshcodes/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the URL provided in the terminal (typically `http://localhost:5173`).

## Project Structure

```text
├── public/
│   ├── images/
│   ├── favicon.svg
│   ├── google3595f4ed3bbcac12.html
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── NetworkBackground.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## What I learned or key decisions

- **Glassmorphism Design:** Achieved a highly premium "frosted glass" aesthetic using CSS `backdrop-filter: blur()`, semi-transparent `rgba` variables, and specular border highlights without relying on Tailwind or external libraries.
- **Custom Canvas Background:** Implemented the particle network effect natively using the HTML5 Canvas API instead of relying on heavy third-party libraries, keeping the bundle size small.
- **Accessibility:** Incorporated `@media (prefers-reduced-motion: reduce)` to gracefully disable animations and canvas effects for users with sensitivity to motion.
- **CSS Variables for Theming:** Used native CSS custom properties defined on the root element to handle dark and light modes, avoiding the need for CSS-in-JS libraries.
- **Dynamic Asset Integration:** Replaced heavy local static assets (images and PDFs) with direct integrations to verification platforms (Credly, Coursera), and dynamically fetched company logos via the Google Favicon API and GitHub organization avatars for robust, lightweight presentation.

