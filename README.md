# Udarsh Goyal Portfolio

A personal portfolio website showcasing web development, AI, and cloud projects.

## Live Demo

**[View the Live Portfolio Here](https://udarshgoyal.onrender.com/)**

Hosted via Render.

## About

This is my personal portfolio built to serve as a central hub for my skills, educational background, certifications, and hands on projects. I built it to target recruiters and technical peers to demonstrate my competence in web development, machine learning, and cloud computing. The application is a frontend only static site without a backend database.

## Features

- **Editorial Newspaper Aesthetic:** A premium, typography driven design featuring warm paper backgrounds, sharp borders, and monochromatic styling inspired by editorial publications.
- **Dynamic Theming:** Toggle between a warm light mode and a sleek dark mode using the navigation bar.
- **Scroll Reveal Animations:** Elegant fade and slide animations triggered on scroll, with full reduced motion support for accessibility.
- **Tiered Projects Portfolio:** A structured three tier architecture (Flagship, Featured, Labs) showcasing full stack, AI, and hardware integrations.
- **Detailed Timelines:** Scroll through an academic and professional timeline detailing coursework, research internships, and core committee roles.
- **Categorized Skills:** Browse a grid of technical skills structured by domain (AI/ML, Frontend, Backend, Cloud) using a clean multi column layout.
- **Achievements & Certifications:** View verified credentials from industry leaders like Meta, MongoDB, Oracle, Harvard, and Microsoft. Includes a dedicated index page with dynamically fetched company logos and direct verification links.
- **SEO & Mobile Optimized:** Fully responsive design featuring a stateful mobile hamburger menu, comprehensive Open Graph metadata, and search engine crawler configurations.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React |
| Build Tool | Vite |
| Styling | Vanilla CSS / CSS Variables |
| Icons | react icons, lucide react |
| Animations | Custom CSS Keyframes |

## Architecture

The application is a React frontend leveraging Vite for lightning fast builds. The root `App.jsx` container manages the global light and dark theme state and routing via React Router. The site is structured into distinct functional components such as `Hero`, `About`, `Experience`, and `Projects`. It features a dedicated `/certifications` route for a full tabular index of credentials.

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
5. Open your browser and navigate to the URL provided in the terminal.

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
│   │   ├── CertificationsPreview.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── certifications.js
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── pages/
│   │   ├── CertificationsPage.jsx
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## What I learned or key decisions

- **Editorial Design System:** Shifted from generic glassmorphism to a highly opinionated newspaper aesthetic. Utilized CSS variables to enforce strict color palettes (ink, paper, rule) and clamped typography for fluid scaling across devices.
- **Accessibility:** Incorporated `@media (prefers-reduced-motion: reduce)` to gracefully disable animations for users with sensitivity to motion, ensuring critical content is never hidden behind opacity transitions.
- **CSS Column Layouts:** Leveraged native CSS `column-count` for Masonry style text layouts in the Skills section, avoiding heavy JavaScript grid calculations.
- **CSS Variables for Theming:** Used native CSS custom properties defined on the root element to handle dark and light modes, avoiding the need for CSS in JS libraries.
- **Dynamic Asset Integration:** Replaced heavy local static assets with direct integrations to verification platforms (Credly, Coursera), and dynamically fetched company logos via Google Favicons, Brandfetch, and SimpleIcons for robust, lightweight presentation.
