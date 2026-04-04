

## Find Ro Website Revamp — Plan

### Concept

A warm, SEO-heavy wellness website targeting women 25-45 in Aarhus dealing with stress/anxiety. Long-form landing page plus several near-duplicate "service" pages to create site depth and multiple H1 opportunities.

### Site Structure (Single React app, client-side routing)

**Pages:**

1. **/ (Landing page)** — Long-scroll SEO powerhouse
2. **/kropsterapi** — Dedicated body therapy page (unique H1)
3. **/stress-og-angst** — Stress & anxiety specialty page (unique H1)
4. **/om-ida** — About / personal story page
5. **/priser** — Pricing & packages
6. **/kontakt** — Contact with embedded booking
7. **/klientudtalelser** — Testimonials page (unique H1)

Pages 2, 3, and 7 reuse similar content/components but each has a distinct H1, intro paragraph, and meta description for SEO depth.

### Landing Page Sections (top to bottom)

1. **Hero** — Emotional headline (H1: "Kropsterapi i Aarhus — Slip fri af stress og angst"), subtext, CTA button
2. **Problem/Empathy** — "Kender du det?" section addressing pain points
3. **Services overview** — Cards for Kropsterapi, Stress & Angst, Yoga with links to sub-pages
4. **About Ida** — Photo, short bio, trust signals
5. **How it works** — 3-step process (Book → Behandling → Forandring)
6. **Testimonials** — Client quotes carousel
7. **FAQ** — Accordion with long-tail keyword answers
8. **CTA / Contact** — Phone number, booking link, location (Aarhus)
9. **Footer** — Nav links, contact info, social

### Design Direction

- **Palette**: Warm earthy tones — sage greens, soft terracotta, warm cream backgrounds, muted gold accents
- **Typography**: Serif headings (elegant, personal), clean sans-serif body text
- **Imagery**: Placeholder sections for nature/body therapy imagery
- **Feel**: Organic, warm, trustworthy — not clinical or overly minimal. Rounded corners, soft shadows, generous whitespace

### SEO Strategy (built into the code)

- Semantic HTML: proper H1-H3 hierarchy per page
- Meta title + description per route (react-helmet-async)
- Schema.org JSON-LD for LocalBusiness + HealthAndBeautyBusiness
- Danish language content throughout
- Each sub-page targets a distinct keyword cluster:
  - Landing: "kropsterapi aarhus"
  - /kropsterapi: "kropsterapi behandling aarhus"
  - /stress-og-angst: "stress behandling aarhus" / "angst terapi aarhus"
  - /klientudtalelser: "kropsterapi anmeldelser aarhus"

### Technical Implementation

1. Install `react-helmet-async` for per-page meta tags
2. Create shared layout component (Navbar + Footer)
3. Build reusable section components (Hero, TestimonialCard, ServiceCard, FAQ accordion, CTABanner)
4. Create 7 page components with route-specific H1s and meta
5. Add JSON-LD structured data in index.html
6. Update index.html with Danish lang, proper title, and OG tags
7. Update CSS theme with the warm earthy palette
8. Clean up App.css defaults

### File Plan

- `src/components/Layout.tsx` — Navbar + Footer wrapper
- `src/components/Hero.tsx` — Reusable hero with props
- `src/components/ServiceCard.tsx`
- `src/components/TestimonialCard.tsx`
- `src/components/FAQSection.tsx`
- `src/components/CTABanner.tsx`
- `src/components/ProcessSteps.tsx`
- `src/pages/Index.tsx` — Long landing page
- `src/pages/Kropsterapi.tsx`
- `src/pages/StressOgAngst.tsx`
- `src/pages/OmIda.tsx`
- `src/pages/Priser.tsx`
- `src/pages/Kontakt.tsx`
- `src/pages/Klientudtalelser.tsx`
- Updated `src/App.tsx`, `src/index.css`, `index.html`

