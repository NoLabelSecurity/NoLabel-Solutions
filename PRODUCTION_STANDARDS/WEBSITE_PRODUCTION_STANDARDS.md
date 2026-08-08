# Website Production Standards

## 1. Repository Standards

### Purpose

These standards define how the repository should be organized, documented, and maintained throughout the project's lifecycle.

Before making any changes, inspect the repository structure and understand how the project is organized.

Do not assume every project follows the same structure.

Adapt to the existing repository while maintaining consistency with these standards.

The goal is to produce a clean, maintainable, professional repository that is easy for both humans and AI systems to understand.

---

## Project Standards Document

The repository contains a dedicated project standards directory.

```text
/PRODUCTION_STANDARDS/
```

The primary instruction document is:

```text
/PRODUCTION_STANDARDS/Project_Standards_Instructions.md
```

Before making significant project changes:

1. Read this document.
2. Follow its guidance throughout development.
3. Apply its standards consistently.
4. Do not ignore or overwrite its instructions.

If conflicting guidance exists elsewhere in the repository, prefer these project standards unless explicit project requirements state otherwise.

---

## Documentation Storage Rules

Store AI-generated project documentation inside:

```text
/PRODUCTION_STANDARDS/
```

unless another established location is clearly more appropriate.

Examples include:

* Accessibility audits
* SEO audits
* Security audits
* Performance audits
* Privacy audits
* Legal compliance reviews
* Architecture notes
* Planning documents
* Migration plans
* Deployment notes
* Code review summaries
* Feature implementation reports
* Technical recommendations
* Validation reports
* AI implementation notes

Avoid unnecessary documentation.

Do not generate reports merely for the sake of documentation.

Create documentation only when it provides long-term value to the project.

---

## File Organization

Respect the repository's existing structure.

Do not reorganize folders simply because another structure is preferred.

Only reorganize files when:

* explicitly requested,
* required for correctness,
* required for maintainability,
* or necessary to support significant new functionality.

When creating new files:

* Place them in logical locations.
* Follow existing organizational patterns.
* Avoid cluttering the project root.
* Avoid duplicate files.

If an existing file can reasonably be updated instead of creating a new one, prefer updating it.

---

## Naming Conventions

Follow existing naming conventions throughout the project.

Inspect existing files before creating new ones.

Maintain consistency with:

* filenames
* directories
* components
* utilities
* assets
* hooks
* services
* stylesheets
* configuration files
* documentation

Do not introduce a different naming convention without justification.

Use descriptive names.

Avoid abbreviations unless already used consistently throughout the project.

---

## AI Documentation

Documentation generated during development should be written for future developers rather than the current task alone.

Documentation should be:

* concise
* accurate
* maintainable
* technically correct
* project-specific

Avoid documenting obvious code.

Instead, explain:

* architectural decisions
* implementation reasoning
* assumptions
* limitations
* configuration requirements
* integration details
* future maintenance considerations

Never document functionality that does not exist.

Never create fictional implementation notes.

---

## Audit Reports

When audits are requested or produced, store them inside:

```text
/PRODUCTION_STANDARDS/
```

Use descriptive filenames.

Examples:

```text
Accessibility_Audit.md
SEO_Audit.md
Security_Audit.md
Performance_Audit.md
Privacy_Compliance_Audit.md
Deployment_Readiness.md
```

Each audit should include:

* Purpose
* Scope
* Findings
* Issues
* Recommendations
* Completed work
* Outstanding TODO items

Do not create duplicate audits covering the same topic.

If an existing audit exists, update it when appropriate.

---

## Change Logs

Do not create or modify change logs unless:

* requested,
* required by the project,
* or one already exists.

If a project maintains a change log:

Follow its existing format.

Describe changes factually.

Do not exaggerate improvements.

Do not invent version numbers.

Do not fabricate release dates.

Do not record changes that were not actually made.

---

## Repository Cleanliness

Maintain a clean repository.

Avoid:

* duplicate files
* obsolete documentation
* unused assets
* unused dependencies
* temporary files
* experimental files
* abandoned implementations
* placeholder content

Never delete existing project assets without confirming they are unused.

Prefer improving existing files rather than creating unnecessary new ones.

---

## Configuration Files

Inspect existing configuration files before creating new ones.

Examples include:

* package configuration
* TypeScript configuration
* lint configuration
* formatter configuration
* build configuration
* deployment configuration
* environment examples

Do not duplicate configuration unnecessarily.

Respect existing project tooling.

---

## Project Assets

Organize assets consistently.

Examples include:

* images
* icons
* logos
* fonts
* documents
* downloadable files

Avoid duplicate assets.

Optimize new assets appropriately.

Preserve existing directory organization.

---

## Temporary Files

Do not leave temporary files in the repository.

Examples:

* draft files
* scratch notes
* temporary exports
* unused images
* testing artifacts
* backup files

Remove temporary artifacts before considering work complete unless explicitly instructed otherwise.

---

## Repository Hallucination Prevention

Never invent repository structure.

Never assume:

* directories exist
* configuration exists
* documentation exists
* tooling exists
* deployment workflows exist

Inspect the project first.

If information cannot be verified:

* investigate further,
* ask for clarification if necessary,
* or insert an appropriate TODO.

Never fabricate project structure to satisfy these standards.

---

## Existing Repository Protection

Respect existing work.

Do not:

* rename directories unnecessarily,
* move files without justification,
* replace project organization,
* overwrite documentation,
* delete historical information,
* remove comments with project value.

Preserve repository history whenever practical.

---

## Repository Verification

Before completing repository-related work, verify:

* New files are stored appropriately.
* Documentation follows project standards.
* File names remain consistent.
* No duplicate files were introduced.
* Temporary files were removed.
* Existing organization was preserved.
* Documentation accurately reflects implementation.
* Project standards remain internally consistent.

---

## Repository Completion Report

If repository organization changes were made, summarize:

1. Files created.
2. Files modified.
3. Files removed.
4. Documentation added.
5. Documentation updated.
6. Outstanding TODO items.
7. Recommendations for future repository maintenance.

If a written repository report is created, store it in:

```text
/PRODUCTION_STANDARDS/
```

using a descriptive filename such as:

```text
Repository_Organization_Report.md
```

unless another established project location is more appropriate.

---

## Final Rule

Treat the repository as a long-term production asset.

Every change should improve:

* organization,
* maintainability,
* consistency,
* readability,
* discoverability,
* and future development.

Avoid unnecessary complexity.

Avoid unnecessary files.

Avoid unnecessary restructuring.

Preserve existing work whenever possible.

When uncertainty exists, prefer investigation over assumption.

A clean, predictable repository is easier to maintain, easier to review, and less likely to accumulate technical debt over time.


## 2. Primary Objectives

## 2. Primary Objectives

### Purpose

These objectives define the guiding principles for all development, analysis, implementation, maintenance, and documentation tasks performed within this project.

These objectives apply at all times unless a direct user instruction explicitly overrides them.

When multiple objectives compete, prioritize them in the order presented below.

The goal is to produce reliable, maintainable, production-quality work while preserving the integrity of the existing project.

---

## Project Goals

Every action should support one or more of the following goals:

* Improve the quality of the project.
* Preserve existing functionality.
* Maintain consistency throughout the codebase.
* Produce maintainable solutions.
* Reduce technical debt where appropriate.
* Improve usability.
* Improve accessibility.
* Improve security.
* Improve performance.
* Improve maintainability.
* Improve readability.
* Improve documentation.
* Improve long-term scalability.

Do not introduce changes that reduce quality in another area without clear justification.

Balance improvements against stability.

---

## Preservation of Existing Work

Treat existing project work as valuable unless there is clear evidence that it should be changed.

Before modifying:

* Read the existing implementation.
* Understand its purpose.
* Determine why it exists.
* Evaluate potential side effects.

Do not:

* Rewrite functioning code unnecessarily.
* Replace entire files to make small changes.
* Reformat unrelated files.
* Rename files without justification.
* Remove comments that provide project value.
* Replace existing architecture simply because another approach is preferred.

Prefer targeted improvements over complete rewrites.

Whenever possible:

* Extend existing functionality.
* Improve existing implementations.
* Preserve project history.
* Minimize disruption.

---

## Hallucination Prevention

Accuracy is more important than completeness.

Never invent:

* Features
* Functionality
* Business information
* Legal claims
* API behavior
* Configuration
* Dependencies
* Environment variables
* Project history
* File locations
* Framework capabilities
* Third-party integrations
* Deployment methods
* Accessibility compliance
* Security certifications
* SEO implementation

Inspect the project before making factual statements.

If information cannot be verified:

* Continue investigating.
* Ask for clarification when appropriate.
* Insert a clearly marked TODO when required.
* Explain assumptions separately from verified facts.

Never present assumptions as facts.

Visible TODO items are preferable to inaccurate implementations.

---

## Minimal Changes Philosophy

Implement the smallest reasonable change that completely solves the problem.

Avoid:

* Unnecessary rewrites.
* Unrelated improvements.
* Large refactors during small feature requests.
* Cosmetic changes unrelated to the task.
* Dependency changes without need.
* Architecture changes without justification.

Small, well-targeted changes are generally preferable to broad modifications.

Larger changes should occur only when they clearly improve maintainability, correctness, or project requirements.

---

## Project Awareness

Before making significant changes:

Inspect and understand:

* Project purpose
* Business goals
* Existing functionality
* User experience
* Technology stack
* Framework
* Build system
* Routing
* Styling approach
* Component architecture
* Coding conventions
* Existing documentation
* Existing legal pages
* Existing accessibility
* Existing security measures
* Existing SEO implementation

Every recommendation should be appropriate for this specific project.

Do not blindly apply generic best practices without considering the existing implementation.

---

## Completion Verification

Before considering work complete, verify:

* Requested objectives were accomplished.
* Existing functionality remains operational.
* New functionality behaves as intended.
* No unrelated functionality was broken.
* Project conventions were followed.
* Documentation remains accurate.
* Generated content matches implementation.
* No fabricated information remains.
* New files are stored appropriately.
* Build-breaking issues were not introduced.
* Outstanding limitations are documented.

Completion should be based on verification rather than assumption.

---

## Decision-Making Priority

When making implementation decisions, prioritize:

1. Correctness
2. Safety
3. Existing project consistency
4. Maintainability
5. Accessibility
6. Security
7. Performance
8. Readability
9. Simplicity
10. Future scalability

Do not sacrifice correctness for optimization.

Do not sacrifice maintainability for cleverness.

Do not sacrifice accessibility for appearance.

Do not sacrifice security for convenience.

---

## Incremental Improvement

When opportunities exist to improve the project without increasing unnecessary risk:

* Reduce duplication.
* Improve readability.
* Improve consistency.
* Improve maintainability.
* Improve documentation.
* Improve accessibility.
* Improve semantic correctness.

Do not perform speculative improvements unrelated to the current objective.

Keep improvements proportional to the requested task.

---

## Risk Assessment

Before making significant modifications, consider:

* What existing functionality could be affected?
* What dependencies rely on this implementation?
* Could the change introduce regressions?
* Is there a lower-risk solution?
* Can the work be completed incrementally?

Prefer the lowest-risk implementation that satisfies project requirements.

---

## User Intent

Determine the user's actual objective rather than responding only to literal wording.

When requirements are ambiguous:

* Inspect available project context.
* Infer reasonable intent without inventing facts.
* Preserve flexibility.
* Avoid unnecessary implementation.

Do not expand project scope beyond what reasonably supports the user's request.

---

## Consistency

Maintain consistency across the entire project.

Examples include:

* Coding style
* Naming
* Formatting
* Component patterns
* Documentation style
* Design language
* User interactions
* Error handling
* Accessibility implementation

Avoid introducing multiple approaches to solving the same problem without justification.

---

## Long-Term Maintainability

Favor solutions that remain understandable by future developers.

Prefer:

* Clear code
* Descriptive naming
* Predictable structure
* Modular implementations
* Reusable components
* Minimal duplication

Avoid unnecessary complexity.

Code should be easy to extend and maintain.

---

## Professional Quality

Assume all work is intended for production use.

Avoid:

* Placeholder implementations
* Mock functionality left enabled
* Test code in production
* Hardcoded secrets
* Debug statements
* Console logging intended only for development
* Temporary workarounds left undocumented

Deliver work suitable for long-term maintenance.

---

## Objective Verification

Before completing any task, confirm:

* The solution addresses the requested objective.
* Existing functionality remains intact.
* Project standards were followed.
* Hallucinations were avoided.
* Documentation matches implementation.
* Accessibility was not degraded.
* Security was not weakened.
* Performance was not unnecessarily reduced.
* Maintainability was preserved.

If any objective cannot be satisfied:

Clearly explain:

* What remains incomplete.
* Why it could not be completed.
* What additional information is required.
* Any recommended next steps.

---

## Final Objective

The ultimate objective is not merely to generate code.

The objective is to improve the project responsibly.

Every recommendation, modification, document, policy, configuration change, and implementation should contribute to a production-ready website that is:

* Accurate
* Maintainable
* Accessible
* Secure
* Performant
* Consistent
* Well documented
* Appropriate for the specific project

Never prioritize speed over correctness.

Never prioritize completeness over accuracy.

Never prioritize convenience over maintainability.

Every decision should leave the project in a better state than it was before.


## 3. General Development Rules

## 3. General Development Rules

### Purpose

These development rules define how modifications should be planned, implemented, and integrated into an existing project.

The objective is to produce production-ready code that blends naturally with the existing codebase while minimizing unnecessary disruption.

Every implementation should appear as though it was written by the original project developer.

---

## Preserve Existing Architecture

Before modifying code, inspect the project's architecture.

Identify:

* Directory structure
* Component hierarchy
* Routing architecture
* State management
* Styling methodology
* Build system
* Configuration
* Service architecture
* Utility organization
* Data flow
* API integration patterns

Do not replace or restructure an existing architecture solely because another pattern is preferred.

Preserve established architectural decisions unless:

* explicitly requested,
* required to resolve defects,
* required for maintainability,
* or required to support significant new functionality.

When architectural improvements are justified:

* make incremental changes,
* preserve compatibility where possible,
* minimize disruption,
* document significant architectural decisions.

---

## Follow Existing Coding Standards

Inspect the existing codebase before writing new code.

Follow established conventions for:

* formatting
* indentation
* naming
* imports
* exports
* component organization
* file structure
* comments
* error handling
* asynchronous patterns
* typing
* testing

If multiple styles already exist, prefer the style used in the surrounding files.

Do not introduce a new coding style without a compelling reason.

Consistency is generally more valuable than personal preference.

---

## Framework Detection

Determine the technologies used before implementing new functionality.

Examples include:

* React
* Next.js
* Vue
* Nuxt
* Angular
* Astro
* Svelte
* Solid
* Remix
* Express
* Node.js
* Laravel
* Django
* Flask
* Ruby on Rails
* Static HTML/CSS/JavaScript

Also identify:

* CSS framework
* UI component libraries
* Routing libraries
* Build tools
* Testing frameworks
* State management
* Data-fetching libraries

Do not assume a framework based solely on repository appearance.

Inspect project configuration and dependencies.

Implement solutions that follow the conventions of the detected technologies.

---

## Dependency Detection

Review existing dependencies before introducing new ones.

Determine whether existing libraries already provide the required functionality.

Prefer:

* existing project utilities,
* existing helper functions,
* existing libraries,
* native browser capabilities,
* framework-provided functionality.

Avoid introducing new dependencies when the existing project already contains an appropriate solution.

If a new dependency is justified:

* ensure it is actively maintained,
* appropriate for production,
* compatible with the project,
* minimally invasive,
* and provides meaningful value.

Do not introduce unnecessary package bloat.

---

## Existing Component Reuse

Before creating new components:

Search the project for reusable components.

Examples include:

* buttons
* cards
* forms
* modals
* dialogs
* navigation
* layout containers
* typography
* alerts
* badges
* icons
* loading indicators

Reuse existing components whenever practical.

Extend existing components before creating duplicates.

Avoid multiple implementations of the same UI pattern.

If a new reusable component is required:

Design it to match existing project conventions.

---

## Safe Refactoring

Refactoring should improve the project without changing intended behavior.

Before refactoring:

Understand:

* existing functionality,
* dependencies,
* consumers,
* edge cases,
* public interfaces.

Do not perform large refactors during unrelated feature requests.

Prefer incremental refactoring.

When refactoring:

* preserve functionality,
* preserve public interfaces when practical,
* reduce duplication,
* improve readability,
* improve maintainability,
* improve organization.

Do not refactor solely for stylistic preferences.

---

## Backwards Compatibility

Preserve compatibility whenever practical.

Avoid breaking:

* routes
* URLs
* APIs
* exported functions
* component interfaces
* configuration
* data formats
* environment variables
* integrations
* user workflows

When breaking changes are unavoidable:

* minimize impact,
* document the changes,
* identify migration requirements,
* preserve compatibility where feasible.

---

## Error Handling

Implement predictable and consistent error handling.

Avoid:

* silent failures,
* swallowed exceptions,
* misleading messages,
* exposing sensitive information.

Errors should:

* be understandable,
* assist debugging,
* avoid leaking implementation details,
* maintain a consistent user experience.

---

## Code Quality

Write code that is:

* readable,
* maintainable,
* modular,
* reusable,
* well organized,
* appropriately documented,
* consistent with the project.

Avoid:

* duplicated logic,
* unnecessary abstraction,
* deeply nested code,
* overly clever implementations,
* premature optimization.

Prefer clarity over complexity.

---

## Comments and Documentation

Respect existing documentation.

Do not remove useful comments.

Add comments only when they provide long-term value.

Prefer self-explanatory code over excessive commenting.

Document:

* non-obvious behavior,
* architectural decisions,
* implementation constraints,
* important assumptions,
* integration requirements.

Do not document obvious code.

---

## Configuration Awareness

Inspect existing configuration before making changes.

Examples include:

* build configuration
* lint configuration
* formatter configuration
* environment configuration
* deployment configuration
* routing configuration
* TypeScript configuration

Avoid creating duplicate configuration.

Respect existing project tooling.

---

## Code Organization

Keep related functionality together.

Avoid scattering related logic across unrelated files.

Prefer:

* modular organization,
* predictable structure,
* logical separation of concerns.

Do not create unnecessary abstraction layers.

---

## Performance Awareness

While implementing features:

Avoid unnecessary:

* re-renders,
* duplicate requests,
* expensive computations,
* oversized assets,
* redundant processing.

Optimize only where meaningful.

Do not sacrifice readability for insignificant performance gains.

---

## Accessibility Awareness

New functionality must not reduce accessibility.

Ensure new implementations remain:

* keyboard accessible,
* screen-reader friendly,
* semantically correct,
* responsive,
* usable by a wide range of visitors.

Accessibility should be considered part of implementation rather than an optional enhancement.

---

## Security Awareness

Never reduce project security.

Avoid introducing:

* hardcoded secrets,
* unsafe input handling,
* unsanitized output,
* insecure authentication,
* insecure storage,
* unnecessary exposure of sensitive data.

Security considerations should be evaluated throughout implementation rather than after development.

---

## Testing Awareness

Before considering implementation complete:

Mentally verify:

* expected behavior,
* common user flows,
* error conditions,
* edge cases,
* responsive behavior,
* accessibility,
* backwards compatibility.

Do not assume code works simply because it compiles.

---

## Incremental Development

Implement changes incrementally.

Avoid combining unrelated modifications into a single implementation.

Large changes should be divided into logical improvements whenever practical.

This improves:

* reviewability,
* maintainability,
* debugging,
* future modifications.

---

## Development Hallucination Prevention

Never invent:

* framework capabilities,
* component APIs,
* configuration options,
* dependency behavior,
* package functionality,
* build commands,
* deployment features,
* undocumented project conventions.

Inspect the implementation before making technical assumptions.

If uncertainty remains:

* investigate,
* request clarification when appropriate,
* or insert a TODO rather than fabricating behavior.

---

## Existing Code Protection

Respect the existing codebase.

Do not:

* rewrite functioning modules unnecessarily,
* rename files without justification,
* replace reusable components,
* remove compatibility,
* delete existing documentation,
* discard established patterns.

Every modification should have a clear technical justification.

---

## Development Verification

Before completing implementation, verify:

* Existing functionality remains operational.
* New functionality integrates naturally.
* Coding standards remain consistent.
* Architecture remains coherent.
* Components are reused where appropriate.
* No unnecessary dependencies were introduced.
* Refactoring preserved behavior.
* Accessibility remains intact.
* Security was not weakened.
* Performance remains appropriate.
* Backwards compatibility is preserved where practical.

---

## Final Rule

Every modification should feel like a natural extension of the existing project rather than a separate implementation.

Respect the project's architecture.

Respect the project's conventions.

Respect the project's history.

Improve the codebase through careful, incremental, well-reasoned changes.

The best implementation is one that future developers cannot distinguish from the project's original code.


## 4. Project Discovery

## 4. Project Discovery

### Purpose

Before making recommendations, modifying code, generating content, creating documentation, implementing features, or producing legal policies, perform a structured discovery process to understand the project.

Never assume the purpose, architecture, business model, technology stack, integrations, or requirements of a project.

Every implementation should be based on verified information obtained through inspection rather than assumptions.

Discovery should occur before significant implementation work begins.

---

## Website Purpose

Determine the primary purpose of the website.

Examples include:

* Business website
* Portfolio
* Personal website
* Landing page
* SaaS application
* Ecommerce
* Nonprofit
* Educational
* Government
* Healthcare
* Legal services
* Restaurant
* Real estate
* Blog
* News
* Membership site
* Documentation
* Internal application

Identify the primary objectives of the website.

Determine:

* Intended audience
* Primary user actions
* Business goals
* Visitor expectations

Do not assume the website's purpose from its appearance alone.

Use available project information whenever possible.

---

## Business Type

Identify the business or organization represented by the website.

Determine:

* Industry
* Services
* Products
* Business model
* Geographic scope
* Customer type
* Public or private audience

Do not invent business information.

If required information cannot be determined, identify the uncertainty rather than making assumptions.

---

## Technology Stack

Inspect the repository to identify:

Frontend:

* Framework
* Language
* CSS methodology
* Component libraries
* State management
* Build system

Backend (if applicable):

* Framework
* Runtime
* API architecture
* Database
* Authentication

Infrastructure:

* Deployment
* Environment configuration
* Hosting
* CDN
* Storage
* Serverless functions

Development tools:

* Linting
* Formatting
* Testing
* Type checking
* Build tooling

Do not assume technologies based solely on folder names.

Inspect configuration files and dependencies whenever possible.

---

## Routing Structure

Determine how routing is implemented.

Examples include:

* Static pages
* File-based routing
* Client-side routing
* Server-side routing
* Hybrid routing

Identify:

* Existing routes
* Dynamic routes
* Nested routes
* Error pages
* Redirects
* Layout hierarchy

Follow existing routing conventions.

Do not create inconsistent route structures.

---

## Existing Policies

Inspect the project for existing legal pages.

Examples include:

* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement
* Refund Policy
* Disclaimer

Before generating new legal content:

* Read existing documents.
* Preserve verified information.
* Improve existing policies when appropriate.
* Avoid unnecessary replacement.

Do not create duplicate legal pages.

---

## Third-Party Services

Identify integrations used by the project.

Examples include:

* Analytics
* Payment providers
* Authentication
* Email services
* Maps
* Scheduling
* CRM
* Chat systems
* Embedded media
* Social media
* Advertising
* Marketing automation
* CAPTCHA
* Cloud storage
* APIs

Only reference integrations that can be verified.

Never invent services.

Determine how each integration affects:

* Privacy
* Security
* Accessibility
* SEO
* Performance
* Legal requirements

---

## Existing Accessibility

Evaluate the current accessibility implementation.

Inspect:

* Semantic HTML
* Keyboard navigation
* Forms
* Images
* Heading hierarchy
* Focus indicators
* Color contrast
* Responsive behavior
* Interactive components
* ARIA usage

Identify:

* strengths,
* weaknesses,
* opportunities for improvement.

Do not assume accessibility compliance.

---

## Existing SEO

Inspect current SEO implementation.

Examples include:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph
* Twitter/X Cards
* Structured data
* robots.txt
* sitemap.xml
* Internal linking
* Heading structure
* Image optimization

Determine what already exists before recommending improvements.

Avoid duplicating existing work.

---

## Existing Security

Review the project's existing security posture.

Inspect:

* HTTPS assumptions
* Security headers
* Environment variables
* Authentication
* Authorization
* Input validation
* Output escaping
* Form handling
* API security
* Secret management
* File uploads
* Third-party integrations

Do not assume security features exist simply because they are common.

Only describe verified implementation.

---

## Existing Documentation

Review existing documentation before creating new documentation.

Examples include:

* README
* Setup guides
* Configuration guides
* Architecture documentation
* Audit reports
* API documentation

Update existing documentation whenever practical.

Avoid creating duplicate documents.

---

## Existing Components

Inspect reusable project components before implementing new ones.

Examples include:

* Buttons
* Cards
* Layouts
* Forms
* Navigation
* Dialogs
* Modals
* Alerts
* Tables
* Typography
* Icons

Prefer extending existing components instead of creating duplicates.

---

## Existing Assets

Review project assets.

Examples include:

* Logos
* Images
* Icons
* Fonts
* Videos
* Documents

Reuse existing assets whenever appropriate.

Avoid duplicate assets.

Do not replace branding without instruction.

---

## Existing Configuration

Inspect project configuration.

Examples include:

* Build configuration
* TypeScript configuration
* Lint configuration
* Formatter configuration
* Deployment configuration
* Environment configuration

Respect existing project tooling.

Avoid unnecessary configuration changes.

---

## Existing Documentation Standards

Determine how documentation is written throughout the project.

Maintain consistency with:

* tone
* formatting
* organization
* terminology
* naming

Do not introduce conflicting documentation styles.

---

## Existing Design System

Inspect the visual language of the project.

Identify:

* Typography
* Color palette
* Spacing
* Layout patterns
* Components
* Icons
* Buttons
* Cards
* Forms
* Animations

New work should integrate seamlessly with the existing design.

Avoid introducing unrelated visual styles.

---

## Existing User Experience

Understand current user flows.

Identify:

* Primary navigation
* Calls to action
* Forms
* Conversion paths
* User journeys

Enhancements should strengthen existing workflows rather than disrupt them.

---

## Discovery Documentation

When significant discoveries influence implementation:

Document them when appropriate.

Documentation should summarize:

* Verified findings
* Important assumptions avoided
* Technical constraints
* Architectural observations
* Recommendations

Store project-specific discovery documentation inside:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Project_Discovery_Report.md
```

Only create discovery documentation when it provides ongoing project value.

---

## Discovery Hallucination Prevention

Never assume:

* business goals,
* technology choices,
* integrations,
* deployment methods,
* accessibility,
* security,
* legal requirements,
* SEO implementation,
* project history.

Every important implementation decision should be supported by evidence found during project inspection.

If information cannot be verified:

* continue investigating,
* insert an appropriate TODO,
* request clarification when necessary.

Never fabricate discovery results.

---

## Discovery Verification

Before beginning major implementation work, confirm that you understand:

* The website's purpose.
* The business or organization.
* The intended audience.
* The technology stack.
* The routing structure.
* Existing architecture.
* Existing legal documents.
* Third-party services.
* Existing accessibility.
* Existing SEO.
* Existing security.
* Existing documentation.
* Existing reusable components.
* Existing design language.
* Existing project conventions.

If significant uncertainty remains, resolve it before making major architectural or implementation decisions.

---

## Final Rule

Every project is unique.

Never treat one project as a template for another.

Always inspect first.

Always understand the existing implementation.

Always adapt recommendations to the specific project.

The quality of implementation depends on the quality of discovery.

Accurate discovery leads to accurate recommendations, safer modifications, fewer hallucinations, and a more maintainable production website.


## 5. Legal & Compliance

## 5. Legal & Compliance

### Purpose

Legal and compliance requirements should be evaluated as part of every production website.

Do not assume that every project requires the same legal documents or compliance measures.

Instead, inspect the project and determine which legal requirements apply based on:

* Website purpose
* Business model
* Implemented functionality
* Data collection
* User interactions
* Geographic audience (when known)
* Industry
* Third-party services
* Regulatory considerations
* Existing legal documentation

Legal documentation should accurately reflect the implemented website.

Never generate legal content solely from generic templates.

---

## Legal Policy Generation Requirements

Before generating or modifying any legal document:

1. Inspect the project.
2. Identify implemented functionality.
3. Determine which legal documents are appropriate.
4. Review existing policies.
5. Preserve approved project-specific language whenever possible.
6. Improve existing documents rather than replacing them without justification.
7. Ensure every legal document remains consistent with the implemented website.

If required information cannot be verified:

* Do not guess.
* Insert a clearly marked TODO.
* Continue with verified information only.

---

## Visitor-Facing Legal Pages

Legal documents should exist as publicly accessible pages within the website.

Do not generate legal documents only as Markdown files within the repository.

Each required legal document should:

* Follow the project's routing conventions.
* Match the site's design system.
* Be responsive.
* Use semantic HTML.
* Be accessible.
* Integrate naturally into the existing website.

---

## Footer Integration

Every implemented legal page should be accessible from the global footer.

Verify:

* Links exist.
* Links resolve correctly.
* Link text is descriptive.
* No broken routes exist.

Do not create footer links to nonexistent pages.

---

## Required Legal Evaluation

Evaluate whether the project requires:

### Privacy Policy

Apply the **Privacy Policy Standards** module.

Generate or update a Privacy Policy only when appropriate.

Ensure it accurately reflects:

* Data collection
* Third-party services
* Contact forms
* Analytics
* Browser storage
* Payment processing
* Implemented functionality

---

### Terms of Service

Apply the **Terms of Service Standards** module.

Generate or update Terms of Service appropriate to the project's functionality.

Do not include unnecessary contractual provisions.

---

### Cookie Policy

Apply the **Cookie Policy Standards** module.

Determine whether browser storage technologies justify a dedicated Cookie Policy.

Ensure consistency between:

* Website implementation
* Privacy Policy
* Cookie Policy
* Consent mechanisms

---

### Accessibility Statement

Apply the **Accessibility Statement Standards** module.

Perform an accessibility review before generating the statement.

Never claim accessibility compliance that cannot be verified.

---

## Additional Policies (When Applicable)

Evaluate whether additional policies are appropriate.

Only generate documents that correspond to implemented functionality.

Potential policies include:

### Disclaimer

Examples:

* General informational disclaimer
* Professional services disclaimer
* Industry-specific disclaimer

Only include disclaimers supported by the website's purpose.

---

### Refund Policy

Generate only when products or services may require refunds.

Coordinate with:

* Terms of Service
* Checkout flow
* Payment implementation

---

### Returns Policy

Generate only for projects involving returnable goods.

Do not invent return procedures.

---

### Shipping Policy

Generate only for projects that ship physical products.

Do not invent shipping providers, delivery times, or pricing.

---

### Cancellation Policy

Generate when:

* appointments,
* reservations,
* subscriptions,
* memberships,
* or scheduled services

allow cancellation.

Reflect actual business processes.

---

### Subscription Policy

Generate when recurring subscriptions exist.

Coordinate with:

* billing implementation,
* payment provider,
* Terms of Service.

---

### Warranty Policy

Only generate if warranties are actually offered.

Do not create warranty promises.

---

### Licensing Terms

Generate only when software, digital assets, downloads, APIs, or licensed content require licensing language.

---

### Affiliate Disclosure

Generate when affiliate links are present.

Do not imply affiliate relationships that do not exist.

---

### Advertising Disclosure

Generate when sponsored content or advertising relationships require disclosure.

---

### Medical Disclaimer

Only generate for healthcare, wellness, or medically related projects where appropriate.

Never invent professional qualifications.

---

### Legal Disclaimer

Generate only when appropriate for legal informational websites.

Avoid creating attorney-client relationship language unless supported by the project.

---

### Financial Disclaimer

Generate only for financial websites.

Never imply investment advice or regulatory compliance without verification.

---

### Educational Disclaimer

Generate when educational content may require clarification regarding informational use.

---

### AI Content Disclosure

Determine whether AI-generated content is materially used within the project.

If appropriate:

Explain AI usage accurately.

Do not imply human review where none exists.

Do not imply AI involvement where none exists.

---

## Existing Legal Document Protection

If legal documents already exist:

* Read them completely.
* Preserve accurate project-specific information.
* Preserve approved client language where practical.
* Correct inaccuracies.
* Improve organization.
* Improve accessibility.
* Improve consistency.

Do not replace existing legal documents merely to conform to these standards.

---

## Consistency Verification

Ensure every legal document remains consistent with:

* Website functionality
* Privacy practices
* Contact forms
* Payment implementation
* Third-party integrations
* Cookie implementation
* Accessibility implementation
* Footer navigation

Legal documents should never contradict one another.

---

## Hallucination Prevention

Never invent:

* Business information
* Legal entities
* Licenses
* Certifications
* Jurisdictions
* Contact information
* Data practices
* Privacy practices
* Security practices
* Payment behavior
* Third-party services
* Regulatory compliance
* Legal obligations

If information cannot be verified:

* Continue investigating.
* Insert an appropriate TODO.
* Clearly identify unresolved items.

Never fabricate legal statements to make documentation appear complete.

---

## Legal Review Recommendation

Generated legal documentation is intended to assist implementation.

Do not represent generated legal documents as:

* Attorney reviewed
* Attorney approved
* Legally certified
* Universally compliant
* Guaranteed compliant

Highly regulated projects—including healthcare, finance, legal services, education, government, children's services, and projects involving sensitive personal information—should be identified for professional legal review before publication.

---

## Legal Compliance Audit

After implementing or updating legal documentation, verify:

* Required policies exist.
* Policies accurately reflect implementation.
* Policies do not contradict one another.
* Footer links function correctly.
* Policy pages render correctly.
* Responsive layouts function correctly.
* Accessibility is maintained.
* Contact information is accurate or clearly marked as TODO.
* Dates are current.
* Internal links function correctly.
* Unsupported legal claims are absent.

---

## Completion Report

Summarize:

1. Legal documents created.
2. Legal documents updated.
3. Existing policies preserved.
4. Additional policies determined to be unnecessary.
5. Outstanding TODO items.
6. Issues requiring client review.
7. Issues recommended for legal review.

If legal audit documentation is created, store it in:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Legal_Compliance_Audit.md
```

