# 🤖 REPORTING_GUIDELINES.md

> Purpose:
>
> This document serves as the operating manual for maintaining every report within the `/REPORTS` directory.
>
> The instructions in each section are copied verbatim from the corresponding report template. If a report's maintenance instructions change, they should also be updated here to keep this document synchronized.

---

# Repository Scope

Only modify the target repository.

Never modify:

- the reporting template repository
- template files
- other repositories
- external documentation

Only create or update:

REPORTS/

within the target repository.

All report generation should occur inside the project's REPORTS directory.

---

---

# Template Initialization

Before creating any reports:

1. Verify whether a `REPORTS/` directory already exists in the target repository.

If `REPORTS/` **does not exist**:

1. Create a new `REPORTS/` directory.
2. Copy each report template from the reporting template directory into `REPORTS/` exactly once.
3. Preserve the template file names, formatting, layout, section order, Markdown structure, and embedded HTML exactly as provided.
4. Populate placeholders only with verified repository-specific information.
5. Replace placeholder values only after verified information has been identified.
6. Leave any unverifiable values as **Unknown**.
7. Preserve the original template files as read-only. Never modify the template directory.

If `REPORTS/` **already exists**:

1. Do **not** recreate the directory.
2. Do **not** copy the templates again.
3. Do **not** overwrite existing reports.
4. Do **not** create duplicate report files.
5. Read the existing reports.
6. Update only the sections affected by the current repository state.
7. Preserve historical information and manually written notes whenever possible.

Each project may contain only one `REPORTS/` directory and one copy of each report:

- README.md
- PROJECT.md
- DEVELOPMENT.md
- FEATURES.md
- ANALYTICS.md
- DOCUMENTATION.md
- CLIENT.md
- PROJECT_MEMORY.md

Never create duplicate files such as:

- `PROJECT (1).md`
- `PROJECT_COPY.md`
- `PROJECT_NEW.md`
- `REPORTS (1)/`
- `REPORTS_COPY/`

---

# Global Reporting Standards

These instructions apply to every report.

- Never fabricate data.
- Never duplicate information between reports.
- Preserve historical information.
- Update timestamps.
- Use Markdown formatting consistently.
- Preserve HTML `<details>` sections.
- Keep reports synchronized.
- If information cannot be determined, record **Unknown** rather than guessing.

---

# Confidence Rules

Never guess.

If information cannot be determined from:

- Repository contents
- Git history
- Documentation
- Project files

Record:

Unknown

Never estimate:

- Development hours
- Completion percentages
- AI contribution
- Time saved

Unless sufficient evidence exists.

---

# Operating Modes

## Initialize Mode

Trigger:

- REPORTS/ directory does not exist.

Tasks:

- Create REPORTS/.
- Create every report using the provided templates.
- Analyze the repository.
- Populate every report with project-specific information.
- Detect framework, languages, architecture, dependencies, APIs, database, deployment, and project structure.
- Set timestamps.
- Establish baseline metrics.

---

## Update Mode

Trigger:

- REPORTS/ already exists.

Tasks:

- Read every report before making changes.
- Analyze repository changes.
- Update only affected reports.
- Preserve historical information.
- Synchronize shared metrics.
- Update timestamps.

---

## Audit Mode

Trigger:

- User requests an audit.
- Reports appear inconsistent.

Tasks:

- Verify every report.
- Repair inconsistencies.
- Synchronize metrics.
- Verify completion percentages.
- Remove outdated documentation.

---

# Repository Discovery Rules

Before creating or updating reports, inspect:

## Project Information

- README.md
- package.json
- pyproject.toml
- Cargo.toml
- go.mod

---

## Framework

Detect automatically.

Examples

- Next.js
- React
- Vue
- Angular
- Svelte
- Laravel
- Django
- Flask
- Express
- FastAPI
- ASP.NET

---

## Directory Structure

Analyze

- app/
- src/
- pages/
- components/
- hooks/
- services/
- api/
- lib/
- utils/
- styles/

---

## Database

Detect

- Prisma
- Drizzle
- PostgreSQL
- MySQL
- SQLite
- MongoDB
- Firebase
- Supabase

---

## Authentication

Detect

- Clerk
- NextAuth
- Auth0
- Firebase Auth
- Supabase Auth

---

## Deployment

Detect

- Vercel
- Netlify
- Docker
- AWS
- Railway
- Render

---

## Environment Variables

Look for

- .env.example
- .env.local.example

Never expose secrets.

---

## Git Repository

Analyze

