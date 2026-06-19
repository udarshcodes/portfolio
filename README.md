# Udarsh Goyal Portfolio

A personal portfolio website showcasing web development, AI, and cloud projects.

## Live Demo

There is no live demo link currently specified in the repository. The project is a static site designed to be easily hosted on platforms like Vercel or GitHub Pages.

## About

This is my personal portfolio built to serve as a central hub for my skills, educational background, certifications, and hands-on projects. I built it to target recruiters and technical peers to demonstrate my competence in web development, machine learning, and cloud computing. The application is a frontend-only static site without a backend database.

## Features

- Toggle between dark and light themes using the navigation bar.
- Read through a timeline detailing past internships and core committee roles.
- Browse a grid of technical skills categorized by domain.
- Access direct links to major projects, certification PDFs, and social profiles.
- View a background particle effect that adapts to the active theme.

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

## What I learned or key decisions

- **Custom Canvas Background:** Implemented the particle network effect natively using the HTML5 Canvas API instead of relying on heavy third-party libraries, keeping the bundle size small.
- **CSS Variables for Theming:** Used native CSS custom properties defined on the root element to handle dark and light modes, avoiding the need for CSS-in-JS libraries.
- **Vanilla CSS:** Maintained standard CSS stylesheets to preserve explicit control over animations, vertical timelines, and complex card layouts rather than rewriting everything into utility classes.

