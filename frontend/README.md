# Portfolio Frontend - React + Vite

This is the frontend portion of the Vedant Sagare Portfolio project. It is built using React.js and Vite, featuring a modern glassmorphism design system.

## 🚀 Development

### Scripts
- `npm run dev`: Starts the development server with HMR.
- `npm run build`: Generates a production build in the `dist/` folder.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check for code quality issues.

### Architecture
- **Components**: Functional components organized in `src/components/`.
- **Styling**: Modular CSS files for each component, following a custom design system.
- **API**: Centralized API calls in `src/api/`.
- **Fallback**: Built-in fallback data in `App.jsx` ensures the UI remains functional even if the backend is offline.

## 🎨 Design System
The project uses a custom design system focused on:
- **Glassmorphism**: Using `backdrop-filter: blur()` and semi-transparent backgrounds.
- **Responsive Layouts**: Flexbox and Grid based layouts for all screen sizes.
- **Animations**: Subtle entry and hover animations for an interactive feel.

---
For full project documentation, including backend setup, please refer to the [root README](../README.md).