- Branches
- Tags
- Releases
- Commit history
- Pull Requests (if available)

---

## Dependencies

Analyze package managers and installed packages.

---

## Testing

Detect

- Jest
- Vitest
- Cypress
- Playwright
- PHPUnit
- Pytest

---

# README.md

## Purpose

Describe the REPORTS directory and explain the responsibility of each report.

## Instructions

When updating this report:

- Keep reports synchronized.
- Avoid duplicate information across reports.
- Preserve development history.
- Update metrics automatically.
- Record meaningful decisions.
- Remove outdated technical documentation.
- Maintain consistent formatting.
- Keep client reports non-technical.

---

# PROJECT.md

## Purpose

High-level dashboard and current project status.

## Instructions

When updating this report:

- Update project completion percentage.
- Refresh development statistics.
- Update current milestone and focus.
- Add newly completed work.
- Move completed tasks out of "Currently Working On."
- Record any new blockers or risks.
- Update the Recent Activity table.
- Update the Last Updated timestamp.
- Never delete historical milestones—move them into DEVELOPMENT.md.
- Keep this report concise; detailed information belongs in the other reports.

---

# DEVELOPMENT.md

## Purpose

Development journal, coding sessions, prompt history, changelog, deployments, and repository activity.

## Instructions

When updating this report:

- Append new sessions; never overwrite previous ones.
- Record every meaningful coding session.
- Document commits, pushes, deployments, and branch changes.
- Record significant AI prompts and summarize their outcomes instead of logging trivial prompts.
- Generate a human-readable changelog from code changes.
- Update development metrics automatically.
- Record architectural decisions only when they materially affect the project.
- Preserve historical data.
- Keep entries concise and avoid repeating information already documented elsewhere.

---

# FEATURES.md

## Purpose

Track completed features, active work, roadmap, bugs, technical debt, and enhancements.

## Instructions

When updating this report:

- Update feature progress percentages automatically.
- Move completed features from **Active Development** to **Completed Features**.
- Add newly requested functionality to **Planned Features** unless immediately implemented.
- Record discovered bugs in the Bug Tracker.
- Move resolved bugs to **Recently Fixed**.
- Add shortcuts, workarounds, or deferred improvements to **Technical Debt**.
- Record client requests as **Enhancements** unless they represent entirely new features.
- Keep the Version Roadmap aligned with the project's milestones.
- Never delete completed features or resolved bugs—preserve project history.
- Update feature counts and completion statistics after every meaningful development session.

---

# ANALYTICS.md

## Purpose

Track development hours, AI usage, repository metrics, productivity, and project statistics.

## Instructions

When updating this report:

- Recalculate all metrics automatically after each development session.
- Estimate development hours based on coding activity if exact time tracking is unavailable.
- Categorize AI prompts by purpose and track acceptance rates.
- Calculate estimated AI vs. manual code contribution.
- Record repository activity including commits, pushes, branches, merges, and deployments.
- Track codebase growth (files, components, pages, APIs, and lines of code).
- Update performance metrics whenever benchmarks are available.
- Preserve historical trends instead of overwriting them.
- Highlight noteworthy milestones, productivity achievements, and efficiency improvements.
- Keep all metrics cumulative and easy to compare over time.

---

# DOCUMENTATION.md

## Purpose

Maintain technical documentation describing the project's current implementation.

## Instructions

When updating this report:

- Always reflect the **current** implementation rather than historical changes.
- Automatically update the project structure when folders or major files are added or removed.
- Keep the technology stack synchronized with installed dependencies.
- Document new API routes, database models, and reusable components.
- Update deployment instructions when infrastructure changes.
- Remove obsolete documentation instead of leaving stale information.
- Keep explanations concise, accurate, and developer-focused.
- This document should allow a new developer to understand the project without reading the source code first.

---

# CLIENT.md

## Purpose

Maintain a client-friendly progress report written in non-technical language.

## Instructions

When updating this report:

- Write for a non-technical audience.
- Avoid mentioning commits, AI prompts, repositories, branches, or implementation details.
- Summarize completed work in plain English.
- Highlight new functionality instead of code changes.
- Update overall project progress and milestone completion.
- Clearly identify any items requiring client approval or feedback.
- Keep language positive, concise, and easy to understand.
- Focus on outcomes and deliverables rather than technical implementation.
- If screenshots exist, reference the most recent versions to visually demonstrate progress.

---

# PROJECT_MEMORY.md

## Purpose

