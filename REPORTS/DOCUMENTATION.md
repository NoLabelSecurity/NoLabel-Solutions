# 📚 Technical Documentation

> This report is maintained automatically after every development session.
>
> **Purpose:** Maintain accurate technical documentation for the current project architecture, codebase, configuration, and development environment. This report should always reflect the current implementation rather than historical changes.

---

# Documentation Overview

| Property | Value |
|-----------|-------|
| Project | No/Label Solutions - Client Showcase & Portfolio Platform |
| Framework | React 19 + Vite 6 |
| Language(s) | TypeScript (TSX) |
| Repository | Local Workspace |
| Architecture | Single Page Application (SPA) with State-Based Tabbed View Router |
| Primary Database | None (Static data layers with client state) |
| API Type | Direct UI data collection bindings |
| Deployment Platform | Google Cloud Run Container |
| Last Updated | 2026-08-05 |

---

<details open>

<summary><strong>🏗 System Architecture</strong></summary>

## Architecture Summary

The application runs as an immersive client-side Single Page Application (SPA). A central state-driven view controller (`App.tsx`) manages the active viewport tab. Switching views initiates fluid slide-in and fade animations powered by `motion`, creating the seamless look of a multi-page portal while keeping performance lighting-fast.

---

### Technology Stack

| Layer | Technology |
|---------|------------|
| Frontend | React 19 (Functional Components) |
| Layout / Styling | Tailwind CSS v4 (Modern compile-time utility classes) |
| Animation | motion (Hardware-accelerated CSS animations) |
| Build Tool | Vite 6 + ESBuild |
| Icons | Lucide React |
| Language | TypeScript (Strict type checks) |

---

### Application Flow

```text
User Navigation Clicks
 ↓
Active State View Transition (App.tsx)
 ↓
Component Mounts (HomeView, ServicesView, ProjectsView, etc.)
 ↓
Dynamic Module Interaction (Simulated Terminal CLI, Price Estimator)
 ↓
Local UI Component State Updates
```

</details>

---

<details>

<summary><strong>📁 Project Structure</strong></summary>

## Directory Tree

```text
.
├── .env.example              # Schema for environment variable declarations
├── .gitignore                # Git repository exclusion rules
├── README.md                 # Root workspace overview and setup guidelines
├── bun.lock                  # Lockfile for Bun package runner
├── index.html                # Entry HTML document with Open Graph and social meta tags
├── metadata.json             # Applet metadata, frame permissions, and major capabilities
├── package.json              # Project dependencies, build scripts, and package manifests
├── tsconfig.json             # TypeScript compiler settings and path aliases
├── vite.config.ts            # Vite development server and build configuration
├── REPORTS/                  # Comprehensive project reports and documentation suite
│   ├── ANALYTICS.md          # Development metrics, AI usage, and productivity statistics
│   ├── CLIENT.md             # Client-facing progress and milestone summaries
│   ├── DEVELOPMENT.md        # Session journal, prompt history, and changelogs
│   ├── DOCUMENTATION.md      # Technical architecture, directory tree, and reference
│   ├── FEATURES.md           # Feature tracker, completed work, and release roadmap
│   ├── PROJECT.md            # Project dashboard, health, status, and deliverables
│   ├── PROJECT_MEMORY.md     # Long-term design decisions and architectural memory
│   ├── README.md             # Reports navigation and update workflow overview
│   └── REPORTING_GUIDELINES.md # Standard reporting guidelines and operational standards
├── media/                    # Static media assets directory
│   └── .gitkeep              # Directory structure retention file
├── PRODUCTION_STANDARDS/      # Operational standards and audit compliance reports
│   ├── WEBSITE_PRODUCTION_STANDARDS.md # Website production standards specification
│   ├── Project_Standards_Instructions.md # Primary standards instructions and navigation index
│   ├── Project_Discovery_Report.md        # Technical stack and site capabilities discovery report
│   ├── Deployment_Readiness.md            # Pre-flight build and security compliance report
│   └── Project_Standards_Audit.md         # Comprehensive evaluation against Website Production Standards
└── src/                      # Application source code
    ├── App.tsx               # Primary layout manager, header navigation, and view router
    ├── data.ts               # Primary static data store (services, case studies, team, testimonials)
    ├── index.css             # Global Tailwind CSS v4 styling rules and custom directives
    ├── main.tsx              # Application entry point and DOM root renderer
    ├── types.ts              # Global TypeScript interfaces and data model types
    └── components/           # Modular React view components
        ├── AboutView.tsx       # Agency mission, values, principles, and team profiles view
        ├── ContactView.tsx     # Interactive cost estimator and project inquiry form view
        ├── HomeView.tsx        # Home landing view, terminal simulator, metrics, and hero mockups
        ├── ImagePlaceholder.tsx # Simulated browser window frame and blueprint artwork generator
        ├── LegalView.tsx       # Tabbed legal compliance portal (Privacy, Terms, Cookies, Accessibility)
        ├── ProjectsView.tsx    # Case study portfolio grid and interactive project modal view
        ├── ServicesView.tsx    # Services catalog, 3D business card, and feature blocks view
        └── Virtual3DCard.tsx   # Interactive 3D drag-to-spin portrait business card component
```

---

### Directory Purpose

