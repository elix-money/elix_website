# CLAUDE.md - AI Assistant Guide for Elix Website

**Last Updated:** 2025-11-30
**Repository:** elix_website
**Project:** Elix - Personal Finance AI Assistant Landing Page

---

## 🎯 Project Overview

Elix is a landing page for a personal finance AI assistant product by Tenchiview Technologies Private Limited (India). The site features a video background homepage with newsletter signup, Terms of Service, and Privacy Policy pages.

**Key Characteristics:**
- Modern glassmorphism design aesthetic
- Video background with overlay effects
- Newsletter signup modal (not yet connected to backend)
- Regulatory compliance disclaimers (SEBI/RBI)

---

## 📁 Codebase Structure

```
elix_website/
├── public/                          # Static assets
│   ├── Video_Generation_From_Description.mp4
│   ├── favicon16.png
│   └── favicon32.png
│
├── src/
│   ├── assets/                      # Images and media
│   │   └── logo.png
│   │
│   ├── App.jsx                      # Main app component with routing
│   ├── main.jsx                     # React entry point
│   ├── index.css                    # Global styles (single CSS file)
│   │
│   ├── Home.jsx                     # Landing page component
│   ├── Terms.jsx                    # Terms of Service page
│   ├── Privacy.jsx                  # Privacy Policy page
│   ├── Footer.jsx                   # Shared footer component
│   ├── NewsletterModal.jsx          # Newsletter signup modal
│   └── ScrollToTop.jsx              # Route change scroll utility
│
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
├── vercel.json                      # Vercel deployment config
├── .gitignore
└── README.md
```

### Component Hierarchy

```
App.jsx (Router + Modal State)
├── ScrollToTop (utility)
├── Routes
│   ├── Home (/)
│   ├── Terms (/terms)
│   └── Privacy (/privacy)
└── NewsletterModal (global)

All pages include:
└── Footer (shared component)
```

---

## 🛠 Tech Stack

### Core Technologies
- **React** 19.2.0 - UI library
- **React Router DOM** 7.9.6 - Client-side routing
- **Vite** 7.2.4 - Build tool and dev server
- **ESLint** 9.39.1 - Code linting

### Styling Approach
- **Single global CSS file** (`src/index.css`)
- **CSS Custom Properties** (CSS variables) for theming
- **No CSS-in-JS, no CSS modules, no preprocessors**
- **Glassmorphism effects** with backdrop-filter
- **Lexend font family** from Google Fonts

### Deployment
- **Platform:** Vercel
- **Framework:** Vite
- **Build output:** `dist/`
- **SPA routing:** All routes rewrite to `/index.html`

---

## 🎨 Design Patterns & Conventions

### 1. Component Structure
- **Functional components only** - no class components
- **React hooks** for state and effects
- **Props drilling** for state management (no Context API/Redux currently)
- **Default exports** for all components

### 2. Styling Conventions
- **Global CSS file** with class-based styling
- **CSS variables** defined in `:root`:
  ```css
  --color-bg: transparent
  --color-text-main: #ffffff
  --color-text-muted: #e0e0e0
  --color-accent: #2a1219
  --font-main: 'Lexend', system-ui, -apple-system, sans-serif
  ```
- **Responsive design** using media queries (breakpoint: 768px)
- **Glassmorphism pattern**:
  ```css
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  ```

### 3. File Naming
- **Components:** PascalCase (e.g., `NewsletterModal.jsx`)
- **Styles:** kebab-case classes (e.g., `.modal-overlay`)
- **Assets:** lowercase with underscores (e.g., `logo.png`)

### 4. State Management
- **Local state** with `useState` in components
- **Modal state** lifted to App.jsx and passed via props
- **No global state management** library

### 5. Routing Pattern
- **React Router DOM v7** with BrowserRouter
- **Routes:**
  - `/` → Home (landing page)
  - `/terms` → Terms of Service
  - `/privacy` → Privacy Policy
- **ScrollToTop utility** ensures scroll position resets on route changes

---

## 🔧 Development Workflow

