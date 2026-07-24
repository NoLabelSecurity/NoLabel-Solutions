# 🧠 Project Memory

> This report is maintained automatically after every development session.
>
> **Purpose:** Preserve long-term project knowledge, design decisions, client preferences, recurring patterns, lessons learned, and contextual information that cannot easily be inferred from the source code. This document should act as the project's "memory" for future development.

---

# Memory Overview

| Property | Value |
|-----------|-------|
| Project | No/Label Solutions Portal |
| Client | brianlorick1988@gmail.com |
| Started | 2026-07-16 |
| Last Updated | 2026-07-24 |
| Major Version | 1.0.0 |
| Active Phase | Handover Complete |

---

<details open>

<summary><strong>🎯 Project Vision</strong></summary>

## Purpose

To build an ultra-premium, highly distinctive developer portal showcasing tailored web design, branding, and search optimization solutions specifically designed for small-business local contractors (welding, security, renovations).

---

## Goals

- Establish an eye-safe dark twilight palette that feels masculine, professional, and robust.
- Display tangible proof-of-work achievements using rich case studies with simulated UI screenshots.
- Provide interactive elements such as an automated CLI system diagnostics checker and an dynamic quote estimator to convert visitors into quality leads.

---

## Success Criteria

- Zero layout shift on mobile and tablet aspect ratios.
- Verbatim brand spelling adherence (always: **No/Label Solutions**).
- Prominent and correctly sized logo presence to build brand recognition.

</details>

---

<details>

<summary><strong>🎨 Design Decisions</strong></summary>

## UI / UX

### Glassmorphism Sticky Navbar
- **Decision**: Made the header navbar sticky with background blur `backdrop-blur-md` and semi-transparent dark borders.
- **Reason**: Maintains immediate site navigation options accessible at all vertical scrolling offsets while maintaining visual depth.

---

### Terminal Emulator Terminal
- **Decision**: Put an autoplay terminal interface on the landing viewport that mimics a system audit and optimization workflow.
- **Reason**: Conveys technical authority and fits the "Security and Engineering-First" aesthetic of No/Label Solutions.

---

### Dual-Column Price Estimator
- **Decision**: Set up service toggles next to an dynamic progress line calculator inside the inquiry view.
- **Reason**: Drives high engagement and transparently anchors value before users submit cold form inquiries.

---

### Cinematic CTA Video Overlay
- **Decision**: Embedded a looping video file backdrop (`video-169445_medium.mp4`) behind the scheduling call-to-action button block on the main Home Page.
- **Reason**: Boosts conversions by creating a highly premium, modern cinematic atmosphere that feels active and high-tech.

---

### Bespoke Brand Boards Integration
- **Decision**: Replaced static graphic placeholders with actual high-resolution Brand Boards from client GitHub repositories inside case study modal pop-opens.
- **Reason**: Provides genuine visual proof-of-work showcasing complete custom logo, typography, and color palette design outcomes.

---

### Interactive 3D Business Card
- **Decision**: Created an interactive 3D draggable portrait business card component that snaps to hold the nearest side in view, complete with a fallback manual flip shortcut.
- **Reason**: Delights users with a tactile, playful physical-to-digital demonstration that showcases high-contrast double-sided digital card capabilities.

</details>

---

<details>

<summary><strong>🏗 Architectural Decisions</strong></summary>

## Major Decisions

### Direct Image GitHub CDN Sourcing
- **Problem**: Serving large branding and logo files locally inside the container can inflate bundle size and degrade loading performance.
- **Chosen Solution**: Linked the NLS logo to direct raw GitHub URLs (`?raw=true`).
- **Reason**: Bypasses heavy local storage overhead and guarantees optimal caching via global CDNs.
- **Tradeoffs**: Requires active external network connectivity to render the logo, which is standard for web portals.

---

### Custom SVG Blueprint Wireframes
- **Problem**: Default mockups look generic.
- **Chosen Solution**: Hand-sketched crisp CAD vector wireframes showing real coordinate grid frameworks in `ImagePlaceholder.tsx`.
- **Reason**: Highlights professional digital craftsmanship and gives a bespoke feel to showcase items.

</details>

---

<details>

<summary><strong>🤝 Client Preferences</strong></summary>

## Design Preferences

- High-contrast dark twilight values (slate grays, deep blues, sharp emerald green success accents).
- Heavy display typography pairing Space Grotesk (tech feel) with Inter (UI text).
- Bold, prominent branding with double-sized navigation logo frames.

---

## Communication Preferences

- Bulleted concise summary overviews on completed modules.
- Direct live links to container preview sandboxes.

---

## Requested Features

- Correct top-aligned screenshot framing for Easy's Welding & Fabrication case study mockup inside simulated browsers.

---

## Things To Avoid

- Generic purple-blue gradients or standard corporate-looking card layouts.
- Truncated layout clipping.

</details>

---

<details>

<summary><strong>📚 Lessons Learned</strong></summary>

## Development Lessons

- Tailwind CSS v4 compiles extremely fast but requires careful import alignment (`@import "tailwindcss";` is sufficient without PostCSS loaders in newer configurations).

---

## Design Lessons

- Double-sizing a logo inside a sticky navbar can disrupt flex alignments on mobile headers. Solved this by setting explicit bounding boxes (`w-24 h-12` scaling to `w-32 h-16` on md breakpoint).

---

## Performance Lessons

- Replacing static mock image files with lightweight SVG wireframes improves initial page loading speed significantly.

</details>

---

<details>

<summary><strong>⚠ Known Constraints</strong></summary>

Technical Constraints

- Must run on port 3000 to comply with platform reverse-proxy configurations.

---

Budget Constraints

- Lightweight client-only structure ensures $0 server hosting bills using standard static hosting tools.

---

Timeline Constraints

- Complete and launch within 48 hours of asset handoff.

</details>

---

<details>

<summary><strong>💡 Future Ideas</strong></summary>

Version 2

- Real-time client messaging platform using secure WebSockets.
- Integrate automated email alerts for incoming contractor quote requests.

</details>

---

<details>

<summary><strong>🔁 Recurring Patterns</strong></summary>

## Common UI Patterns

- **Browser Window Frame**: A custom div wrapping mock layouts with red/yellow/green visual dot markers to simulate active operating systems.

---

## Common Component Patterns

- **Animated Counters**: Text components tracking numerical values from zero to targets during initial viewport entry.

</details>

---

<details>

<summary><strong>📝 Important Notes</strong></summary>

General Notes

- The official spelling is always **No/Label Solutions** (capitalized N, L, and S with forward slash after No).

---

Things Worth Remembering

- Easy's Welding portfolio thumbnail must always have the `object-top` CSS descriptor applied to keep key welder graphics in full focus.

</details>

---

<details>

<summary><strong>🚧 Technical Debt & Future Refactors</strong></summary>

## Cleanup Opportunities

- Modularize the simulated browser wrapper code into a dedicated, reusable component layout to avoid code duplication across views.

</details>

---

<details>

<summary><strong>⭐ Best Practices Discovered</strong></summary>

## What Worked Well

- Using raw GitHub file URLs for real-time asset hosting.
- Structuring all major agency views as functional components separated inside `src/components/`.

</details>

---

<details>

<summary><strong>📖 Knowledge Base</strong></summary>

## Things to Remember

### Development

- Always verify TSX files for unescaped quotation characters to avoid build compiler failures.

---

### Client

- Value transparent pricing calculations. The interactive sliding quote tool is a massive asset.

---

### UI

- Twilight dark colors look best when paired with extremely thin border separators (`border-slate-800/50`).

</details>

---