Maintain long-term project knowledge including design decisions, client preferences, lessons learned, recurring patterns, and future ideas.

## Instructions

When updating this report:

- Record **why** decisions were made, not just what changed.
- Preserve client preferences and design direction throughout the project.
- Document architectural reasoning and tradeoffs.
- Add lessons learned after major milestones.
- Record recurring development patterns and reusable solutions.
- Update technical constraints and future improvement ideas.
- Capture information that would normally exist only in the developer's memory.
- Keep this report concise, organized, and evergreen.
- Do **not** duplicate information already tracked in DEVELOPMENT.md or DOCUMENTATION.md.
- Think of this report as the project's long-term memory rather than a changelog.

---

# Report Ownership

Every piece of information should have one primary owner.

| Information | Report |
|------------|--------|
| Project Status | PROJECT.md |
| Development History | DEVELOPMENT.md |
| AI Prompt History | DEVELOPMENT.md |
| Changelog | DEVELOPMENT.md |
| Features | FEATURES.md |
| Bugs | FEATURES.md |
| Roadmap | FEATURES.md |
| Technical Debt | FEATURES.md |
| Development Hours | ANALYTICS.md |
| AI Metrics | ANALYTICS.md |
| Repository Metrics | ANALYTICS.md |
| Architecture | DOCUMENTATION.md |
| APIs | DOCUMENTATION.md |
| Components | DOCUMENTATION.md |
| Client Progress | CLIENT.md |
| Deliverables | CLIENT.md |
| Design Decisions | PROJECT_MEMORY.md |
| Lessons Learned | PROJECT_MEMORY.md |
| Client Preferences | PROJECT_MEMORY.md |

---

# Update Priority

When multiple reports require updates, use the following priority:

1. PROJECT.md
2. DEVELOPMENT.md
3. FEATURES.md
4. ANALYTICS.md
5. DOCUMENTATION.md
6. CLIENT.md
7. PROJECT_MEMORY.md

Only update reports affected by the current development session.

---

# Update Order

Whenever a development session is completed, determine which reports are affected and update only those reports.

Recommended order:

1. PROJECT.md
2. DEVELOPMENT.md
3. FEATURES.md
4. ANALYTICS.md
5. DOCUMENTATION.md *(if architecture changed)*
6. CLIENT.md *(if client-visible work occurred)*
7. PROJECT_MEMORY.md *(if new long-term knowledge was gained)*

---

# Synchronization Rules

Whenever one report changes, verify whether related reports also require updates.

Examples

Feature completed

Update:

- PROJECT.md
- FEATURES.md
- CLIENT.md
- ANALYTICS.md

---

Architecture changed

Update:

- DOCUMENTATION.md
- PROJECT_MEMORY.md
- PROJECT.md

---

Bug fixed

Update:

- FEATURES.md
- DEVELOPMENT.md
- CLIENT.md (if user-facing)

---

Deployment

Update:

- DEVELOPMENT.md
- ANALYTICS.md
- PROJECT.md

---

# Completion Checklist

After updating reports, verify:

- [ ] PROJECT.md synchronized
- [ ] DEVELOPMENT.md synchronized
- [ ] FEATURES.md synchronized
- [ ] ANALYTICS.md synchronized
- [ ] DOCUMENTATION.md synchronized (if applicable)
- [ ] CLIENT.md synchronized (if applicable)
- [ ] PROJECT_MEMORY.md synchronized (if applicable)
- [ ] Shared metrics match across reports
- [ ] Completion percentages are consistent
- [ ] Timestamps updated

---

# Repository Lifecycle

When given a repository URL:

1. Clone or inspect the repository.
2. Detect project type and framework.
3. Determine whether REPORTS/ already exists.
4. If REPORTS/ does not exist:
   - Create REPORTS/
   - Generate every report from the templates.
5. Populate each report using repository analysis.
6. Keep all reports synchronized during future updates.
7. Never overwrite historical data.
8. Preserve manually written notes whenever possible.
9. Keep documentation current with the repository.

---

# File Safety Rules

Never

- modify template files
- rename report templates
- create duplicate report files
- create REPORTS (1)
- create REPORTS_COPY
- overwrite manually written content without reason
- delete reports

Always

- update existing reports
- preserve history
- preserve formatting
- preserve manual notes whenever possible

---

# Manual Content Protection

If a report contains manually written notes:

- Preserve them.
- Do not rewrite them.
- Do not summarize them.
- Do not delete them.

Only update report sections directly related to repository changes.

User-authored notes always take precedence over generated content.