### Available Scripts
```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Development Server
- **Port:** 5173 (default Vite)
- **HMR:** Enabled via @vitejs/plugin-react
- **Fast Refresh:** React Fast Refresh enabled

### Code Quality
- **ESLint configuration:**
  - Extends: `@eslint/js`, `react-hooks`, `react-refresh`
  - Custom rule: `no-unused-vars` allows uppercase/underscore prefixes
  - Targets: `**/*.{js,jsx}` files
  - Ignores: `dist/` directory

### Git Workflow
- **Main branch:** Not specified in context
- **Feature branches:** Use `claude/` prefix pattern
- **Commit style:** Descriptive messages (see recent commits)

---

## ⚠️ Important Constraints & Considerations

### 1. Regulatory Compliance
**CRITICAL:** All pages must include regulatory disclaimers about SEBI/RBI authorization status.

Current disclaimer in Footer.jsx:
```
"Elix is not yet authorised by the SEBI/RBI. Prior to Elix becoming
authorised, none of the information provided is intended as an invitation
or inducement to apply for any ELIX product or service..."
```

**Never remove or modify** regulatory text without explicit approval.

### 2. Newsletter Functionality
The newsletter signup is **NOT CONNECTED** to any backend service.

Current implementation in `NewsletterModal.jsx:10`:
```javascript
// TODO: Handle newsletter signup
console.log('Newsletter signup:', email);
```

**When implementing:**
- Add proper email validation
- Connect to backend API or email service
- Add loading states and error handling
- Update modal confirmation UX

### 3. Video Background
- **File:** `/public/Video_Generation_From_Description.mp4`
- **Position:** Fixed, full-screen background on homepage
- **Overlay:** Dark overlay (40% opacity) for text legibility
- **Performance:** Video is set to autoPlay, loop, muted, and playsInline

### 4. Browser Compatibility
**Glassmorphism requires:**
- `backdrop-filter` support
- `-webkit-backdrop-filter` for Safari
- Fallback: Semi-transparent backgrounds work without backdrop-filter

### 5. Responsive Design
- **Breakpoint:** 768px (tablet/mobile)
- **Mobile changes:**
  - Form switches to vertical layout
  - Font sizes reduce
  - Input fields go full-width
  - Padding adjustments

---

## 🎯 Common AI Assistant Tasks

### Adding New Pages
1. Create component in `src/` (e.g., `About.jsx`)
2. Import in `App.jsx`
3. Add `<Route>` in the Routes component
4. Update navigation links if needed
5. Ensure Footer is included
6. Test ScrollToTop behavior

### Styling Changes
- **Locate styles in:** `src/index.css` (single file)
- **Use existing CSS variables** when possible
- **Maintain glassmorphism pattern** for consistency
- **Test webkit prefixes** for Safari compatibility
- **Check responsive behavior** at 768px breakpoint

### Component Modifications
- **Maintain functional component pattern**
- **Use hooks** (useState, useEffect) not class methods
- **Props flow:** Parent → Child (no context)
- **Keep components focused:** Separate concerns

### Fixing Bugs
Recent fixes from git history:
- Modal input text issues
- Terms and Privacy scroll issues
- Favicon and page title updates
- Glassmorphism email input field

**Pattern:** Check both desktop and mobile views, test modal interactions

---

## 📝 Code Style Guidelines

### React Conventions
```javascript
// Component structure
import React, { useState, useEffect } from 'react';
import './index.css';
import ComponentName from './ComponentName';

function MyComponent({ propName, onEvent }) {
  const [state, setState] = useState(initialValue);

  const handleEvent = () => {
    // Event handling logic
  };

  return (
    <div className="component-wrapper">
      {/* JSX */}
    </div>
  );
}

