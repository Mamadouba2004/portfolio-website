# Copilot Instructions

## Architecture Overview
React 18 single-page portfolio using Parcel bundler. Entry: `src/index.html` → `src/index.js` → `src/App.jsx` renders into `#app`. Navigation via anchor links to section IDs—no client-side routing.

## Customization Locations
**Global settings** (`src/App.jsx`):
- `siteProps` object: name, title, email, social handles (gitHub, linkedIn, etc.)
- Theme: `primaryColor` (footer bg), `secondaryColor`

**Section content** (edit constants at top of each component):
- `About.jsx`: `description`, `skillsList[]`, `detailOrQuote`
- `Portfolio.jsx`: `projectList[]` with `{title, description, url}`
- `Home.jsx`: `image`, `imageAltText`

Social icons auto-hide when `siteProps` value is empty string.

## Component Conventions
```
src/Components/
├── Header.jsx    # Fixed nav, links use /portfolio-website/#section format
├── Home.jsx      # Props: {name, title}, has PropTypes
├── About.jsx     # Self-contained, no props
├── Portfolio.jsx # Self-contained, no props
└── Footer.jsx    # Props: all siteProps + colors, has PropTypes
```
- Functional components only, inline style objects (not CSS modules)
- PropTypes required for components receiving props
- Section IDs are stable: `home`, `about`, `portfolio`, `footer`
- Each section uses `<section id="..." className="padding">` or `className="min-height"`

## Adding New Sections
1. Create `src/Components/NewSection.jsx` with `<section id="newsection" className="padding">`
2. Import and render in `App.jsx` between existing components
3. Add nav link in `Header.jsx`: `<a href="/portfolio-website/#newsection">Label</a>`

## Images
- Store in `src/images/`; social icons in `src/images/socials/`
- Import directly: `import image from "../images/filename.jpg"`
- Always define `imageAltText` constant alongside image import
- Background images use `className="background"` with CSS in `styles.css`

## Commands
```bash
npm start        # Dev server at localhost:1234
npm run build    # Production build to dist/
npm run deploy   # GitHub Pages deploy
```

## Code Style
ESLint + Prettier enforced. See `.eslintrc` and `.prettierrc`:
- Double quotes, semicolons required, 100 char line width
- Inline styles for component-specific; global styles in `src/styles.css`
- Accessibility: `jsx-a11y` plugin enabled—provide alt text, use semantic elements
- Fonts: Montserrat (body), Cormorant Garamond (h1)