| Folder / File | Description |
|---------------|-------------|
| Root (`/`) | Contains build configuration (`vite.config.ts`, `tsconfig.json`), package management (`package.json`, `bun.lock`), applet metadata (`metadata.json`), main HTML document (`index.html`), environment variable declaration (`.env.example`), and workspace README. |
| `REPORTS/` | Living project documentation suite maintaining session histories, architecture, feature logs, and project metrics. |
| `media/` | Directory for static media assets and imagery. |
| `src/` | Main application source code directory. |
| `src/components/` | Contains isolated React view components and interactive UI components. |
| `src/types.ts` | Governs clean data compliance and TypeScript interfaces across components. |
| `src/data.ts` | Holds structured content data layers (services, projects, testimonials, team members). |
| `src/index.css` | Entry point for Tailwind CSS v4 styling rules and directives. |

</details>

---

<details>

<summary><strong>🧩 Components</strong></summary>

## Major Components

| Component | Purpose | Status |
|------------|---------|--------|
| `App` | Handles global view selection state, header transparency scroll effects, mobile slide navigation. | 🟢 Completed |
| `HomeView` | Renders hero layout, metric lists, and the autoplay terminal mockup. | 🟢 Completed |
| `ProjectsView` | Holds full case studies modal. Shows real client outcomes and metrics. | 🟢 Completed |
| `ContactView` | Hosts quote requests form and the real-time budget estimator calculator. | 🟢 Completed |
| `ImagePlaceholder` | Generates gorgeous custom drawings / blueprint designs inside interactive browser mockup panels. | 🟢 Completed |

---

### Shared Components

- **Header Navbar**: A floating sticky glassmorphic navigation bar with logo box scales matching desktop layout specifications.
- **Footer Section**: A spacious dark footer with agency brief, visual NLS logo, and standard copyright links.
- **Mockup Client Browser Frame**: Simulated Operating System browser panels with red/yellow/green control headers.

</details>

---

<details>

<summary><strong>🌐 API Reference</strong></summary>

## API Routes

The application is client-only. No API routes are mapped.

---

### External APIs

- **GitHub CDN**: Serves high-resolution branding assets directly from content branches.

</details>

---

<details>

<summary><strong>🗄 Database</strong></summary>

## Database Overview

Database Type: None. All data is structured statically in `src/data.ts` and managed locally inside memory states.

</details>

---

<details>

<summary><strong>⚙ Configuration</strong></summary>

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| None | ❌ | No runtime secret keys are mandatory for client-side operation. |

---

### Configuration Files

- `package.json`: Script definitions and NPM dependency versions.
- `tsconfig.json`: TypeScript compiler options ensuring strict structural safety.
- `vite.config.ts`: Vite server bindings specifying development port mapping.

</details>

---

<details>

<summary><strong>📦 Dependencies</strong></summary>

## Primary Packages

| Package | Purpose |
|----------|---------|
| `react` (v19) | Modern component architecture. |
| `motion` (v12) | Dynamic viewport ingress slides. |
| `lucide-react` (v0.546) | Modular SVG icons. |

---

### Development Packages

- `typescript`: Code linting and TSX compliance.
- `@tailwindcss/vite`: Tailwind core compiler hooks.
- `autoprefixer`: Dynamic browser support prefixing.

</details>

---

<details>

<summary><strong>🚀 Deployment</strong></summary>

## Deployment Information

Hosting Provider: Cloud Run container platform.

Build Command: `npm run build` compiling to static bundles.

Output Directory: `dist/`

---

### Deployment Process

1. Automated container trigger checks local TypeScript compilations via `npm run lint`.
2. Vite compiles production bundles into the standalone `dist/` directory.
3. The platform-managed serving tier launches assets behind secure reverse proxies.

</details>

---

<details>

<summary><strong>🔐 Authentication & Security</strong></summary>

No user authentication is implemented. Security of static assets is guaranteed by container sandboxing.

</details>

---

<details>

<summary><strong>⚡ Performance</strong></summary>

Caching Strategy: Standard browser static asset header caching.

Image Optimization: External CDN assets use optimal content queries. Mockups utilize lightweight custom vectors rather than high-size binary assets.

Lazy Loading: Components are compiled into a unified fast bundle ensuring immediate rendering without network delay during tab switches.

</details>

---

<details>

<summary><strong>🧪 Testing</strong></summary>

Testing Framework: Static compile checks using TypeScript.

Unit Tests: Checked via `tsc --noEmit`.

Coverage: Entire codebase strictly typechecked.

Known Gaps: No automated runtime E2E test suites (manual UI confirmation applied).

</details>

---

<details>

<summary><strong>🐛 Troubleshooting</strong></summary>

## Common Issues

### Issue: Layout Shift on Small Aspect Ratio Displays

Problem: Navigation blocks can expand awkwardly on smaller viewports.

Cause: Fixed flex dimensions inside headers.

Solution: Integrated Tailwind mobile responsive breakpoints (`md:`, `sm:`) to swap layouts smoothly.

</details>

---

<details>

<summary><strong>📖 Developer Notes</strong></summary>

Important Conventions

- Define all shared content items in `src/data.ts`. Never hardcode data inside presentation components.

Naming Standards

- React views: capitalized camel case (e.g., `HomeView.tsx`).
- Variables and hooks: standard lower camel case.

Best Practices

- Keep custom SVGs cleanly isolated. Utilize Tailwind color properties for dynamic hover transitions rather than maintaining duplicate vectors.

</details>

---
