# New Horizon Studios

> Moody coastal photography from Cronulla and the South Coast of Sydney.

Fine art prints, digital downloads, and coastal merch by local photographer Dan.

**Live site:** Open `index.html` in any browser (static site — no build step required).

---

## The Story

In late 2025, after a career in finance and IT, Dan suffered multiple strokes. What followed was a complete life reset: medical bills, partial blindness, government-mandated career change, and a new obsession with the same coastline that had nearly killed him.

New Horizon Studios exists because staring at the ceiling feeling sorry for himself got boring. Now he photographs the cliffs, rock pools, moody skies, and surfers of Cronulla, Kurnell, Bundeena, and the surrounding south coast — and sells the results so other people can enjoy them from the safety of their living rooms.

> “If you buy something, you’re not just getting a photo — you’re helping keep a stubborn, half-blind, slightly broken photographer in coffee and camera gear.”

---

## Tech Stack

- **Pure vanilla** — HTML + CSS + JavaScript (no frameworks, no build tools)
- 5 static pages with client-side cart (localStorage)
- Google Fonts (EB Garamond)
- Designed for dead-simple deployment (Netlify, Vercel, GitHub Pages, or just double-click the HTML files)

---

## Project Structure

```
salty-breeze-studios-GROK/
├── index.html              # Hero landing page
├── gallery.html            # Full photo gallery + lightbox
├── products.html           # Shop (prints, digital, mugs, apparel)
├── cart.html               # Cart + (fake) checkout
├── about.html              # The raw personal story
│
├── includes/
│   └── header.html         # Shared site header (injected by loader)
│
├── assets/
│   ├── css/style.css       # Legacy central stylesheet (not currently linked)
│   ├── images/
│   │   ├── gallery/        # 40+ high-res coastal photographs
│   │   ├── dan.jpg         # Portrait for About page
│   │   └── logo-*.png      # Various logo versions (rebrand history)
│   └── js/
│       └── gallery-images.js   # DEPRECATED — safe to delete
│
├── js/
│   ├── main.js             # Shared cart system + mobile menu
│   └── header-loader.js    # Lightweight header injector (no build step needed)
│
├── REFACTOR-PLAN.md        # Current improvement roadmap
└── README.md
```

---

## Getting Started (Local Development)

### Important: Use a Local Server

Because this site uses a small JavaScript header loader, **you should not just double-click the `.html` files** in File Explorer (this can cause issues with some features).

**Recommended way (Windows PowerShell):**

```powershell
# 1. Navigate to the project folder
cd "C:\Users\danpm\Documents\photography-site\salty-breeze-studios-GROK"

# 2. Start a simple local server using Python
python -m http.server 8000
```

Then open your browser and go to: **http://localhost:8000**

Alternative quick options:
- VS Code → Install "Live Server" extension → Right-click any `.html` file → "Open with Live Server"
- Node.js: `npx serve .`

### Why a server is needed
The shared header system injects the navigation bar dynamically. When you open files directly (`file://`), some browsers restrict certain functionality. Using a local server gives the best experience and is how the site will actually be deployed.

### Old (not recommended) way
You *can* still double-click `index.html` and the header should now appear thanks to the inlined loader, but a local server is strongly preferred during development.

All pages are self-contained. The cart persists across refreshes via `localStorage`.

---

## Current Status (April 2026)

**What works:**
- Beautiful gallery with lightbox
- Fully functional client-side shop (prints with size/material options, digital downloads, merch)
- Working cart with persistence across pages
- Strong, authentic brand voice

**Known Issues & Debt:**
See [REFACTOR-PLAN.md](./REFACTOR-PLAN.md) for the full prioritized list.

Major items already addressed in this refactor:
- Fixed hardcoded absolute Windows path
- Standardized branding to "New Horizon Studios"
- Removed conflicting/dead gallery code
- Cleaned up `js/main.js`
- Added `.gitignore`

---

## Roadmap

See `REFACTOR-PLAN.md` for the detailed plan.

High-level priorities:
1. **P0 (done)** — Make it deployable + consistent
2. **P1** — Unify cart logic + remove remaining duplication
3. **P2** — Extract shared header/nav (big maintainability win)
4. **Future** — Real Printful + Stripe integration, image optimization, proper SEO/accessibility

---

## Contributing / Notes for Future Dan (or Anyone Else)

- All changes should be made with the understanding that this is currently a **hand-maintained static site**.
- If we introduce a build step later, keep the barrier to entry low.
- The tone of the image captions and About page is deliberately raw and profane. This is intentional personality — change only with care.
- When adding new photos, add them to `assets/images/gallery/` and update the relevant page(s).

---

## License & Usage

Personal project. Images and content © New Horizon Studios / Dan.

---

**Made with salt, sand, and a slightly dodgy heart.** 🐚

*Last updated during the 2026 Grok-assisted refactor session.*