unless another established project location is more appropriate.

---

## Final Rule

Legal documentation should always describe the website that actually exists.

Never modify the website solely to satisfy generic legal templates.

Instead:

1. Discover the project.
2. Inspect implemented functionality.
3. Determine applicable legal requirements.
4. Generate only the legal documents that are appropriate.
5. Preserve existing approved content.
6. Keep all legal documentation internally consistent.
7. Clearly identify unresolved legal questions instead of making assumptions.

Accuracy, transparency, maintainability, and consistency always take precedence over boilerplate completeness.


## 6. Contact Forms

## 6. Contact Forms

### Purpose

Contact forms are often the primary method of communication between website visitors and the business.

Every contact form should be designed to be secure, accessible, reliable, user-friendly, and appropriate for the specific project.

Do not treat contact forms as simple UI components.

Treat them as production features that receive, validate, process, and transmit user-provided information.

---

## Required Validation

Every contact form should implement both client-side and server-side validation whenever server-side processing exists.

Validate:

* Required fields
* Email addresses
* Telephone numbers (when applicable)
* Character limits
* Input length
* Allowed file types
* File sizes
* Required selections
* Accepted formats

Validation should:

* Prevent invalid submissions.
* Provide clear feedback.
* Preserve user-entered values when practical.
* Avoid unnecessary restrictions.

Do not rely solely on client-side validation.

---

## Spam Protection

Evaluate the project's exposure to automated spam.

Implement appropriate protection such as:

* Honeypot fields
* Rate limiting
* CAPTCHA or similar verification when justified
* Bot detection
* Submission throttling
* Server-side validation

Prefer solutions that minimize user friction.

Do not implement CAPTCHA unless appropriate for the project's risk level.

---

## Accessibility

Every form must be fully accessible.

Verify:

* Semantic HTML
* Associated labels
* Field descriptions
* Required indicators
* Accessible validation
* Accessible error messages
* Keyboard navigation
* Logical tab order
* Screen reader compatibility
* Visible focus indicators
* Accessible success messages

Accessibility should never be sacrificed for visual appearance.

---

## Error Handling

Provide meaningful error handling.

Errors should:

* Clearly identify the problem.
* Explain how to resolve it.
* Avoid exposing implementation details.
* Preserve entered data whenever practical.

Avoid:

* Generic failures
* Silent failures
* Technical error messages
* Stack traces
* Internal identifiers

Unexpected failures should fail gracefully.

---

## Success Messages

After successful submission:

Provide a clear confirmation.

Examples include:

* Confirmation message
* Success page
* Redirect with confirmation
* Accessible status announcement

Explain what happens next when appropriate.

Do not promise response times unless verified.

---

## Secure Submission

Protect all submitted information.

Ensure:

* HTTPS is used.
* Sensitive information is transmitted securely.
* Input is validated.
* Output is sanitized.
* Secrets remain protected.
* API endpoints are not unnecessarily exposed.

Never expose:

* API keys
* Tokens
* SMTP credentials
* Private endpoints
* Secret URLs
* Authentication credentials

Use environment variables whenever secrets are required.

---

## Backend Configuration

Determine how submissions are processed.

Examples include:

* Serverless functions
* Backend APIs
* Email services
* Form providers
* CRM integrations
* Database storage

Inspect the existing implementation before modifying it.

Do not assume a particular backend architecture.

If backend configuration is incomplete:

Clearly identify:

* Required services
* Required environment variables
* Required configuration steps

Do not fabricate backend functionality.

---

## Environment Variables

Sensitive configuration must never be hardcoded.

Examples include:

* API keys
* Authentication tokens
* SMTP credentials
* Database connections
* Service endpoints
* Secret keys

Store sensitive values using environment variables.

If required values are unavailable:

Create clearly identified TODO items.

Do not generate placeholder secrets.

---

## Form Fields

Only request information necessary for the website's purpose.

Avoid unnecessary data collection.

Typical fields may include:

* Name
* Email
* Phone
* Company
* Subject
* Message

Additional fields should only be included when justified by project requirements.

---

## Privacy Considerations

If personal information is collected:

Ensure:

* Privacy Policy reflects actual collection.
* Form notices are appropriate.
* Data handling matches implementation.
* Required legal disclosures are present when appropriate.

Do not collect unnecessary personal information.

---

## File Uploads

If file uploads are supported:

Validate:

* File type
* File size
* Allowed extensions

Reject:

* Executable files
* Unsafe file types
* Oversized uploads

Never trust client-side validation alone.

---

## User Experience

Forms should be:

* Simple
* Clear
* Predictable
* Easy to complete

Minimize unnecessary fields.

Group related information logically.

Provide helpful instructions only where needed.

Avoid overwhelming visitors.

---

## Mobile Experience

Verify forms on:

* Desktop
* Tablet
* Mobile

Ensure:

* Comfortable touch targets
* Responsive layouts
* Appropriate keyboards for input types
* Readable text
* Accessible spacing

---

## Autofill Support

Where appropriate, implement browser autocomplete attributes.

Examples include:

* name
* email
* tel
* organization

Use standardized autocomplete values where supported.

---

## Form Performance

Avoid unnecessary JavaScript.

Avoid blocking page rendering.

Submit efficiently.

Prevent duplicate submissions where practical.

Avoid excessive network requests.

---

## Third-Party Integrations

Identify services used by the form.

Examples:

* Email providers
* CRM systems
* Marketing automation
* Scheduling systems
* Support systems

Do not invent integrations.

Ensure documentation accurately reflects implemented services.

---

## Existing Form Protection

Before modifying an existing form:

Understand:

* Current workflow
* Existing validation
* Existing integrations
* Existing backend processing
* Existing notifications

Do not replace working implementations unnecessarily.

Prefer incremental improvements.

---

## Contact Form Audit

After implementation, verify:

* Validation functions correctly.
* Required fields behave correctly.
* Accessibility requirements are met.
* Keyboard navigation functions.
* Error handling behaves correctly.
* Success messages display correctly.
* Spam protection functions as intended.
* Sensitive information is protected.
* Environment variables are used correctly.
* Privacy documentation matches implementation.
* Responsive layouts function correctly.
* Mobile usability is maintained.

---

## Completion Report

Summarize:

1. Forms reviewed.
2. Forms created or updated.
3. Validation improvements.
4. Accessibility improvements.
5. Security improvements.
6. Spam protection improvements.
7. Backend configuration requirements.
8. Outstanding TODO items.

If form documentation is created, store it in:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Contact_Form_Audit.md
```

unless another established project location is more appropriate.

---

## Final Rule

Every contact form should be treated as a production communication system.

It should:

* Protect visitor information.
* Validate input.
* Remain accessible.
* Match the website's design.
* Integrate with existing infrastructure.
* Preserve user experience.
* Accurately reflect documented privacy practices.

Never sacrifice security, accessibility, or reliability for convenience.

A contact form should inspire confidence, operate predictably, and remain maintainable throughout the life of the project.


## 7. Footer Requirements

## 7. Footer Requirements

### Purpose

The website footer serves as the primary location for global information, legal documentation, secondary navigation, and business identification.

Every production website should include a professional, consistent, and accessible footer appropriate for the project's purpose.

The footer should provide visitors with easy access to important information without becoming cluttered.

Never treat the footer as an afterthought.

---

## General Requirements

The footer should:

* Match the website's design system.
* Be responsive.
* Be accessible.
* Appear consistently throughout the website where appropriate.
* Use semantic HTML.
* Maintain visual consistency with the rest of the project.

Do not create multiple unrelated footer designs.

---

## Copyright

Include an appropriate copyright notice.

Examples may include:

```text
© 2026 Business Name
```

or

```text
© 2026 Business Name. All rights reserved.
```

Use the verified business or organization name.

Do not invent:

* Business names
* Legal entities
* Copyright holders

Use the current year unless project requirements specify otherwise.

---

## Business Name

Display the verified business or organization name.

Do not substitute:

* Developer name
* Agency name
* Repository name

unless they are the actual website owner.

Never list NoLabel Solutions as the website owner unless the project explicitly represents NoLabel Solutions.

---

## Privacy Policy Link

If a Privacy Policy exists:

Include a footer link.

Verify:

* Route exists.
* Link functions correctly.
* Link text is descriptive.

Examples:

* Privacy Policy

Do not link to nonexistent pages.

---

## Terms Link

If Terms of Service exist:

Include a footer link.

Examples:

* Terms of Service
* Terms & Conditions

Follow existing project terminology.

---

## Cookie Policy Link

If a Cookie Policy exists:

Include a footer link.

Verify the route functions correctly.

Do not display cookie links if no Cookie Policy exists.

---

## Accessibility Link

If an Accessibility Statement exists:

Include a footer link.

Examples:

* Accessibility
* Accessibility Statement

Ensure the page is publicly accessible.

---

## Contact Information

Include verified contact information when appropriate.

Examples may include:

* Email
* Telephone
* Business address
* Contact page

Never invent contact information.

If information is unavailable:

Prefer linking to the Contact page rather than creating placeholder information.

---

## Social Links

Only include verified social media profiles.

Examples:

* Facebook
* Instagram
* LinkedIn
* X
* YouTube
* GitHub

Never invent social media accounts.

Verify all links function correctly.

Do not include empty icons.

---

## Additional Legal Links

Evaluate whether additional footer links are appropriate.

Examples include:

* Disclaimer
* Refund Policy
* Returns Policy
* Shipping Policy
* Cancellation Policy
* Licensing
* Accessibility
* Sitemap

Only display links that correspond to implemented pages.

---

## Secondary Navigation

Where appropriate, include additional navigation.

Examples:

* About
* Services
* Portfolio
* Blog
* FAQ
* Contact
* Careers

Follow existing project navigation patterns.

Do not duplicate the primary navigation unnecessarily.

---

## Branding

The footer should reinforce the website's branding.

Maintain consistency with:

* Typography
* Color palette
* Logo usage
* Spacing
* Icons
* Layout

Avoid introducing unrelated visual styles.

---

## Responsive Layout

Ensure the footer remains usable on:

* Desktop
* Tablet
* Mobile

Verify:

* Readable typography
* Appropriate spacing
* Accessible touch targets
* Logical stacking
* Responsive columns

---

## Accessibility

The footer must remain accessible.

Verify:

* Semantic landmarks
* Keyboard navigation
* Focus indicators
* Accessible links
* Appropriate color contrast
* Logical reading order
* Screen reader compatibility

Avoid decorative elements that interfere with usability.

---

## Internal Links

Verify all footer links.

Ensure:

* Routes exist.
* Links are not broken.
* Redirects are intentional.
* Link text accurately describes the destination.

Broken footer links should never remain in production.

---

## External Links

External links should:

* Open intentionally according to project requirements.
* Use appropriate security attributes where applicable.
* Be verified before publication.

Avoid linking to unverified external resources.

---

## Dynamic Content

If the footer displays dynamic information:

Examples include:

* Current year
* Business hours
* Latest copyright year

Implement dynamic behavior only when appropriate.

Avoid unnecessary scripting.

---

## SEO Considerations

Footer content should support usability rather than keyword stuffing.

Avoid:

* Hidden links
* Excessive navigation
* Duplicate anchor text
* Spam-like keyword lists

Footer links should improve navigation rather than manipulate search rankings.

---

## Existing Footer Protection

Before modifying an existing footer:

Inspect:

* Existing layout
* Existing branding
* Existing navigation
* Existing legal links
* Existing business information

Preserve useful content whenever practical.

Do not redesign the footer unnecessarily.

---

## Footer Audit

After implementation, verify:

* Footer appears consistently.
* Responsive layouts function correctly.
* Accessibility requirements are met.
* Copyright information is accurate.
* Legal links function.
* Contact information is accurate.
* Social links are verified.
* Internal links function correctly.
* Branding remains consistent.
* No duplicate links exist.
* No empty placeholders remain.

---

## Completion Report

Summarize:

1. Footer improvements made.
2. Legal links added or updated.
3. Contact information verified.
4. Navigation improvements.
5. Accessibility improvements.
6. Responsive improvements.
7. Outstanding TODO items.

If footer documentation is created, store it in:

```text
/PRODUCTION_STANDARDS/
```

using a descriptive filename such as:

```text
Footer_Audit.md
```

unless another established project location is more appropriate.

---

## Final Rule

The footer should serve as the website's permanent global information hub.

Every footer should:

* Support visitors.
* Improve navigation.
* Reinforce branding.
* Provide access to legal documentation.
* Display accurate business information.
* Remain accessible.
* Remain responsive.
* Match the overall design system.

Never overload the footer with unnecessary content.

A well-designed footer should be clear, organized, trustworthy, and useful across every page of the website.


## 8. SEO Requirements

## 8. SEO Requirements

### Purpose

Search Engine Optimization (SEO) should improve the discoverability, usability, and accuracy of the website while maintaining consistency with the implemented content.

SEO should accurately describe the website rather than manipulate search rankings.

Every SEO implementation should reflect the actual content and purpose of the project.

Never implement SEO solely for keyword manipulation.

---

## General SEO Principles

SEO should prioritize:

* Accuracy
* Relevance
* Accessibility
* Performance
* User experience
* Structured information
* Search engine clarity

Avoid:

* Keyword stuffing
* Hidden content
* Duplicate metadata
* Misleading titles
* Clickbait descriptions
* Artificial ranking manipulation

Implement sustainable SEO practices.

---

## Existing SEO Inspection

Before making SEO changes:

Inspect:

* Existing metadata
* Existing page titles
* Existing descriptions
* Existing structured data
* Existing robots directives
* Existing sitemap
* Existing Open Graph metadata
* Existing social metadata
* Existing canonical URLs
* Existing heading structure
* Existing image optimization

Preserve accurate existing SEO implementation whenever practical.

Avoid unnecessary replacement.

---

## Page Titles

Every significant page should have a unique title.

Titles should:

* Describe the page accurately.
* Reflect actual content.
* Remain concise.
* Support usability.
* Match visitor expectations.

Avoid:

* Duplicate titles
* Generic titles
* Excessively long titles
* Keyword repetition

Do not fabricate services or business capabilities.

---

## Meta Descriptions

Every significant page should have an appropriate meta description.

Descriptions should:

* Accurately summarize page content.
* Encourage meaningful engagement.
* Remain concise.
* Match implemented functionality.

Avoid:

* Duplicate descriptions
* Keyword stuffing
* Misleading marketing claims
* Fabricated business information

---

## Canonical URLs

Determine whether canonical URLs are appropriate.

Ensure:

* Canonical URLs accurately represent the preferred page.
* Duplicate content references are minimized.
* Canonical URLs follow existing routing conventions.

Do not create incorrect canonical references.

---

## Open Graph Metadata

Implement Open Graph metadata appropriate for social sharing.

Examples include:

* Title
* Description
* Image
* URL
* Site Name
* Content Type

Open Graph content should accurately represent the page.

Do not use placeholder images.

Do not invent marketing language.

---

## Twitter/X Cards

When appropriate, implement Twitter/X Card metadata.

Ensure consistency with:

* Open Graph
* Page metadata
* Page content

Avoid contradictory metadata.

---

## Favicon

Verify that the project includes an appropriate favicon.

Ensure:

* Correct file references
* Appropriate formats
* Browser compatibility

Do not replace existing branding unnecessarily.

---

## robots.txt

Determine whether robots.txt exists.

If appropriate:

Ensure it accurately reflects the project's indexing requirements.

Avoid:

* Accidentally blocking production content
* Blocking required assets
* Incorrect crawl directives

Do not blindly copy robots.txt files from unrelated projects.

---

## sitemap.xml

Determine whether sitemap.xml exists.

If appropriate:

Ensure it includes:

* Public pages
* Canonical URLs
* Valid routing

Do not include:

* Error pages
* Duplicate URLs
* Development routes
* Private content

---

## Structured Metadata

Implement structured metadata where appropriate.

Coordinate with:

* Structured Data (Schema.org)
* Open Graph
* Page metadata

Ensure consistency across all metadata.

Do not create contradictory information.

---

## Internal Linking

Review internal linking.

Ensure:

* Logical navigation
* Contextual links
* Functional routes
* Descriptive anchor text

Avoid:

* Broken links
* Orphaned pages
* Excessive linking
* Hidden navigation

Internal linking should improve user experience.

---

## Heading Structure

Review every page.

Ensure headings follow a logical hierarchy.

Examples:

* One primary H1 when appropriate.
* Sequential heading levels.
* Descriptive headings.

Avoid:

* Skipped heading levels without reason.
* Multiple unrelated H1 elements.
* Headings used only for styling.

---

## Image SEO

Review images.

Ensure:

* Meaningful filenames when practical.
* Appropriate alt text.
* Optimized dimensions.
* Responsive behavior.
* Appropriate loading strategy.

Avoid:

* Generic filenames for new assets.
* Missing alt text.
* Oversized images.
* Decorative alt text.

---

## URL Structure

Review routing.

URLs should be:

* Predictable
* Readable
* Consistent
* Descriptive

Avoid:

* Unnecessary parameters
* Random identifiers
* Inconsistent routing
* Duplicate routes

Follow existing routing conventions.

---

## Duplicate Content

Review the project for duplicate content.

Examples:

* Duplicate pages
* Duplicate metadata
* Duplicate titles
* Duplicate descriptions
* Duplicate headings

Reduce duplication where appropriate.

Do not remove intentionally duplicated legal content.

---

## Content Accuracy

SEO content must accurately describe the website.

Never invent:

* Services
* Products
* Locations
* Business capabilities
* Awards
* Certifications
* Reviews
* Testimonials

Metadata should describe implemented content—not aspirational marketing.

---

## Local SEO

If the project represents a local business:

Review:

* Business name
* Address
* Phone number
* Hours
* Service area

Only use verified information.

Never invent local business details.

Coordinate with Schema.org implementation.

---

## Performance Considerations

SEO improvements should not reduce website performance.

Avoid:

* Excessive metadata
* Oversized images
* Unnecessary scripts

Coordinate SEO with performance optimization.

---

## Accessibility Coordination

SEO improvements should complement accessibility.

Ensure:

* Meaningful headings
* Descriptive links
* Alt text
* Semantic HTML

Accessibility and SEO should reinforce each other.

---

## Existing SEO Protection

Before replacing metadata:

Review existing implementation.

Preserve:

* Verified metadata
* Existing search visibility
* Existing canonical structure

Improve rather than replace whenever practical.

---

## Hallucination Prevention

Never invent:

* Keywords
* Rankings
* Search performance
* Business capabilities
* Locations
* Certifications
* Products
* Services
* Marketing claims

SEO should describe the implemented website.

Never optimize for functionality that does not exist.

---

## SEO Audit

After implementation, verify:

* Titles are unique.
* Descriptions are appropriate.
* Canonical URLs are correct.
* Open Graph metadata is accurate.
* Twitter/X metadata is accurate.
* robots.txt functions correctly.
* sitemap.xml is valid.
* Internal links function.
* Heading hierarchy is logical.
* Images include meaningful alt text.
* Structured metadata is consistent.
* No duplicate metadata exists.
* No broken internal links remain.

---

## Completion Report

Summarize:

1. SEO improvements made.
2. Metadata created or updated.
3. Internal linking improvements.
4. Image optimization improvements.
5. Routing improvements.
6. Outstanding TODO items.
7. Additional recommendations.

If SEO documentation is created, store it in:

```text
/PRODUCTION_STANDARDS/
```

using a descriptive filename such as:

```text
SEO_Audit.md
```

unless another established project location is more appropriate.

---

## Final Rule

SEO should accurately communicate the website's content to search engines and visitors.

Never manipulate metadata to create a misleading impression of the website.

Instead:

1. Inspect the project.
2. Understand the content.
3. Optimize discoverability.
4. Improve clarity.
5. Preserve accuracy.
6. Coordinate with accessibility, structured data, and performance.

The best SEO is truthful, maintainable, technically sound, and aligned with the website's actual implementation.


## 9. Structured Data (Schema.org)

## 9. Structured Data (Schema.org)

### Purpose

Structured data helps search engines and other consumers understand the content, purpose, and relationships within a website.

Implement Schema.org structured data only when it accurately represents the website's implemented content.

Structured data must improve machine readability without introducing inaccurate or misleading information.

Always prioritize accuracy over completeness.

---

## General Requirements

Before implementing structured data:

Inspect the project to determine:

* Website purpose
* Business type
* Available content
* Existing structured data
* Existing metadata
* Existing SEO implementation
* Existing business information

Never implement Schema.org markup based on assumptions.

Every property should be supported by verified project information.

---

## Implementation Standards

Prefer JSON-LD unless the project explicitly uses another supported format.

Structured data should:

* Be valid.
* Be well organized.
* Match page content.
* Match visible information.
* Avoid duplication.
* Avoid contradictory values.

Do not mix multiple implementation styles unnecessarily.

---

## Existing Structured Data

Inspect the project for existing Schema.org implementation.

Before creating new structured data:

* Read existing markup.
* Preserve valid implementation.
* Improve incomplete markup.
* Remove duplicate or conflicting markup only when appropriate.

Never generate duplicate schemas for the same purpose.

---

## Organization

When appropriate, implement an Organization schema.

Only include verified information such as:

* Business name
* Logo
* Website URL
* Contact information
* Social profiles

Never invent:

* Legal names
* Phone numbers
* Addresses
* Social accounts
* Founding dates
* Employees
* Awards

---

## LocalBusiness

Only implement LocalBusiness when the project represents an actual local business.

Verify:

* Business name
* Address
* Telephone
* Hours
* Geographic location
* Service area

Do not fabricate any local business information.

If required information is unavailable:

Insert appropriate TODO items rather than guessing.

---

## Person

Implement Person schema only when an identifiable individual is represented.

Examples include:

* Personal portfolios
* Authors
* Consultants
* Public professionals

Use only verified information.

---

## Product

Only implement Product schema when products actually exist.

Verify:

* Product name
* Description
* Images
* Pricing
* Availability
* Brand
* SKU
* Reviews (if present)

Do not invent:

* Pricing
* Inventory
* Ratings
* Reviews
* Availability

---

## Service

Implement Service schema when the website provides services.

Describe only implemented services.

Avoid marketing exaggeration.

Do not invent service offerings.

---

## Article

Use Article schema when appropriate.

Examples include:

* Blog posts
* News articles
* Documentation
* Guides

Ensure:

* Headline matches page.
* Author is verified.
* Dates are accurate.
* Images exist.
* Content matches visible page.

---

## FAQ

Implement FAQ schema only when genuine question-and-answer content exists on the page.

Do not create invisible FAQs solely for search engines.

FAQ content should remain visible to visitors.

---

## Breadcrumb

When breadcrumb navigation exists:

Ensure Breadcrumb schema accurately reflects navigation.

Do not create breadcrumb markup without corresponding visible navigation unless the project intentionally supports it.

---

## WebSite

Implement WebSite schema when appropriate.

Include verified information such as:

* Website name
* URL
* Search functionality (if implemented)

Do not fabricate SearchAction support.

---

## SearchAction

Only implement SearchAction when the website actually provides search functionality.

Do not advertise nonexistent search features.

---

## Event

Implement Event schema only when actual events exist.

Verify:

* Event name
* Date
* Time
* Location
* Organizer

Do not invent events.

---

## Review

Implement Review schema only for genuine reviews displayed by the website.

Do not fabricate reviews.

Never generate fake testimonials.

---

## AggregateRating

Implement AggregateRating only when actual aggregated ratings exist.

Never generate:

* Review counts
* Average ratings
* Customer scores

These values must be supported by implemented content.

---

## Images

Verify structured data image references.

Ensure:

* Images exist.
* URLs resolve correctly.
* Images represent the associated content.
* Appropriate dimensions are used when available.

Do not reference placeholder images.

---

## Dates

Use accurate dates.

Do not fabricate:

* Publication dates
* Modification dates
* Founding dates
* Event dates

Use project information whenever available.

---

## Business Information

Structured data must match:

* Footer
* Contact page
* Privacy Policy
* Terms of Service
* Visible page content

Conflicting information should never exist.

---

## Multiple Schemas

When multiple schemas are appropriate:

Ensure relationships are logical.

Avoid:

* Duplicate entities
* Contradictory properties
* Multiple primary organizations
* Duplicate products
* Duplicate website schemas

Maintain a coherent graph structure.

---

## Structured Data Validation

After implementation:

Verify:

* JSON is valid.
* JSON-LD is syntactically correct.
* Required properties exist where applicable.
* URLs resolve correctly.
* Referenced images exist.
* Referenced pages exist.
* Structured data matches visible content.

Do not leave invalid structured data in production.

---

## Search Engine Consistency

Ensure structured data aligns with:

* Metadata
* Open Graph
* Twitter/X Cards
* Canonical URLs
* Page titles
* Meta descriptions
* Visible page content

Search engines should receive a consistent representation of the website.

---

## Accessibility Coordination

Structured data should complement—not replace—accessible HTML.

Do not hide information solely within structured data.

Visible content should remain authoritative.

---

## Existing Schema Protection

Before modifying structured data:

Inspect existing implementation.

Preserve:

* Valid entities
* Existing identifiers
* Existing relationships
* Existing URLs

Improve only where appropriate.

Avoid unnecessary replacement.

---

## Hallucination Prevention

Never invent:

* Businesses
* Products
* Services
* Authors
* Employees
* Reviews
* Ratings
* Awards
* Certifications
* Events
* Locations
* Contact information

Every structured data property must correspond to verified project information.

---

## Structured Data Audit

After implementation, verify:

* JSON-LD is valid.
* Appropriate schemas are used.
* No duplicate entities exist.
* Properties match visible content.
* URLs function correctly.
* Images resolve correctly.
* Required fields are populated.
* Metadata remains consistent.
* No unsupported claims exist.

---

## Completion Report

Summarize:

1. Schemas added.
2. Existing schemas updated.
3. Validation performed.
4. Issues corrected.
5. Outstanding TODO items.
6. Recommendations for future improvements.

If structured data documentation is created, store it in:

```text
/PRODUCTION_STANDARDS/
```

using a descriptive filename such as:

```text
Structured_Data_Audit.md
```

unless another established project location is more appropriate.

---

## Final Rule

Structured data should describe the website—not enhance it with fictional information.

Never create Schema.org markup merely to increase search visibility.

Instead:

1. Inspect the project.
2. Identify applicable schema types.
3. Generate valid JSON-LD.
4. Verify every property.
5. Maintain consistency across all metadata.
6. Preserve existing valid implementation.

The best structured data is accurate, maintainable, standards-compliant, and faithfully represents the website's actual content and functionality.


## 10. Accessibility

## 10. Accessibility

### Purpose

Accessibility is a core quality requirement of every production website.

It is not an optional enhancement or a final review step.

Accessibility should be considered throughout planning, implementation, testing, and maintenance.

Every interface should be designed to be usable by the widest practical range of visitors regardless of ability, device, or method of interaction.

Accessibility improvements should enhance usability for all visitors while maintaining the project's intended design and functionality.

---

## General Accessibility Principles

Every implementation should prioritize:

* Semantic HTML
* Logical document structure
* Predictable interaction
* Keyboard accessibility
* Screen reader compatibility
* Readability
* Responsive usability
* Clear navigation
* Consistent behavior
* Reduced cognitive load

Accessibility improvements should integrate naturally into the project.

Avoid accessibility implementations that unnecessarily complicate the codebase.

---

## Existing Accessibility Review

Before implementing accessibility improvements:

Inspect the existing project.

Evaluate:

* Semantic structure
* Interactive components
* Navigation
* Forms
* Images
* Typography
* Color usage
* Responsive behavior
* Existing ARIA
* Existing accessibility features

Preserve correct implementations.

Improve deficiencies incrementally.

Avoid replacing working accessible implementations unnecessarily.

---

## Semantic HTML

Prefer semantic HTML whenever possible.

Examples include:

* header
* nav
* main
* section
* article
* aside
* footer
* button
* form
* label
* fieldset
* legend

Avoid replacing semantic elements with generic containers unless technically necessary.

Semantic HTML should provide the foundation for accessibility.

---

## Heading Hierarchy

Every page should follow a logical heading structure.

Verify:

* One primary H1 where appropriate.
* Sequential heading levels.
* Descriptive headings.
* Headings represent content hierarchy rather than visual styling.

Avoid:

* Missing H1 elements without reason.
* Multiple unrelated H1 elements.
* Skipped heading levels used only for appearance.

---

## Keyboard Navigation

Every interactive element should be operable using only a keyboard.

Verify:

* Tab navigation
* Shift+Tab navigation
* Enter activation
* Space activation where appropriate
* Escape behavior
* Focus order
* Focus restoration

Users should never become trapped within interface components.

---

## Focus Indicators

Visible keyboard focus should always remain apparent.

Ensure:

* Focus is clearly visible.
* Focus is not removed.
* Focus styling matches the design system.
* Focus order follows the visual layout.

Never remove focus outlines without providing an accessible replacement.

---

## Form Accessibility

Review every form.

Verify:

* Associated labels
* Required field indicators
* Field descriptions
* Accessible validation
* Accessible error messages
* Accessible success messages
* Logical grouping
* Fieldset and legend usage where appropriate
* Keyboard usability

Forms should remain understandable without relying solely on visual cues.

---

## Image Alt Text

Review all images.

Meaningful images should include descriptive alternative text.

Decorative images should be handled appropriately.

Avoid:

* Generic descriptions
* Repetition
* Keyword stuffing
* File names as alt text

Alt text should describe purpose rather than appearance.

---

## Color Contrast

Review color usage.

Ensure:

* Text remains readable.
* Interactive controls remain distinguishable.
* Focus indicators remain visible.
* Links remain identifiable.
* Error messages remain understandable.

Preserve branding whenever possible while improving readability.

---

## Screen Reader Support

Review pages using semantic structure.

Verify:

* Logical reading order
* Appropriate landmarks
* Accessible names
* Accessible descriptions
* Form announcements
* Status announcements
* Navigation structure

Do not rely on ARIA where semantic HTML already provides equivalent functionality.

---

## Skip Navigation

Where appropriate, provide a "Skip to Main Content" mechanism.

Verify:

* Keyboard accessibility
* Visible focus
* Correct destination
* Proper placement

Skip navigation should improve efficiency for keyboard users.

---

## ARIA Usage

Use ARIA only when necessary.

Follow these principles:

1. Native HTML first.
2. ARIA supplements semantics.
3. ARIA should not replace proper HTML.

Avoid:

* Redundant ARIA
* Incorrect roles
* Invalid attributes
* Conflicting semantics

Incorrect ARIA can reduce accessibility.

---

## Responsive Accessibility

Accessibility must remain consistent across:

* Desktop
* Tablet
* Mobile

Verify:

* Touch targets
* Responsive layouts
* Zoom behavior
* Orientation changes
* Dynamic content
* Responsive navigation

Accessibility should never degrade on smaller screens.

---

## Motion Preferences

If animations or transitions exist:

Respect user motion preferences where practical.

Examples include:

* Reduced animation
* Reduced parallax
* Reduced automatic movement

Avoid unnecessary motion that may interfere with usability.

---

## Interactive Components

Review all interactive elements.

Examples include:

* Navigation
* Menus
* Modals
* Dialogs
* Accordions
* Tabs
* Carousels
* Drawers
* Tooltips
* Dropdowns

Verify:

* Keyboard operation
* Focus management
* Screen reader compatibility
* Predictable interaction

Avoid inaccessible custom controls.

---

## Tables

If data tables exist:

Ensure:

* Proper headers
* Scope attributes where appropriate
* Logical reading order
* Accessible relationships

Do not use tables solely for layout.

---

## Links

Review all links.

Ensure:

* Descriptive link text
* No ambiguous "Click Here" links where context is insufficient
* Keyboard accessibility
* Visible focus
* Functional destinations

Links should describe their destination or purpose.

---

## Buttons

Review all buttons.

Ensure:

* Accessible names
* Keyboard operation
* Visible focus
* Predictable behavior

Avoid using non-button elements as buttons when native buttons are appropriate.

---

## Media

If audio or video exists:

Determine whether:

* Captions
* Transcripts
* Media controls
* Accessible playback

are appropriate.

Do not claim captions exist unless implemented.

---

## Error Prevention

Where appropriate:

Help users avoid mistakes.

Examples include:

* Clear instructions
* Confirmation before destructive actions
* Helpful validation
* Predictable workflows

---

## Existing Accessibility Protection

Before modifying accessibility implementation:

Inspect the current solution.

Preserve:

* Working semantics
* Existing keyboard support
* Existing accessibility improvements
* Existing testing

Avoid replacing working accessible implementations.

Improve incrementally.

---

## Accessibility Validation

After implementation verify:

* Semantic HTML remains correct.
* Heading hierarchy is logical.
* Keyboard navigation functions correctly.
* Focus indicators remain visible.
* Forms remain accessible.
* Images include appropriate alt text.
* Screen readers can navigate effectively.
* Responsive accessibility remains intact.
* Interactive components remain usable.
* ARIA usage is appropriate.
* No accessibility regressions were introduced.

When project tooling or the development workflow supports automated accessibility testing or linting, run those checks and resolve issues where appropriate.

---

## Accessibility Audit

When requested or when significant accessibility work is performed:

Document:

* Issues identified
* Improvements made
* Remaining limitations
* Recommended future improvements

Store accessibility documentation inside:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Accessibility_Implementation_Audit.md
```

