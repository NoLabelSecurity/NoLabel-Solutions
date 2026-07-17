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
| Last Updated | 2026-07-17 |

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
src/
├── App.tsx             # Main entry coordinator, header navigation, layout router
├── data.ts             # Primary static data store (services lists, project statistics, testimonials)
├── types.ts            # Project-wide TypeScript interface definitions
├── index.css           # Global stylesheets bringing in Tailwind CSS core variables
├── main.tsx            # DOM node initialization
└── components/         # Modular layout views
    ├── HomeView.tsx         # Home landing experience with metrics and interactive terminal
    ├── ServicesView.tsx     # Digital product offer grid
    ├── ProjectsView.tsx     # Client contractor portfolios and case studies modal
    ├── AboutView.tsx        # Agency values and member profiles
    ├── ContactView.tsx      # Instant estimation tool and lead generation form
    └── ImagePlaceholder.tsx # Highly functional simulated browser framing and visual drawings
```

---

### Directory Purpose

| Folder | Description |
|----------|-------------|
| `src/` | Main source code directory. |
| `src/components/` | Contains the isolated React sub-components and modular tab sections. |
| `src/types.ts` | Governs clean data compliance across components. |
| `src/data.ts` | Holds the content data layer to prevent layout file clutter. |
| `public/` | Direct static assets folders. |

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
