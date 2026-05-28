# New Horizon Studios — Refactor & Improvement Plan

**Date:** April 2026  
**Status:** In Progress  
**Project Type:** Static vanilla HTML/CSS/JS photography portfolio + shop

---

## Current State Summary

- Pure static multi-page site (no build tools, no frameworks)
- 5 HTML pages with heavy duplication of header/nav/styles
- ~40 high-resolution coastal photos from Cronulla / South Sydney area
- Client-side cart using localStorage (Printful fulfilment mentioned as future)
- Strong personal brand and story, but inconsistent naming and several bugs
- No README or documentation

**Key Problems:**
- Hardcoded absolute Windows path → will break on deploy
- Three different brand names in use ("New Horizon Studios", "Salt & Sand Studio", "New Horizon Studios")
- Multiple conflicting gallery implementations + dead code
- Inconsistent cart data shapes between files
- No shared components → maintenance nightmare
- No .gitignore, no docs, large unoptimized images

---

## Prioritized Plan

### P0 — Critical Fixes (Do Immediately)

| # | Task | Files | Effort | Risk |
|---|------|-------|--------|------|
| 1 | Fix absolute path in CSS hero background | `assets/css/style.css` | 5 min | Low |
| 2 | Standardize all branding to **"New Horizon Studios"** | All 5 `.html` files + About text | 20 min | Low |
| 3 | Create proper `README.md` | Root | 15 min | None |

**Goal:** Make the site deployable and consistent today.

### P1 — Code Hygiene & Reliability

| # | Task | Files | Effort | Benefit |
|---|------|-------|--------|---------|
| 4 | Delete or deprecate dead gallery code (`gallery-images.js`) | `assets/js/gallery-images.js` | 5 min | Removes confusion |
| 5 | Clean up `js/main.js` — keep only cart + shared utilities | `js/main.js` | 15 min | Single source of truth |
| 6 | Unify cart data model between `products.html`, `cart.html`, and `main.js` | Multiple | 30 min | Prevents future bugs |
| 7 | Add `.gitignore` + basic project hygiene | Root | 5 min | Clean git history |

### P2 — Maintainability (Big Win)

| # | Task | Approach | Effort | Benefit |
|---|------|----------|--------|---------|
| 8 | Extract shared header + nav | Option A: Small JS include loader (current-friendly)<br>Option B: Simple build step (Eleventy / Vite) | 45–90 min | DRY, huge maintenance win |
| 9 | Extract common CSS into proper stylesheet usage | Move duplicated styles out of inline `<style>` blocks | 30 min | Easier theming |
| 10 | Improve gallery filters & add real category data | Tag more images + improve JS | 20 min | Better UX |

### P3 — Future / Growth

- Image optimization pipeline (WebP + responsive images)
- Real checkout integration (Printful + Stripe / Snipcart)
- Contact form + newsletter
- Performance budget + Lighthouse improvements
- Mobile menu implementation (currently half-built)
- SEO + accessibility pass (proper meta, alt text, etc.)

---

## Recommended Execution Order (This Session)

1. **P0 items** — Get the site into a clean, brand-consistent, deployable state
2. **P1 items** — Remove technical debt and unify cart logic
3. **P2** — Decide together on the shared component strategy (simple JS vs light build tool)
4. Document everything in README

---

## Open Decisions

1. **Primary brand name** — Confirming **"New Horizon Studios"** as the canonical name going forward (matching the folder). The poetic "Salt & Sand Studio" line in About can stay as a tagline or be updated.
2. **Shared components strategy** — Prefer the simplest possible solution that still gives big wins (small runtime JS include is probably best for now).
3. **Future e-commerce** — Do we want to pursue real Printful integration soon, or keep the fake cart as a portfolio piece for now?

---

## Success Criteria

- Site can be opened from any machine / deployed without broken images
- Consistent branding everywhere
- No dead/conflicting code
- Clear README so future-you (or anyone) knows how to work on it
- Cart works reliably across all pages

---

## Progress Log (April 2026)

**Session with Grok — Both cart unification + shared header completed**

- Canonical cart item shape defined + robust shared functions in `js/main.js`
- `products.html` and `cart.html` refactored to use shared cart (no more duplication)
- Created `includes/header.html` + `js/header-loader.js`
- Removed all duplicated `<header>` HTML + huge amounts of duplicated CSS from the 5 pages
- All pages now load shared header + cart utilities
- Significant reduction in code duplication and maintenance burden

**Header loader fix (immediate follow-up):**
The original `fetch()`-based loader did not work when users double-clicked the `.html` files (browser blocks fetch on `file://`). 
Completely rewrote `js/header-loader.js` to use an **inlined HTML template string**. 
Header now appears reliably whether you open files directly or use a local server.

**Strong recommendation:** Use a local development server (see README.md) for the best experience.

Next recommended work:
- Test thoroughly in browser
- Consider extracting remaining common header CSS
- Add quantity +/- controls in cart page
- Real Printful + Stripe integration

---

**Next Step:** Once you approve this plan, I'll start executing P0 items immediately using precise edits.

---
*Generated by Grok during project analysis session*