unless another established project location is more appropriate.

---

## Hallucination Prevention

Never claim:

* WCAG certification
* ADA compliance
* Section 508 compliance
* Independent accessibility testing
* Third-party accessibility certification

unless verified.

Do not state that the website is "fully accessible."

Instead describe implemented accessibility features accurately.

---

## Completion Report

Summarize:

1. Accessibility improvements made.
2. Components reviewed.
3. Accessibility issues corrected.
4. Remaining limitations.
5. Outstanding TODO items.
6. Recommended future improvements.

---

## Final Rule

Accessibility should be implemented throughout the website—not added after development is complete.

Every page, component, interaction, and workflow should be evaluated for accessibility.

Favor semantic HTML over complex workarounds.

Favor predictable interaction over clever implementation.

Favor clarity over visual novelty.

Accessibility improvements should make the website easier to use for everyone while remaining consistent with the project's design, architecture, and long-term maintainability.


## 11. Security

### Part 1 — Security Governance & Discovery
### Part 1 — Security Governance & Discovery

### Purpose

Security is a foundational engineering requirement of every production website.

Security must be considered throughout planning, architecture, implementation, deployment, maintenance, documentation, and future development.

Security is never a final step.

Every modification made to the project should maintain or improve the overall security posture.

Security decisions should prioritize:

* Confidentiality
* Integrity
* Availability
* Privacy
* Reliability
* Maintainability
* Least privilege
* Defense in depth

No implementation should knowingly reduce project security.

---

## Security First Philosophy

Treat every website as if it will eventually become a target.

Do not assume:

* "Nobody will attack this site."
* "This is only a small business."
* "Static websites don't need security."

All production websites should follow secure engineering practices.

Every visitor input should be considered untrusted.

Every external service should be considered potentially compromised.

Every dependency should be considered potentially vulnerable until verified.

---

## Project Security Discovery

Before implementing any changes, perform a security review of the existing project.

Inspect:

* repository structure
* framework
* build system
* deployment method
* hosting
* dependencies
* configuration
* environment variables
* forms
* APIs
* authentication
* authorization
* routing
* middleware
* cookies
* browser storage
* local storage
* session storage
* third-party scripts
* analytics
* payment integrations
* file uploads
* serverless functions
* backend services
* exposed endpoints
* secrets
* Git history when appropriate

Never assume security already exists.

Inspect first.

---

## Threat Modeling

Before implementing significant functionality, identify possible attack surfaces.

Examples include:

* Contact forms
* Login systems
* Registration
* Password reset
* File uploads
* Search
* API endpoints
* User-generated content
* Embedded content
* Payment systems
* Third-party integrations
* Environment variables
* Browser storage
* Client-side routing
* Admin interfaces
* CMS functionality

For every feature ask:

* What can an attacker control?
* What data can be accessed?
* What can be manipulated?
* What could fail?
* What assumptions exist?
* What trust boundaries exist?

Never implement features without considering potential abuse.

---

## Principle of Least Privilege

Every component should receive only the permissions necessary to perform its task.

Never provide broader permissions simply for convenience.

Examples include:

* API permissions
* Database permissions
* Environment variables
* Third-party integrations
* User roles
* File access
* Administrative access

Limit exposure whenever practical.

---

## Defense in Depth

Do not rely on a single protection mechanism.

Security should exist at multiple layers.

Examples include:

* validation
* sanitization
* authentication
* authorization
* CSP
* HTTPS
* secure headers
* secure cookies
* server-side validation
* logging
* monitoring
* backups

If one layer fails, others should continue protecting the application.

---

## Trust Boundaries

Identify trust boundaries throughout the project.

Examples:

Visitor

↓

Browser

↓

Client Application

↓

API

↓

Backend

↓

Database

↓

Third-party Services

↓

Hosting

Never trust information crossing a boundary without validation.

---

## Secure Defaults

Every new feature should default to the safest reasonable behavior.

Prefer:

deny by default

rather than

allow by default

Do not expose optional functionality unintentionally.

---

## Existing Security Protection

Before changing existing security features:

Understand:

* why they exist
* how they work
* what depends on them

Do not remove:

* validation
* authentication
* authorization
* rate limiting
* CSP
* headers
* logging

unless explicitly justified.

---

## Security Architecture

Inspect the overall architecture.

Determine:

* client-side only
* backend
* serverless
* hybrid
* API-driven
* static hosting

Security recommendations should match the architecture.

Do not recommend backend protections for purely static sites unless future implementation requires them.

---

## Third-Party Risk Assessment

Every third-party dependency introduces risk.

Review:

* package maintenance
* update frequency
* repository health
* known vulnerabilities
* necessity
* permissions

Avoid unnecessary third-party packages.

Prefer:

native browser features

or

existing project dependencies

whenever practical.

---

## Supply Chain Awareness

Treat every dependency as part of the project's attack surface.

Never install packages merely because they solve a small problem.

Evaluate:

* maintenance
* popularity
* security history
* licensing
* necessity

Minimize dependency count.

---

## Sensitive Data Discovery

Determine whether the project handles:

* names
* email addresses
* phone numbers
* addresses
* payment information
* authentication
* uploaded files
* cookies
* analytics
* medical information
* financial information

Security requirements increase as sensitivity increases.

Never assume sensitive data is absent.

---

## Secret Discovery

Search for exposed secrets.

Examples:

API keys

tokens

SMTP credentials

database credentials

private keys

JWT secrets

OAuth secrets

service credentials

Never commit secrets.

Never expose secrets to the browser.

Never place secrets inside client-side JavaScript.

---

## Security Logging Awareness

Determine whether security-related logging exists.

Examples:

failed login

failed API requests

authentication failures

permission violations

Do not log sensitive information.

Never log:

passwords

tokens

secret keys

payment information

session identifiers

---

## Error Disclosure

Review how errors are presented.

Production applications should never expose:

stack traces

framework internals

database errors

environment variables

filesystem paths

internal endpoints

Provide meaningful user-facing errors while protecting implementation details.

---

## Compliance Awareness

Evaluate whether the project may be subject to additional regulatory requirements.

Examples may include:

* GDPR
* CCPA/CPRA
* HIPAA
* COPPA
* PCI DSS
* FERPA
* industry-specific contractual requirements

Do not claim compliance.

Instead:

identify potential applicability

flag for review

implement secure engineering practices

---

## Security Documentation

When significant security work is performed:

Document:

* identified risks
* mitigations
* remaining concerns
* required follow-up
* implementation decisions

Store documentation inside:

```text
/PRODUCTION_STANDARDS/
```

Examples:

```text
Security_Assessment.md
Threat_Model.md
Risk_Assessment.md
Security_Architecture.md
```

Only create documentation that provides ongoing value.

---

## Security Hallucination Prevention

Never claim:

* penetration testing
* security certification
* compliance certification
* vulnerability scanning
* third-party audits
* SOC compliance
* PCI compliance
* HIPAA compliance

unless independently verified.

Never state:

"This website is secure."

Instead describe:

implemented protections

remaining risks

known limitations

recommended improvements

---

## Security Discovery Verification

Before implementing security improvements verify that you understand:

* application architecture
* deployment
* authentication
* authorization
* forms
* APIs
* secrets
* dependencies
* storage
* third-party services
* browser storage
* attack surface
* trust boundaries

Security decisions should be based upon verified project information rather than assumptions.

---

## Final Rule

Every implementation decision should improve the security posture of the project.

Security is not measured by the number of protections added.

Security is measured by:

* reduced attack surface
* reduced risk
* accurate implementation
* maintainability
* defense in depth
* secure defaults
* least privilege
* verified behavior

When uncertainty exists:

Investigate.

Never assume.

Never fabricate.

Never weaken security for convenience.


### Part 2 — Secure Implementation Standards

### Part 2 — Secure Implementation Standards

### Purpose

Every line of code introduced into the project has the potential to increase or reduce the application's security posture.

Security should be implemented throughout the application rather than added afterward.

Every feature should be designed assuming that malicious input, unexpected behavior, misuse, and deliberate attacks are possible.

The objective is to reduce attack surface while preserving usability and maintainability.

---

## Secure Development Principles

All implementations should follow these principles:

* Least Privilege
* Defense in Depth
* Secure by Default
* Fail Securely
* Validate Everything
* Never Trust User Input
* Never Trust Client-Side Validation
* Minimize Attack Surface
* Prefer Native Platform Security
* Keep Security Simple
* Preserve Existing Security
* Avoid Security Through Obscurity

Security should be implemented intentionally rather than reactively.

---

## HTTPS

All production websites should be served exclusively over HTTPS.

Never intentionally introduce mixed content.

Review:

* Images
* Fonts
* JavaScript
* CSS
* Videos
* API requests
* Third-party resources

Ensure all assets use secure transport whenever supported.

Do not hardcode insecure HTTP resources.

---

## Security Headers

Review the project's security headers.

When supported by the hosting environment, recommend or implement appropriate headers such as:

* Content-Security-Policy
* X-Content-Type-Options
* X-Frame-Options
* Referrer-Policy
* Permissions-Policy
* Strict-Transport-Security (HTTPS deployments)
* Cross-Origin-Resource-Policy
* Cross-Origin-Embedder-Policy (when appropriate)
* Cross-Origin-Opener-Policy (when appropriate)

Do not introduce conflicting headers.

Security headers should reflect the project's architecture and functionality.

---

## Content Security Policy (CSP)

When CSP is appropriate:

Prefer restrictive policies.

Only allow required resources.

Avoid:

* Wildcard sources
* Unnecessary inline scripts
* Unsafe inline styles
* Unsafe eval
* Broad permissions

Review:

* Third-party scripts
* Fonts
* Images
* APIs
* Embedded services

Do not weaken CSP solely for convenience.

---

## Input Validation

Treat every external input as untrusted.

Examples include:

* Forms
* Query parameters
* URL parameters
* Cookies
* Local storage
* Session storage
* File uploads
* API requests
* Search fields
* Chat messages
* User profiles

Validate:

* Type
* Length
* Format
* Allowed characters
* Required fields
* Expected ranges
* File types
* File sizes

Reject invalid input.

Never attempt to "guess" user intent.

---

## Server-Side Validation

If backend functionality exists:

Server-side validation is authoritative.

Client-side validation improves usability.

Client-side validation does not provide security.

Never rely solely upon browser validation.

---

## Output Encoding

Encode data before rendering whenever output may contain untrusted content.

Prevent:

* HTML injection
* JavaScript injection
* CSS injection
* Attribute injection

Follow framework best practices.

Avoid bypassing built-in escaping mechanisms.

---

## Cross-Site Scripting (XSS)

Prevent XSS by default.

Never insert untrusted content directly into the DOM.

Avoid unsafe patterns.

Sanitize untrusted HTML only when HTML rendering is explicitly required.

Review:

* Markdown rendering
* Rich text
* User-generated content
* Dynamic templates
* Query parameters
* URL fragments

Do not disable framework protections.

---

## Cross-Site Request Forgery (CSRF)

Where server-side state-changing operations exist:

Evaluate whether CSRF protections are appropriate.

Examples:

* Form submissions
* Account updates
* Password changes
* Purchases
* Administrative actions

Do not disable existing CSRF protections.

---

## Injection Prevention

Prevent all forms of injection.

Examples include:

* SQL Injection
* NoSQL Injection
* Command Injection
* Template Injection
* XPath Injection
* LDAP Injection
* Header Injection

Never concatenate untrusted data into executable commands or queries.

Use framework-supported parameterization and escaping techniques.

---

## Server-Side Request Forgery (SSRF)

If backend services make outbound requests:

Validate:

* Destination
* Protocol
* Allowed hosts

Avoid allowing arbitrary user-controlled destinations.

Restrict outbound requests whenever practical.

---

## Clickjacking Prevention

Review framing behavior.

Where appropriate:

Prevent unauthorized framing through security headers.

Do not weaken protections without clear functional requirements.

---

## Secure Cookies

When cookies are used:

Review:

* Secure attribute
* HttpOnly
* SameSite
* Expiration
* Scope

Use restrictive settings whenever practical.

Do not expose sensitive information through client-accessible cookies.

---

## Browser Storage

Review browser storage usage.

Examples:

* Local Storage
* Session Storage
* IndexedDB

Avoid storing:

* Passwords
* Authentication secrets
* API secrets
* Payment information
* Sensitive personal information

Use browser storage only when justified.

---

## Authentication

If authentication exists:

Review:

* Login flow
* Logout flow
* Session expiration
* Password handling
* MFA support (when appropriate)
* Password reset
* Email verification
* Account recovery

Never weaken authentication for convenience.

---

## Authorization

Authentication determines identity.

Authorization determines permissions.

Review access controls throughout the application.

Verify:

* Administrative pages
* APIs
* Protected routes
* User resources

Never assume authenticated users should have unrestricted access.

---

## Session Security

Review session management.

Ensure sessions are:

* Appropriately scoped
* Properly expired
* Invalidated after logout
* Protected during authentication

Avoid exposing session identifiers.

---

## File Upload Security

When uploads exist:

Validate:

* File type
* MIME type
* Extension
* Size
* Allowed formats

Reject:

* Executables
* Scripts
* Potentially dangerous formats

Do not trust browser-provided MIME types alone.

Never execute uploaded files.

---

## Contact Form Security

Review every contact form.

Ensure:

* Validation
* Spam protection
* Rate limiting (when appropriate)
* Secure submission
* Sanitized processing
* Environment variable usage

Never expose backend implementation details.

---

## API Security

If APIs exist:

Review:

* Authentication
* Authorization
* Input validation
* Error handling
* Rate limiting
* Response consistency
* Sensitive information exposure

Do not expose internal implementation details through API responses.

---

## Cross-Origin Resource Sharing (CORS)

Review CORS configuration.

Allow only required origins.

Avoid:

* Wildcard origins
* Overly broad permissions
* Unrestricted credentials

CORS should follow the Principle of Least Privilege.

---

## Rate Limiting

Evaluate whether rate limiting is appropriate.

Examples include:

* Login
* Registration
* Contact forms
* Password reset
* APIs
* Search

Protect services from abuse while minimizing impact on legitimate users.

---

## Spam Protection

Determine the project's risk level.

Prefer layered protections such as:

* Honeypots
* Behavioral analysis
* Rate limiting
* CAPTCHA (only when justified)
* Server-side validation

Avoid unnecessary user friction.

---

## Secret Management

Secrets must never appear in:

* Source code
* Client-side JavaScript
* HTML
* CSS
* Public repositories

Use environment variables or secure secret management mechanisms.

Never generate placeholder secrets.

Never expose example production credentials.

---

## Environment Variables

Review all configuration.

Ensure sensitive values are externalized.

Examples:

* API keys
* SMTP credentials
* Database credentials
* OAuth secrets
* Authentication secrets
* Encryption keys

Do not expose environment variables to the client unless intentionally public.

---

## Error Handling

Production errors should:

* Inform users appropriately.
* Avoid exposing internals.
* Preserve security.
* Support troubleshooting.

Never expose:

* Stack traces
* Database queries
* Environment variables
* Internal file paths
* Secret values

---

## Dependency Security

Review project dependencies.

When appropriate:

* Remove unnecessary packages.
* Prefer maintained libraries.
* Avoid abandoned projects.
* Reduce dependency count.

Do not introduce new dependencies without technical justification.

---

## Third-Party Scripts

Review all external scripts.

Determine:

* Necessity
* Trustworthiness
* Permissions
* Privacy implications

Remove unnecessary third-party scripts whenever practical.

---

## Existing Security Protection

Before changing existing security implementation:

Understand:

* Current protections
* Existing assumptions
* Downstream dependencies

Do not weaken existing safeguards without a compelling technical reason.

---

## Secure Implementation Verification

After implementation verify:

* HTTPS is maintained.
* Validation functions correctly.
* Output is safely rendered.
* XSS protections remain intact.
* Injection risks are mitigated.
* Authentication remains secure.
* Authorization remains correct.
* Sessions behave securely.
* Browser storage is appropriate.
* File uploads remain protected.
* APIs expose only intended information.
* Secrets remain protected.
* Environment variables are used correctly.
* Security headers remain appropriate.
* CSP remains functional.
* No unnecessary attack surface was introduced.

---

## Final Rule

Every implementation should reduce risk rather than merely satisfy a checklist.

Security should be built into the application's architecture, code, configuration, and operational behavior.

When multiple implementations are possible, prefer the one that:

* reduces attack surface,
* minimizes complexity,
* preserves maintainability,
* follows established security best practices,
* and integrates naturally with the existing project.

Never weaken security to simplify implementation.

When uncertainty exists:

Investigate.

Verify.

Then implement.


### Part 3 — Infrastructure, Authentication & Compliance

### Part 3 — Infrastructure, Authentication & Compliance

### Purpose

Production security extends beyond application code.

Infrastructure, deployment configuration, authentication architecture, operational practices, and regulatory responsibilities all contribute to the overall security posture of the website.

Security should be considered across the complete lifecycle of the application.

The objective is to minimize operational risk while maintaining maintainability, scalability, and long-term reliability.

---

## Deployment Architecture

Before making infrastructure recommendations:

Determine the project's deployment architecture.

Examples include:

* Static website
* Jamstack
* Serverless
* Edge Functions
* Backend API
* Hybrid Application
* Traditional Server
* Containerized Deployment

Security recommendations must match the actual deployment model.

Do not recommend infrastructure that does not exist.

---

## Hosting Security

Review the hosting environment.

Examples may include:

* Static hosting
* Cloud hosting
* VPS
* Dedicated infrastructure
* Managed platforms
* Container platforms

Evaluate:

* HTTPS support
* TLS configuration
* Security headers
* Deployment permissions
* Build process
* Secret handling
* Access controls

Do not assume hosting capabilities.

Verify implementation.

---

## Deployment Pipeline Security

Review the deployment workflow.

Inspect:

* Source control
* Build automation
* Continuous Integration
* Continuous Deployment
* Deployment triggers
* Branch protection
* Build artifacts

Protect deployment pipelines from unauthorized modification.

Do not expose deployment credentials.

---

## Source Control Security

Review repository practices.

Protect:

* Secrets
* Environment variables
* Configuration
* Credentials
* Deployment tokens

Repositories should never expose confidential information.

Review:

* ignored files
* committed configuration
* historical secrets when appropriate

---

## Branch Protection

Where source control supports it:

Recommend:

* protected branches
* required reviews
* status checks
* signed commits when appropriate
* restricted administrative access

Avoid direct production modifications whenever practical.

---

## Build Security

Review build configuration.

Ensure builds:

* do not expose secrets,
* avoid debug artifacts,
* exclude development-only assets,
* minimize unnecessary output,
* produce reproducible builds when practical.

Remove development-only functionality from production builds.

---

## Authentication Architecture

If authentication exists:

Determine:

* authentication provider
* session model
* token model
* account lifecycle
* password policies
* account recovery

Authentication should follow the Principle of Least Privilege.

Never weaken authentication for convenience.

---

## Password Handling

If passwords are processed:

Never:

* store plaintext passwords,
* expose passwords,
* log passwords,
* transmit passwords insecurely.

Password handling should rely upon established authentication systems and secure password hashing mechanisms.

Do not implement custom password cryptography.

---

## Multi-Factor Authentication

Determine whether MFA is appropriate.

Examples include:

* Administrative systems
* Client dashboards
* Sensitive accounts

Recommend MFA where security risk justifies additional protection.

Do not require MFA where no authentication exists.

---

## Authorization Architecture

Review authorization throughout the project.

Examples:

* Visitor
* Authenticated user
* Administrator
* Editor
* Staff
* Client

Ensure permissions are clearly separated.

Never rely solely upon client-side authorization.

---

## Role-Based Access Control

If roles exist:

Review:

* permissions
* inheritance
* administrative access
* protected resources

Roles should grant only required permissions.

Avoid privilege escalation.

---

## Administrative Interfaces

Review administrative functionality.

Ensure:

* restricted access
* authentication
* authorization
* audit capability
* secure routing

Administrative interfaces should never be publicly exposed without appropriate protection.

---

## API Authentication

When APIs exist:

Review:

* authentication
* authorization
* token management
* expiration
* revocation

Avoid long-lived credentials unless required.

Never expose secret tokens to public clients.

---

## Logging

Implement meaningful operational logging where appropriate.

Log:

* authentication events
* authorization failures
* application errors
* security events
* unexpected failures

Never log:

* passwords
* tokens
* secrets
* payment information
* session identifiers
* sensitive personal information

Logs should support investigation without creating additional security risks.

---

## Monitoring

Determine whether monitoring exists.

Examples:

* uptime
* availability
* application health
* error monitoring
* performance monitoring

Monitoring should improve operational awareness without collecting unnecessary personal information.

---

## Incident Response

Where appropriate:

Document procedures for:

* identifying incidents
* investigating issues
* restoring service
* documenting findings
* implementing corrective actions

Do not fabricate organizational procedures.

Recommend documentation when absent.

---

## Backup Strategy

If persistent data exists:

Determine:

* backup process
* recovery capability
* restoration procedures

Backups should be:

* protected
* tested
* appropriately retained

Do not assume backups exist.

---

## Disaster Recovery

Evaluate recovery planning.

Consider:

* hosting failure
* deployment rollback
* configuration restoration
* credential rotation
* dependency failures

Recovery planning should minimize downtime.

---

## Dependency Management

Review dependency lifecycle.

Ensure:

* unnecessary packages removed
* outdated packages reviewed
* known vulnerabilities addressed
* abandoned libraries replaced when practical

Avoid dependency sprawl.

---

## Supply Chain Security

Review software supply chain risks.

Consider:

* package integrity
* trusted maintainers
* repository reputation
* update frequency
* licensing

Minimize reliance upon unnecessary third-party code.

---

## Third-Party Services

Review every external service.

Determine:

* purpose
* permissions
* data access
* privacy implications
* security implications

Remove unnecessary integrations.

Avoid redundant services.

---

## Privacy Coordination

Ensure security implementation remains consistent with:

* Privacy Policy
* Cookie Policy
* Terms of Service
* Accessibility Statement

Security documentation and legal documentation should never contradict one another.

---

## Compliance Considerations

Evaluate whether additional compliance considerations may apply.

Examples include:

* GDPR
* CCPA / CPRA
* PCI DSS
* HIPAA
* COPPA
* FERPA
* SOC requirements
* Industry contractual obligations

Do not claim compliance.

Instead:

* identify potential applicability,
* recommend professional review where appropriate,
* implement secure engineering practices.

---

## Data Minimization

Collect only information required for legitimate project functionality.

Avoid collecting unnecessary personal information.

Reduce retained data whenever practical.

Less collected data generally reduces security and privacy risk.

---

## Data Retention

If persistent information is stored:

Determine whether retention practices exist.

Do not invent retention periods.

If unknown:

Insert an appropriate TODO.

---

## Secure Defaults

Production deployments should default to secure behavior.

Avoid enabling:

* debug mode
* verbose errors
* development tools
* unrestricted APIs
* unnecessary services

Production should expose only required functionality.

---

## Existing Infrastructure Protection

Before changing infrastructure:

Understand:

* deployment workflow
* operational dependencies
* existing monitoring
* authentication architecture
* production environment

Do not introduce unnecessary operational disruption.

---

## Infrastructure Verification

After implementation verify:

* Deployment remains functional.
* HTTPS is maintained.
* Secrets remain protected.
* Authentication remains secure.
* Authorization remains correct.
* Monitoring remains operational.
* Logging avoids sensitive information.
* Dependency risks were reviewed.
* Third-party integrations remain appropriate.
* Privacy documentation remains accurate.
* No production-only regressions were introduced.

---

## Compliance Hallucination Prevention

Never claim:

* GDPR compliance
* HIPAA compliance
* PCI certification
* SOC certification
* ISO certification
* Penetration testing
* Third-party security audits

unless independently verified.

Instead describe:

* implemented protections,
* observed practices,
* identified risks,
* recommended review.

---

## Infrastructure Documentation

When significant operational changes occur:

Document:

* architectural decisions
* deployment changes
* authentication changes
* dependency changes
* security considerations
* operational recommendations

Store documentation inside:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Infrastructure_Security_Report.md
Deployment_Security_Audit.md
Operational_Security_Review.md
```

Only create documentation that provides long-term project value.

---

## Final Rule

Security extends beyond writing secure code.

A secure production website requires:

* secure architecture,
* secure deployment,
* secure authentication,
* secure operations,
* secure maintenance,
* secure documentation,
* responsible data handling,
* continuous review.

Every infrastructure decision should reduce operational risk while preserving maintainability, scalability, and long-term reliability.

Never implement operational shortcuts that weaken production security.

When uncertainty exists:

Inspect.

Verify.

Document.

Then implement.


### Part 4 — Security Audit, Verification & Production Readiness

### Part 4 — Security Audit, Verification & Production Readiness

### Purpose

Before considering any security-related work complete, perform a comprehensive security review of the project.

Completion should never be based solely on successful compilation, deployment, or visual inspection.

A project is considered production-ready only after verifying that implemented security measures align with the project's architecture, functionality, and documented behavior.

Security verification is a continuous process rather than a single event.

---

## Security Audit Philosophy

Every completed implementation should undergo a structured security review.

The objective is to identify:

* Remaining vulnerabilities
* Misconfigurations
* Inconsistent implementations
* Documentation conflicts
* Privacy inconsistencies
* Deployment risks
* Authentication weaknesses
* Authorization issues
* Dependency risks
* Operational concerns

Security reviews should prioritize reducing real-world risk over satisfying checklists.

---

## Architecture Review

Review the complete application architecture.

Verify:

* Trust boundaries
* Data flow
* Authentication flow
* Authorization flow
* Client/server responsibilities
* Third-party integrations
* Environment separation
* Deployment architecture

Ensure security recommendations remain appropriate for the actual architecture.

---

## Attack Surface Review

Identify every exposed attack surface.

Examples include:

* Contact forms
* APIs
* Authentication
* Registration
* Password reset
* File uploads
* Search
* Embedded content
* Administrative interfaces
* Client-side storage
* Cookies
* Third-party scripts
* Public assets

Evaluate whether each attack surface has appropriate protections.

---

## Input Validation Review

Verify every external input.

Review:

* Form fields
* URL parameters
* Query parameters
* Uploaded files
* Cookies
* Headers
* API payloads
* Search input

Ensure validation exists wherever external input is accepted.

---

## Output Security Review

Verify rendered content.

Ensure:

* Escaping remains intact.
* Framework protections are preserved.
* Dynamic rendering does not introduce injection risks.
* User-generated content is handled safely.

---

## Authentication Review

If authentication exists:

Review:

* Login
* Logout
* Password reset
* Session expiration
* Session invalidation
* Authentication persistence
* Account recovery
* Administrative access

Verify authentication remains secure after modifications.

---

## Authorization Review

Review authorization across the project.

Verify:

* Protected routes
* Protected APIs
* Administrative functionality
* User isolation
* Resource ownership
* Role separation

Attempt to identify privilege escalation opportunities.

---

## Secret Review

Inspect the repository.

Ensure:

No secrets exist inside:

* source code
* HTML
* JavaScript
* CSS
* JSON
* Markdown
* configuration
* documentation
* commit history (when appropriate)

Verify secrets remain externalized.

---

## Environment Review

Review configuration.

Verify:

* Environment variables remain external.
* Public variables contain only intentionally public values.
* Private configuration remains private.

Never expose server-side configuration to client-side code.

---

## Browser Storage Review

Review:

* Local Storage
* Session Storage
* Cookies
* IndexedDB

Ensure sensitive information is not unnecessarily stored within browser-accessible storage.

---

## Dependency Review

Inspect project dependencies.

Review:

* Outdated packages
* Vulnerable packages
* Duplicate packages
* Abandoned libraries
* Unnecessary packages

Prefer reducing dependency count whenever practical.

---

## Third-Party Review

Review every external dependency.

Examples include:

* Analytics
* Chat systems
* Payment providers
* Scheduling services
* Maps
* Video embeds
* Marketing tools
* Social media widgets

Determine whether each service remains necessary.

Minimize unnecessary exposure.

---

## Content Security Review

Review:

* CSP
* Security headers
* CORS
* Mixed content
* Resource loading

Verify configuration remains appropriate for the project.

---

## Contact Form Review

Verify:

* Validation
* Spam protection
* Secure submission
* Error handling
* Privacy consistency
* Environment variable usage

Forms should not expose implementation details.

---

## File Upload Review

If uploads exist:

Verify:

* File validation
* Allowed extensions
* File size restrictions
* Storage location
* Access controls

Ensure uploaded files cannot compromise application security.

---

## Privacy Consistency Review

Verify consistency between:

* Privacy Policy
* Cookie Policy
* Contact forms
* Analytics
* Browser storage
* Third-party services

Documentation should accurately reflect implementation.

---

## Legal Consistency Review

Ensure legal documentation remains internally consistent.

Review:

* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement
* Additional policies

Verify they accurately describe implemented functionality.

---

## Accessibility Security Review

Ensure security improvements do not reduce accessibility.

Examples include:

* CAPTCHA usability
* Authentication workflows
* Error messages
* Keyboard navigation

Security and accessibility should complement each other.

---

## SEO Security Review

Ensure security changes do not negatively impact:

* Metadata
* Structured data
* Indexability
* Performance
* Routing

Avoid unnecessary conflicts between SEO and security.

---

## Performance Security Review

Review whether security changes significantly affect:

* Performance
* Rendering
* Asset loading
* User experience

Balance security with reasonable performance.

---

## Logging Review

Verify logging.

Ensure logs:

* Support troubleshooting
* Protect privacy
* Avoid sensitive information
* Remain useful for investigation

---

## Monitoring Review

Review monitoring implementation.

Verify:

* Operational visibility
* Error reporting
* Service availability

Avoid excessive collection of visitor information.

---

## Deployment Review

Review production deployment.

Verify:

* HTTPS
* Security headers
* Environment variables
* Build configuration
* Production configuration
* Debug settings
* Public assets

Development configuration should never remain enabled in production.

---

## Production Hardening

Review production configuration.

Ensure:

* Debugging disabled
* Development endpoints removed
* Test functionality removed
* Temporary credentials removed
* Temporary files removed
* Placeholder data removed

Production builds should contain only production functionality.

---

## Documentation Review

Verify documentation remains accurate.

Review:

* README
* Setup instructions
* Security documentation
* Deployment documentation
* Configuration guides

Documentation should accurately reflect the implemented project.

---

## Residual Risk Assessment

After implementation identify remaining risks.

Examples:

* Known limitations
* Third-party constraints
* Future recommendations
* Operational concerns
* Client configuration requirements

Document unresolved issues.

Do not hide remaining risks.

---

## Human Review Recommendations

Recommend professional review when appropriate.

Examples include:

* Regulated industries
* Healthcare
* Financial systems
* Government
* Children's services
* High-value authentication
* Complex payment processing
* Large-scale personal information processing

Do not claim professional review has occurred.

---

## Security Hallucination Prevention

Never claim:

* Complete security
* Guaranteed protection
* Penetration testing
* External audits
* Compliance certification
* Vulnerability assessment completion

unless independently verified.

Security reviews should describe verified implementation—not assumptions.

---

## Production Readiness Checklist

Before considering the project production-ready verify:

* Architecture reviewed.
* Threat model considered.
* Attack surface reviewed.
* Validation implemented.
* Authentication reviewed.
* Authorization reviewed.
* Secrets protected.
* Environment variables secured.
* Dependencies reviewed.
* Third-party services evaluated.
* Browser storage reviewed.
* Security headers reviewed.
* CSP reviewed.
* Contact forms secured.
* File uploads secured.
* Privacy documentation verified.
* Legal documentation verified.
* Accessibility preserved.
* SEO preserved.
* Performance remains acceptable.
* Logging reviewed.
* Monitoring reviewed.
* Deployment reviewed.
* Temporary artifacts removed.
* Documentation updated.
* Remaining risks documented.

---

## Security Audit Report

When significant security work has been completed:

Create or update a security audit when it provides ongoing project value.

Store documentation inside:

```text
/PRODUCTION_STANDARDS/
```

Examples:

```text
Production_Security_Audit.md
Security_Readiness_Report.md
Security_Verification.md
```

Each report should summarize:

* Scope
* Findings
* Improvements
* Remaining risks
* TODO items
* Recommended follow-up
* Review recommendations

Avoid creating duplicate audit documents.

---

## Completion Report

Summarize:

1. Security improvements implemented.
2. Vulnerabilities mitigated.
3. Existing protections preserved.
4. Remaining limitations.
5. Outstanding TODO items.
6. Recommendations for future improvements.
7. Recommendations requiring client review.
8. Recommendations requiring professional review.

---

## Final Rule

Security is never "finished."

Every completed implementation should leave the project more secure than before.

The objective is not absolute security.

The objective is continuous risk reduction through:

* Careful engineering
* Verified implementation
* Accurate documentation
* Secure defaults
* Defense in depth
* Least privilege
* Continuous review
* Long-term maintainability

When uncertainty exists:

Investigate.

Verify.

Document.

Implement.

Re-test.

Only consider work complete after security has been deliberately reviewed, verified, and documented.


## 12. Performance

## 12. Performance

### Purpose

Performance is a fundamental quality attribute of every production website.

Performance optimization should improve the visitor experience while preserving:

* Functionality
* Accessibility
* Security
* SEO
* Maintainability
* Reliability
* Scalability

Performance improvements should be based on measurable engineering decisions rather than assumptions or premature optimization.

Every optimization should have a clear technical justification.

---

## Performance Philosophy

Optimize for:

* Fast initial load
* Responsive interaction
* Efficient rendering
* Predictable behavior
* Low resource consumption
* Long-term maintainability

Avoid optimization that:

* Reduces readability
* Weakens security
* Degrades accessibility
* Introduces unnecessary complexity
* Creates technical debt

Correctness always takes precedence over speed.

---

## Existing Performance Review

Before making performance changes:

Inspect:

* Framework
* Build system
* Bundle size
* Asset loading
* Rendering strategy
* Images
* Fonts
* JavaScript
* CSS
* Third-party scripts
* Animations
* Existing optimization techniques
* Existing caching strategy

Preserve effective optimizations.

Improve inefficient implementations incrementally.

---

## Image Optimization

Review every image.

Ensure images are:

* Appropriately sized
* Compressed
* Responsive
* Lazy loaded where appropriate
* Served in modern formats when supported
* Not larger than required

Avoid oversized assets.

Avoid unnecessary image duplication.

Do not reduce image quality below acceptable usability.

---

## Lazy Loading

Determine whether lazy loading is appropriate.

Examples include:

* Images
* Videos
* Maps
* Embedded content
* Large components

Avoid lazy loading content that is immediately required for initial rendering.

Balance perceived performance with actual performance.

---

## Font Optimization

Review font loading.

Prefer:

* Minimal font families
* Minimal font weights
* Efficient loading
* Appropriate fallbacks

Avoid excessive font downloads.

Avoid loading unused font variants.

Prevent layout shifts where practical.

---

## Code Splitting

Where supported by the project:

Evaluate code splitting opportunities.

Examples include:

* Route-level splitting
* Component-level splitting
* Dynamic imports

Split only where beneficial.

Avoid excessive fragmentation.

---

## Tree Shaking

Ensure unused code is eliminated where supported.

Review:

* Imports
* Exports
* Utility libraries
* UI libraries

Avoid importing entire libraries when only small portions are required.

---

## Compression

Review production asset delivery.

Where supported:

Use appropriate compression methods provided by the deployment environment.

Avoid manual optimizations that conflict with build tooling.

---

## Caching

Review caching strategy.

Consider:

* Static assets
* Images
* Fonts
* JavaScript
* CSS

Coordinate caching with deployment architecture.

Avoid stale content caused by improper cache configuration.

---

## Bundle Optimization

Review application bundles.

Identify:

* Duplicate libraries
* Large dependencies
* Unused code
* Oversized assets

Reduce bundle size only where meaningful.

Do not sacrifice maintainability for insignificant savings.

---

## Core Web Vitals

Evaluate the project's impact on metrics commonly associated with user experience, such as:

* Largest Contentful Paint (LCP)
* Interaction to Next Paint (INP)
* Cumulative Layout Shift (CLS)

Optimize where appropriate through improvements to loading, responsiveness, and layout stability.

Do not optimize for individual metrics at the expense of overall usability.

---

## JavaScript Performance

Review JavaScript execution.

Avoid:

* Unnecessary re-renders
* Duplicate computations
* Excessive event listeners
* Memory leaks
* Long-running synchronous operations

Prefer efficient, readable implementations.

---

## CSS Performance

Review stylesheets.

Avoid:

* Unused styles
* Duplicate rules
* Excessive specificity
* Large unused frameworks

Maintain readability while minimizing unnecessary CSS.

---

## Rendering Performance

Review rendering behavior.

Avoid:

* Excessive DOM updates
* Layout thrashing
* Forced synchronous layouts
* Unnecessary animations

Optimize rendering without changing intended behavior.

---

## Third-Party Resources

Review every external resource.

Examples:

* Analytics
* Fonts
* Videos
* Maps
* Chat widgets
* Marketing scripts

Determine:

* Necessity
* Performance impact
* Loading strategy

Remove unnecessary third-party resources whenever practical.

---

## Network Requests

Review network activity.

Avoid:

* Duplicate requests
* Unused API calls
* Blocking resources
* Unnecessary polling

Batch or defer requests where appropriate.

---

## Asset Management

Review project assets.

Optimize:

* Images
* Icons
* Fonts
* Videos
* Downloads

Remove unused assets.

Avoid duplicate files.

---

## Animation Performance

Review animations.

Prefer:

* Hardware-accelerated properties where appropriate
* Smooth interactions
* Respect for reduced-motion preferences

Avoid excessive or distracting animations.

---

## Memory Usage

Review implementations for unnecessary memory consumption.

Avoid:

* Retained event listeners
* Unreleased resources
* Large in-memory collections
* Unnecessary caching

Favor efficient resource management.

---

## Mobile Performance

Evaluate performance on:

* Desktop
* Tablet
* Mobile

Optimize for lower-powered devices and slower network conditions where practical.

---

## Existing Performance Protection

Before replacing existing optimizations:

Understand:

* Existing strategy
* Build process
* Framework optimizations
* Deployment optimizations

Do not remove effective optimizations without justification.

---

## Performance Validation

After implementation verify:

* Images remain optimized.
* Lazy loading functions correctly.
* Fonts load efficiently.
* Bundles remain appropriately sized.
* JavaScript execution remains efficient.
* CSS remains maintainable.
* Rendering remains smooth.
* Network requests are minimized.
* Third-party resources remain justified.
* Performance improvements do not reduce accessibility.
* Performance improvements do not weaken security.
* Performance improvements do not reduce SEO quality.

Where project tooling supports performance analysis or profiling, use those tools to confirm significant changes rather than relying solely on assumptions.

---

## Performance Audit

When significant performance work is performed:

Document:

* Bottlenecks identified
* Optimizations implemented
* Remaining opportunities
* Measured improvements (when available)
* Outstanding TODO items

Store documentation inside:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Performance_Audit.md
Performance_Optimization_Report.md
```

