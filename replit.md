# Hu Tao Portfolio

## Overview
A professional portfolio website built with React, TypeScript, and Vite. Features a modern design with components for Hero section, Experience, Gallery, and more.

## Project Structure
- `App.tsx` - Main application component
- `index.tsx` - Application entry point
- `index.html` - HTML template with Tailwind CSS and custom styles
- `components/` - React components
  - `Hero.tsx` - Hero section
  - `Experience.tsx` - Experience/work section
  - `Gallery.tsx` - Gallery component
  - `Navbar.tsx` - Navigation bar
  - `Footer.tsx` - Footer component
- `constants.ts` - Application constants
- `types.ts` - TypeScript type definitions

## Tech Stack
- React 19
- TypeScript
- Vite 6
- Tailwind CSS (via CDN)
- Google GenAI integration (optional)

## Development
Run the development server:
```bash
npm run dev
```

The app runs on port 5000.

## Build
```bash
npm run build
```

## Configuration
The Vite config is set up to:
- Run on port 5000
- Allow all hosts (for Replit proxy)
- Support `@/` path aliases
