

## Enhanced Design Revamp — Alive-Inspired Warm Aesthetic

### Design Inspiration from Alive Tantra Festival
The key elements to borrow: **mottled/gradient warm backgrounds** (that smoky peach-orange cloud effect), **cards that fade-in as they scroll into view** ("manifest" effect), generous whitespace, and a very personal/embodied visual language.

### Color Palette Shift
Update `index.css` CSS variables to warmer beige/Montessori therapy tones:
- **Background**: warm off-white `#F7F3EE` (beige linen)
- **Card**: slightly darker cream `#EDE8E1`
- **Primary**: warm sage `hsl(155, 15%, 42%)`
- **Secondary**: muted dusty rose `hsl(12, 35%, 68%)`
- **Accent**: soft burnt sienna/terracotta `hsl(22, 45%, 58%)`
- **New**: mottled gradient accent sections using radial gradients of peach-orange-cream (CSS, not images)

### Mottled Background Sections
Create a reusable CSS class and/or component for "mottled warm" backgrounds — using layered radial gradients in peach/terracotta/cream to mimic the Alive cloudy-warm effect. Apply to:
- Hero sections (as overlay behind text)
- CTA banners
- Accent divider sections
- Some card hover states as subtle backdrop

Implementation: CSS utility classes in `index.css` like `.bg-mottled-warm` using multiple `radial-gradient` layers with warm oranges, peach, and cream at various positions/opacities.

### Scroll-Triggered Fade-In Animations
Create a `FadeInOnScroll` wrapper component using Intersection Observer API (no extra library). Cards, sections, and images "manifest" into view as user scrolls:
- Fade up + slight scale from 0.96 to 1
- Staggered delay for card grids (each card appears 100ms after the previous)
- Smooth 0.6s ease-out transition

### Image Heroes on Key Pages
Upgrade `Hero.tsx` to accept an optional `backgroundImage` prop:
- Full-width background with warm semi-transparent gradient overlay (the mottled peach effect)
- Text remains readable via overlay

**Page hero images:**
- **Homepage**: `Find-Ro-2.jpg` with mottled warm overlay
- **Kropsterapi**: `kropsterapibillede.jpg`
- **Stress & Angst**: `massage-1024x632.jpg`
- **Om Ida**: Keep split-layout but use real portrait `profilbillede-1536x2048.jpg`

Simpler text heroes for: Priser, Kontakt, Klientudtalelser (but with mottled background instead of flat `bg-card`).

### Logo Integration
- Replace "Find Ro" text in Navbar and Footer with `Logoside-edited.png`
- Sized appropriately (~40px height in nav)

### Copy Images to Public
Move all photos from `photos for findro/` to `public/images/` for web serving.

### Mobile Dot Carousel
New `DotCarousel.tsx` component:
- Swipeable via touch events
- Dot indicators below (filled dot = active, outline = inactive)
- Uses `useIsMobile()` hook — renders carousel on mobile, grid on desktop
- Applied to: testimonials on homepage, service cards on homepage, all testimonials on Klientudtalelser

### Real Testimonials
Replace placeholder quotes with the actual ones from the RTF:
- **Hester**: "Ida er en kompetent og kærlig behandler..."
- **Anders**: "Idas løbende behandlinger har hjulpet mig..."
- **Isabella**: "Min hidtidige rejse i følelser, krop og tanker..."
- **Klaus**: "Wow for en oplevelse! Tusind tak..."

### Om Ida — Real Bio + Visual Timeline
Replace placeholder with actual Ida bio from RTF. Add `TimelineSection.tsx`:
- Vertical timeline with dots and connecting line
- Education milestones: 2020 (Lærer + 100t yoga), 2022 (200t yoga Rishikesh), 2024 (Kropsterapeut Totum, Kenshô, Myofascial), 2025 (Patologi, Anatomikurser)
- Inline photos: `profilbillede-1536x2048.jpg` as main portrait, `yoga-ved-Ganges-1024x768.jpg` alongside Rishikesh entry
- Mottled warm background behind timeline section

### Kropsterapi — Massage vs Body Therapy Section
New two-column comparison section from RTF content:
- Left: "Oliemassage" — focus on relaxation, muscles, pleasant experience
- Right: "Kropsterapi" — focus on nervous system, emotions, deep transformation
- Tagline: "Oliemassage giver afspænding. Kropsterapi giver forløsning."
- Treatment photos: `kropsterapibillede.jpg`, `find-ro-4.jpg`

### Homepage Value Expansion
Add a "Forestil dig..." (Imagine...) section after the "Kender du det?" section:
- Forward-looking transformation copy: "Forestil dig at vågne udhvilet... at trække vejret dybt... at føle dig hjemme i din krop"
- Mottled warm accent background
- This complements the pain-point section with aspiration

### Photo Integration Across Pages
- **StressOgAngst**: Add `massage-1024x632.jpg` inline in intro section
- **Kontakt**: Add treatment space photo (`find-ro-4.jpg`) alongside contact info
- **Priser**: Subtle photo accent at top
- **Klientudtalelser**: Hero area with treatment space ambiance

### Files Changed

1. **Copy images**: `photos for findro/*` → `public/images/`
2. **`src/index.css`**: Warmer palette + `.bg-mottled-warm` utility + fade-in keyframes
3. **`tailwind.config.ts`**: Add fade-in-up animation variants with stagger support
4. **`src/components/FadeInOnScroll.tsx`**: New — Intersection Observer wrapper with stagger
5. **`src/components/DotCarousel.tsx`**: New — mobile swipeable carousel with dot indicators
6. **`src/components/TimelineSection.tsx`**: New — Ida's education timeline
7. **`src/components/Hero.tsx`**: Add `backgroundImage` prop with mottled overlay
8. **`src/components/Layout.tsx`**: Logo image in navbar + footer
9. **`src/components/CTABanner.tsx`**: Mottled warm background
10. **`src/pages/Index.tsx`**: Image hero, real testimonials, "Forestil dig" section, mobile carousels, fade-in animations, real photos
11. **`src/pages/OmIda.tsx`**: Real bio, real portrait, education timeline, India photos
12. **`src/pages/Kropsterapi.tsx`**: Image hero, massage vs therapy comparison, treatment photos
13. **`src/pages/StressOgAngst.tsx`**: Image hero, inline photos
14. **`src/pages/Klientudtalelser.tsx`**: Real testimonials, mobile carousel, mottled hero
15. **`src/pages/Kontakt.tsx`**: Treatment space photo
16. **`src/pages/Priser.tsx`**: Mottled accent hero