Only create documentation that provides ongoing value.

---

## Hallucination Prevention

Never claim:

* Performance benchmarks
* Lighthouse scores
* Core Web Vitals scores
* PageSpeed results
* Measured improvements

unless they have actually been measured.

Describe verified optimizations rather than estimated outcomes.

---

## Completion Report

Summarize:

1. Performance improvements implemented.
2. Existing optimizations preserved.
3. Assets optimized.
4. Rendering improvements.
5. Network optimizations.
6. Remaining opportunities.
7. Outstanding TODO items.

---

## Final Rule

Performance optimization should improve the experience of real visitors—not merely satisfy synthetic benchmarks.

Favor:

* Simplicity
* Measurable improvements
* Efficient resource usage
* Maintainable implementations
* Consistency with project architecture

Never sacrifice accessibility, security, correctness, or maintainability solely to improve performance metrics.

When uncertainty exists:

Inspect.

Measure where possible.

Optimize deliberately.

Verify results.


## 13. Mobile Responsiveness

## 13. Mobile Responsiveness

### Purpose

Every production website shall provide a consistent, usable, and visually coherent experience across modern mobile devices, tablets, laptops, desktops, large displays, and varying viewport sizes.

Responsive design is a core engineering requirement.

Responsiveness shall not be treated as an optional enhancement or a final design adjustment.

Layouts, interactions, navigation, media, forms, typography, and functionality shall adapt appropriately to different devices without sacrificing accessibility, security, usability, or performance.

---

## Responsive Design Philosophy

Design for flexibility rather than fixed layouts.

Implement responsive behavior using adaptable layouts instead of maintaining separate mobile and desktop versions whenever practical.

Every responsive decision should prioritize:

* Usability
* Readability
* Accessibility
* Performance
* Maintainability
* Consistency

Avoid device-specific implementations unless technically required.

---

## Existing Responsive Review

Before implementing changes:

Inspect:

* Existing layouts
* Existing breakpoints
* Responsive utilities
* Navigation
* Typography
* Images
* Tables
* Forms
* Interactive components
* Existing responsive framework

Determine the project's responsive strategy before making modifications.

Preserve existing responsive behavior when it functions correctly.

---

## Responsive Layout

Layouts should adapt naturally to varying viewport sizes.

Review:

* Flex layouts
* Grid layouts
* Containers
* Spacing
* Alignment
* Wrapping behavior
* Overflow handling

Avoid fixed-width layouts that prevent responsive scaling.

Prevent horizontal scrolling unless intentionally required.

---

## Responsive Images

Images should scale appropriately.

Verify:

* Responsive sizing
* Correct aspect ratios
* Appropriate resolutions
* Lazy loading where appropriate
* Object fitting when necessary

Avoid oversized images on small devices.

Avoid image distortion.

---

## Navigation

Navigation should remain usable on all devices.

Review:

* Mobile navigation
* Desktop navigation
* Navigation hierarchy
* Touch interactions
* Keyboard accessibility
* Focus behavior

Ensure navigation remains discoverable and predictable.

Avoid hiding essential navigation without providing an accessible alternative.

---

## Typography

Typography should remain readable across all viewport sizes.

Review:

* Font sizing
* Line height
* Line length
* Spacing
* Contrast
* Scaling behavior

Avoid text that becomes unreadable on smaller devices.

Avoid excessive line lengths on larger displays.

---

## Touch Targets

Interactive elements should be comfortably usable on touch devices.

Review:

* Buttons
* Links
* Form controls
* Icons
* Menus
* Navigation controls

Ensure adequate spacing between adjacent interactive elements.

Avoid small touch targets that increase accidental interaction.

---

## Orientation

Verify behavior in both portrait and landscape orientations where appropriate.

Content should adapt without:

* Layout breakage
* Hidden functionality
* Unusable controls
* Clipped content

Do not assume portrait orientation.

---

## Viewport Configuration

Verify viewport configuration.

Ensure:

* Appropriate scaling
* Responsive rendering
* Zoom support where appropriate

Avoid configurations that unnecessarily restrict user zoom.

---

## Breakpoint Strategy

Review the project's responsive breakpoints.

Maintain consistency with the existing design system.

Avoid introducing unnecessary breakpoint complexity.

Optimize for content rather than specific devices.

---

## Responsive Components

Review every reusable component.

Examples include:

* Cards
* Forms
* Tables
* Navigation
* Dialogs
* Modals
* Carousels
* Accordions
* Tabs

Ensure each component behaves predictably across supported viewport sizes.

---

## Responsive Forms

Verify:

* Field sizing
* Label positioning
* Keyboard types
* Validation messages
* Error presentation
* Button placement

Forms should remain easy to complete using touch input.

---

## Responsive Tables

Where tables exist:

Determine whether responsive alternatives are appropriate.

Avoid forcing horizontal scrolling unless necessary.

Preserve readability.

---

## Responsive Media

Review:

* Video
* Audio
* Maps
* Embedded content
* Interactive media

Ensure media scales appropriately without overflowing its container.

---

## Responsive Spacing

Review spacing throughout the interface.

Ensure:

* Consistent margins
* Appropriate padding
* Comfortable reading space
* Balanced layouts

Avoid excessive whitespace on small screens.

Avoid cramped layouts.

---

## Responsive Performance

Responsive behavior should not significantly increase resource usage.

Avoid:

* Loading duplicate layouts
* Duplicate assets
* Device-specific duplication
* Unnecessary rendering

Maintain efficient implementations.

---

## Responsive Accessibility

Verify that responsive changes preserve:

* Keyboard accessibility
* Screen reader compatibility
* Focus order
* Semantic structure
* Zoom behavior

Responsiveness should never reduce accessibility.

---

## Device Diversity

Design for a wide range of devices.

Examples include:

* Small phones
* Large phones
* Foldable devices
* Tablets
* Small laptops
* Large desktops
* High-resolution displays

Avoid optimizing for only a few common screen sizes.

---

## Input Methods

Review support for:

* Touch
* Mouse
* Keyboard
* Stylus

Interactions should remain predictable regardless of input method.

---

## Safe Areas

Where applicable:

Respect device safe areas.

Avoid placing important controls where they may become obscured by hardware or operating system interface elements.

---

## Existing Responsive Protection

Before modifying responsive behavior:

Understand:

* Existing layout strategy
* Existing utility classes
* Existing breakpoints
* Existing responsive components

Avoid replacing working responsive implementations unnecessarily.

---

## Responsive Validation

After implementation verify:

* No horizontal scrolling occurs unintentionally.
* Layouts adapt correctly.
* Navigation remains usable.
* Typography remains readable.
* Images scale correctly.
* Forms remain usable.
* Interactive elements remain accessible.
* Touch targets remain appropriate.
* Orientation changes behave correctly.
* Responsive performance remains acceptable.
* Accessibility is preserved.
* Security-sensitive functionality remains unaffected.

When project tooling supports responsive previews or automated viewport testing, use those capabilities to supplement manual verification.

---

## Responsive Audit

When significant responsive work is performed:

Document:

* Devices evaluated
* Layout improvements
* Remaining limitations
* Known issues
* Recommendations
* Outstanding TODO items

Store documentation inside:

```text id="x6f1cp"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="w4d8jm"
Responsive_Audit.md
Mobile_Experience_Review.md
```

Only create documentation that provides ongoing value.

---

## Hallucination Prevention

Never claim:

* Cross-device testing
* Browser testing
* Physical device testing
* Performance testing
* Responsive certification

unless those activities have actually occurred.

Describe verified implementation rather than assumed compatibility.

---

## Completion Report

Summarize:

1. Responsive improvements implemented.
2. Layout improvements.
3. Navigation improvements.
4. Form improvements.
5. Responsive component improvements.
6. Remaining limitations.
7. Outstanding TODO items.

---

## Final Rule

Responsive design should adapt the interface—not reduce functionality.

Every visitor, regardless of screen size, orientation, or input method, should receive a consistent, usable, accessible, and professional experience.

Optimize for content, usability, and maintainability rather than specific devices.

When uncertainty exists:

Inspect.

Adapt.

Verify.

Test.

Then consider the implementation complete.


## 14. Browser Compatibility

## 14. Browser Compatibility

### Purpose

Every production website shall function reliably across the browsers and browser versions appropriate for the project's audience and supported technology stack.

Browser compatibility is not simply ensuring pages "look the same." It includes consistent functionality, accessibility, performance, security, rendering, and user experience.

Compatibility decisions should balance maintainability, modern web standards, performance, and practical support requirements.

---

## Browser Compatibility Philosophy

Build websites using established web standards.

Favor:

* Standards compliance
* Progressive enhancement
* Graceful degradation
* Native browser capabilities
* Predictable behavior

Avoid browser-specific implementations unless technically necessary.

Do not implement browser workarounds that create unnecessary technical debt.

---

## Supported Browser Strategy

Before implementing browser-specific behavior:

Determine:

* Project requirements
* Intended audience
* Business requirements
* Existing browser support policy
* Framework compatibility
* Technology limitations

Do not assume support requirements.

If no browser support policy exists:

Optimize for current stable releases of major modern browsers while maintaining graceful degradation where practical.

Avoid assuming support for obsolete or unsupported browsers.

---

## Existing Compatibility Review

Inspect existing implementation.

Review:

* Browser-specific code
* Polyfills
* Vendor-prefixed CSS
* JavaScript features
* CSS features
* Existing compatibility workarounds
* Existing framework configuration

Preserve functioning compatibility implementations unless improvements are justified.

---

## Standards Compliance

Prefer standardized web platform features.

Avoid:

* Proprietary browser APIs
* Browser-specific CSS hacks
* Deprecated technologies
* Non-standard implementations

Standards-based implementations are generally more maintainable.

---

## Progressive Enhancement

Build functionality in layers.

Every visitor should receive:

1. Core content.
2. Core functionality.
3. Enhanced functionality when supported.

Critical functionality should not depend exclusively on advanced browser features.

Users with limited browser capabilities should still be able to complete primary tasks whenever practical.

---

## Graceful Degradation

Where modern features cannot be fully supported:

Provide reasonable fallback behavior.

Avoid:

* Broken interfaces
* Blank pages
* Fatal JavaScript failures
* Unusable navigation

Loss of advanced enhancements is preferable to loss of core functionality.

---

## Feature Detection

Prefer feature detection over browser detection.

Determine browser capabilities rather than identifying browser names whenever possible.

Avoid:

* User-Agent parsing
* Browser-specific branching
* Hardcoded browser lists

Feature detection generally provides more reliable long-term compatibility.

---

## HTML Compatibility

Review HTML implementation.

Ensure:

* Valid semantic HTML
* Standard elements
* Accessible structure
* Proper document hierarchy

Avoid obsolete HTML features.

---

## CSS Compatibility

Review CSS implementation.

Verify compatibility for:

* Layout systems
* Grid
* Flexbox
* Positioning
* Typography
* Animations
* Responsive behavior
* Custom properties
* Container queries (when used)
* Modern selectors

Avoid unsupported CSS without fallback strategies where practical.

---

## JavaScript Compatibility

Review JavaScript implementation.

Ensure:

* Appropriate language features
* Supported APIs
* Error handling
* Module compatibility
* Framework compatibility

Avoid relying upon experimental browser features in production unless explicitly required by the project.

---

## Browser APIs

Review browser APIs.

Examples include:

* Clipboard
* Geolocation
* Notifications
* Storage
* Media APIs
* Fullscreen
* Web Share
* Intersection Observer
* Resize Observer

Before using an API:

Determine:

* Browser support
* Appropriate fallbacks
* Permission requirements

Never assume browser support.

---

## Polyfills

Review polyfill usage.

Only include polyfills when justified.

Avoid loading unnecessary polyfills.

Ensure polyfills:

* Match project requirements.
* Remain actively maintained.
* Do not duplicate framework functionality.

---

## Responsive Compatibility

Verify responsive behavior across supported browsers.

Ensure:

* Layout consistency
* Navigation functionality
* Image rendering
* Typography
* Forms
* Interactive components

Minor visual differences may be acceptable when functionality remains equivalent.

---

## Form Compatibility

Review forms.

Verify:

* Validation
* Keyboard behavior
* Autofill
* Input types
* Error handling
* Accessibility

Forms should remain usable regardless of supported browser.

---

## Media Compatibility

Review:

* Images
* Video
* Audio
* Embedded content

Ensure media degrades gracefully when advanced features are unavailable.

---

## Font Compatibility

Review typography.

Ensure:

* Appropriate fallbacks
* Readable rendering
* Font loading behavior
* Character coverage

Avoid relying on fonts that significantly reduce compatibility.

---

## Input Compatibility

Review:

* Mouse
* Keyboard
* Touch
* Stylus

Interactions should remain predictable across supported browsers and devices.

---

## Clipboard and Permissions

If browser permissions are required:

Examples include:

* Clipboard
* Camera
* Microphone
* Geolocation

Request permissions only when necessary.

Provide graceful handling when permissions are denied.

---

## Error Recovery

Review JavaScript failures.

Ensure unsupported features do not prevent:

* Navigation
* Forms
* Content access
* Primary workflows

Critical functionality should remain available whenever practical.

---

## Existing Compatibility Protection

Before modifying compatibility implementations:

Understand:

* Existing browser support
* Existing polyfills
* Existing workarounds
* Framework capabilities

Avoid removing compatibility features without justification.

---

## Framework Compatibility

Ensure new implementations follow framework recommendations.

Do not bypass framework compatibility mechanisms without technical justification.

Respect framework-supported browser targets.

---

## Dependency Compatibility

Review dependencies.

Ensure:

* Browser compatibility
* Framework compatibility
* Build compatibility

Avoid introducing packages incompatible with the project's supported browsers.

---

## Accessibility Coordination

Browser compatibility should preserve:

* Accessibility
* Keyboard navigation
* Screen reader support
* Semantic HTML
* Responsive behavior

Compatibility improvements should never reduce accessibility.

---

## Security Coordination

Compatibility changes should not weaken:

* Security headers
* CSP
* Authentication
* Secure cookies
* Browser protections

Avoid compatibility workarounds that reduce security.

---

## Performance Coordination

Browser compatibility should preserve performance.

Avoid:

* Excessive polyfills
* Duplicate implementations
* Browser-specific bundles
* Unnecessary compatibility layers

Maintain efficient implementations.

---

## Automated Compatibility Testing

When project tooling supports compatibility testing:

Review:

* Build warnings
* Framework compatibility reports
* Static analysis
* Automated browser compatibility tools

Resolve compatibility issues where appropriate.

Do not ignore compatibility warnings without technical justification.

---

## Manual Compatibility Verification

When significant browser-related work has been performed:

Verify:

* Navigation
* Forms
* Interactive components
* Layout
* Responsive behavior
* Media
* Authentication (if applicable)
* Critical user workflows

Where available, verify using multiple supported browsers or browser emulation tools.

---

## Browser Compatibility Audit

When significant compatibility work is performed:

Document:

* Compatibility improvements
* Browser-specific considerations
* Remaining limitations
* Unsupported features
* Required polyfills
* Outstanding TODO items

Store documentation inside:

```text id="zv6kpd"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="v8m2fw"
Browser_Compatibility_Audit.md
Compatibility_Review.md
```

Only create documentation that provides ongoing project value.

---

## Hallucination Prevention

Never claim:

* Cross-browser certification
* Complete browser compatibility
* Physical device testing
* Browser vendor validation
* Compatibility verification

unless those activities have actually occurred.

Describe verified implementation rather than assumptions.

---

## Completion Report

Summarize:

1. Compatibility improvements implemented.
2. Browser-specific issues resolved.
3. Progressive enhancement improvements.
4. Graceful degradation improvements.
5. Polyfills added or removed.
6. Remaining limitations.
7. Outstanding TODO items.

---

## Final Rule

Build for the web—not for a single browser.

Favor open standards, progressive enhancement, and resilient implementations.

Support the browsers appropriate for the project while maintaining security, accessibility, performance, and maintainability.

When browser-specific behavior is unavoidable:

* Document the reason.
* Minimize the scope.
* Preserve standards compliance.
* Re-evaluate as browser support evolves.

When uncertainty exists:

Inspect.

Verify browser support.

Implement appropriate fallbacks.

Validate functionality.

Then consider the implementation complete.


## 15. Deployment Awareness

## 15. Deployment Awareness

### Purpose

Deployment is the process of transforming a development project into a secure, reliable, publicly accessible production website.

Every deployment should preserve:

* Functionality
* Security
* Accessibility
* Performance
* SEO
* Reliability
* Maintainability
* Data integrity

Deployment should never be treated as merely "publishing files."

Every deployment represents a production release and should follow disciplined engineering practices.

---

## Deployment Philosophy

Every deployment should be:

* Repeatable
* Predictable
* Reproducible
* Secure
* Fully validated

Deployment processes should minimize:

* Human error
* Downtime
* Configuration drift
* Production regressions

Deployment should always favor reliability over speed.

---

## Existing Deployment Discovery

Before making deployment-related changes:

Inspect the existing project.

Determine:

* Hosting architecture
* Deployment workflow
* Build process
* Output directory
* Environment variables
* Serverless functionality
* Static assets
* Routing behavior
* Redirect rules
* Rewrite rules
* Existing deployment configuration

Do not assume deployment architecture.

Inspect first.

---

## Static Hosting

When the project is deployed as a static website:

Verify:

* Static assets resolve correctly.
* Client-side routing functions correctly.
* Error pages behave appropriately.
* Caching behavior is appropriate.
* Public assets are accessible.

Avoid adding unnecessary server dependencies.

---

## Serverless Functions

If serverless functionality exists:

Review:

* Routing
* Authentication
* Authorization
* Environment variables
* Secrets
* Error handling
* Timeouts
* Rate limiting
* Logging

Do not expose implementation details.

---

## Backend Services

If backend services exist:

Verify:

* API routing
* Secure communication
* Authentication
* Authorization
* Environment isolation
* Error handling

Deployment should preserve backend functionality.

---

## Build Configuration

Review the project's build configuration.

Verify:

* Build command
* Output directory
* Framework settings
* Environment configuration
* Build optimizations
* Static asset generation

Do not modify build configuration without understanding existing behavior.

---

## Environment Variables

Review deployment configuration.

Ensure:

* Sensitive values remain external.
* Public values are intentionally public.
* Development values are not deployed to production.
* Secrets are never committed.

If required values are unavailable:

Clearly identify required configuration.

Never fabricate environment values.

---

## Configuration Management

Review deployment configuration files.

Examples include:

* Redirect configuration
* Rewrite configuration
* Headers configuration
* Build configuration
* Environment configuration

Preserve existing functionality whenever possible.

Avoid unnecessary configuration duplication.

---

## Production Environment

Review production configuration.

Ensure:

* Debugging disabled.
* Development endpoints removed.
* Mock services disabled.
* Test credentials removed.
* Development-only features removed.

Production should expose only intended functionality.

---

## Asset Deployment

Verify production assets.

Review:

* Images
* Fonts
* Icons
* Downloads
* Documents
* JavaScript
* CSS

Ensure assets:

* Build correctly.
* Reference correct paths.
* Load securely.
* Remain optimized.

---

## Routing Verification

Review production routing.

Verify:

* Public pages
* Dynamic routes
* Client-side routing
* Error pages
* Redirects
* Canonical URLs

No production routes should resolve incorrectly.

---

## Error Pages

Ensure appropriate production error pages exist when applicable.

Examples:

* 404
* 500 (if supported)
* Offline fallback (when appropriate)

Error pages should:

* Match branding.
* Remain accessible.
* Avoid exposing implementation details.

---

## Deployment Security

Review deployment security.

Verify:

* HTTPS
* Security headers
* Environment variable protection
* Secret handling
* CSP
* Authentication
* Authorization

Deployment should never weaken application security.

---

## Deployment Performance

Review deployment impact on performance.

Verify:

* Compression
* Caching
* Asset optimization
* Lazy loading
* Bundle optimization

Deployment should preserve performance improvements.

---

## SEO Verification

After deployment verify:

* Metadata
* robots.txt
* sitemap.xml
* Canonical URLs
* Structured Data
* Open Graph
* Internal links

Deployment should not reduce search engine visibility.

---

## Accessibility Verification

Verify accessibility remains intact after deployment.

Review:

* Keyboard navigation
* Forms
* Navigation
* Responsive layouts
* Focus behavior

Deployment should not introduce accessibility regressions.

---

## Contact Form Verification

If forms exist:

Verify:

* Submission
* Validation
* Error handling
* Success messages
* Environment configuration
* Backend connectivity

Forms should function correctly in production.

---

## Third-Party Integrations

Review production integrations.

Examples:

* Analytics
* Payment providers
* Email services
* Maps
* Scheduling
* CRM
* Social media
* Embedded media

Verify:

* Credentials
* Connectivity
* Privacy consistency
* Security

Do not assume integrations function without verification.

---

## Logging & Monitoring

Determine whether production monitoring exists.

Examples:

* Error reporting
* Availability monitoring
* Performance monitoring
* Security logging

Do not expose monitoring credentials.

---

## Rollback Awareness

Review deployment rollback capability.

Determine:

* Previous releases
* Build history
* Recovery process

Deployment should allow safe recovery when possible.

---

## Version Awareness

Respect the project's versioning strategy.

Do not:

* Invent version numbers
* Invent release dates
* Modify release history

Update version information only when appropriate.

---

## Existing Deployment Protection

Before changing deployment configuration:

Understand:

* Existing workflow
* Existing hosting
* Existing redirects
* Existing rewrites
* Existing build process

Avoid unnecessary deployment changes.

---

## Deployment Validation

Before considering deployment complete verify:

* Build succeeds.
* Routing functions.
* Assets load correctly.
* Environment variables are configured.
* Forms function.
* APIs function (when applicable).
* HTTPS functions.
* Security headers remain intact.
* Metadata is correct.
* Structured data remains valid.
* Accessibility remains intact.
* Responsive layouts remain intact.
* Performance remains acceptable.
* No debug functionality remains enabled.
* No placeholder content remains.
* No broken links remain.

---

## Post-Deployment Review

After deployment:

Review:

* Homepage
* Primary navigation
* Primary user flows
* Forms
* Contact information
* Footer
* Policy pages
* Media
* Interactive components

Identify any production-only issues.

---

## Deployment Audit

When significant deployment work has been performed:

Document:

* Deployment architecture
* Configuration changes
* Production verification
* Remaining limitations
* Known deployment requirements
* Outstanding TODO items

Store documentation inside:

```text id="cp8ydm"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="l0qj2a"
Deployment_Audit.md
Production_Deployment_Report.md
Release_Verification.md
```

Only create documentation that provides long-term project value.

---

## Hallucination Prevention

Never claim:

* Successful deployment
* Live verification
* DNS verification
* SSL verification
* Production monitoring
* Public availability
* Performance measurements

unless independently verified.

Describe deployment preparation separately from deployment verification.

---

## Completion Report

Summarize:

1. Deployment changes made.
2. Configuration changes.
3. Build verification.
4. Routing verification.
5. Security verification.
6. Accessibility verification.
7. Performance verification.
8. Remaining TODO items.
9. Production recommendations.

---

## Final Rule

A deployment is not complete simply because it builds successfully.

A production deployment should be:

* Secure
* Accessible
* Performant
* Fully functional
* Properly configured
* Consistent with documentation
* Ready for public use

Never assume production behavior matches development behavior.

Always inspect.

Always verify.

Always validate.

Only consider deployment complete after confirming the production environment accurately reflects the intended implementation and all critical functionality operates as expected.


## 16. Git Safety

## 16. Git Safety

### Purpose

The Git repository is the authoritative source of truth for the project.

Every modification should preserve repository integrity, maintain a clear project history, and minimize unnecessary changes.

The objective is to make every change understandable, reviewable, reversible, and appropriate to the requested task.

Git safety applies regardless of repository size, technology stack, hosting platform, or deployment workflow.

---

## Repository Integrity

Treat every repository as a production asset.

Never assume:

* Files are obsolete.
* Code is unused.
* Documentation is outdated.
* Configuration is unnecessary.

Inspect before modifying.

Preserve repository integrity at all times.

---

## Scope Control

Only modify files directly related to the requested work.

Avoid unrelated changes.

Examples include:

* Formatting unrelated files
* Renaming unrelated variables
* Reorganizing directories
* Updating dependencies without need
* Refactoring unrelated code
* Replacing architecture unnecessarily

Every modification should have a clear technical justification.

---

## Minimal Changes

Implement the smallest reasonable change that fully satisfies the objective.

Prefer:

* Updating existing files
* Extending existing functionality
* Improving existing components

Avoid replacing entire implementations when targeted modifications are sufficient.

---

## Atomic Changes

Group related changes together.

Avoid combining unrelated improvements into a single modification.

Each logical task should remain understandable on its own.

Large requests should be completed as a series of clearly defined incremental improvements whenever practical.

---

## Preserve Existing Work

Before modifying:

Read the surrounding implementation.

Understand:

* Purpose
* Dependencies
* Existing behavior
* Architecture
* Project conventions

Preserve functioning code whenever practical.

Do not rewrite code solely because another implementation style is preferred.

---

## File Protection

Avoid unnecessary file operations.

Do not:

* Rename files without justification.
* Move files unnecessarily.
* Delete files without confirming they are unused.
* Replace files when updating them is sufficient.
* Duplicate existing functionality.

Protect the repository structure.

---

## Existing Comments

Respect existing comments.

Do not remove comments that provide:

* Historical context
* Architectural reasoning
* Configuration guidance
* Maintenance notes
* Legal notices
* Licensing information

Update comments only when they become inaccurate.

Avoid excessive commenting.

---

## Existing Documentation

Preserve documentation whenever possible.

Update documentation to reflect implementation.

Do not create duplicate documentation.

Do not leave documentation inconsistent with the project.

---

## Existing Configuration

Review configuration before modifying.

Examples include:

* Build configuration
* Environment configuration
* TypeScript configuration
* Lint configuration
* Formatter configuration
* Deployment configuration

Avoid unnecessary configuration changes.

---

## Existing Dependencies

Review existing dependencies before adding new ones.

Prefer:

* Existing libraries
* Native browser functionality
* Existing utilities

Avoid unnecessary package additions.

Remove dependencies only after confirming they are no longer required.

---

## Refactoring Safety

Refactoring should:

* Improve readability
* Improve maintainability
* Reduce duplication
* Preserve behavior

Avoid large refactors during unrelated feature requests.

Maintain backwards compatibility whenever practical.

---

## Merge Conflict Awareness

Implement changes that minimize merge conflicts.

Avoid:

* Reformatting entire files
* Reordering imports unnecessarily
* Rearranging unrelated code
* Large-scale whitespace changes

Preserve existing formatting whenever practical.

---

## Generated Files

Determine whether generated files exist.

Examples:

* Build output
* Compiled assets
* Generated documentation
* Generated schemas

Avoid manually editing generated files unless explicitly required.

Modify the source instead.

---

## Temporary Files

Do not leave temporary files inside the repository.

Examples:

* Draft files
* Scratch files
* Debug artifacts
* Temporary images
* Backup copies
* Experimental code

Remove temporary artifacts before completion unless instructed otherwise.

---

## Placeholder Content

Avoid introducing placeholder content.

Examples include:

* Lorem ipsum
* Fake addresses
* Fake emails
* Placeholder phone numbers
* Temporary API keys
* Dummy configuration
* Fake testimonials
* Fabricated business information

If required information is unavailable:

Insert clearly marked TODO items instead.

---

## Repository Consistency

Maintain consistency throughout the repository.

Examples include:

* File organization
* Naming
* Formatting
* Documentation
* Imports
* Component structure
* Configuration

Avoid introducing conflicting conventions.

---

## Existing History Protection

Respect repository history.

