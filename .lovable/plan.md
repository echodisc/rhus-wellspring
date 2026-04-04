

## Comprehensive Design Overhaul — Idafriis-Level Polish

This combines all three approved plans: (1) Idafriis-inspired design refinement, (2) typography/parallax/content fixes, and (3) parallax photo dividers throughout.

---

### A. Parallax "Slow-Scroll" Hero

The hero moves at ~40% scroll speed (not fixed/sticky — still moves, just slower), so content appears to slide over it. Implementation:

- `Hero.tsx`: Add `useEffect` scroll listener setting a CSS variable. Apply `position: fixed; inset: 0; z-index: 0` with `transform: translateY(calc(var(--scroll) * 0.4))`.
- `Layout.tsx`: Wrap `<main>` with `relative z-index: 1 bg-background` so it slides over the hero.
- Replace bouncing `ChevronDown` with a thin vertical line + small dot scroll indicator.

### B. Typography Overhaul

- **Headings**: Switch from Playfair Display to **DM Sans** (light 300-400, `tracking-[0.06em]`). Clean, modern, warm.
- **Pull quotes**: Use **Cormorant Garamond** italic (elegant, not over-the-top cursive). Remove the wild serif styling.
- **Section titles**: Uppercase with wide letter-spacing (`tracking-[0.08em]` to `tracking-[0.12em]`).
- **Body**: Keep Inter but default to weight 300-400.
- Update `index.html` Google Fonts import, `tailwind.config.ts` font families, `index.css` heading rules.

### C. Navigation & Layout (Idafriis-Inspired)

- **Nav**: Transparent/floating, all-uppercase links, `text-xs`, `tracking-[0.12em]`, `font-light`. Replace "Book en tid" button with clean text link "BOOKING".
- **Mobile menu**: Full-screen centered overlay instead of dropdown panel.
- **Footer**: Minimal centered layout, fewer links, more whitespace, thin separator.
- **Spacing**: Increase section padding to `py-24 md:py-40` throughout.

### D. Color & Style Refinement

- Desaturate `--background` to ~`#F5F1EC` (warm but less pink).
- `--card` becomes `#EDE9E3`.
- Add warm gold accent `hsl(38, 35%, 60%)` for subtle text highlights.
- Keep sage green for CTA buttons.
- Reduce border visibility to nearly invisible.
- Remove rounded corners on cards (`rounded-none` or `rounded-sm`).
- Remove visible card borders — use subtle shadow or none.

### E. New Component: `ParallaxImage.tsx`

Full-bleed image section (`min-h-[50vh]`) with CSS `background-attachment: fixed; background-size: cover`. Falls back to static on mobile (iOS). Used as atmospheric breaks between content sections.

### F. Parallax Image Placements

**Homepage** (3 dividers):
1. Between problem cards and "Forestil dig..." section — `yoga-ved-Ganges-1024x768.jpg`
2. Between "Behandlinger" and PullQuote — `find-ro-4.jpg`
3. Between "Om Ida" and ProcessSteps — `cacao_ceremony.jpg`

**Kropsterapi** (2 dividers):
1. Between "Hvad er kropsterapi?" and PullQuote — `massage-1024x632.jpg`
2. Between comparison section and ProcessSteps — `yoga-for-alle.jpg`

**StressOgAngst** (1 divider): Mid-page between intro and approach cards.

**OmIda** (1-2 dividers): Personal India/ceremony photos.

### G. Content Fixes

- **Kropsterapi.tsx**: Change "Gerne vil prøve cupping" to "Gerne vil prøve cupping (bindevævsmassage)". Add a clean stock cupping image (cups placed, pre-suction).
- **OmIda.tsx**: Add personal photos (cacao ceremony, treatment space) in appropriate sections.
- **Kontakt.tsx**: Add treatment space photo.
- **PullQuote.tsx**: Cormorant Garamond italic, thin horizontal lines above/below quote, flat warm beige background, gold-toned text.

### H. Component Updates

- **`ServiceCard.tsx`**: Remove borders/rounded corners, increase padding to `p-10`, subtle shadow only.
- **`CTABanner.tsx`**: Uppercase button, letter-spaced, `rounded-none`, thin border style.
- **`ProcessSteps.tsx`**: Uppercase titles, refined spacing.
- **`IntroSession.tsx`**: Match new card/button style.
- **`FadeInOnScroll.tsx`**: Reduce scale from 0.96 to 0.98 for subtlety.
- **`FAQSection.tsx`**: Cleaner accordion styling to match new aesthetic.

### I. Buttons (Global)

- Primary CTA: uppercase, letter-spaced, no rounded corners, thin border style.
- Style: `border border-foreground/30 px-10 py-4 text-xs tracking-[0.15em] uppercase`
- Hover: subtle background fill.

---

### Files Changed

1. **`index.html`** — Swap Google Fonts (DM Sans 300/400/500 + Cormorant Garamond 400i/500i, remove Playfair Display)
2. **`tailwind.config.ts`** — Update font families, add letter-spacing utilities
3. **`src/index.css`** — New color palette, heading font rules, reduced border visibility, parallax utilities
4. **`src/components/Hero.tsx`** — Slow-scroll parallax via JS, vertical line+dot indicator, refined typography
5. **`src/components/Layout.tsx`** — Floating transparent nav, uppercase links, full-screen mobile menu, minimal footer, `main` gets `relative z-10 bg-background`
6. **`src/components/ParallaxImage.tsx`** — New: full-bleed parallax image divider
7. **`src/components/PullQuote.tsx`** — Cormorant Garamond italic, horizontal lines, flat background, gold text
8. **`src/components/ServiceCard.tsx`** — Remove borders/rounded, cleaner typography, more padding
9. **`src/components/CTABanner.tsx`** — Uppercase button style, cleaner layout
10. **`src/components/FAQSection.tsx`** — Cleaner accordion styling
11. **`src/components/ProcessSteps.tsx`** — Uppercase titles, refined spacing
12. **`src/components/IntroSession.tsx`** — Match new card/button style
13. **`src/components/FadeInOnScroll.tsx`** — Reduce scale to 0.98
14. **`src/pages/Index.tsx`** — Insert 3 parallax dividers, restructure with new design
15. **`src/pages/Kropsterapi.tsx`** — 2 parallax dividers, cupping clarification, updated styling
16. **`src/pages/StressOgAngst.tsx`** — 1 parallax divider, updated styling
17. **`src/pages/OmIda.tsx`** — 1-2 parallax dividers with personal photos, updated styling
18. **`src/pages/Priser.tsx`** — Cleaner card design, updated styling
19. **`src/pages/Kontakt.tsx`** — Treatment space photo, cleaner form styling
20. **`src/pages/Klientudtalelser.tsx`** — Updated styling

