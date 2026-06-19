# Udarsh Goyal Portfolio

A personal portfolio website showcasing web development, AI, and cloud projects.

## Live Demo

There is no live demo link currently specified in the repository. The project is a static site designed to be easily hosted on platforms like Vercel or GitHub Pages.

## About

This is a personal portfolio project built by Udarsh Goyal, a computer science student. It serves as a central hub to display his skills, educational background, certifications, and hands-on projects in web development, machine learning, and cloud computing. The project started as a static HTML and JavaScript site and was later migrated to React to improve component maintainability and implement dynamic theming.

## Features

- View an interactive background particle constellation effect that adapts to the active theme.
- Toggle seamlessly between dark and light themes using the navigation bar.
- Read through a dynamic Hero section powered by a typewriter effect.
- Explore a custom vertical timeline detailing past internships and core committee roles.
- Browse a comprehensive grid of technical skills categorized by domain.
- Access direct links to major projects, certification PDFs, and social profiles.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React |
| Build Tool | Vite |
| Styling | Vanilla CSS / CSS Variables |
| Icons | react-icons, lucide-react |
| Animations | typewriter-effect |

## Architecture

The application is a single-page React frontend. `App.jsx` serves as the root container, managing the global light and dark theme state. The `NetworkBackground` component operates an HTML5 Canvas to render a dynamic particle effect independent of the main content flow. The site is structured into distinct functional components (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Certifications`, `Contact`, `Footer`) that are sequentially rendered to create a cohesive, scrollable landing page.

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/udarshcodes/personal_portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd personal_portfolio
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
│   └── pdf/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
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

## Key Decisions

- **Migration to React:** Transitioned from a vanilla HTML and CSS setup to React and Vite to break the UI into reusable components, which simplified managing the theme state.
- **Custom Canvas Background:** Implemented the particle network effect natively using the HTML5 Canvas API instead of relying on heavy third-party libraries, keeping the bundle size small.
- **CSS Variables for Theming:** Used native CSS custom properties defined on the root element to handle dark and light modes, avoiding the need for CSS-in-JS libraries.
- **Vanilla CSS:** Maintained standard CSS stylesheets to preserve explicit control over animations, vertical timelines, and complex card layouts rather than rewriting everything into utility classes.
