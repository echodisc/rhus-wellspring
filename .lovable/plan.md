

## Design Upgrade: Idafriis-Inspired Refinement

### SEO & Domain Advice

**Yes, changing the domain would help SEO.** Recommendation: **idaskropsterapi.dk** — best balance of personal brand + keyword. Keep find-ro.dk as a redirect.

Idafriis.com has weak technical SEO (multiple H1s, no structured data, generic Wix meta). We already beat her on all of these.

### Changes

#### 1. Hero Component Overhaul
Make hero taller (`min-h-[80vh]`), full-bleed image, minimal text (H1 + one subtitle + single CTA). Add subtle scroll-down indicator.

#### 2. "Jeg hjælper dig" Problem Cards (Homepage)
Replace/supplement "Kender du det?" with three structured visual cards (Stress & spændinger, Angst & uro, Manglende kontakt til kroppen), each linking to sub-pages. Warmer, more empathetic tone than idafriis.

#### 3. "Indledende Samtale" Conversion Section
New `IntroSession.tsx` — photo of Ida, description of first session, price, strong CTA. Used on homepage + sub-pages.

#### 4. Personal Pull-Quote Component
New `PullQuote.tsx` — large centered italic quote from Ida as section divider with mottled background.

#### 5. Layout & Spacing
- Increase section padding to `py-20 md:py-32`
- Add letter-spacing to nav links for premium feel
- Larger heading sizes on landing page

#### 6. Service Cards with Images
Replace icon-based cards with image-topped cards (treatment photo + title + description + link).

### Files Changed

1. `src/components/Hero.tsx` — Taller, spacious, scroll indicator
2. `src/components/ServiceCard.tsx` — Image-based variant
3. `src/components/Layout.tsx` — Nav spacing/styling
4. `src/components/PullQuote.tsx` — New: personal quote component
5. `src/components/IntroSession.tsx` — New: conversion section
6. `src/pages/Index.tsx` — Restructure with new sections
7. `src/pages/Kropsterapi.tsx` — Add IntroSession, spacing
8. `src/pages/StressOgAngst.tsx` — Add IntroSession, spacing
9. `src/pages/OmIda.tsx` — Spacing, pull-quote
10. `src/index.css` — Typography/spacing tweaks