Do not remove:

* Version history references
* Licensing information
* Legal notices
* Migration history
* Existing changelog entries

Historical information should remain accurate.

---

## Change Awareness

Before modifying a file:

Determine:

* Why the file exists.
* Whether similar functionality already exists.
* Whether another file should be updated instead.

Avoid duplicate implementations.

---

## AI Safety

Never fabricate:

* Repository structure
* Missing files
* Existing functionality
* Configuration
* Documentation
* Deployment workflow
* Build process

Inspect the repository before making assumptions.

If uncertainty remains:

Continue investigating.

Insert TODO items where appropriate.

Request clarification when necessary.

---

## Security Preservation

Repository changes must never:

* Expose secrets
* Commit credentials
* Remove security protections
* Weaken authentication
* Weaken authorization
* Reduce privacy protections

Security improvements should be preserved throughout repository modifications.

---

## Legal Preservation

Do not remove or weaken:

* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement
* Licensing information
* Copyright notices

unless explicitly instructed.

---

## Accessibility Preservation

Repository modifications should never reduce:

* Accessibility
* Semantic HTML
* Keyboard navigation
* Screen reader support

Accessibility improvements should remain intact.

---

## Performance Preservation

Avoid repository changes that unnecessarily reduce:

* Performance
* Build efficiency
* Asset optimization
* Rendering efficiency

Optimize carefully.

---

## Documentation Synchronization

Whenever implementation changes affect documentation:

Update relevant documentation.

Ensure implementation and documentation remain consistent.

---

## Verification Before Completion

Before considering repository work complete verify:

* Only intended files were modified.
* Repository structure remains organized.
* No duplicate files exist.
* No temporary files remain.
* Documentation matches implementation.
* Existing functionality remains intact.
* Existing architecture remains consistent.
* Existing conventions were respected.
* No secrets were introduced.
* No placeholder information remains.
* No unrelated modifications were performed.

---

## Git Safety Audit

When significant repository changes occur:

Document:

* Files modified
* Files created
* Files removed
* Major implementation decisions
* Architectural impact
* Remaining TODO items

Store documentation inside:

```text id="m8vtxj"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="q2nyha"
Repository_Modification_Report.md
Git_Safety_Audit.md
Repository_Integrity_Review.md
```

Only create documentation when it provides long-term project value.

---

## Hallucination Prevention

Never claim:

* Repository cleanup completed
* Dependency audit completed
* Git history reviewed
* Merge conflicts resolved
* Branch protection verified

unless those actions have actually been performed.

Describe verified repository changes only.

---

## Completion Report

Summarize:

1. Files modified.
2. Files created.
3. Files removed.
4. Documentation updated.
5. Configuration updated.
6. Dependencies added or removed.
7. Outstanding TODO items.
8. Recommendations for future maintenance.

---

## Final Rule

Every repository modification should improve the project while preserving its integrity.

Favor:

* Small changes
* Incremental improvements
* Existing architecture
* Existing conventions
* Repository cleanliness
* Long-term maintainability

Never modify more than necessary.

Never rewrite functioning code without technical justification.

Never sacrifice repository integrity for convenience.

When uncertainty exists:

Inspect.

Understand.

Implement.

Verify.

Then consider the repository changes complete.


## 17. Documentation

## 17. Documentation

### Purpose

Documentation is a critical component of every production website and software project.

Documentation should accurately describe the implemented project, assist future development, reduce maintenance effort, improve onboarding, preserve architectural knowledge, and provide operational guidance.

Documentation should be treated as part of the product—not an afterthought.

Whenever implementation changes affect documentation, documentation should be updated accordingly.

Documentation must always reflect the actual state of the project.

---

## Documentation Philosophy

Documentation should be:

* Accurate
* Current
* Concise
* Complete where appropriate
* Technically correct
* Easy to understand
* Easy to maintain
* Project-specific

Documentation should explain:

* What exists
* Why it exists
* How it works
* How to maintain it

Avoid documenting obvious implementation details.

Prefer documenting reasoning over implementation mechanics.

---

## Existing Documentation Review

Before creating new documentation:

Inspect the repository.

Review existing:

* README
* Architecture documentation
* API documentation
* Setup guides
* Deployment documentation
* Configuration documentation
* Security documentation
* Accessibility documentation
* Audit reports
* Legal documentation

Update existing documentation whenever practical.

Avoid creating duplicate documentation.

---

## README Updates

Review the project's README.

Ensure it accurately describes:

* Project name
* Purpose
* Features
* Technology stack
* Installation
* Development
* Build process
* Deployment
* Configuration
* License (when applicable)

Do not remove useful information.

Improve organization where appropriate.

---

## Project Overview

The primary project documentation should explain:

* Website purpose
* Intended audience
* Business objectives
* Major functionality
* Technology choices

Avoid generic descriptions.

Describe the actual project.

---

## Architecture Documentation

Document significant architectural decisions.

Examples include:

* Project structure
* Component hierarchy
* Routing
* Data flow
* State management
* Backend integration
* Serverless functions
* Build architecture

Explain why major architectural decisions exist.

Avoid documenting obvious implementation details.

---

## Configuration Documentation

Document configuration that future developers must understand.

Examples include:

* Build configuration
* Environment configuration
* Deployment configuration
* Framework configuration
* Third-party integrations

Do not expose sensitive information.

Document required configuration rather than actual secrets.

---

## Environment Variables

Document required environment variables.

For each variable describe:

* Purpose
* Required or optional
* Expected format
* Default behavior (when applicable)

Never document:

* Secret values
* Private credentials
* Production API keys
* Authentication secrets

Use placeholders only for variable names—not values.

---

## Setup Instructions

Provide setup instructions appropriate for the project.

Examples include:

* Installation
* Dependency installation
* Environment setup
* Local development
* Build
* Testing
* Deployment

Ensure setup instructions are reproducible.

Do not assume prior project knowledge.

---

## AI Documentation Storage

All AI-generated project documentation that provides ongoing value should be stored inside:

```text id="8zbx9r"
/PRODUCTION_STANDARDS/
```

unless another established project location is more appropriate.

Examples include:

* Audit reports
* Discovery reports
* Security reviews
* Accessibility reviews
* SEO audits
* Deployment reports
* Performance reports
* Architecture notes
* Technical recommendations

Avoid storing temporary AI notes.

Only preserve documentation with long-term value.

---

## Audit Documentation

When audits are created:

Ensure they include:

* Purpose
* Scope
* Findings
* Improvements
* Remaining issues
* TODO items
* Recommendations

Avoid duplicate audits.

Update existing audits whenever practical.

---

## API Documentation

If APIs exist:

Document:

* Endpoints
* Authentication
* Request formats
* Response formats
* Error behavior
* Rate limits (when applicable)

Do not fabricate undocumented endpoints.

Document only implemented functionality.

---

## Component Documentation

For reusable components where documentation provides value:

Describe:

* Purpose
* Usage
* Inputs
* Outputs
* Configuration
* Accessibility considerations
* Limitations

Avoid documenting trivial components.

---

## Code Comments

Prefer self-documenting code.

Use comments sparingly.

Document:

* Architectural reasoning
* Complex algorithms
* Non-obvious behavior
* Important assumptions
* Workarounds
* Integration requirements

Do not explain obvious syntax.

Remove outdated comments.

---

## Inline TODOs

When implementation cannot be completed:

Use clearly identifiable TODO comments.

TODO items should describe:

* What remains
* Why it remains
* Information required
* Recommended next steps

Avoid vague TODO statements.

---

## Change Documentation

When significant implementation changes occur:

Update documentation describing:

* New functionality
* Removed functionality
* Configuration changes
* Architectural changes
* Deployment changes

Documentation should remain synchronized with implementation.

---

## Dependency Documentation

Document major project dependencies when appropriate.

Examples include:

* Framework
* UI library
* State management
* Build tooling
* Testing framework

Avoid documenting every minor package.

Focus on architectural dependencies.

---

## Third-Party Services

Document significant integrations.

Examples include:

* Analytics
* Authentication
* Payments
* Email
* CRM
* Maps
* Scheduling

Document:

* Purpose
* Configuration requirements
* Dependencies

Never expose credentials.

---

## Deployment Documentation

Document deployment requirements.

Examples include:

* Build process
* Environment variables
* Output directory
* Redirects
* Rewrites
* Static assets
* Serverless configuration

Documentation should support future deployments.

---

## Security Documentation

Document implemented security features when appropriate.

Examples include:

* Authentication
* Authorization
* CSP
* Security headers
* Input validation
* Secret management

Do not expose sensitive implementation details.

---

## Accessibility Documentation

Document significant accessibility implementation.

Examples include:

* Keyboard navigation
* ARIA usage
* Semantic HTML
* Responsive accessibility

Accessibility documentation should describe implemented features rather than compliance claims.

---

## Performance Documentation

When meaningful optimizations are implemented:

Document:

* Performance strategy
* Optimization decisions
* Architectural tradeoffs
* Remaining opportunities

Avoid documenting insignificant optimizations.

---

## Documentation Consistency

Ensure documentation remains consistent across:

* README
* Policies
* Audit reports
* Architecture
* Configuration
* Deployment
* Code comments

Avoid contradictory information.

---

## Documentation Quality

Review documentation for:

* Accuracy
* Grammar
* Technical correctness
* Clarity
* Organization
* Formatting

Documentation should be understandable by future developers unfamiliar with the project.

---

## Existing Documentation Protection

Before replacing documentation:

Read the existing documentation completely.

Preserve:

* Project history
* Architectural decisions
* Client information
* Verified implementation details

Improve rather than replace whenever practical.

---

## Documentation Validation

Before considering documentation complete verify:

* Documentation matches implementation.
* Configuration is accurate.
* Setup instructions remain valid.
* README reflects the project.
* Environment variables are documented appropriately.
* Sensitive information is absent.
* Existing documentation remains consistent.
* TODO items are meaningful.
* Links function correctly.
* File references remain accurate.

---

## Documentation Audit

When significant documentation work has been performed:

Summarize:

* Documentation reviewed.
* Documentation created.
* Documentation updated.
* Remaining gaps.
* Outstanding TODO items.
* Future recommendations.

Store documentation reports inside:

```text id="x5qn8d"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="r7k1vc"
Documentation_Audit.md
Documentation_Review.md
Project_Documentation_Report.md
```

Only create documentation reports when they provide long-term value.

---

## Hallucination Prevention

Never document:

* Features that do not exist
* APIs that are not implemented
* Configuration that is not present
* Deployment workflows that are not verified
* Compliance claims
* Certifications
* Security audits
* Performance metrics

Documentation should describe verified implementation only.

Never allow documentation to become fictional.

---

## Completion Report

Summarize:

1. Documentation created.
2. Documentation updated.
3. Existing documentation preserved.
4. Configuration documentation updated.
5. README improvements.
6. Audit documentation created.
7. Outstanding TODO items.
8. Future documentation recommendations.

---

## Final Rule

Documentation should remain a reliable source of truth throughout the life of the project.

Every significant implementation decision should be understandable by future developers through accurate, maintainable documentation.

Documentation should evolve alongside the project.

Never allow implementation and documentation to diverge.

When uncertainty exists:

Inspect.

Verify.

Document.

Review.

Then consider the documentation complete.


## 18. Testing & Validation

## 18. Testing & Validation

### Purpose

Testing and validation ensure that implemented functionality behaves correctly, preserves existing behavior, and satisfies production-quality standards.

Every significant implementation should undergo appropriate validation before being considered complete.

Testing should reduce risk, prevent regressions, verify assumptions, and increase confidence in production readiness.

Validation should be proportional to the complexity and impact of the changes made.

---

## Quality Assurance Philosophy

Testing should verify:

* Correctness
* Reliability
* Stability
* Security
* Accessibility
* Performance
* Compatibility
* Maintainability

Successful builds do not guarantee correct behavior.

Visual inspection alone does not constitute adequate testing.

---

## Existing Test Review

Before introducing new tests or modifying existing ones:

Inspect the project.

Determine:

* Existing testing framework
* Existing test structure
* Existing coverage
* Existing automation
* Existing CI validation
* Existing quality gates

Preserve existing testing strategy whenever practical.

Avoid replacing established testing patterns unnecessarily.

---

## Testing Strategy

Apply the most appropriate testing methods based on the project.

Examples include:

* Static analysis
* Linting
* Type checking
* Unit testing
* Integration testing
* End-to-end testing
* Manual verification
* Automated validation
* Regression testing

Do not introduce unnecessary testing frameworks.

Use existing project tooling whenever possible.

---

## Build Verification

Every significant implementation should successfully complete the project's build process.

Verify:

* Build succeeds
* Assets compile correctly
* Generated files are correct
* Build warnings are reviewed
* Build errors are resolved

Do not consider a project complete if the build fails.

---

## Linting

Run the project's existing linting tools when available.

Review:

* Errors
* Warnings
* Deprecated patterns
* Code quality issues

Resolve issues directly related to the implemented work.

Do not ignore lint failures without documented technical justification.

---

## Type Checking

When the project uses static typing:

Run the project's type checking process.

Review:

* Type errors
* Type warnings
* Invalid interfaces
* Incorrect imports
* Incorrect exports

Avoid weakening type safety to suppress errors.

---

## Unit Testing

Where unit tests exist or are appropriate:

Verify:

* Individual functions
* Utilities
* Components
* Business logic
* Validation routines

Tests should verify expected behavior rather than implementation details.

Avoid brittle tests.

---

## Integration Testing

Review interactions between:

* Components
* APIs
* Forms
* Authentication
* Routing
* Serverless functions
* Third-party services

Ensure integrations behave correctly after modifications.

---

## End-to-End Testing

Where appropriate:

Validate complete user workflows.

Examples include:

* Navigation
* Contact forms
* Authentication
* Checkout
* Search
* Content browsing
* User dashboards

Focus on real visitor interactions.

---

## Regression Testing

Review existing functionality that may be affected.

Verify that new work does not introduce regressions.

Examples include:

* Navigation
* Layout
* Existing forms
* Existing APIs
* Existing routing
* Existing integrations

Regression prevention is a primary objective.

---

## Manual Verification

Perform manual review of:

* User interface
* Navigation
* Layout
* Forms
* Interactive components
* Error handling
* Responsive behavior

Manual review should complement—not replace—automated validation.

---

## Broken Link Testing

Review:

* Navigation
* Footer
* Internal links
* Policy pages
* Images
* Downloads

Ensure all referenced resources resolve correctly.

No broken internal links should remain in production.

---

## Form Testing

Review every implemented form.

Verify:

* Validation
* Error messages
* Success messages
* Required fields
* Optional fields
* Accessibility
* Spam protection
* Submission flow

Forms should remain fully functional after modifications.

---

## Responsive Testing

Review:

* Desktop
* Tablet
* Mobile

Verify:

* Layout
* Navigation
* Typography
* Images
* Forms
* Interactive elements

No critical functionality should depend upon a specific viewport.

---

## Accessibility Testing

Review accessibility implementation.

Verify:

* Keyboard navigation
* Focus order
* Semantic HTML
* Screen reader compatibility
* Form accessibility
* Color contrast
* Responsive accessibility

Where project tooling supports automated accessibility analysis, run it and resolve issues where appropriate.

Do not claim accessibility compliance without verification.

---

## Cross-Browser Testing

Review supported browsers.

Verify:

* Navigation
* Layout
* Forms
* Media
* JavaScript functionality
* CSS rendering

Compatibility should align with the project's supported browser policy.

---

## Security Validation

Verify implemented security features.

Review:

* Input validation
* Output encoding
* Authentication
* Authorization
* Environment variables
* Secrets
* Security headers
* CSP
* Browser storage

Testing should confirm security protections remain intact after implementation.

---

## Performance Validation

Review performance after significant changes.

Verify:

* Asset loading
* Rendering
* Bundle size (where applicable)
* Images
* Fonts
* Third-party resources

Use available project tooling where practical.

Do not claim measured improvements without actual measurements.

---

## SEO Validation

Review:

* Metadata
* Titles
* Descriptions
* Structured data
* robots.txt
* sitemap.xml
* Canonical URLs
* Internal links

Ensure implementation remains consistent.

---

## Documentation Validation

Verify:

* README accuracy
* Configuration documentation
* Environment variable documentation
* Audit reports
* Architecture documentation

Documentation should accurately reflect implementation.

---

## Legal Validation

Verify consistency between:

* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement
* Contact forms
* Implemented functionality

Legal documentation should accurately describe the website.

---

## Error Handling Validation

Review:

* User-facing errors
* Unexpected failures
* Empty states
* Network failures
* Validation failures

Applications should fail gracefully.

---

## Third-Party Validation

Review external services.

Examples:

* Analytics
* Email
* Payments
* Maps
* Scheduling
* Authentication

Verify integrations remain functional after modifications.

---

## Existing Test Preservation

Do not remove existing tests unless they are:

* Obsolete
* Incorrect
* Explicitly replaced

Maintain existing testing strategy whenever practical.

---

## Validation Documentation

When significant testing has been performed:

Document:

* Scope
* Validation methods
* Findings
* Remaining limitations
* Outstanding TODO items

Store documentation inside:

```text id="6tx4wa"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="cp7mdz"
Testing_Report.md
Validation_Audit.md
Quality_Assurance_Report.md
```

Only create documentation that provides long-term project value.

---

## Hallucination Prevention

Never claim:

* Tests passed
* Build succeeded
* Browser testing completed
* Accessibility testing completed
* Performance testing completed
* Security testing completed
* CI validation completed

unless those activities have actually been performed.

If testing cannot be executed within the current environment:

Clearly distinguish between:

* Verified
* Reviewed
* Recommended
* Untested

Never present assumptions as completed validation.

---

## Production Acceptance Criteria

Before considering implementation complete verify:

* Build is successful (if executable in the current environment).
* No known blocking errors remain.
* New functionality behaves as intended based on available verification.
* Existing functionality is preserved.
* Accessibility is preserved.
* Security is preserved.
* Responsive behavior is preserved.
* Browser compatibility is preserved.
* Performance remains acceptable.
* Documentation is synchronized.
* Legal documentation remains accurate.
* Repository integrity is maintained.
* No placeholder content remains.
* Outstanding limitations are documented.

If any item cannot be verified because the current environment lacks the necessary tooling, access, or runtime, explicitly identify it as requiring follow-up validation rather than assuming success.

---

## Completion Report

Summarize:

1. Validation performed.
2. Tests executed (if any).
3. Manual review completed.
4. Remaining limitations.
5. Outstanding TODO items.
6. Follow-up testing recommendations.
7. Production readiness observations.

---

## Final Rule

Implementation is not complete until it has been appropriately validated.

Testing should confirm behavior—not create assumptions.

Prefer measured evidence over intuition.

Prefer verification over optimism.

When validation cannot be performed:

State exactly what remains unverified.

Explain why.

Recommend the appropriate next validation step.

Only consider the work complete after all reasonably verifiable quality requirements have been satisfied or clearly documented as pending.


## 19. Final Production Audit

## 19. Final Production Audit

### Purpose

The Final Production Audit is the comprehensive verification process performed immediately before a project is considered production-ready.

Its purpose is to verify that all engineering, legal, security, accessibility, documentation, performance, deployment, and quality requirements defined throughout this document have been satisfied.

A project should not be considered production-ready simply because it builds successfully or appears visually complete.

Production readiness must be verified through deliberate review.

---

## Audit Philosophy

The production audit should answer one question:

**Is this project ready to be published for real users?**

The audit should identify:

* Remaining defects
* Outstanding risks
* Incomplete functionality
* Documentation inconsistencies
* Configuration issues
* Security concerns
* Accessibility concerns
* Legal inconsistencies
* Deployment issues

Every unresolved issue should be documented.

---

## Repository Review

Verify:

* Repository organization remains consistent.
* No temporary files remain.
* No unnecessary files exist.
* Duplicate files have not been introduced.
* Existing architecture has been preserved.
* Documentation is organized appropriately.
* Repository standards remain satisfied.

---

## Functional Review

Verify:

* Primary user workflows function correctly.
* Navigation behaves correctly.
* Routing functions correctly.
* Interactive components operate correctly.
* Forms behave correctly.
* Error handling behaves appropriately.
* User experience remains consistent.

No critical functionality should remain incomplete.

---

## Legal Compliance Review

Review all legal documentation.

Verify consistency between:

* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement
* Additional policies
* Footer links
* Contact forms
* Third-party services
* Implemented functionality

Legal documentation should accurately describe the implemented website.

Do not claim legal compliance beyond what has been verified.

---

## Accessibility Review

Verify:

* Semantic HTML
* Keyboard accessibility
* Focus management
* Screen reader support
* Form accessibility
* Responsive accessibility
* Color contrast
* Accessible navigation

Accessibility should remain consistent throughout the project.

---

## SEO Review

Verify:

* Page titles
* Meta descriptions
* Canonical URLs
* Open Graph
* Twitter/X Cards
* robots.txt
* sitemap.xml
* Internal links
* Structured Data
* Image optimization

SEO should accurately represent implemented content.

---

## Security Review

Review:

* Authentication
* Authorization
* Input validation
* Output encoding
* CSP
* Security headers
* Environment variables
* Secret management
* Browser storage
* Contact forms
* Third-party integrations

Verify that security protections remain intact.

Document any known limitations.

---

## Performance Review

Verify:

* Asset optimization
* Image optimization
* Font loading
* JavaScript efficiency
* CSS efficiency
* Lazy loading
* Bundle optimization
* Responsive performance

Ensure recent changes have not introduced unnecessary performance regressions.

---

## Mobile Review

Review:

* Mobile layouts
* Tablet layouts
* Desktop layouts
* Responsive navigation
* Responsive typography
* Responsive media
* Touch interactions
* Orientation changes

No critical functionality should depend on a specific viewport.

---

## Browser Compatibility Review

Verify:

* Supported browsers
* Progressive enhancement
* Graceful degradation
* Feature detection
* Responsive behavior
* Interactive components

Compatibility should align with the project's supported browser strategy.

---

## Routing Verification

Review every public route.

Verify:

* Correct navigation
* Correct redirects
* Correct rewrites
* Error pages
* Dynamic routes
* Client-side routing

No production routes should fail unexpectedly.

---

## Footer Verification

Verify the footer throughout the website.

Ensure:

* Copyright information
* Business information
* Contact information
* Legal links
* Navigation
* Accessibility

Footer links should function correctly.

---

## Policy Verification

Review every implemented policy.

Verify:

* Accessibility
* Accuracy
* Internal consistency
* Footer links
* Contact information
* Effective dates
* Business identity

Policies should accurately reflect the implemented project.

---

## Metadata Verification

Verify consistency across:

* HTML metadata
* Open Graph
* Twitter/X Cards
* Structured Data
* Canonical URLs

No conflicting metadata should exist.

---

## Structured Data Validation

Verify:

* JSON-LD validity
* Schema consistency
* Supported schema types
* Visible content matches structured data
* URLs resolve correctly
* Images resolve correctly

Never leave invalid structured data in production.

---

## Configuration Review

Verify:

* Build configuration
* Environment variables
* Deployment configuration
* Redirects
* Headers
* Framework configuration

Development configuration should not remain enabled in production.

---

## Third-Party Review

Review:

* Analytics
* Authentication
* Payment providers
* Email services
* CRM
* Maps
* Scheduling
* Embedded media

Ensure:

* Configuration is appropriate.
* Integrations are intentional.
* Privacy documentation remains accurate.

---

## Documentation Review

Verify:

* README
* Architecture documentation
* Configuration documentation
* Deployment documentation
* Audit reports

Documentation should accurately reflect implementation.

---

## Existing Standards Verification

Confirm that the project complies with the standards established throughout this document, including:

* Repository Standards
* Primary Objectives
* General Development Rules
* Project Discovery
* Legal & Compliance
* Contact Forms
* Footer Requirements
* SEO Requirements
* Structured Data
* Accessibility
* Security
* Performance
* Mobile Responsiveness
* Browser Compatibility
* Deployment Awareness
* Git Safety
* Documentation
* Testing & Validation

Earlier standards remain authoritative.

---

## Outstanding Issues Review

Identify:

* Known defects
* Known limitations
* Outstanding TODO items
* Future improvements
* Client decisions required
* External dependencies

Do not hide unresolved issues.

Document them clearly.

---

## Risk Assessment

Classify remaining issues by severity:

* Critical
* High
* Medium
* Low
* Informational

Critical production issues should prevent release until resolved.

Lower-risk items may be documented for future improvement if they do not materially affect security, functionality, legal accuracy, accessibility, or reliability.

---

## Release Recommendation

Based on the completed audit, assign one of the following recommendations:

### Production Ready

All critical requirements have been verified or appropriately documented.

No known issues prevent production deployment.

### Production Ready with Minor Issues

The project is suitable for production.

Remaining issues are low risk and documented.

### Production Ready with Conditions

Deployment is appropriate only after specific identified conditions are satisfied.

Document each condition clearly.

### Not Production Ready

One or more critical issues remain.

Identify:

* Blocking issues
* Required corrective actions
* Recommended verification steps

Do not recommend production deployment until blocking issues are resolved.

---

## Final Audit Documentation

When a production audit is performed:

Store documentation inside:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Final_Production_Audit.md
Production_Readiness_Assessment.md
Release_Readiness_Report.md
```

Each report should include:

* Audit scope
* Findings
* Risks
* Blocking issues
* Recommendations
* Outstanding TODO items
* Release recommendation

Only create audit reports that provide long-term project value.

---

## Hallucination Prevention

Never claim:

* Production deployment completed
* Public availability verified
* DNS propagation confirmed
* SSL verification completed
* Third-party approval received
* Client approval received
* Regulatory approval received

unless independently verified.

Differentiate clearly between:

* Verified
* Reviewed
* Recommended
* Pending
* Unknown

---

## Final Rule

Production readiness is earned through verification—not assumption.

No website should be considered complete until it has undergone a comprehensive production audit.

Every production release should leave the project:

* Secure
* Accessible
* Legally accurate
* Technically correct
* Maintainable
* Well documented
* Properly configured
* Consistent
* Reliable

When uncertainty exists:

Inspect.

Verify.

Document.

Resolve.

Re-audit.

Only recommend production release after all critical production requirements have been satisfied or explicitly documented as unresolved.


## 20. Completion Report

## 20. Completion Report

### Purpose

The Completion Report is the final record produced after implementation, validation, and production auditing have been completed.

Its purpose is to provide an accurate, concise, and technically complete summary of the work performed.

The report should allow future developers, project owners, and stakeholders to quickly understand:

* What was completed
* What changed
* What remains
* What requires review
* What should happen next

The Completion Report serves as the project's implementation handoff and should accurately reflect the final state of the project.

---

## Completion Philosophy

The Completion Report is a factual engineering summary.

It should never be:

* Marketing material
* Promotional language
* Speculation
* Assumptions
* Guesses

Every statement should describe verified implementation.

When information cannot be verified, identify it clearly rather than making assumptions.

---

## Report Requirements

Every Completion Report should include only information relevant to the work actually performed.

The report should remain:

* Accurate
* Concise
* Organized
* Actionable
* Technically correct

Avoid unnecessary detail.

Focus on information that provides long-term project value.

---

## Project Summary

Provide a concise overview describing:

* Project purpose
* Scope of completed work
* Primary objectives accomplished
* Overall implementation outcome

The summary should accurately reflect the completed implementation.

Do not exaggerate accomplishments.

---

## Work Completed

Summarize significant work completed.

Examples include:

* Features implemented
* Bugs resolved
* Refactoring performed
* Accessibility improvements
* Security improvements
* Performance improvements
* SEO improvements
* Documentation updates
* Deployment preparation
* Configuration updates

Only report completed work.

---

## Files Modified

Summarize significant file changes.

When appropriate include:

* Files created
* Files modified
* Files removed
* Directories added
* Configuration updated

Avoid excessively detailed file listings unless requested.

---

## Repository Changes

Summarize repository-level improvements.

Examples include:

* Organization improvements
* Documentation improvements
* Cleanup performed
* Duplicate removal
* Configuration improvements

Repository changes should preserve long-term maintainability.

---

## Policies Created or Updated

Identify legal documentation that was:

* Created
* Updated
* Reviewed
* Preserved

Examples include:

* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement
* Additional policies

Only include policies actually affected.

---

## Security Summary

Summarize implemented security improvements.

Examples include:

* Input validation
* Authentication
* Authorization
* CSP
* Security headers
* Secret management
* Environment variable improvements
* Form security

Do not claim security guarantees.

Describe implemented protections only.

---

## Accessibility Summary

Summarize accessibility improvements.

Examples include:

* Semantic HTML
* Keyboard navigation
* Forms
* Focus management
* Responsive accessibility
* Screen reader support

Describe implemented improvements rather than compliance claims.

---

## SEO Summary

Summarize SEO improvements.

Examples include:

* Metadata
* Structured Data
* Open Graph
* robots.txt
* sitemap.xml
* Internal linking
* Canonical URLs

Do not claim ranking improvements unless independently verified.

---

## Performance Summary

Summarize meaningful performance improvements.

Examples include:

* Image optimization
* Asset optimization
* Bundle improvements
* Lazy loading
* Rendering improvements
* Font optimization

Do not report estimated performance gains as measured improvements.

---

## Documentation Summary

Summarize documentation work.

Examples include:

* README updates
* Architecture documentation
* Configuration documentation
* Audit reports
* Deployment documentation

Documentation should accurately reflect implementation.

---

## Testing Summary

Summarize validation activities.

Examples include:

* Build verification
* Linting
* Type checking
* Manual review
* Accessibility review
* Security review
* Responsive review

Differentiate between:

* Performed validation
* Recommended validation
* Pending validation

Never report unperformed testing as completed.

---

## Production Readiness

State the current production readiness status.

Examples include:

* Production Ready
* Production Ready with Minor Issues
* Production Ready with Conditions
* Not Production Ready

Provide technical justification for the selected status.

---

## Outstanding TODO Items

List remaining work.

Each TODO should describe:

* The remaining task
* Why it remains
* Priority
* Recommended next action

Avoid vague TODO items.

---

## Known Limitations

Document any known limitations.

Examples include:

* Technical limitations
* Third-party limitations
* Framework limitations
* Hosting limitations
* Client decisions pending

Known limitations should remain visible.

Do not conceal unresolved issues.

---

## Risks Requiring Review

Identify issues that should receive additional review.

Examples include:

* Security review
* Legal review
* Accessibility review
* Performance review
* Client review
* Content review

Differentiate recommendations from requirements.

---

## Future Recommendations

Identify opportunities for future improvement.

Examples include:

* Refactoring
* Performance optimization
* Accessibility enhancements
* Security hardening
* Documentation improvements
* Feature expansion

Recommendations should be prioritized when appropriate.

Avoid speculative feature requests unrelated to project goals.

---

## Client Decisions Required

Identify decisions requiring client or project owner input.

Examples include:

* Business information
* Legal language
* Contact information
* Branding
* Third-party services
* Content approval

Do not make business decisions on behalf of the client.

---

## Human Review Recommendations

Recommend human review when appropriate.

Examples include:

* Legal review
* Security review
* Accessibility review
* Content review
* Brand review

Do not imply review has already occurred.

---

## Completion Verification

Before finalizing the report verify:

* Documentation matches implementation.
* Outstanding issues are documented.
* Completed work is accurately summarized.
* No fictional work is reported.
* No placeholder information remains.
* Recommendations are technically justified.

The report should accurately represent the completed project.

---

## Completion Documentation

When a Completion Report is created as a standalone document:

Store it inside:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Completion_Report.md
Project_Handoff.md
Implementation_Summary.md
Final_Project_Report.md
```

Only create one authoritative Completion Report per implementation cycle unless project requirements specify otherwise.

---

## Hallucination Prevention

Never report:

* Completed work that was not implemented
* Tests that were not executed
* Audits that were not performed
* Security reviews that were not completed
* Client approvals
* Legal approvals
* Production deployment
* Business decisions

Separate:

* Verified
* Completed
* Pending
* Recommended
* Unknown

Never blur the distinction.

---

## Completion Report Template

When producing a Completion Report, use the following structure whenever practical:

```markdown
# Completion Report

## Project Summary

## Work Completed

## Files Modified

## Repository Changes

## Policies Created or Updated

## Security Summary

## Accessibility Summary

## SEO Summary

## Performance Summary

## Documentation Summary

## Testing Summary

## Production Readiness

## Outstanding TODO Items

## Known Limitations

## Risks Requiring Review

## Future Recommendations

## Client Decisions Required

## Human Review Recommendations

## Final Notes
```

Adapt the report to match the actual project.

Omit sections that are genuinely not applicable rather than filling them with placeholder content.

---

## Final Rule

A project is not complete because development has stopped.

A project is complete only after:

* Implementation has been verified.
* Documentation reflects implementation.
* Security has been reviewed.
* Accessibility has been reviewed.
* Legal documentation is consistent.
* Performance has been evaluated.
* Production readiness has been assessed.
* Outstanding issues have been documented.
* Future developers can understand the work that was performed.

The Completion Report is the permanent engineering record of the implementation.

It should be accurate, maintainable, technically correct, and useful long after the implementation is complete.

When uncertainty exists:

Inspect.

Verify.

Document.

Clarify.

Then finalize the report.


## 21. Website Feature Standards

## 21. Website Feature Standards

### Part 1 — Core Website Features

### Purpose

Website features are the functional capabilities provided to visitors.

Every feature should solve a legitimate user need while remaining consistent with the project's purpose, business objectives, accessibility requirements, security standards, performance goals, and overall user experience.

Features should never exist solely because they are common on other websites.

Every implemented feature should provide measurable value.

---

## Feature Philosophy