export default MyComponent;
```

### CSS Conventions
```css
/* Component-specific styles grouped together */
.component-wrapper {
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Spacing */
  padding: 2rem;
  margin: 0 auto;

  /* Visual */
  background: var(--color-bg);
  color: var(--color-text-main);

  /* Effects */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Responsive overrides at bottom */
@media (max-width: 768px) {
  .component-wrapper {
    padding: 1rem;
  }
}
```

### ESLint Rules
- **Unused vars:** Error (except uppercase/underscore prefixed)
- **React hooks rules:** Enforced via eslint-plugin-react-hooks
- **Fast refresh rules:** Enforced via eslint-plugin-react-refresh

---

## 🔍 Key Files Reference

### `src/App.jsx` (src/App.jsx:1)
Main application component managing:
- Modal state (isModalOpen)
- Routes configuration
- ScrollToTop utility
- Global NewsletterModal

### `src/Home.jsx` (src/Home.jsx:1)
Landing page featuring:
- Logo header
- Hero text: "Build a future without limits"
- Email input with glassmorphism
- "Get updates" button (opens modal)
- Video background
- Footer

### `src/NewsletterModal.jsx` (src/NewsletterModal.jsx:1)
Modal component with:
- Email input form
- Submit handler (TODO: backend integration)
- Overlay click-to-close
- Close button
- Regulatory disclaimer

### `src/index.css` (src/index.css:1)
**590 lines** of global styles including:
- CSS variables (lines 3-14)
- Video background styles (lines 44-75)
- Form glassmorphism (lines 132-157)
- Modal styles (lines 441-590)
- Terms/Privacy page styles (lines 325-439)
- Footer styles (lines 248-323)
- Responsive breakpoints

### `vite.config.js` (vite.config.js:1)
Minimal Vite config:
- Single plugin: @vitejs/plugin-react
- No custom build options
- Default dev server settings

### `vercel.json` (vercel.json:1)
Deployment configuration:
- Build command: `npm run build`
- Output: `dist/`
- SPA routing: all routes → `/index.html`

---

## 🚀 Deployment

### Vercel Configuration
- **Framework detection:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Routing:** SPA mode (all routes rewrite to index.html)

### Build Process
```bash
npm run build
# → Vite builds to dist/
# → Vercel serves from dist/
```

### Environment Variables
**None currently configured** - add in Vercel dashboard if needed for:
- Newsletter API endpoints
- Analytics keys
- Feature flags

---

## 📊 Recent Changes (Git History)

From most recent commits:
1. **Modal Input Text Issues Fixed** - UI/UX improvements
2. **Terms and Privacy scroll issue fixed** - Route navigation fix
3. **Update favicon and page title** - Branding update
4. **Add glassmorphism effect to email input field** - Design enhancement
5. **first commit** - Initial project setup

---

## 🎓 AI Assistant Best Practices

### DO:
✅ Read existing code before making changes
✅ Maintain the single CSS file pattern
✅ Use CSS variables for colors/fonts
✅ Test responsive behavior at 768px breakpoint
✅ Include webkit prefixes for glassmorphism
✅ Preserve regulatory disclaimers
✅ Follow functional component pattern
✅ Use existing component structure as templates

### DON'T:
❌ Remove or modify SEBI/RBI disclaimers
❌ Introduce CSS modules or CSS-in-JS
❌ Add state management libraries without discussion
❌ Remove webkit prefixes (Safari compatibility)
❌ Connect newsletter without backend implementation
❌ Change build tools (Vite) without good reason
❌ Break the single CSS file into modules
❌ Modify video background without testing performance

### When Making Changes:
1. **Understand the pattern** - check similar existing code
2. **Maintain consistency** - follow established conventions
3. **Test responsiveness** - check mobile/desktop views
4. **Preserve accessibility** - keep ARIA labels, semantic HTML
5. **Consider performance** - video, animations, bundle size
6. **Update this file** - keep CLAUDE.md current with major changes

---

## 🔗 Quick Reference Links

### Documentation
- [React 19 Docs](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [React Router v7](https://reactrouter.com/)

### Project Files
- Entry point: `src/main.jsx:1`
- Main app: `src/App.jsx:1`
- Global styles: `src/index.css:1`
- Build config: `vite.config.js:1`
- Lint config: `eslint.config.js:1`

### Common Locations
- Logo: `src/assets/logo.png`
- Video: `public/Video_Generation_From_Description.mp4`
- Favicons: `public/favicon16.png`, `public/favicon32.png`

---

## 📞 Company Information

**Tenchiview Technologies Private Limited**
- **CIN:** U65990AP2024PTC214571
- **Registered Office:** D NO. 18-74/2, Gopalapatri, Gopalapuram, Visakhapatnam (Urban), Visakhapatnam-530027, Andhra Pradesh, India
- **Product:** Elix - Personal Finance AI Assistant
- **Regulatory Status:** Not yet authorized by SEBI/RBI

---

## 🔄 Maintenance Notes

### Future Enhancements (Identified TODOs)
1. **Newsletter backend integration** (NewsletterModal.jsx:10)
2. **Email validation improvements**
3. **Loading states for form submissions**
4. **Analytics integration**
5. **SEO optimization**
6. **Performance monitoring**

### Technical Debt
- No TypeScript (consider migration for type safety)
- No testing setup (Jest/Vitest + React Testing Library)
- No state management (may need if complexity grows)
- No API layer abstraction (needed for newsletter)

---

**End of CLAUDE.md**
