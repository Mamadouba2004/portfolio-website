# Copilot Instructions

## Architecture Overview
React 18 single-page portfolio using Parcel bundler. Entry flow: `src/index.html` → `src/index.js` → `src/App.jsx` renders into `#app`. No routing—navigation uses anchor links to section IDs (`#home`, `#about`, `#portfolio`, `#footer`).

## Data Flow & Customization
All personal content is centralized—edit these locations only:
- **`src/App.jsx`**: `siteProps` object (name, title, email, social handles) and theme colors (`primaryColor`, `secondaryColor`)
- **Component-local content**: Each section component owns its text/lists (e.g., `About.jsx` has `description`, `skillsList`, `detailOrQuote`)

Social icons auto-hide when their `siteProps` value is empty string. `primaryColor` applies to footer background.

## Component Pattern
```
src/Components/
├── Header.jsx   # Fixed nav bar, anchors to section IDs
├── Home.jsx     # Hero section, receives {name, title} props
├── About.jsx    # Self-contained content: description, skillsList, detailOrQuote
├── Portfolio.jsx # projectList array [{title, description, url}]
└── Footer.jsx   # Receives all siteProps + colors, conditionally renders social icons
```
Conventions:
- Functional components with inline style objects (not CSS modules)
- PropTypes for components receiving props; no PropTypes for self-contained components
- Section IDs must stay stable: `home`, `about`, `portfolio`, `footer`

## Adding New Sections
1. Create `src/Components/NewSection.jsx` with `<section id="newsection">`
2. Import and add to `App.jsx` between existing components
3. Add nav link in `Header.jsx`: `<a href="#newsection">Label</a>`
4. Use class `padding` for spacing or `min-height` for full-viewport sections

## Images
- Store in `src/images/`; social icons in `src/images/socials/`
- Import directly in components: `import image from "../images/filename.jpg"`
- Always update `imageAltText` constant when changing images
- Prefer landscape orientation for section backgrounds

## Commands
```bash
npm start        # Dev server at localhost:1234
npm run build    # Production build to dist/
npm run deploy   # GitHub Pages (update {github-username}/{repo-name} in package.json first)
```

## Code Style
ESLint + Prettier configured. Key conventions:
- Double quotes for strings, semicolons required
- Inline styles over CSS classes for component-specific styling
- Global styles in `src/styles.css` (Montserrat + Cormorant Garamond fonts)