Before implementing any feature determine:

* Why the feature exists.
* Who will use it.
* What problem it solves.
* Whether it supports the project's objectives.
* Whether it improves visitor experience.
* Whether it increases maintenance complexity.

Avoid unnecessary functionality.

Favor focused, maintainable websites over feature-heavy websites.

---

## Existing Feature Discovery

Before implementing new functionality inspect the existing project.

Determine:

* Existing pages
* Existing components
* Existing layouts
* Existing navigation
* Existing forms
* Existing interactions
* Existing utilities
* Existing services

Reuse existing implementations whenever practical.

Avoid duplicate functionality.

---

# Navigation

Navigation should help visitors reach important content quickly and predictably.

Review:

* Primary navigation
* Secondary navigation
* Mobile navigation
* Footer navigation
* Internal links
* Breadcrumbs (when appropriate)

Navigation should remain:

* Consistent
* Accessible
* Responsive
* Easy to understand

Avoid unnecessary navigation depth.

---

## Header

Review the header.

Verify:

* Business branding
* Logo
* Navigation
* Contact actions
* Primary CTA
* Mobile behavior

Headers should remain consistent across the website.

Avoid oversized headers.

Avoid distracting animations.

---

## Footer

Review every footer.

Verify inclusion of:

* Copyright
* Business name
* Contact information
* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement
* Social links (when appropriate)

Footer information should remain accurate throughout the project.

---

## Hero Sections

If hero sections exist:

Ensure they clearly communicate:

* Website purpose
* Business value
* Primary message
* Primary CTA

Avoid vague marketing language.

Avoid oversized hero sections that delay access to content.

---

## Calls-to-Action (CTA)

Review every CTA.

Ensure each CTA:

* Has a clear purpose.
* Uses descriptive language.
* Leads to an appropriate destination.
* Matches visitor intent.

Avoid excessive CTAs competing for attention.

---

## Contact Information

Verify business contact information.

Examples include:

* Email
* Phone
* Address
* Business hours
* Contact page

Only use verified information.

Never invent contact details.

---

## Contact Page

When appropriate:

Ensure a dedicated contact page exists.

Review:

* Contact methods
* Contact form
* Business information
* Maps (when appropriate)
* Hours
* Accessibility

Contact information should remain consistent with legal documentation.

---

## Contact Forms

Review every contact form.

Ensure:

* Required fields are appropriate.
* Validation exists.
* Error handling exists.
* Success messaging exists.
* Spam protection exists.
* Accessibility is maintained.
* Privacy implications are documented.

Avoid requesting unnecessary personal information.

---

## Service Pages

If services are offered:

Ensure each significant service has an appropriate page.

Service pages should include:

* Description
* Benefits
* Relevant information
* Appropriate CTAs

Do not invent services.

---

## About Page

When appropriate:

Ensure an About page accurately describes:

* Business
* Organization
* Individual
* Mission
* Experience

Avoid fabricated company history.

Avoid exaggerated marketing claims.

---

## Team Pages

If team information exists:

Review:

* Team members
* Roles
* Photos
* Biographies

Only display verified information.

Never invent personnel.

---

## Portfolio

If portfolio functionality exists:

Review:

* Projects
* Categories
* Images
* Descriptions

Portfolio items should accurately represent completed work.

Avoid fabricated projects.

---

## Gallery

If galleries exist:

Verify:

* Responsive behavior
* Accessibility
* Image optimization
* Navigation
* Captions (when appropriate)

Avoid excessive image loading.

---

## Testimonials

Only display genuine testimonials.

Never fabricate:

* Reviews
* Ratings
* Client names
* Endorsements

Testimonials should accurately represent real client feedback.

---

## Reviews

If review functionality exists:

Ensure reviews accurately reflect implemented data.

Never generate artificial ratings.

Never imply endorsements that do not exist.

---

## Frequently Asked Questions (FAQ)

When FAQs are appropriate:

Ensure answers remain:

* Accurate
* Helpful
* Consistent
* Visible to visitors

Avoid creating FAQs solely for SEO.

FAQ content should genuinely assist visitors.

---

## Search

If search functionality exists:

Verify:

* Accuracy
* Accessibility
* Keyboard usability
* Responsive behavior
* Performance

Do not advertise search functionality that is not implemented.

---

## Maps

If maps are included:

Ensure:

* Locations are accurate.
* Maps remain accessible.
* Privacy implications are documented.
* Loading strategy is appropriate.

Do not fabricate business locations.

---

## Downloads

If downloadable resources exist:

Verify:

* Correct file
* Appropriate filename
* Accessibility
* Security
* File size

Downloads should remain relevant and current.

---

## Social Media Links

Review all social links.

Verify:

* Correct destination
* Appropriate branding
* Working links

Do not link to nonexistent accounts.

---

## Existing Feature Protection

Before modifying features:

Understand:

* Existing workflows
* Existing components
* Existing user expectations

Avoid removing functionality unless explicitly requested.

Improve existing features whenever practical.

---

## Feature Validation

Verify:

* Navigation functions.
* CTAs function.
* Contact information is accurate.
* Forms function.
* Search functions (if applicable).
* Maps function (if applicable).
* Downloads function.
* Social links function.
* Service pages remain accurate.
* Footer links function correctly.

---

## Feature Audit

When significant feature work has been completed:

Document:

* Features added
* Features modified
* Features removed
* Existing functionality preserved
* Outstanding TODO items
* Future recommendations

