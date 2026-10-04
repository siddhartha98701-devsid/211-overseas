# 211 Overseas — International Education & Overseas Career Consultancy

A complete, production-quality marketing website for **211 Overseas**, an Ahmedabad-based study abroad and overseas career consultancy.

The content strictly adheres to `NEW_Website_Content.pdf` as the single source of truth without invented claims, fabricated statistics, or stock-filler fluff.

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism System
- **3D Graphics**: Three.js via `@react-three/fiber` & `@react-three/drei`
- **Typography**: `Instrument Serif` (editorial display) + `Inter Tight` (clean UI body) via `next/font/google`
- **Animation**: `Framer Motion` (spring physics, iOS tap feedback, scroll reveals)
- **Forms**: `react-hook-form` + `zod` runtime schema validation
- **Icons**: `lucide-react` (1.5px thin-stroke line icons)

---

## 🎨 Design Direction

- **Background**: Pure white (`#FFFFFF`) throughout. Zero dark sections, zero muddy gradients.
- **Palette**: Near-black text (`#0B0B0F`), neutral cool greys, and one restrained accent: deep ink blue (`#1D3FFF`).
- **Glassmorphism**: Discipline-first frosted translucent surfaces (`backdrop-filter: blur(24px-32px) saturate(160%)`, `background: rgba(255, 255, 255, 0.65-0.82)`, `border: 1px solid rgba(255, 255, 255, 0.85)`). Soft ambient background blobs sit behind the glass to make the frost effect distinctly visible against pure white.
- **iOS-Like UI**: Large radii (`rounded-[24px]` to `rounded-[32px]`), pill buttons (`rounded-full`), SF-style segmented controls for category switching, toggle switches for the enquiry form, and bottom-sheet menu on mobile.
- **Typography as Hero**: Oversized editorial display headlines, tight letter-spacing, italic emphasis on focal words.

---

## 🌍 Signature 3D Interactive Globe

The hero features an interactive WebGL dotted landmass globe inspired by `noartmusic.com`:
- **Fibonacci point distribution** (~22k points on desktop, clustered onto continental landmasses with land-check filtering).
- **Slow auto-rotation** (`~0.04 rad/s`) with touch and mouse drag-to-rotate inertia. Pauses on drag and smoothly resumes after 2 seconds.
- **Origin Pin**: **Ahmedabad (HQ)** highlighted in deep ink blue (`#1D3FFF`) with a continuous pulsating radar ring.
- **Primary Destination Pins**: **Seoul, Berlin, and Dubai**, connected via animated quadratic bezier flight arcs with travelling photon particles.
- **Global Pins**: Tokyo, Taipei, Singapore, London, New York, Toronto, and Sydney.
- **Interactive Tooltips**: Hovering or tapping pins reveals a frosted glass card linking directly to destination pathways.
- **Accessibility & Performance**:
  - `prefers-reduced-motion` respected (stops auto-rotation and particles).
  - `devicePixelRatio` capped at 2.
  - Dynamic client-only lazy loading with a clean static fallback for WebGL-disabled environments.
  - Interactive country highlighting on the **Other Destinations** page.

---

## 📁 Project Architecture

```
211-overseas/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── enquiry/route.ts        # Server route handler for profile submissions
│   │   ├── about/page.tsx              # About Us & 4 Focus Areas
│   │   ├── contact/page.tsx            # Contact details + Enquiry Form
│   │   ├── other-destinations/         # Global options + interactive globe highlights
│   │   ├── privacy-policy/page.tsx     # Privacy Policy
│   │   ├── study-in-south-korea/       # Featured study destination + universities + course tabs
│   │   ├── terms-and-conditions/       # Terms & Conditions
│   │   ├── work-in-germany/            # Healthcare career tracks (Nurses & Physiotherapists)
│   │   ├── work-in-uae/                # UAE/Dubai career sectors & 7-step process
│   │   ├── globals.css                 # Glassmorphism, typography, and theme tokens
│   │   ├── layout.tsx                  # Root layout, Google Fonts, JSON-LD Schema
│   │   ├── page.tsx                    # Home page orchestrator
│   │   ├── robots.ts                   # Search engine crawler instructions
│   │   └── sitemap.ts                  # Dynamic XML sitemap
│   ├── components/
│   │   ├── globe/
│   │   │   ├── Globe.tsx               # R3F Three.js WebGL dotted globe
│   │   │   └── GlobeWrapper.tsx        # Lazy loader + fallback boundary
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Hero with frosted glass panel & 3D globe
│   │   │   ├── PathwaysSection.tsx     # Key Pathways (South Korea highlighted)
│   │   │   ├── NotSureSection.tsx      # 7-question checklist
│   │   │   ├── HowItWorksSection.tsx   # 7-step timeline (mobile scroll-snap / desktop vertical)
│   │   │   ├── WhyUsSection.tsx        # Editorial typographic 5-point layout
│   │   │   ├── WhoCanConnectSection.tsx# Segmented profile chips
│   │   │   ├── CounsellingSection.tsx  # Guiding questions + limited slots note
│   │   │   ├── FormSection.tsx         # Section wrapper for enquiry form
│   │   │   └── EnquiryForm.tsx         # Full form with floating labels & iOS toggles
│   │   └── ui/
│   │       ├── Button.tsx              # Pill buttons with haptic spring tap states
│   │       ├── Footer.tsx              # 4-column footer with full mandatory disclaimer
│   │       ├── GlassCard.tsx           # Reusable frosted glass container
│   │       ├── Navbar.tsx              # Floating pill navbar + iOS bottom sheet
│   │       ├── ScrollReveal.tsx        # Subtle spring fade-up reveal wrapper
│   │       └── SectionHeader.tsx       # Standardized section header
│   ├── content/
│   │   └── site.ts                     # SINGLE SOURCE OF TRUTH for all copy
│   └── lib/
│       └── utils.ts                    # Class name utilities
├── public/                             # Static assets
├── package.json
└── README.md
```

---

## 🚀 Running Locally

1. Navigate to the project folder:
   ```bash
   cd "211-overseas"
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deployment to Vercel

1. Push your repository to GitHub / GitLab / Bitbucket:
   ```bash
   git add .
   git commit -m "feat: complete production website for 211 Overseas"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com):
   - Click **Add New Project**.
   - Import your repository.
   - Leave the preset as **Next.js** (framework auto-detected).
   - Click **Deploy**.
3. All routes are pre-rendered statically with zero configuration needed.

---

## ⚙️ Customization Guide

### 1. How to Swap the Accent Colour
The site uses a single restrained deep tone (`#1D3FFF`). To change it:
- Open `src/app/globals.css`.
- Modify `--color-accent: #1D3FFF;` to your preferred hex (e.g. warm vermilion `#E64A19` or forest `#0F766E`).
- Modify `ACCENT_COLOR` in `src/components/globe/Globe.tsx` (`const ACCENT_COLOR = '#1D3FFF'`).

### 2. How to Add or Modify Globe Pins
- Open `src/components/globe/Globe.tsx`.
- Edit the `GLOBE_PINS` array:
  ```typescript
  {
    name: 'Auckland',
    country: 'New Zealand',
    lat: -36.8485,
    lon: 174.7633,
    href: '/other-destinations'
  }
  ```
  The globe will automatically project the 3D pin coordinates and attach hover tooltips.

### 3. How to Update Website Copy
All copy is centralized in `src/content/site.ts`. Modifying strings in this file immediately updates headers, lists, tags, and footer across all pages.