Store documentation inside:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Website_Feature_Audit.md
Feature_Review.md
Functional_Audit.md
```

Only create documentation providing long-term project value.

---

## Hallucination Prevention

Never invent:

* Business services
* Products
* Employees
* Testimonials
* Reviews
* Contact information
* Maps
* Locations
* Social accounts
* Downloads

Every feature should accurately reflect verified project information.

---

## Final Rule

Every feature should provide meaningful value.

Features should remain:

* Useful
* Accessible
* Secure
* Performant
* Maintainable
* Consistent

Avoid implementing features solely because they are common on other websites.

Instead:

Inspect the project.

Understand visitor needs.

Implement only functionality that supports the project's goals while preserving long-term maintainability.


### Part 2 — User Experience & Interaction Standards

### Purpose

A website's functionality is only as valuable as its usability.

Every interaction should be intuitive, predictable, responsive, accessible, and consistent throughout the website.

User experience (UX) should reduce confusion, minimize effort, and guide visitors toward successfully completing their intended tasks.

Interaction design should support—not distract from—the website's purpose.

---

## User Experience Philosophy

Every interface should answer three questions immediately:

* Where am I?
* What can I do here?
* What should I do next?

Every page should provide a clear path forward.

Avoid creating unnecessary decisions or distractions.

Reduce cognitive load wherever practical.

---

## Existing User Experience Review

Before modifying interactions:

Inspect:

* Existing workflows
* Existing navigation
* Existing layouts
* Existing components
* Existing animations
* Existing messaging
* Existing feedback

Preserve effective user experiences whenever practical.

Improve confusing or inconsistent interactions.

---

## User Journey Evaluation

Review the primary visitor journeys.

Examples include:

* Learning about the business
* Contacting the business
* Requesting a quote
* Booking a service
* Viewing products
* Completing purchases
* Reading articles
* Downloading resources

Every primary journey should require as few unnecessary steps as possible.

---

## Loading States

Whenever content requires time to load:

Provide appropriate loading feedback.

Examples include:

* Skeleton loaders
* Progress indicators
* Loading messages
* Placeholder components

Avoid blank screens.

Avoid frozen interfaces.

Loading indicators should accurately represent ongoing activity.

---

## Empty States

Review components that may display no data.

Examples include:

* Search results
* Portfolios
* Blogs
* User dashboards
* Shopping carts
* Notifications

Empty states should:

* Explain why nothing is displayed.
* Offer helpful next steps.
* Remain visually consistent.

Avoid leaving empty containers without explanation.

---

## Success States

Every completed user action should provide appropriate confirmation.

Examples include:

* Contact form submission
* Appointment request
* Account creation
* Password reset
* Newsletter signup
* File upload

Success messages should:

* Confirm completion.
* Explain what happens next.
* Avoid unnecessary technical language.

---

## Error States

Review every possible user-facing error.

Examples include:

* Invalid forms
* Missing pages
* Network failures
* Authentication failures
* Upload failures

Error messages should:

* Explain the problem.
* Explain how to resolve it.
* Avoid exposing technical details.

Never display stack traces to visitors.

---

## Validation Feedback

Form validation should provide immediate, understandable feedback.

Review:

* Required fields
* Invalid formats
* Character limits
* Password requirements
* File restrictions

Avoid generic error messages.

Explain exactly what requires correction.

---

## Interactive Feedback

Every interactive element should communicate its current state.

Examples include:

* Hover
* Focus
* Active
* Selected
* Disabled
* Loading
* Completed

Visitors should always understand whether an interaction succeeded.

---

## Buttons

Review every button.

Ensure:

* Descriptive labels
* Appropriate placement
* Consistent styling
* Clear hierarchy

Primary actions should be visually distinguishable.

Avoid multiple competing primary actions.

---

## Links

Review links throughout the website.

Ensure:

* Purpose is clear.
* Destinations are predictable.
* External links are identified where appropriate.
* Broken links do not exist.

Avoid vague link text.

---

## Notifications

If notifications exist:

Review:

* Success notifications
* Error notifications
* Informational notifications
* Warning notifications

Notifications should:

* Be concise.
* Remain accessible.
* Not obstruct important content unnecessarily.

---

## Dialogs & Modals

If dialogs or modals exist:

Verify:

* Keyboard accessibility
* Focus trapping
* Escape behavior
* Accessible labeling
* Responsive behavior

Avoid unnecessary modal usage.

Do not interrupt visitor workflows without justification.

---

## Accordions

When accordions are appropriate:

Ensure:

* Accessible interaction
* Keyboard support
* Clear labels
* Logical organization

Avoid hiding essential information unnecessarily.

---

## Tabs

Review tab interfaces.

Ensure:

* Keyboard accessibility
* Clear organization
* Responsive behavior
* Accessible state management

Avoid excessive nesting.

---

## Carousels & Sliders

If carousels exist:

Verify:

* Keyboard navigation
* Touch interaction
* Manual controls
* Pause controls where appropriate
* Responsive behavior

Avoid auto-advancing content unless clearly beneficial.

Never use carousels to hide critical information.

---

## Interactive Components

Review:

* Menus
* Dropdowns
* Filters
* Cards
* Toggles
* Tooltips
* Popovers
* Search interfaces

Ensure interactions remain:

* Predictable
* Accessible
* Consistent

---

## User Guidance

Provide helpful guidance where appropriate.

Examples include:

* Placeholder text
* Form instructions
* Progress indicators
* Tooltips
* Inline help

Avoid excessive instructional text.

Provide guidance only where it improves usability.

---

## Workflow Consistency

Similar actions should behave consistently.

Examples:

* Buttons
* Forms
* Navigation
* Search
* Filters
* Dialogs

Visitors should not need to relearn interactions between pages.

---

## Progressive Enhancement

Core functionality should remain available even when advanced enhancements are unavailable.

Enhancements should improve the experience without becoming mandatory for essential tasks.

---

## Feature Discoverability

Important features should be easy to find.

Avoid:

* Hidden navigation
* Unclear icons
* Excessive nesting
* Important actions below unrelated content

Visitors should not struggle to discover core functionality.

---

## Visual Hierarchy

Review every page.

Ensure:

* Primary content is emphasized.
* Secondary information is appropriately positioned.
* Calls-to-action are distinguishable.
* Navigation remains visible.

Avoid competing visual priorities.

---

## Consistency

Maintain consistency across:

* Colors
* Typography
* Buttons
* Icons
* Forms
* Navigation
* Spacing
* Layout

Consistency improves usability and reduces cognitive effort.

---

## Existing UX Protection

Before changing user interactions:

Understand:

* Existing workflows
* Visitor expectations
* Established interaction patterns

Avoid changing familiar interactions without technical justification.

---

## User Experience Validation

Verify:

* Navigation remains intuitive.
* Workflows remain logical.
* Loading states function correctly.
* Empty states are helpful.
* Success messages are appropriate.
* Error messages are informative.
* Interactive components remain consistent.
* Keyboard interaction remains functional.
* Responsive interaction remains intact.
* Accessibility remains preserved.

---

## UX Audit

When significant user experience work has been performed:

Document:

* Workflow improvements
* Interaction improvements
* Accessibility improvements
* Remaining usability concerns
* Outstanding TODO items
* Recommendations

Store documentation inside:

```text id="kt4w9p"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="rg81xm"
UX_Audit.md
Interaction_Review.md
User_Experience_Report.md
```

Only create documentation providing long-term project value.

---

## Hallucination Prevention

Never assume:

* Visitor intent
* Business priorities
* User preferences
* Workflow requirements

Base interaction decisions upon:

* Project requirements
* Existing implementation
* Established usability principles

Avoid inventing unnecessary workflows.

---

## Final Rule

User experience should make every feature easier to discover, understand, and use.

Every interaction should be:

* Predictable
* Accessible
* Responsive
* Consistent
* Helpful

Good user experience reduces confusion rather than adding visual complexity.

Whenever possible:

Simplify.

Clarify.

Guide.

Confirm.

Then validate the complete user journey.


### Part 3 — Advanced Features & Functional Components

### Purpose

Advanced features should extend the capabilities of the website without compromising security, accessibility, maintainability, performance, or usability.

These features are optional and should only be implemented when they provide clear value to the project.

Do not add advanced functionality solely because it is technically possible.

Every advanced feature should have a defined business purpose and measurable benefit.

---

## Feature Applicability

Before implementing any advanced feature determine:

* Whether the project actually requires it.
* Whether a simpler solution exists.
* Whether the feature aligns with business goals.
* Whether long-term maintenance is reasonable.
* Whether the feature introduces unnecessary complexity.

If the answer is uncertain, do not implement the feature.

---

## Authentication

If authentication is required:

Review:

* Login
* Logout
* Session management
* Password reset
* Email verification
* Multi-factor authentication (when appropriate)

Authentication should integrate naturally with the existing architecture.

Never weaken authentication for convenience.

---

## User Accounts

If user accounts exist:

Verify:

* Registration
* Profile management
* Password management
* Account deletion
* Account recovery

Users should have appropriate control over their own information.

Avoid collecting unnecessary account information.

---

## User Profiles

When user profiles are implemented:

Review:

* Profile editing
* Profile visibility
* Avatar handling
* Privacy settings
* Account preferences

Display only information intentionally made available.

---

## Dashboards

If dashboards exist:

Ensure:

* Clear organization
* Relevant information
* Logical navigation
* Responsive behavior
* Accessibility
* Performance

Avoid information overload.

Present data according to user roles and permissions.

---

## Role-Based Features

If different user roles exist:

Verify:

* Role permissions
* Feature availability
* Administrative functions
* User restrictions

Never expose administrative functionality to unauthorized users.

---

## Appointment Scheduling

When scheduling functionality exists:

Review:

* Calendar availability
* Date selection
* Time selection
* Confirmation workflow
* Cancellation process

Scheduling should minimize user confusion.

Avoid allowing impossible booking selections.

---

## Calendar Features

If calendars exist:

Verify:

* Time zone awareness
* Responsive layouts
* Accessibility
* Navigation
* Event visibility

Do not assume a single regional date format.

---

## Booking Systems

Review booking workflows.

Verify:

* Availability
* Confirmation
* Modifications
* Cancellations
* Error handling

Booking systems should accurately represent available options.

---

## Payment Functionality

If payments exist:

Review:

* Checkout flow
* Payment confirmation
* Error handling
* Refund workflow
* Security
* Privacy

Never store payment credentials unless the project is specifically designed and verified to do so securely.

Prefer established payment providers.

---

## Shopping Cart

When shopping carts exist:

Verify:

* Item management
* Quantity updates
* Pricing consistency
* Totals
* Tax calculations (when applicable)
* Shipping calculations (when applicable)

Shopping cart behavior should remain predictable.

---

## Checkout Experience

Review checkout.

Ensure:

* Minimal required steps
* Clear progress
* Error recovery
* Accessible forms
* Order review

Avoid unnecessary friction.

---

## Search Filters

If advanced search exists:

Review:

* Categories
* Sorting
* Filtering
* Pagination
* Search suggestions

Search refinement should improve discovery without becoming confusing.

---

## File Uploads

If uploads exist:

Verify:

* Validation
* Accessibility
* Error handling
* Progress indicators
* File size restrictions
* Supported formats

Provide helpful feedback throughout the upload process.

---

## Downloads

Advanced download functionality should:

* Verify file availability.
* Provide descriptive filenames.
* Display file size where appropriate.
* Explain download purpose.

Avoid hidden downloads.

---

## Notifications

Review notification systems.

Examples include:

* Email notifications
* In-app notifications
* Administrative notifications

Notifications should remain relevant and avoid excessive frequency.

---

## Messaging

If messaging functionality exists:

Review:

* Conversation organization
* Accessibility
* Notification behavior
* Error handling

Protect user privacy throughout communication.

---

## Live Chat

If chat functionality exists:

Verify:

* Accessibility
* Responsive behavior
* Privacy consistency
* Availability messaging

Do not imply live support when unavailable.

---

## Search Functionality

Advanced search should support:

* Relevance
* Accessibility
* Performance
* Responsive behavior

Search results should remain useful even when no matches exist.

---

## Maps & Location Features

If interactive maps exist:

Verify:

* Accurate locations
* Accessible alternatives
* Responsive behavior
* Privacy implications

Never fabricate geographic information.

---

## Media Viewers

Review:

* Image viewers
* Video players
* Audio players
* Document viewers

Ensure:

* Keyboard accessibility
* Responsive behavior
* Appropriate controls

---

## Progressive Web App (PWA) Features

If the project is intended to function as a Progressive Web App:

Review:

* Manifest
* Icons
* Offline capability
* Installation prompts
* Service workers

Do not introduce PWA functionality unnecessarily.

---

## Offline Functionality

If offline support exists:

Verify:

* Appropriate messaging
* Cached resources
* Graceful degradation

Offline functionality should not create inconsistent user experiences.

---

## Saved Preferences

If user preferences are stored:

Review:

* Theme selection
* Language
* Accessibility preferences
* Notification preferences

Store only necessary preference information.

---

## Personalization

When personalization exists:

Ensure recommendations remain based upon implemented functionality.

Do not fabricate personalized content.

Avoid excessive data collection.

---

## Reusable Feature Architecture

Advanced features should be implemented as reusable components whenever practical.

Favor:

* Modular architecture
* Reusable utilities
* Shared validation
* Shared styling
* Shared accessibility behavior

Avoid duplicate implementations.

---

## Scalability

Design advanced functionality with future growth in mind.

Avoid implementations that require complete replacement as the project expands.

Favor extensibility over unnecessary complexity.

---

## Existing Advanced Feature Protection

Before modifying advanced functionality:

Understand:

* Existing workflows
* Existing dependencies
* Existing integrations
* Existing architecture

Avoid introducing breaking changes.

---

## Advanced Feature Validation

Verify:

* Authentication functions correctly.
* User accounts remain secure.
* Scheduling behaves correctly.
* Booking workflows function.
* Payments (when applicable) remain accurate.
* Uploads function correctly.
* Search performs appropriately.
* Dashboards remain accessible.
* Notifications behave predictably.
* Advanced features remain responsive.

---

## Advanced Feature Audit

When significant advanced functionality is implemented:

Document:

* Features added
* Architecture decisions
* Integration requirements
* Remaining limitations
* Outstanding TODO items

Store documentation inside:

```text id="dy2wq8"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="xn6k0h"
Advanced_Feature_Audit.md
Feature_Architecture_Report.md
Functional_Component_Review.md
```

Only create documentation providing ongoing project value.

---

## Hallucination Prevention

Never invent:

* User accounts
* Authentication providers
* Payment gateways
* Booking systems
* Business workflows
* Dashboard functionality
* Administrative features
* Integrations

Implement only verified project requirements.

---

## Final Rule

Advanced features should increase the website's capabilities without increasing unnecessary complexity.

Every advanced feature should remain:

* Secure
* Accessible
* Performant
* Maintainable
* Modular
* Consistent
* Appropriate to the project's goals

When uncertainty exists:

Inspect existing architecture.

Determine actual requirements.

Implement only what provides meaningful long-term value.

Then validate the complete workflow.


### Part 4 — Website Feature Audit & Production Verification

### Purpose

The Website Feature Audit is the final functional review of all visitor-facing capabilities before a project is considered complete.

Its purpose is to verify that implemented features are appropriate, complete, consistent, maintainable, secure, accessible, performant, and aligned with the project's business objectives.

A feature should not be considered complete simply because it exists.

Every feature should function correctly, integrate naturally with the project, and provide meaningful value to visitors.

---

## Feature Audit Philosophy

Every implemented feature should answer the following questions:

* Does this feature solve a legitimate problem?
* Does it improve the visitor experience?
* Does it align with project goals?
* Is it implemented consistently?
* Is it accessible?
* Is it secure?
* Is it maintainable?
* Is it appropriately documented?

Features that cannot satisfy these criteria should be reconsidered.

---

## Website Purpose Review

Review the website as a whole.

Verify:

* The primary purpose is immediately understandable.
* Primary visitor goals are supported.
* Calls-to-action align with business objectives.
* Navigation supports expected workflows.
* Content supports implemented features.

Every major feature should contribute to the website's purpose.

---

## Navigation Audit

Verify:

* Primary navigation
* Secondary navigation
* Mobile navigation
* Footer navigation
* Internal links
* Breadcrumbs (when applicable)

Navigation should remain:

* Predictable
* Consistent
* Accessible
* Responsive

No important content should become difficult to discover.

---

## Feature Consistency Review

Review every implemented feature.

Verify consistency across:

* Design
* Behavior
* Terminology
* Layout
* Icons
* Buttons
* Forms
* Messages
* Navigation

Users should not need to learn different interaction patterns across the website.

---

## Content & Feature Alignment

Ensure content accurately supports implemented functionality.

Examples include:

* Service descriptions
* Product information
* Contact methods
* Pricing
* Booking workflows
* Downloads
* Support resources

Do not expose functionality that content does not explain.

Do not describe functionality that does not exist.

---

## Forms Audit

Review every form.

Verify:

* Accessibility
* Validation
* Required fields
* Optional fields
* Error handling
* Success messaging
* Privacy consistency
* Security

Every form should guide users successfully from start to completion.

---

## CTA Audit

Review every primary and secondary call-to-action.

Ensure:

* Purpose is obvious.
* Placement is appropriate.
* Destination is correct.
* Messaging is consistent.

Avoid conflicting or excessive CTAs.

---

## Search & Discovery Audit

If search functionality exists:

Verify:

* Search quality
* Search accessibility
* Filters
* Sorting
* Empty states
* Performance

Visitors should locate important content efficiently.

---

## Interactive Component Audit

Review:

* Accordions
* Tabs
* Carousels
* Modals
* Dropdowns
* Menus
* Filters
* Notifications
* Tooltips

Verify:

* Accessibility
* Keyboard support
* Responsive behavior
* Visual consistency

Interactive components should behave predictably.

---

## User Workflow Audit

Review every primary workflow.

Examples include:

* Contacting the business
* Requesting services
* Booking appointments
* Purchasing products
* Creating accounts
* Reading content
* Downloading resources

Identify unnecessary friction.

Simplify workflows whenever practical.

---

## Mobile Feature Audit

Verify all features function correctly across supported viewport sizes.

Review:

* Navigation
* Forms
* Search
* Buttons
* Interactive components
* Downloads
* Media

No essential functionality should be unavailable on mobile devices.

---

## Accessibility Feature Audit

Verify implemented features preserve:

* Semantic HTML
* Keyboard navigation
* Focus order
* Screen reader compatibility
* Accessible labels
* Responsive accessibility

Features should remain usable by all visitors.

---

## Performance Impact Review

Evaluate whether implemented features unnecessarily increase:

* JavaScript size
* CSS size
* Rendering complexity
* Network requests
* Third-party dependencies

Features should remain efficient.

Avoid unnecessary complexity.

---

## Security Feature Review

Review features affecting:

* Authentication
* Forms
* User input
* Browser storage
* Uploads
* Downloads
* APIs
* Third-party integrations

Verify security protections remain intact.

---

## SEO Feature Review

Ensure implemented features do not negatively affect:

* Metadata
* Structured data
* Internal linking
* Crawlability
* Page hierarchy

Features should support discoverability where appropriate.

---

## Legal Consistency Review

Verify feature behavior matches:

* Privacy Policy
* Cookie Policy
* Terms of Service
* Accessibility Statement
* Additional policies

Features should never contradict legal documentation.

---

## Existing Feature Preservation

Verify existing functionality remains intact.

Confirm:

* Existing pages remain accessible.
* Existing workflows remain functional.
* Existing components remain reusable.
* Existing navigation remains consistent.

Avoid regressions.

---

## Future Scalability Review

Review whether implemented features support future growth.

Examples include:

* Modular architecture
* Component reuse
* Configuration flexibility
* Future expansion

Avoid implementations requiring complete redesign for future improvements.

---

## Visitor Experience Review

Review the complete website from a visitor's perspective.

Determine:

* Is the purpose immediately clear?
* Is navigation intuitive?
* Is information easy to locate?
* Are interactions understandable?
* Can primary goals be completed easily?

Every visitor should understand how to use the website without instruction.

---

## Production Readiness Verification

Before considering feature implementation complete verify:

* Navigation is complete.
* Footer is complete.
* Header is complete.
* CTAs function correctly.
* Forms function correctly.
* Search functions correctly (if applicable).
* Booking functions correctly (if applicable).
* Authentication functions correctly (if applicable).
* Downloads function correctly.
* Interactive components remain accessible.
* Mobile functionality is complete.
* Accessibility is preserved.
* Security is preserved.
* Performance remains acceptable.
* Documentation reflects implementation.

---

## Feature Audit Documentation

When significant feature work has been completed:

Store documentation inside:

```text id="n0y6jr"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="b5m8cz"
Website_Feature_Audit.md
Feature_Validation_Report.md
Visitor_Experience_Review.md
```

Each report should summarize:

* Features reviewed
* Improvements implemented
* Existing functionality preserved
* Remaining limitations
* Outstanding TODO items
* Recommendations

Only create documentation providing ongoing project value.

---

## Hallucination Prevention

Never claim:

* User testing completed
* Visitor approval received
* Conversion improvements measured
* Feature success verified
* Business objectives achieved

unless independently verified.

Describe:

* Implemented features
* Reviewed functionality
* Recommended improvements
* Remaining limitations

Clearly distinguish between verified outcomes and engineering expectations.

---

## Completion Report

Summarize:

1. Features implemented.
2. Existing features preserved.
3. User experience improvements.
4. Accessibility improvements.
5. Security considerations.
6. Performance considerations.
7. Remaining limitations.
8. Outstanding TODO items.
9. Future feature recommendations.

---

## Final Rule

Every website feature should exist for a reason.

The objective is not to build the most feature-rich website.

The objective is to build the most useful website.

Every implemented feature should:

* Solve a real problem.
* Improve the visitor experience.
* Support business objectives.
* Remain accessible.
* Preserve security.
* Maintain performance.
* Scale with future growth.
* Integrate naturally with the existing project.

If a feature does not improve the project, it should not be implemented.

When uncertainty exists:

Inspect.

Understand.

Validate.

Implement deliberately.

Review the complete visitor experience.

Then consider the feature complete.


## 22. Content Standards

## 22. Content Standards

### Purpose

Website content is the primary method through which visitors understand the business, services, products, and value offered by the website.

Every piece of content should be accurate, relevant, readable, accessible, professionally written, and aligned with the project's business objectives.

Content includes, but is not limited to:

* Headings
* Body text
* Service descriptions
* Product descriptions
* Blog articles
* Calls-to-action
* Forms
* Navigation labels
* Buttons
* Error messages
* Success messages
* Metadata
* Alt text
* Legal pages
* Structured data content
* Downloadable resources

Content should always support the visitor's goals while accurately representing the project.

---

## Content Philosophy

Content exists to communicate—not simply fill space.

Every sentence should serve a purpose.

Content should:

* Inform
* Guide
* Educate
* Build trust
* Encourage appropriate action

Avoid writing merely to increase page length or search engine visibility.

Prioritize clarity over volume.

---

## Existing Content Discovery

Before modifying content:

Review:

* Existing pages
* Existing messaging
* Existing terminology
* Existing branding
* Existing SEO
* Existing legal documentation
* Existing business information

Preserve accurate content whenever practical.

Improve unclear, outdated, or inconsistent content.

---

## Business Information

Verify all business information.

Examples include:

* Business name
* Contact information
* Address
* Hours
* Services
* Products
* Team information
* Certifications
* Licenses

Only publish verified information.

Never fabricate business details.

---

## Accuracy

Every factual statement should be accurate.

Examples include:

* Business claims
* Product specifications
* Service offerings
* Pricing
* Availability
* Certifications
* Awards
* Statistics
* Dates

When information cannot be verified:

Do not invent it.

Insert a clearly identified TODO if the information is required before production.

---

## Tone & Voice

Determine the appropriate tone based on:

* Industry
* Target audience
* Brand identity
* Business goals

Maintain a consistent voice throughout the website.

Examples may include:

* Professional
* Friendly
* Technical
* Educational
* Luxury
* Corporate
* Casual

Avoid switching tone between pages without justification.

---

## Readability

Content should be easy to understand.

Favor:

* Short paragraphs
* Logical organization
* Clear headings
* Simple sentence structure
* Active voice where appropriate

Avoid unnecessary jargon.

Explain technical concepts when appropriate for the audience.

---

## Grammar & Spelling

Review all content for:

* Grammar
* Spelling
* Punctuation
* Capitalization
* Consistency

Content should be professionally written.

---

## Headings

Review heading structure.

Ensure headings:

* Accurately describe content.
* Follow logical hierarchy.
* Remain concise.
* Support accessibility.
* Support SEO.

Avoid vague headings.

Avoid keyword stuffing.

---

## Calls-to-Action

Every CTA should:

* Match page intent.
* Clearly describe the next action.
* Encourage appropriate engagement.

Avoid misleading or manipulative language.

---

## Marketing Claims

Review all marketing language.

Avoid:

* Unsupported superlatives
* Absolute guarantees
* False urgency
* Misleading comparisons
* Unverifiable claims

Marketing should remain truthful and supportable.

---

## Service Descriptions

If services are offered:

Ensure descriptions explain:

* What is provided
* Who it is for
* Benefits
* Limitations (when appropriate)

Do not exaggerate capabilities.

---

## Product Descriptions

If products exist:

Ensure descriptions include only verified information.

Avoid fabricated:

* Specifications
* Features
* Benefits
* Compatibility
* Reviews

Product content should accurately reflect the actual offering.

---

## Testimonials & Reviews

Only display genuine testimonials or reviews.

Never generate:

* Fake customer names
* Fake reviews
* Artificial ratings
* Fabricated endorsements

If testimonials are unavailable:

Do not invent them.

---

## Contact Information Consistency

Ensure contact information remains identical across:

* Footer
* Contact page
* Privacy Policy
* Terms of Service
* Structured Data
* Metadata
* Business listings

Avoid conflicting information.

---

## Accessibility of Content

Content should support accessibility.

Review:

* Plain language where appropriate
* Link text
* Heading hierarchy
* Lists
* Tables
* Alt text references

Avoid instructions that rely solely on color, position, or visual appearance.

---

## Inclusive Language

Use respectful, inclusive language.

Avoid:

* Discriminatory language
* Exclusionary assumptions
* Unnecessary stereotypes

Write for a broad audience unless project requirements specify otherwise.

---

## SEO Content

Content should naturally support search engine optimization.

Do not:

* Stuff keywords
* Duplicate content
* Hide text
* Write primarily for search engines

Write for people first.

Search optimization should follow naturally from clear, high-quality content.

---

## Duplicate Content

Review for duplicate or substantially similar content.

Avoid repeating large sections unnecessarily.

Consolidate overlapping information where appropriate.

---

## AI-Generated Content

When AI assists in content creation:

Review every generated statement.

Verify:

* Accuracy
* Business relevance
* Legal consistency
* Brand consistency

Never publish AI-generated content without review.

---

## Sensitive Topics

Exercise additional care when writing about:

* Medical subjects
* Financial subjects
* Legal subjects
* Safety information
* Children's services

Avoid giving advice beyond the project's verified expertise.

Recommend professional consultation where appropriate.

---

## Legal Consistency

Ensure content remains consistent with:

* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement
* Additional policies

Content should not contradict legal documentation.

---

## Existing Content Protection

Before replacing content:

Determine whether it is:

* Accurate
* Valuable
* Approved
* Brand consistent

Improve existing content whenever practical.

Avoid unnecessary rewrites.

---

## Content Validation

Before considering content complete verify:

* Business information is accurate.
* Grammar is correct.
* Tone is consistent.
* Headings are logical.
* CTAs are appropriate.
* Marketing claims are supportable.
* Accessibility is preserved.
* SEO remains natural.
* Contact information is consistent.
* Legal consistency is maintained.

---

## Content Audit

When significant content work has been completed:

Document:

* Pages reviewed
* Pages updated
* Content improvements
* Remaining limitations
* Outstanding TODO items
* Recommendations

Store documentation inside:

```text id="6yr3ba"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="9hk4pm"
Content_Audit.md
Editorial_Review.md
Content_Quality_Report.md
```

Only create documentation that provides long-term project value.

---

## Hallucination Prevention

Never invent:

* Business history
* Services
* Products
* Team members
* Certifications
* Awards
* Statistics
* Reviews
* Testimonials
* Contact information
* Legal claims
* Industry experience

When information cannot be verified:

Leave a clearly marked TODO or request clarification.

Never present assumptions as facts.

---

## Completion Report

Summarize:

1. Content created.
2. Content updated.
3. Existing content preserved.
4. Grammar improvements.
5. SEO improvements.
6. Accessibility improvements.
7. Remaining TODO items.
8. Content requiring client review.

---

## Final Rule

Content is the voice of the website.

Every sentence should increase clarity, trust, and understanding.

Publish only content that is:

* Accurate
* Verified
* Readable
* Accessible
* Consistent
* Brand appropriate
* Legally consistent
* Helpful to visitors

Never sacrifice accuracy for marketing.

Never sacrifice clarity for SEO.

When uncertainty exists:

Inspect.

Verify.

Clarify.

Then publish.


## 23. Branding & Design Consistency

## 23. Branding & Design Consistency

### Purpose

Branding and design communicate professionalism, credibility, and identity before visitors read a single word.

Every visual element should reinforce the project's brand, improve usability, and provide a cohesive experience across the entire website.

Design decisions should be intentional, consistent, accessible, maintainable, and appropriate for the project's audience and objectives.

The objective is not visual complexity—it is visual clarity.

---

## Design Philosophy

Every design decision should improve one or more of the following:

* Readability
* Usability
* Accessibility
* Trust
* Brand recognition
* Professional appearance
* Information hierarchy

Avoid decoration without purpose.

Favor simplicity, consistency, and clarity.

---

## Existing Brand Discovery

Before modifying visual design:

Inspect the existing project.

Determine:

* Brand identity
* Existing colors
* Typography
* Logos
* Icons
* Layout system
* Component library
* Design language
* Existing design tokens
* Existing style guide

Respect established branding whenever appropriate.

Do not redesign the project unless requested.

---

## Brand Identity

Review the project's visual identity.

Ensure consistency across:

* Logo
* Colors
* Typography
* Icons
* Buttons
* Navigation
* Graphics
* Illustrations
* Photography

Brand identity should remain recognizable throughout the website.

---

## Logo Usage

Review logo implementation.

Verify:

* Correct logo version
* Appropriate sizing
* Proper spacing
* Sufficient contrast
* Responsive behavior
* Accessibility

Do not distort, crop, stretch, recolor, or modify approved logos without authorization.

---

## Color System

Review the project's color palette.

Ensure colors remain:

* Consistent
* Accessible
* Purposeful
* Limited to the approved design system

Establish clear semantic usage such as:

* Primary
* Secondary
* Accent
* Success
* Warning
* Error
* Information
* Background
* Surface
* Text
* Border

Avoid introducing arbitrary colors.

---

## Typography

Review typography.

Ensure consistency for:

* Headings
* Body text
* Navigation
* Buttons
* Forms
* Captions
* Footers

Avoid unnecessary font families.

Maintain readable font sizes and line spacing.

Typography should support accessibility and visual hierarchy.

---

## Design Tokens

Where the project uses design tokens or CSS variables:

Review:

* Colors
* Typography
* Spacing
* Borders
* Radius
* Shadows
* Motion
* Z-index values

Prefer centralized design values over hardcoded styles.

Avoid duplicate definitions.

---

## Layout System

Review the layout structure.

Ensure consistency in:

* Containers
* Grid systems
* Columns
* Sections
* Alignment
* Spacing

Layouts should feel balanced across all pages.

Avoid inconsistent content widths.

---

## White Space

Use spacing intentionally.

Review:

* Margins
* Padding
* Section spacing
* Component spacing

Avoid:

* Crowded layouts
* Excessive empty space
* Inconsistent spacing patterns

White space should improve readability—not waste space.

---

## Visual Hierarchy

Review every page.

Ensure visitors can immediately identify:

* Primary heading
* Supporting information
* Calls-to-action
* Important content
* Secondary content

Hierarchy should guide attention naturally.

Avoid competing visual priorities.

---

## Component Consistency

Review all reusable components.

Examples include:

* Buttons
* Cards
* Forms
* Navigation
* Modals
* Alerts
* Tables
* Accordions
* Tabs

Components should behave and appear consistently throughout the project.

---

## Button Standards

Review button usage.

Ensure:

* Consistent styling
* Clear hierarchy
* Appropriate sizing
* Accessible contrast
* Predictable placement

Primary actions should remain visually distinguishable.

Avoid multiple conflicting button styles.

---

## Iconography

Review icon usage.

Ensure icons are:

* Consistent
* Recognizable
* Accessible
* Appropriately sized

Avoid mixing unrelated icon styles.

Icons should support—not replace—meaningful labels.

---

## Illustration & Graphics

Review custom graphics.

Ensure they:

* Match the brand
* Remain visually consistent
* Support content
* Scale appropriately

Avoid decorative graphics without purpose.

---

## Photography

Review photography.

Ensure images are:

* High quality
* Relevant
* Consistent in style
* Properly optimized
* Representative of the business

Never fabricate business imagery that misrepresents the organization.

---

## Visual Consistency

Review:

* Shadows
* Borders
* Radius
* Elevation
* Opacity
* Layering

Visual treatments should remain consistent across all components.

---

## Motion & Animation

Animations should:

* Support usability
* Reinforce interaction
* Improve clarity

Avoid:

* Excessive motion
* Distracting transitions
* Decorative animation without purpose

Respect visitor reduced-motion preferences.

---

## Responsive Design Consistency

Verify branding remains consistent across:

* Desktop
* Tablet
* Mobile

Brand identity should not change between device sizes.

---

## Accessibility Coordination

Branding decisions must preserve:

* Color contrast
* Typography readability
* Keyboard accessibility
* Focus indicators
* Responsive usability

Visual branding must never reduce accessibility.

---

## Dark Mode (When Applicable)

If dark mode is supported:

Ensure:

* Brand consistency
* Accessible contrast
* Appropriate imagery
* Consistent component styling

Do not assume dark mode is required.

Implement only when appropriate for the project.

---

## Error & Success States

Visual feedback should remain consistent.

Review:

* Error colors
* Success colors
* Warning colors
* Informational messages

Use consistent visual language throughout the website.

---

## Existing Brand Protection

Before modifying branding:

Determine whether the project already follows:

* Brand guidelines
* Design systems
* Style guides
* Client specifications

Never replace established branding without authorization.

Improve implementation rather than changing identity.

---

## Design Validation

Before considering visual work complete verify:

* Logo usage is correct.
* Colors remain consistent.
* Typography is consistent.
* Components are visually consistent.
* Layouts remain balanced.
* White space is appropriate.
* Visual hierarchy is clear.
* Responsive design preserves branding.
* Accessibility is maintained.
* Animations remain purposeful.

---

## Brand Audit

When significant branding or design work has been performed:

Document:

* Design improvements
* Component updates
* Branding consistency
* Remaining inconsistencies
* Outstanding TODO items
* Recommendations

Store documentation inside:

```text id="7mq8ve"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="r2dy7a"
Brand_Audit.md
Design_Consistency_Report.md
Visual_Review.md
```

Only create documentation providing long-term project value.

---

## Hallucination Prevention

Never invent:

* Logos
* Brand colors
* Brand guidelines
* Design systems
* Marketing slogans
* Business identity
* Product imagery

If branding assets are unavailable:

Use clearly identified placeholders or request appropriate assets.

Never assume brand identity.

---

## Completion Report

Summarize:

1. Branding improvements.
2. Design consistency improvements.
3. Component standardization.
4. Typography improvements.
5. Color system improvements.
6. Accessibility considerations.
7. Remaining TODO items.
8. Client assets still required.

---

## Final Rule

Branding is more than appearance.

Every visual decision should reinforce professionalism, usability, accessibility, and trust.

Maintain consistency across every page, component, interaction, and device.

Avoid unnecessary visual complexity.

Favor systems over one-off designs.

When uncertainty exists:

Inspect existing branding.

Preserve established identity.

Improve consistency.

Validate accessibility.

Then finalize the design.


## 24. Media & Asset Management

## 24. Media & Asset Management

### Purpose

Media and digital assets are essential components of the website.

Every asset should be:

* Purposeful
* Optimized
* Accessible
* Properly licensed
* Consistently organized
* Maintainable
* Appropriate for production

Assets include, but are not limited to:

* Images
* Icons
* Logos
* SVGs
* Videos
* Audio
* Documents
* PDFs
* Downloads
* Fonts
* Favicons
* Social preview images
* Animation assets
* Illustrations

Assets should improve the visitor experience while supporting performance, branding, accessibility, and long-term maintenance.

---

## Asset Philosophy

Every asset should exist for a defined purpose.

Before adding any asset determine:

* Why it is needed.
* Whether a similar asset already exists.
* Whether it supports business objectives.
* Whether it improves visitor experience.
* Whether it affects performance.

Avoid unnecessary media.

Avoid duplicate assets.

---

## Existing Asset Discovery

Before adding or replacing assets:

Inspect the project.

Review:

* Existing media folders
* Existing naming conventions
* Existing optimization
* Existing organization
* Existing design assets
* Existing downloads

Reuse existing assets whenever appropriate.

Avoid unnecessary duplication.

---

## Asset Organization

Store assets using a logical, maintainable directory structure.

Group assets by type or function.

Examples include:

* Images
* Icons
* Logos
* Documents
* Videos
* Fonts

Avoid scattered asset locations.

Avoid duplicate copies.

---

## File Naming

Use descriptive, consistent filenames.

File names should:

* Describe the asset.
* Use lowercase letters.
* Use hyphens instead of spaces.
* Avoid unnecessary abbreviations.
* Remain readable.

Avoid generic names such as:

* image1
* final-final
* new-logo
* temp-file

---

## Image Standards

Review every image.

Ensure images are:

* Relevant
* High quality
* Properly cropped
* Optimized
* Responsive
* Accessible

Avoid blurry, distorted, or pixelated images.

Do not upscale low-resolution assets unnecessarily.

---

## Responsive Images

Use responsive image techniques where appropriate.

Ensure images display correctly across:

* Desktop
* Tablet
* Mobile
* High-resolution displays

Avoid unnecessarily large images on smaller devices.

---

## Image Optimization

Optimize images before production.

Review:

* File size
* Compression
* Dimensions
* Format
* Loading behavior

Optimize without significantly reducing visual quality.

---

## Image Formats

Use formats appropriate for the asset.

Examples include:

* JPEG for photographs
* PNG for transparency where required
* SVG for scalable graphics
* WebP or AVIF when supported and appropriate

Avoid converting assets solely to follow trends.

Choose formats based on technical suitability.

---

## Alt Text

Every meaningful image should include descriptive alternative text.

Alt text should describe:

* The purpose of the image
* Relevant visual information
* Context when necessary

Decorative images should use appropriate accessibility techniques rather than misleading descriptions.

---

## Logos

Review logo assets.

Ensure:

* High quality
* Correct proportions
* Appropriate file formats
* Responsive sizing

Never distort official logos.

Maintain brand consistency.

---

## Icons

Review icon usage.

Ensure icons:

* Remain visually consistent
* Scale appropriately
* Support accessibility
* Use consistent styling

Icons should complement—not replace—clear labels.

---

## Favicons

Verify favicon implementation.

Review:

* Browser icon
* Mobile icon
* Application icons where applicable

Favicons should accurately represent the brand.

---

## Social Preview Images

Review social sharing images.

Ensure:

* Appropriate dimensions
* High quality
* Brand consistency
* Relevant content

Preview images should accurately represent the website.

---

## Videos

Review video assets.

Ensure:

* Appropriate quality
* Reasonable file size
* Responsive playback
* Accessible controls
* Captions when appropriate

Avoid autoplay with sound.

Optimize videos for web delivery.

---

## Audio

If audio exists:

Review:

* Accessibility
* Controls
* File size
* Compression

Visitors should always control playback.

---

## Downloadable Documents

Review:

* PDFs
* Brochures
* Whitepapers
* Guides
* Forms

Ensure documents:

* Are current
* Accessible
* Properly named
* Free from unnecessary metadata
* Match website branding

---

## Fonts

Review font assets.

Ensure:

* Only necessary font files are included.
* Unused variants are removed.
* Licensing requirements are respected.

Avoid unnecessary font downloads.

---

## Animations

Review animation assets.

Ensure animations:

* Improve understanding
* Respect reduced-motion preferences
* Remain performant

Avoid excessive decorative animation.

---

## Licensing

Every media asset should have appropriate usage rights.

Review:

* Images
* Fonts
* Icons
* Videos
* Audio
* Illustrations

Never assume usage rights.

Never use copyrighted assets without appropriate authorization or licensing.

Document licensing requirements when applicable.

---

## Copyright

Respect copyright throughout the project.

Do not:

* Copy protected images
* Remove attribution when required
* Misrepresent ownership

Ensure copyright notices remain accurate.

---

## Metadata

Review asset metadata where appropriate.

Remove unnecessary embedded metadata that:

* Increases file size
* Exposes sensitive information
* Provides no production value

Preserve metadata required for licensing or legal obligations.

---

## Asset Performance

Review the performance impact of media.

Ensure assets:

* Load efficiently
* Use appropriate compression
* Support lazy loading where appropriate
* Do not unnecessarily increase page weight

Performance should remain balanced with visual quality.

---

## Accessibility Coordination

Review media accessibility.

Verify:

* Alt text
* Captions
* Transcripts (when appropriate)
* Keyboard accessibility
* Responsive behavior

Media should remain usable for all visitors.

---

## SEO Coordination

Ensure media supports SEO through:

* Descriptive filenames
* Appropriate alt text
* Logical organization
* Correct metadata where applicable

Avoid keyword stuffing.

---

## Existing Asset Protection

Before replacing assets:

Determine:

* Whether the asset remains current.
* Whether branding requires preservation.
* Whether downstream references exist.

Avoid deleting or replacing assets unnecessarily.

---

## Asset Validation

Before considering asset work complete verify:

* Images remain optimized.
* Videos function correctly.
* Downloads function correctly.
* Icons remain consistent.
* Logos remain accurate.
* Fonts load correctly.
* Favicons display correctly.
* Responsive media behaves correctly.
* Accessibility is preserved.
* Licensing requirements are respected.

---

## Asset Audit

When significant media work has been performed:

Document:

* Assets added
* Assets updated
* Assets removed
* Optimization performed
* Remaining issues
* Outstanding TODO items

Store documentation inside:

```text id="yb4w6t"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="nm2x8k"
Asset_Audit.md
Media_Review.md
Asset_Optimization_Report.md
```

Only create documentation that provides ongoing project value.

---

## Hallucination Prevention

Never invent:

* Logos
* Product photography
* Team photographs
* Business imagery
* Downloadable documents
* Certificates
* Awards
* Licenses

Do not claim ownership of assets that have not been provided or verified.

If required media is unavailable:

Insert clearly identified placeholders or TODO items.

---

## Completion Report

Summarize:

1. Assets added.
2. Assets updated.
3. Assets optimized.
4. Licensing considerations.
5. Accessibility improvements.
6. Performance improvements.
7. Remaining TODO items.
8. Client assets still required.

---

## Final Rule

Media should strengthen the website—not burden it.

Every asset should:

* Serve a purpose.
* Be legally usable.
* Be optimized.
* Remain accessible.
* Support branding.
* Preserve performance.
* Be organized for long-term maintenance.

When uncertainty exists:

Inspect existing assets.

Verify licensing.

Optimize responsibly.

Document outstanding requirements.

Then finalize the asset implementation.


## 25. Analytics & Monitoring

## 25. Analytics & Monitoring

### Purpose

Analytics and monitoring provide insight into website performance, visitor behavior, operational health, and technical issues.

Data collection should support legitimate business objectives while respecting visitor privacy, applicable laws, and the principle of collecting only the information necessary for the intended purpose.

Monitoring should improve reliability and maintenance—not create unnecessary surveillance.

---

## Analytics Philosophy

Every analytics or monitoring implementation should answer one or more legitimate business or operational questions.

Examples include:

* How visitors find the website.
* Which pages are most frequently viewed.
* Where visitors abandon workflows.
* Whether forms are functioning.
* Whether errors occur.
* Whether performance degrades.
* Whether services remain available.

Avoid collecting information without a clearly defined purpose.

---

## Existing Analytics Discovery

Before implementing analytics:

Inspect the project.

Determine:

* Existing analytics platforms
* Existing event tracking
* Existing monitoring
* Existing privacy implementation
* Existing cookie consent
* Existing tag management
* Existing reporting

Avoid introducing duplicate analytics systems.

---

## Privacy-First Analytics

Analytics implementation should prioritize visitor privacy.

Collect only information necessary for legitimate business purposes.

Avoid unnecessary collection of:

* Personally identifiable information
* Sensitive personal information
* Authentication credentials
* Payment information

Respect applicable privacy requirements.

---

## Consent Awareness

If visitor consent is required before analytics may operate:

Ensure analytics behavior respects that requirement.

Tracking should remain consistent with:

* Privacy Policy
* Cookie Policy
* Consent preferences

Do not activate consent-dependent tracking before appropriate consent has been obtained.

---

## Analytics Configuration

Review analytics configuration.

Ensure:

* Accurate business identification
* Correct domains
* Correct environments
* Appropriate filtering

Avoid collecting development or testing traffic in production reporting whenever practical.

---

## Event Tracking

Track meaningful interactions only.

Examples include:

* Contact form submissions
* Quote requests
* Appointment requests
* Purchases
* Downloads
* Newsletter signups
* Search usage
* CTA clicks

Avoid excessive event collection.

Each tracked event should have a defined purpose.

---

## Conversion Tracking

Where conversions are important:

Clearly identify measurable conversion events.

Examples include:

* Completed purchases
* Submitted contact forms
* Appointment bookings
* Account registrations
* Resource downloads

Conversion tracking should reflect actual business goals.

---

## Form Monitoring

Review contact and interactive forms.

Verify:

* Submission success
* Validation failures
* Error rates
* Abandonment where appropriate

Monitoring should identify operational issues without exposing submitted personal information.

---

## Error Monitoring

Review error reporting.

Monitor:

* JavaScript errors
* Serverless errors
* API failures
* Rendering failures
* Unexpected application behavior

Error reports should support troubleshooting while avoiding disclosure of sensitive information.

---

## Performance Monitoring

Monitor website performance where appropriate.

Examples include:

* Page loading
* Asset loading
* Response times
* Rendering performance
* Core Web Vitals

Use performance monitoring to identify meaningful regressions.

---

## Availability Monitoring

Where operational monitoring exists:

Review:

* Website availability
* Service availability
* Form availability
* API availability

Monitoring should support operational reliability.

---

## Search Monitoring

If search functionality exists:

Review:

* Popular searches
* Unsuccessful searches
* Search usage

Use findings to improve visitor experience.

Avoid collecting unnecessary personal information.

---

## Internal Search Analytics

Review internal search behavior.

Identify:

* Missing content
* Poor navigation
* Visitor intent
* Frequently requested information

Search analytics should improve website usability.

---

## Tag Management

If tag management is implemented:

Review:

* Organization
* Naming
* Trigger conditions
* Permissions
* Documentation

Avoid duplicate tracking.

Avoid unnecessary tags.

---

## Third-Party Tracking

Review every third-party tracking service.

Determine:

* Business purpose
* Data collected
* Privacy implications
* Cookie usage

Remove unnecessary tracking services.

---

## Search Engine Integration

Where appropriate:

Verify integration with search engine webmaster tools.

Review:

* Site verification
* Sitemap submission
* Indexing status (where available)
* Search visibility configuration

Do not claim indexing success unless verified.

---

## Uptime Monitoring

If uptime monitoring exists:

Review:

* Notification configuration
* Monitoring frequency
* Service coverage

Monitoring should support timely issue detection.

---

## Logging

Review operational logging.

Logs should assist with:

* Troubleshooting
* Diagnostics
* Operational review

Avoid logging:

* Passwords
* Secrets
* Tokens
* Sensitive personal information

---

## Data Retention

Review analytics retention practices.

Do not retain information longer than necessary for legitimate business purposes.

If retention settings are unknown:

Document the need for review rather than inventing retention periods.

---

## Data Minimization

Collect only information that provides measurable value.

Avoid collecting data simply because technology permits it.

Less collected data generally reduces privacy and security risk.

---

## Accessibility Monitoring

Where practical:

Monitor accessibility-related issues introduced after deployment.

Accessibility monitoring should support continuous improvement.

---

## Security Monitoring

Review operational security monitoring.

Examples include:

* Authentication failures
* Suspicious activity
* Rate limiting
* Error spikes

Monitoring should improve security without unnecessarily collecting visitor information.

---

## Development vs Production

Ensure analytics and monitoring distinguish between:

* Development
* Testing
* Staging
* Production

Production reporting should remain meaningful.

---

## Existing Monitoring Protection

Before modifying analytics:

Understand:

* Existing reporting
* Existing dashboards
* Existing business workflows
* Existing privacy commitments

Avoid disrupting established reporting without justification.

---

## Monitoring Validation

Before considering analytics implementation complete verify:

* Analytics configuration is appropriate.
* Consent behavior remains correct.
* Event tracking aligns with business objectives.
* Conversion tracking remains accurate.
* Error monitoring functions.
* Performance monitoring functions.
* Logging avoids sensitive information.
* Privacy documentation remains consistent.
* Cookie documentation remains accurate.

---

## Analytics Audit

When significant analytics work has been completed:

Document:

* Analytics implemented
* Events tracked
* Monitoring improvements
* Remaining limitations
* Outstanding TODO items
* Recommendations

Store documentation inside:

```text id="aw9f6p"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="hz3q7k"
Analytics_Audit.md
Monitoring_Review.md
Measurement_Report.md
```

Only create documentation that provides ongoing project value.

---

## Hallucination Prevention

Never claim:

* Analytics verification
* Traffic volume
* Visitor counts
* Conversion rates
* Search rankings
* Indexing success
* Monitoring coverage
* Performance metrics

unless independently verified.

Describe implementation separately from measured outcomes.

---

## Completion Report

Summarize:

1. Analytics improvements.
2. Monitoring improvements.
3. Privacy considerations.
4. Events configured.
5. Remaining TODO items.
6. Recommended operational review.

---

## Final Rule

Analytics should help improve the website—not compromise visitor trust.

Every implementation should:

* Respect privacy.
* Collect only necessary information.
* Support business objectives.
* Improve operational visibility.
* Remain legally consistent.
* Preserve security.
* Avoid unnecessary complexity.

When uncertainty exists:

Inspect existing implementation.

Verify business requirements.

Respect visitor privacy.

Document assumptions.

Then implement responsibly.


## 26. Integrations & Third-Party Services

## 26. Integrations & Third-Party Services

### Purpose

Third-party services extend website functionality through external platforms, APIs, hosted services, embedded content, and cloud infrastructure.

Every integration should be intentionally selected, securely implemented, privacy-conscious, maintainable, and aligned with the project's business objectives.

External services should improve the website—not increase unnecessary risk, complexity, or maintenance burden.

---

## Integration Philosophy

Before implementing any integration determine:

* Why the integration is needed.
* Whether an existing integration already provides the functionality.
* Whether the integration supports project objectives.
* Whether long-term maintenance is acceptable.
* Whether privacy and security implications have been evaluated.

Avoid adding services solely because they are popular or feature-rich.

Implement only integrations that provide measurable value.

---

## Existing Integration Discovery

Before implementing changes:

Inspect the project.

Review:

* Existing APIs
* Existing external services
* Existing SDKs
* Existing embedded content
* Existing environment variables
* Existing authentication providers
* Existing monitoring
* Existing configuration

Avoid duplicate integrations.

Reuse existing implementations whenever practical.

---

## Business Justification

Every third-party service should have a documented business or technical purpose.

Examples include:

* Payments
* Authentication
* Email delivery
* Appointment scheduling
* CRM
* Analytics
* Maps
* Search
* Chat
* Media hosting
* Marketing automation

Remove unnecessary integrations whenever practical.

---

## Vendor Neutrality

Do not design implementations that unnecessarily lock the project into a specific provider.

Favor abstraction where practical.

Separate business logic from provider-specific implementation.

Avoid tightly coupling application architecture to external services.

---

## API Integration

Review every API integration.

Verify:

* Authentication
* Authorization
* Request validation
* Error handling
* Timeout handling
* Retry behavior where appropriate
* Rate limiting awareness
* Logging

APIs should fail gracefully.

---

## Authentication Providers

If third-party authentication exists:

Review:

* Login
* Logout
* Account creation
* Password recovery
* Session management
* User synchronization

Authentication should remain secure and consistent throughout the project.

---

## Payment Providers

If payment processing exists:

Review:

* Checkout workflow
* Error handling
* Payment confirmation
* Refund workflow
* Security
* Privacy

Do not store payment credentials unless the project is specifically designed and verified to do so securely.

Prefer established payment providers with secure hosted workflows when appropriate.

---

## Email Services

Review email integrations.

Examples include:

* Contact forms
* Notifications
* Transactional email
* Marketing email

Ensure:

* Appropriate authentication
* Environment variable usage
* Error handling
* Spam protection

Never expose email credentials.

---

## CRM Integration

If CRM functionality exists:

Verify:

* Data mapping
* Field validation
* Duplicate prevention
* Error handling

Do not collect unnecessary customer information.

---

## Scheduling Services

Review scheduling integrations.

Verify:

* Availability
* Booking workflow
* Confirmation
* Cancellations
* Time zone awareness

Scheduling should remain consistent with project content.

---

## Maps & Location Services

If mapping services exist:

Review:

* Privacy implications
* Accessibility
* Performance
* Responsive behavior

Do not expose unnecessary location information.

---

## Chat Systems

Review live chat or messaging integrations.

Ensure:

* Privacy consistency
* Accessibility
* Responsive behavior
* Appropriate availability messaging

Avoid misleading visitors regarding support availability.

---

## Social Media Integrations

Review:

* Embedded feeds
* Share buttons
* Social login
* Embedded media

Ensure links and embedded content remain current.

Avoid unnecessary third-party requests.

---

## Embedded Content

Review embedded:

* Videos
* Maps
* Documents
* Calendars
* Forms
* Social posts

Verify:

* Accessibility
* Performance
* Responsive behavior
* Privacy implications

Embedded content should not degrade the visitor experience.

---

## External Scripts

Review all externally loaded scripts.

Determine:

* Purpose
* Performance impact
* Security implications
* Privacy implications

Remove scripts that no longer provide value.

Avoid loading duplicate libraries.

---

## Environment Variables

All sensitive integration configuration should use environment variables or equivalent secure configuration mechanisms.

Examples include:

* API keys
* Authentication secrets
* Access tokens
* Webhook secrets
* SMTP credentials

Never expose sensitive configuration within client-side code unless intentionally public.

---

## Secret Management

Review secret handling.

Secrets should:

* Remain outside source control.
* Never appear in documentation.
* Never appear in browser-accessible code unless intentionally public.

Rotate credentials whenever compromise is suspected.

---

## Error Handling

External services may become unavailable.

Implement graceful error handling.

Provide visitors with:

* Meaningful messages
* Alternative actions when appropriate
* Predictable behavior

Do not expose provider implementation details.

---

## Timeout Handling

Review integrations for timeout behavior.

Applications should recover gracefully when third-party services respond slowly or become unavailable.

Avoid indefinitely waiting for external services.

---

## Retry Strategy

Where appropriate:

Implement reasonable retry behavior for transient failures.

Avoid excessive retry loops.

Prevent unnecessary requests.

---

## Rate Limiting Awareness

Respect provider rate limits.

Avoid unnecessary requests.

Cache or reuse responses where appropriate.

Do not intentionally bypass provider limitations.

---

## Data Synchronization

If data is synchronized between systems:

Review:

* Update frequency
* Conflict handling
* Duplicate prevention
* Error recovery

Data consistency should remain predictable.

---

## Privacy Coordination

Review integration consistency with:

* Privacy Policy
* Cookie Policy
* Terms of Service

Visitors should understand how third-party services affect their information.

---

## Accessibility Coordination

Verify integrations preserve:

* Keyboard accessibility
* Screen reader compatibility
* Responsive layouts
* Focus management

Third-party services should not reduce accessibility wherever alternatives or configuration are available.

---

## Performance Coordination

Review integration impact on:

* Load time
* Rendering
* Network requests
* Bundle size

Load integrations efficiently.

Avoid unnecessary dependencies.

---

## Existing Integration Protection

Before replacing an integration:

Understand:

* Existing workflows
* Existing data
* Existing configuration
* Existing dependencies

Avoid breaking established business processes.

---

## Integration Validation

Before considering implementation complete verify:

* Authentication functions.
* APIs respond appropriately.
* Email delivery functions (where verifiable).
* Scheduling behaves correctly.
* Payment workflows function (where applicable).
* Chat behaves correctly.
* Maps display correctly.
* Environment variables remain secure.
* Privacy documentation remains accurate.
* Error handling functions appropriately.

If an integration cannot be fully validated within the current environment, document the required verification steps instead of assuming success.

---

## Integration Audit

When significant integration work has been completed:

Document:

* Integrations reviewed
* Integrations added
* Integrations removed
* Security improvements
* Privacy considerations
* Remaining limitations
* Outstanding TODO items

Store documentation inside:

```text id="n8k2pv"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="f5j0ma"
Integration_Audit.md
Third_Party_Review.md
External_Service_Report.md
```

Only create documentation that provides ongoing project value.

---

## Hallucination Prevention

Never invent:

* API endpoints
* Authentication providers
* Payment providers
* CRM systems
* Scheduling platforms
* Email providers
* Chat services
* Integration status
* Connected accounts
* Working credentials

Do not claim an external service is configured, operational, or verified unless that has been confirmed.

Differentiate clearly between:

* Implemented
* Configured
* Connected
* Verified
* Pending

---

## Completion Report

Summarize:

1. Integrations reviewed.
2. Integrations implemented.
3. Existing integrations preserved.
4. Security improvements.
5. Privacy considerations.
6. Remaining limitations.
7. Outstanding TODO items.
8. Manual verification still required.

---

## Final Rule

Every third-party integration introduces additional responsibility.

Implement only integrations that:

* Provide meaningful value.
* Preserve security.
* Respect visitor privacy.
* Maintain accessibility.
* Support performance.
* Minimize long-term maintenance.
* Align with business objectives.

Prefer simplicity over unnecessary external dependencies.

When uncertainty exists:

Inspect.

Verify.

Review documentation.

Protect sensitive information.

Document assumptions.

Then implement responsibly.


## 27. Internationalization & Localization

## 27. Internationalization & Localization

### Purpose

Internationalization (i18n) and Localization (l10n) ensure websites can support visitors from different languages, regions, cultures, and locales.

Projects should be designed with future international expansion in mind when practical, while avoiding unnecessary complexity for websites intended for a single language or region.

Localization extends beyond translation. It includes culturally appropriate formatting, regional conventions, accessibility, legal considerations, and user expectations.

---

## Internationalization Philosophy

Before implementing multilingual functionality determine:

* Whether multiple languages are required.
* Which regions are supported.
* Whether localized content provides business value.
* Whether the project will expand internationally.

Do not introduce multilingual infrastructure unless justified by project requirements.

When future expansion is likely, design the architecture to accommodate additional locales.

---

## Existing Localization Discovery

Before implementing localization:

Inspect the project.

Review:

* Existing language support
* Existing locale handling
* Existing translation files
* Existing routing
* Existing formatting
* Existing metadata
* Existing legal content

Preserve existing localization whenever practical.

---

## Language Strategy

Determine the project's supported languages.

Examples include:

* Single-language website
* Bilingual website
* Multi-language website

Do not assume additional languages.

Implement only verified project requirements.

---

## Translation Quality

All translated content should be:

* Accurate
* Natural
* Contextually appropriate
* Grammatically correct
* Consistent with the brand

Avoid literal word-for-word translation when it reduces clarity.

Do not rely solely on machine translation without review.

---

## Locale Management

Support locale-aware behavior where appropriate.

Examples include:

* Language selection
* Regional formatting
* Localized navigation
* Localized metadata

Locale selection should remain predictable and user-friendly.

---

## URL Structure

If multiple languages exist:

Use a consistent URL strategy.

Examples include:

* Language prefixes
* Language subdomains
* Country-specific domains

Maintain consistency throughout the project.

Do not create duplicate localized content without appropriate differentiation.

---

## Language Switching

If language switching is implemented:

Ensure:

* Current language is obvious.
* Switching preserves user context where appropriate.
* Accessibility is maintained.
* Navigation remains intuitive.

Avoid hiding language controls.

---

## Content Translation

Translate all visitor-facing content consistently.

Examples include:

* Navigation
* Headings
* Body text
* Forms
* Buttons
* Error messages
* Success messages
* Metadata
* Legal pages

Avoid partially translated interfaces.

---

## Business Information

Review business information.

Determine whether localization affects:

* Addresses
* Contact information
* Business hours
* Regional offices

Do not fabricate localized business information.

---

## Dates & Time

Display dates and times according to the active locale where appropriate.

Examples include:

* Date order
* Time format
* Time zones

Avoid assuming a single regional format.

---

## Numbers & Currency

Display:

* Numbers
* Currency
* Percentages
* Decimal separators
* Thousands separators

according to project requirements and the active locale.

Do not assume a default currency for international audiences.

---

## Units of Measurement

Review:

* Distance
* Weight
* Temperature
* Area
* Volume

Use measurement systems appropriate for the intended audience.

Avoid mixing measurement systems without explanation.

---

## Forms

Review localized forms.

Ensure:

* Labels
* Placeholders
* Validation messages
* Error messages
* Success messages

remain fully translated and culturally appropriate.

---

## Search

If search exists:

Verify localized search behavior.

Ensure visitors can discover localized content effectively.

---

## Navigation

Review navigation across all supported languages.

Ensure:

* Structure remains consistent.
* Labels remain accurate.
* Accessibility is preserved.

Avoid inconsistent navigation between languages.

---

## Images & Media

Review media for localization needs.

Examples include:

* Embedded text
* Screenshots
* Infographics
* Videos
* PDFs

Replace or localize media only when necessary.

Avoid embedding untranslated text into images whenever practical.

---

## Accessibility Coordination

Localization must preserve:

* Semantic HTML
* Screen reader compatibility
* Keyboard accessibility
* Readability

Translations should remain accessible.

---

## Right-to-Left (RTL) Support

If RTL languages are supported:

Verify:

* Layout direction
* Typography
* Navigation
* Icons
* Forms
* Responsive behavior

RTL support should be intentional and complete.

Do not partially mirror interfaces.

---

## SEO Coordination

If multiple languages exist:

Review:

* Localized metadata
* Canonical URLs
* hreflang implementation (where appropriate)
* Structured Data
* Localized sitemaps

Avoid duplicate-content issues across languages.

---

## Legal Coordination

Review whether legal documentation requires localization.

Examples include:

* Privacy Policy
* Terms of Service
* Cookie Policy
* Accessibility Statement

Do not assume translated legal documents are legally equivalent.

Recommend professional legal review where appropriate.

---

## Performance Coordination

Localization should not unnecessarily increase:

* Bundle size
* Page weight
* Duplicate assets
* Network requests

Load only required language resources whenever practical.

---

## Existing Localization Protection

Before modifying localization:

Understand:

* Existing translations
* Existing routing
* Existing locale strategy
* Existing SEO implementation

Avoid breaking existing multilingual behavior.

---

## Localization Validation

Before considering localization complete verify:

* Language selection functions.
* Navigation remains consistent.
* Forms remain translated.
* Dates display appropriately.
* Currency formatting is correct.
* Numbers display correctly.
* RTL behavior functions (when applicable).
* Accessibility remains intact.
* SEO remains consistent.
* Legal documentation remains appropriate.

---

## Localization Audit

When significant localization work has been completed:

Document:

* Languages supported
* Locales implemented
* Translation improvements
* Remaining untranslated content
* Outstanding TODO items
* Future localization recommendations

Store documentation inside:

```text id="v4m9ke"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="y2c8rd"
Localization_Audit.md
Internationalization_Report.md
Translation_Review.md
```

Only create documentation that provides ongoing project value.

---

## Hallucination Prevention

Never invent:

* Translations
* Regional offices
* Supported languages
* Currency support
* Localized pricing
* Localized legal requirements
* Country-specific business information

When translation or regional information cannot be verified:

Insert clearly identified TODO items or request clarification.

Never publish fabricated localized content.

---

## Completion Report

Summarize:

1. Languages supported.
2. Localization improvements.
3. Translation updates.
4. Accessibility considerations.
5. SEO considerations.
6. Remaining untranslated content.
7. Outstanding TODO items.
8. Human translation or legal review recommendations.

---

## Final Rule

Localization should make visitors feel that the website was created for them—not merely translated for them.

Every localized experience should remain:

* Accurate
* Accessible
* Consistent
* Performant
* Culturally appropriate
* Maintainable
* Legally aware

Implement multilingual functionality only when justified by project requirements.

When uncertainty exists:

Inspect.

Verify.

Translate responsibly.

Preserve consistency.

Document assumptions.

Then finalize the localized experience.


## 28. E-commerce Standards (When Applicable)

## 28. E-commerce Standards (When Applicable)

### Purpose

E-commerce functionality enables visitors to purchase products, services, subscriptions, memberships, bookings, or digital goods through the website.

Every e-commerce implementation should prioritize:

* Security
* Accuracy
* Transparency
* Accessibility
* Performance
* Reliability
* Customer trust
* Legal compliance

The purchasing experience should be predictable, intuitive, and professionally implemented.

---

## E-commerce Philosophy

Every purchasing workflow should minimize friction while maximizing clarity.

Visitors should always understand:

* What they are purchasing.
* What it costs.
* How payment is processed.
* What happens after purchase.
* How support is obtained.

Avoid hidden fees, misleading promotions, or confusing checkout experiences.

---

## Existing Store Discovery

Before modifying an e-commerce website:

Inspect:

* Product catalog
* Pricing structure
* Checkout workflow
* Customer accounts
* Order process
* Payment integration
* Shipping configuration
* Tax configuration
* Existing policies

Preserve existing business workflows whenever practical.

---

## Product Catalog

Review all products or services.

Ensure each listing includes, where applicable:

* Name
* Description
* Images
* Price
* Availability
* Variants
* SKU or identifier
* Category

Only publish verified product information.

---

## Product Descriptions

Descriptions should accurately explain:

* Features
* Benefits
* Limitations
* Compatibility
* Intended use

Avoid exaggerated or unsupported marketing claims.

Never fabricate specifications.

---

## Product Images

Review product media.

Ensure images are:

* Accurate
* High quality
* Optimized
* Accessible
* Representative of the actual product

Do not misrepresent products through imagery.

---

## Pricing

Display pricing clearly.

Ensure consistency across:

* Product pages
* Cart
* Checkout
* Order summaries
* Confirmation pages

Do not display conflicting prices.

---

## Taxes

Where applicable:

Clearly distinguish:

* Taxes included
* Taxes excluded
* Estimated taxes
* Final tax calculations

Do not assume tax rules.

Taxes should reflect the configured business requirements.

---

## Shipping

If physical products are sold:

Review:

* Shipping options
* Shipping costs
* Delivery estimates
* Shipping restrictions

Provide realistic shipping expectations.

---

## Inventory

If inventory is managed:

Ensure availability information remains accurate.

Do not display products as available when inventory indicates otherwise.

If inventory synchronization cannot be verified, document the limitation rather than assuming accuracy.

---

## Shopping Cart

Review:

* Add to cart
* Remove items
* Quantity changes
* Price updates
* Cart persistence

Cart behavior should remain predictable.

---

## Checkout Workflow

Review the complete checkout process.

Verify:

* Order summary
* Customer information
* Shipping information
* Payment
* Confirmation

Minimize unnecessary checkout steps.

---

## Payment Processing

Review payment functionality.

Ensure:

* Secure transmission
* Clear confirmation
* Error handling
* Accessible workflows

Never expose payment credentials.

Prefer established, secure payment providers.

---

## Order Confirmation

Successful purchases should provide:

* Confirmation message
* Order summary
* Customer reference
* Next steps

Customers should clearly understand the purchase outcome.

---

## Customer Accounts

If customer accounts exist:

Review:

* Registration
* Login
* Password reset
* Order history
* Profile management

Provide customers with appropriate account control.

---

## Digital Products

If digital goods are sold:

Verify:

* Download availability
* Licensing information
* Access control
* Download instructions

Downloads should remain available according to project requirements.

---

## Subscription Services

If subscriptions exist:

Clearly communicate:

* Billing frequency
* Renewal terms
* Cancellation process
* Pricing

Avoid hidden recurring charges.

---

## Discounts & Promotions

Review promotional pricing.

Ensure:

* Rules are consistent.
* Expiration dates are accurate.
* Discounts calculate correctly.
* Promotion messaging is clear.

Avoid misleading promotions.

---

## Refund Policy

Ensure refund behavior aligns with the published Refund Policy.

Do not imply refunds are available if project policies state otherwise.

Website functionality should accurately reflect documented business policies.

---

## Order Management

Review order lifecycle.

Examples include:

* Processing
* Fulfillment
* Shipping
* Completion
* Cancellation
* Refunds

Order status should remain understandable to customers.

---

## Notifications

Review customer notifications.

Examples include:

* Order confirmation
* Shipping confirmation
* Password reset
* Account creation
* Subscription updates

Notifications should remain accurate and professional.

---

## Fraud Prevention

Where appropriate:

Review protections such as:

* Payment validation
* Rate limiting
* Bot prevention
* Order verification

Fraud prevention should not unnecessarily block legitimate customers.

---

## Customer Privacy

Protect customer information.

Review:

* Data collection
* Storage
* Account information
* Payment information

Customer information should remain consistent with published privacy documentation.

---

## Accessibility

Verify e-commerce functionality remains accessible.

Review:

* Product browsing
* Cart
* Checkout
* Forms
* Payment workflow
* Order confirmation

Every customer should be able to complete a purchase regardless of ability.

---

## Performance

Review:

* Product images
* Catalog loading
* Search
* Checkout performance
* Cart performance

Avoid unnecessary delays during purchasing.

---

## Search & Filtering

If catalog search exists:

Verify:

* Search accuracy
* Filtering
* Sorting
* Pagination

Visitors should locate products efficiently.

---

## Existing Store Protection

Before modifying the store:

Understand:

* Existing workflows
* Existing pricing
* Existing fulfillment
* Existing integrations

Avoid disrupting operational business processes.

---

## E-commerce Validation

Before considering implementation complete verify:

* Products display correctly.
* Pricing remains consistent.
* Cart functions correctly.
* Checkout functions correctly.
* Payment integration is configured appropriately.
* Customer accounts function (if applicable).
* Shipping behaves correctly.
* Notifications remain appropriate.
* Accessibility is preserved.
* Privacy documentation remains consistent.

If payment processing, taxes, shipping, or fulfillment cannot be fully tested in the current environment, identify the required production verification steps instead of assuming correct operation.

---

## E-commerce Audit

When significant e-commerce work has been completed:

Document:

* Features reviewed
* Improvements implemented
* Existing functionality preserved
* Remaining limitations
* Outstanding TODO items
* Business review recommendations

Store documentation inside:

```text id="q7m3zy"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="a2x9lc"
Ecommerce_Audit.md
Store_Review.md
Checkout_Validation_Report.md
```

Only create documentation that provides ongoing project value.

---

## Hallucination Prevention

Never invent:

* Products
* Prices
* Inventory
* Discounts
* Shipping policies
* Refund policies
* Payment providers
* Customer reviews
* Sales figures

Do not claim successful transactions, payment verification, or fulfillment unless independently confirmed.

Clearly distinguish between configured functionality and verified operational behavior.

---

## Completion Report

Summarize:

1. Store improvements.
2. Product improvements.
3. Checkout improvements.
4. Accessibility improvements.
5. Security considerations.
6. Remaining limitations.
7. Outstanding TODO items.
8. Business verification still required.

---

## Final Rule

An e-commerce website handles customer trust as well as transactions.

Every implementation should prioritize:

* Accuracy
* Security
* Transparency
* Accessibility
* Reliability
* Privacy
* Performance
* Maintainability

Customers should always understand:

* What they are purchasing.
* What they will pay.
* What happens next.
* How to obtain assistance.

When uncertainty exists:

Inspect.

Verify.

Protect customer information.

Document assumptions.

Then finalize the purchasing experience.


## 29. Blog & CMS Standards (When Applicable)

## 29. Blog & CMS Standards (When Applicable)

### Purpose

Content Management Systems (CMS) and publishing platforms enable authorized users to create, edit, organize, publish, and maintain website content.

Every CMS implementation should prioritize:

* Accuracy
* Editorial quality
* Accessibility
* Security
* Maintainability
* Search engine optimization
* Long-term content governance

The publishing process should be structured, predictable, and easy to maintain.

---

## CMS Philosophy

A CMS exists to simplify content management without compromising technical quality.

Content creators should be able to maintain website content safely without requiring modifications to application code.

The CMS should encourage consistency rather than introducing uncontrolled variation.

---

## Existing CMS Discovery

Before modifying CMS functionality:

Inspect:

* Existing CMS platform
* Content structure
* Publishing workflow
* User roles
* Existing content models
* Categories
* Tags
* Media handling
* Existing editorial processes

Preserve established workflows whenever practical.

---

## Content Models

Review content structure.

Examples include:

* Articles
* Blog posts
* News
* Documentation
* Case studies
* FAQs
* Resources
* Announcements

Content models should accurately represent the information being managed.

Avoid unnecessary duplication.

---

## Editorial Workflow

Review the publishing workflow.

Examples include:

* Draft
* Review
* Approval
* Publication
* Revision
* Archive

The workflow should support content quality and accountability.

---

## Draft Management

Support draft content where appropriate.

Drafts should remain separate from published content.

Visitors should never access unfinished content unless intentionally allowed.

---

## Publishing

Review publishing behavior.

Verify:

* Publication status
* Publish dates
* Scheduled publishing (if applicable)
* Visibility
* URLs

Publishing should remain predictable and intentional.

---

## Scheduled Publishing

If scheduling exists:

Review:

* Future publication
* Time zones
* Visibility
* Automatic publishing

Avoid unexpected publication due to incorrect scheduling.

---

## Authors

If author information exists:

Ensure:

* Names are accurate.
* Profiles remain consistent.
* Author attribution is appropriate.

Never invent authors.

---

## Categories

Review content categorization.

Categories should:

* Improve organization
* Support navigation
* Reduce duplication

Avoid excessive category depth.

---

## Tags

If tags exist:

Ensure they:

* Improve discoverability
* Remain consistent
* Avoid duplication

Do not create unnecessary tags.

---

## Featured Content

Review featured articles or highlighted content.

Featured content should:

* Remain current
* Reflect project priorities
* Avoid becoming outdated

---

## Rich Content

Review support for:

* Images
* Video
* Audio
* Code snippets
* Tables
* Downloads

Rich content should remain accessible and responsive.

---

## Embedded Media

Review embedded:

* Videos
* Social posts
* Documents
* Maps

Ensure:

* Accessibility
* Performance
* Privacy consistency

---

## SEO Coordination

Review publishing for:

* Titles
* Metadata
* Structured Data
* Canonical URLs
* Internal linking

Published content should support discoverability without sacrificing readability.

---

## Accessibility

Verify published content remains accessible.

Review:

* Heading hierarchy
* Alternative text
* Tables
* Lists
* Links
* Media

Editors should be encouraged to publish accessible content.

---

## Revision History

If revisions exist:

Ensure previous versions remain recoverable where appropriate.

Revision history should improve accountability.

---

## Content Versioning

Review version management.

Published content should clearly distinguish:

* Draft
* Published
* Archived
* Scheduled

Avoid publishing incomplete revisions.

---

## Search

Review CMS search functionality.

Verify:

* Accuracy
* Categories
* Tags
* Filters
* Accessibility

Visitors should locate content efficiently.

---

## Content Archiving

Older content should remain manageable.

Review:

* Archives
* Historical content
* Redirects
* Outdated information

Avoid broken links caused by archived content.

---

## Content Lifecycle

Review how content progresses through its lifecycle.

Examples include:

* Creation
* Editing
* Review
* Publication
* Maintenance
* Archiving
* Removal

Content should not become permanently outdated.

---

## User Roles & Permissions

If multiple CMS users exist:

Review:

* Editors
* Authors
* Administrators
* Contributors

Permissions should follow the principle of least privilege.

Users should only have access necessary for their responsibilities.

---

## Media Coordination

Ensure uploaded media follows the Media & Asset Management standards established elsewhere in this document.

Avoid duplicate uploads.

Maintain consistent naming and optimization.

---

## Existing CMS Protection

Before modifying CMS functionality:

Understand:

* Existing workflows
* Existing editorial processes
* Existing user permissions
* Existing URL structures

Avoid disrupting established publishing operations.

---

## CMS Validation

Before considering implementation complete verify:

* Publishing functions correctly.
* Drafts remain private.
* Scheduled publishing behaves correctly (if applicable).
* Categories remain organized.
* Tags remain consistent.
* Search functions correctly.
* Accessibility remains preserved.
* SEO remains appropriate.
* User permissions remain secure.

If publishing workflows or scheduled content cannot be fully validated in the current environment, document the required verification steps rather than assuming correct behavior.

---

## CMS Audit

When significant CMS work has been completed:

Document:

* Workflow improvements
* Content model improvements
* Editorial improvements
* Remaining limitations
* Outstanding TODO items
* Future recommendations

Store documentation inside:

```text id="d5w9hk"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="m8r2qy"
CMS_Audit.md
Editorial_Workflow_Report.md
Content_Management_Review.md
```

Only create documentation providing ongoing project value.

---

## Hallucination Prevention

Never invent:

* Articles
* Authors
* Publication dates
* Editorial approvals
* Categories
* Tags
* Documentation
* News releases
* Blog posts

Do not claim content has been reviewed, approved, or published unless that has actually occurred.

Clearly distinguish between implemented CMS functionality and published editorial content.

---

## Completion Report

Summarize:

1. CMS improvements.
2. Editorial workflow improvements.
3. Publishing improvements.
4. Accessibility considerations.
5. SEO considerations.
6. Remaining limitations.
7. Outstanding TODO items.
8. Editorial review recommendations.

---

## Final Rule

A CMS should empower content creators while preserving consistency, quality, and long-term maintainability.

Every implementation should:

* Support structured publishing.
* Preserve editorial quality.
* Maintain accessibility.
* Protect content integrity.
* Improve discoverability.
* Remain secure.
* Scale with future content growth.

When uncertainty exists:

Inspect.

Review existing workflows.

Preserve editorial consistency.

Document assumptions.

Then finalize the publishing system.


## 30. AI Development & Hallucination Prevention

## 30. AI Development & Hallucination Prevention

### Purpose

This section defines the mandatory operational standards for any Artificial Intelligence system assisting with the analysis, development, modification, documentation, testing, deployment preparation, or maintenance of this project.

These standards exist to ensure AI-generated work is:

* Accurate
* Verifiable
* Maintainable
* Secure
* Accessible
* Legally consistent
* Production-ready
* Minimized in scope
* Appropriate for the specific project

These requirements apply regardless of the AI model, provider, platform, IDE, or development environment.

---

## Primary Objective

The AI's objective is to improve the project while preserving:

* Existing functionality
* Existing architecture
* Repository integrity
* Business requirements
* Security
* Accessibility
* Legal compliance
* Performance
* Documentation
* Maintainability

The AI should act as an experienced software engineer—not an autonomous redesign tool.

---

## Repository-First Philosophy

Before making any recommendation or modification:

Inspect the repository.

Understand:

* Project structure
* Architecture
* Framework
* Build system
* Dependencies
* Existing documentation
* Existing standards
* Existing implementation patterns

Never assume repository structure.

Never infer functionality that has not been verified.

---

## Context Awareness

Every task should be evaluated within the context of the entire project.

Consider:

* Existing components
* Existing utilities
* Existing services
* Existing APIs
* Existing documentation
* Existing styles
* Existing routing
* Existing environment configuration

Avoid treating files as isolated documents.

---

## Project-Specific Adaptation

Tailor every implementation to the specific project.

Do not apply generic templates blindly.

Consider:

* Business type
* Website purpose
* Target audience
* Technology stack
* Existing architecture
* Project maturity
* Hosting platform
* Deployment model

Solutions should fit the project rather than forcing the project to fit a generic solution.

---

## Hallucination Prevention

Never invent:

* Business information
* Products
* Services
* Employees
* Customers
* Testimonials
* Reviews
* Pricing
* Contact information
* API endpoints
* Database schemas
* Environment variables
* Authentication providers
* Third-party integrations
* Deployment status
* Test results
* Legal claims
* Certifications
* Compliance claims
* SEO rankings
* Analytics results

Every factual statement should be supported by verified project evidence or clearly identified as a recommendation.

---

## Unknown Information

If required information is unavailable:

Follow this order:

1. Inspect project files.
2. Review existing documentation.
3. Review existing configuration.
4. Search for related implementation.
5. Infer only when strongly supported by existing evidence.
6. Insert clearly documented TODO items when appropriate.
7. Request clarification only when implementation cannot responsibly continue.

Never fabricate missing information.

---

## Existing Code Preservation

Before modifying code:

Determine:

* Why it exists.
* What depends on it.
* Whether it can be reused.
* Whether modification is safer than replacement.

Preserve working implementations whenever practical.

Avoid unnecessary rewrites.

---

## Minimal Change Principle

Modify only the files necessary to complete the requested work.

Avoid:

* Unrelated formatting
* Unrelated refactoring
* Dependency updates without justification
* Cosmetic rewrites
* File renaming without purpose
* Architecture changes without explicit need

Small, focused changes reduce risk.

---

## Architecture Preservation

Respect the existing architecture.

Follow established:

* Folder structure
* Naming conventions
* Component organization
* State management
* Routing
* Dependency usage
* Coding style

Avoid introducing conflicting architectural patterns.

---

## Dependency Discipline

Before adding dependencies:

Determine:

* Whether existing dependencies already provide the functionality.
* Whether native platform features are sufficient.
* Whether the dependency is actively maintained.
* Whether the dependency introduces unnecessary complexity.

Favor fewer dependencies whenever practical.

---

## Security Awareness

Treat every implementation as security-sensitive.

Review changes affecting:

* Authentication
* Authorization
* User input
* Browser storage
* Secrets
* APIs
* Environment variables
* File uploads
* Third-party integrations

Never reduce existing security protections.

---

## Accessibility Awareness

Accessibility is a mandatory engineering requirement.

Every UI modification should preserve or improve:

* Semantic HTML
* Keyboard navigation
* Screen reader compatibility
* Focus management
* Responsive usability
* Color contrast

Never sacrifice accessibility for visual preference.

---

## Legal Awareness

Review legal implications whenever modifications affect:

* Data collection
* Contact forms
* Authentication
* Payments
* Analytics
* Cookies
* Third-party services

Ensure legal documentation remains consistent with implementation.

---

## Documentation Discipline

Whenever implementation changes project behavior:

Determine whether documentation also requires updating.

Examples include:

* README
* Configuration
* Policies
* Architecture
* Deployment
* Audit reports

Documentation should remain synchronized with implementation.

---

## AI-Generated Content

All AI-generated content should undergo review before publication.

Review for:

* Accuracy
* Business consistency
* Legal consistency
* Brand consistency
* Accessibility
* Grammar
* Technical correctness

Never publish generated content blindly.

---

## Verification Before Completion

Before considering work complete:

Review:

* Requested objective
* Files modified
* Existing functionality
* Security
* Accessibility
* Documentation
* Performance
* Legal consistency

Completion requires verification—not assumption.

---

## Self-Audit

Before responding:

Ask internally:

* Was only the requested scope modified?
* Were existing standards preserved?
* Was documentation updated where necessary?
* Were assumptions avoided?
* Are remaining limitations documented?
* Are TODO items clearly identified?
* Is the implementation maintainable?

Correct issues whenever practical before finalizing.

---

## Communication Standards

Clearly distinguish between:

* Verified
* Implemented
* Configured
* Reviewed
* Recommended
* Pending
* Unknown

Do not overstate certainty.

Do not imply verification that has not occurred.

---

## TODO Management

When implementation cannot be completed responsibly:

Create actionable TODO items.

Each TODO should describe:

* What remains
* Why it remains
* Required information
* Recommended next action

Avoid vague TODO comments.

---

## Testing Awareness

Do not claim testing has occurred unless it has actually been performed.

Differentiate between:

* Static review
* Manual inspection
* Executed testing
* Recommended testing

State limitations clearly.

---

## Deployment Awareness

Do not claim:

* Successful deployment
* Live verification
* DNS propagation
* SSL verification
* Production availability

unless independently verified.

Implementation and deployment are separate activities.

---

## Existing AI Documentation

Store AI-generated reports, audits, and implementation summaries that provide long-term value inside:

```text id="k2v8ra"
/PRODUCTION_STANDARDS/
```

Use descriptive filenames.

Avoid storing temporary reasoning or disposable notes.

---

## AI Validation Checklist

Before finalizing work verify:

* Repository inspected.
* Existing implementation understood.
* Existing functionality preserved.
* Minimal scope maintained.
* Security preserved.
* Accessibility preserved.
* Legal consistency maintained.
* Documentation updated where appropriate.
* No fabricated information introduced.
* Remaining limitations documented.
* TODO items added where appropriate.
* Recommendations clearly separated from completed work.

---

## AI Audit

When significant AI-assisted work has been performed:

Document:

* Scope of work
* Files modified
* Standards applied
* Remaining limitations
* Outstanding TODO items
* Human review recommendations

Store documentation inside:

```text id="p7x5mf"
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text id="c9q2lz"
AI_Implementation_Report.md
AI_Audit.md
AI_Review_Summary.md
```

Only create reports that provide ongoing project value.

---

## Human Review

Recommend human review whenever work involves:

* Legal interpretation
* Regulatory compliance
* Financial information
* Medical information
* Business strategy
* Branding decisions
* Security architecture
* Production deployment

AI assistance should complement—not replace—appropriate human expertise.

---

## Completion Report

Summarize:

1. Scope completed.
2. Repository analysis performed.
3. Existing functionality preserved.
4. Documentation updated.
5. Remaining limitations.
6. Outstanding TODO items.
7. Human review recommendations.
8. Items requiring future verification.

---

## Final Rule

The AI should behave as a disciplined engineering assistant that values correctness over speed.

Every action should be:

* Verified where possible.
* Project-specific.
* Minimally invasive.
* Technically justified.
* Secure.
* Accessible.
* Legally aware.
* Maintainable.
* Fully documented.

Never prioritize convenience over correctness.

Never prioritize assumptions over evidence.

When uncertainty exists:

Inspect.

Understand.

Verify.

Implement carefully.

Validate.

Document.

Only then consider the task complete.


## 31. Maintenance & Future Scalability

## 31. Maintenance & Future Scalability

### Purpose

A production website is a living software project that requires ongoing maintenance, monitoring, security updates, documentation, and continuous improvement throughout its lifecycle.

This section establishes standards for maintaining, expanding, and supporting the project after deployment while preserving stability, security, performance, accessibility, legal compliance, and long-term maintainability.

Every implementation should consider not only today's requirements, but also future growth.

---

## Maintenance Philosophy

Maintenance should be:

* Proactive
* Predictable
* Documented
* Low risk
* Incremental
* Well tested

Avoid allowing technical debt, outdated dependencies, inaccurate documentation, or neglected content to accumulate over time.

Continuous maintenance is preferable to infrequent large-scale rewrites.

---

## Long-Term Ownership

Assume the project will continue to evolve.

Every implementation should support future:

* Features
* Developers
* AI systems
* Clients
* Business growth
* Technology changes

Code written today should remain understandable years from now.

---

## Existing Project Preservation

Before making maintenance changes:

Review:

* Existing architecture
* Existing documentation
* Existing integrations
* Existing deployment
* Existing business requirements

Preserve existing functionality whenever practical.

Avoid unnecessary redesigns.

---

## Technical Debt Management

Regularly identify technical debt.

Examples include:

* Duplicate code
* Outdated dependencies
* Deprecated APIs
* Legacy components
* Obsolete configuration
* Unused assets
* Temporary workarounds

Document technical debt rather than ignoring it.

Prioritize remediation based on business impact and risk.

---

## Dependency Maintenance

Review project dependencies periodically.

Determine:

* Maintenance status
* Security advisories
* Compatibility
* Deprecation
* Project necessity

Remove unused dependencies whenever practical.

Avoid unnecessary dependency growth.

---

## Security Maintenance

Periodically review:

* Dependencies
* Authentication
* Authorization
* Security headers
* CSP
* Secrets
* Environment variables
* Third-party integrations

Security maintenance should be ongoing—not event-driven.

---

## Documentation Maintenance

Documentation should evolve alongside implementation.

Review:

* README
* Configuration
* Policies
* Architecture
* Deployment
* Audit reports

Documentation should never become outdated.

---

## Content Maintenance

Review published content periodically.

Identify:

* Outdated information
* Broken links
* Expired promotions
* Incorrect contact information
* Obsolete services
* Inaccurate pricing

Content should accurately represent the current business.

---

## Legal Maintenance

Review legal documentation whenever implementation changes affect:

* Privacy
* Cookies
* Authentication
* Payments
* Data collection
* Third-party services

Legal documentation should remain synchronized with the website.

---

## Accessibility Maintenance

Accessibility should be reviewed after significant:

* Design changes
* Feature additions
* Content updates
* Framework upgrades

Maintain accessibility throughout the project's lifecycle.

---

## Performance Maintenance

Review performance periodically.

Examples include:

* Core Web Vitals
* Image optimization
* Bundle size
* Third-party scripts
* Caching
* Asset optimization

Performance should remain acceptable as the project grows.

---

## Scalability Planning

Design new functionality with future expansion in mind.

Favor:

* Modular architecture
* Reusable components
* Shared utilities
* Configurable behavior

Avoid tightly coupled implementations.

---

## Feature Expansion

When adding new features:

Determine:

* Business value
* Maintenance cost
* Performance impact
* Accessibility impact
* Security implications

Expand deliberately.

Avoid unnecessary feature growth.

---

## Refactoring Strategy

Refactor only when it provides measurable long-term value.

Examples include:

* Reducing complexity
* Improving maintainability
* Improving readability
* Improving performance
* Improving security

Avoid refactoring solely for stylistic preference.

---

## Backup & Recovery Planning

Ensure important project assets can be recovered.

Examples include:

* Source code
* Configuration
* Documentation
* Policies
* Media
* Database backups (when applicable)

Backup strategies should align with the project's hosting and operational requirements.

Do not assume backups exist unless verified.

---

## Monitoring Maintenance

Review operational monitoring periodically.

Ensure:

* Analytics remain relevant.
* Error monitoring functions.
* Performance monitoring remains useful.
* Alerts remain meaningful.

Remove obsolete monitoring.

---

## Configuration Maintenance

Review configuration after:

* Framework upgrades
* Dependency updates
* Hosting changes
* Infrastructure changes

Configuration should remain current and documented.

---

## Environment Variable Maintenance

Review environment variables periodically.

Ensure:

* Unused variables are removed.
* Naming remains consistent.
* Documentation remains accurate.
* Secrets remain protected.

Never expose sensitive configuration.

---

## Asset Maintenance

Review:

* Images
* Fonts
* Icons
* Videos
* Downloads

Remove obsolete assets.

Optimize newly added assets.

Maintain organization.

---

## Repository Maintenance

Maintain repository quality.

Review:

* Directory structure
* Duplicate files
* Unused code
* Temporary files
* Documentation

Repository organization should remain consistent over time.

---

## AI Maintenance

Future AI systems should continue following this standards document.

Store valuable AI-generated reports inside:

```text
/PRODUCTION_STANDARDS/
```

Avoid accumulating obsolete reports.

Retain documentation with ongoing engineering value.

---

## Continuous Improvement

Encourage measured improvements in:

* Security
* Accessibility
* Performance
* Documentation
* User experience
* Maintainability

Avoid unnecessary redesigns.

Improve incrementally.

---

## End-of-Life Planning

When features, services, or technologies become obsolete:

Plan for:

* Migration
* Deprecation
* Documentation
* User communication
* Safe removal

Avoid abrupt removal of critical functionality without appropriate planning.

---

## Existing Project Protection

Maintenance should preserve:

* Business continuity
* Existing workflows
* Existing integrations
* Existing data
* Existing documentation

Avoid introducing regressions during maintenance.

---

## Maintenance Validation

Before completing maintenance work verify:

* Existing functionality remains intact.
* Documentation is updated.
* Security remains preserved.
* Accessibility remains preserved.
* Performance remains acceptable.
* Legal consistency is maintained.
* Repository organization remains consistent.

---

## Maintenance Audit

When significant maintenance work has been performed:

Document:

* Maintenance completed
* Technical debt addressed
* Dependencies reviewed
* Remaining risks
* Outstanding TODO items
* Future recommendations

Store documentation inside:

```text
/PRODUCTION_STANDARDS/
```

using descriptive filenames such as:

```text
Maintenance_Report.md
Scalability_Assessment.md
Technical_Debt_Review.md
Lifecycle_Audit.md
```

Only create reports providing long-term project value.

---

## Hallucination Prevention

Never claim:

* Successful upgrades
* Completed deployments
* Security verification
* Backup verification
* Monitoring verification
* Dependency compatibility
* Performance improvements

unless independently verified.

Clearly distinguish between:

* Reviewed
* Implemented
* Recommended
* Verified
* Pending

---

## Completion Report

Summarize:

1. Maintenance completed.
2. Technical debt addressed.
3. Documentation updated.
4. Security considerations.
5. Scalability improvements.
6. Remaining limitations.
7. Outstanding TODO items.
8. Future maintenance recommendations.

---

## Final Rule

A successful website is not defined by its initial launch.

It is defined by its ability to remain:

* Secure
* Accessible
* Performant
* Reliable
* Legally compliant
* Well documented
* Maintainable
* Scalable

Every maintenance decision should improve the long-term health of the project while minimizing unnecessary risk.

When uncertainty exists:

Inspect.

Verify.

Preserve existing functionality.

Document changes.

Plan for future growth.

Then complete the maintenance work.

---

## Closing Statement

This document establishes the minimum production standards for all websites developed under these guidelines.

Every project should strive to meet or exceed these standards while remaining appropriate for its specific business objectives, technical requirements, and intended audience.

These standards are intended to promote:

* Engineering excellence
* Security by design
* Accessibility by default
* Privacy by design
* Legal awareness
* Maintainability
* Long-term scalability
* Consistent quality

Where conflicts arise, prioritize:

1. Applicable laws and regulations.
2. Security.
3. Privacy.
4. Accessibility.
5. Data integrity.
6. Existing functionality.
7. Business requirements.
8. Maintainability.
9. Performance.
10. Aesthetic preference.

The objective is not simply to build websites.

The objective is to build websites that remain reliable, trustworthy, maintainable, and valuable throughout their entire lifecycle.

These standards should evolve alongside technology, best practices, and business needs while preserving the core principles of quality, responsibility, and professional software engineering.



