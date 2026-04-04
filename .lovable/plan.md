

## Combined Fix: Hero Text Speed + Section Backgrounds

Two issues, one root cause: the hero's tall variant structure.

### Fix 1 — Hero text scrolls at normal speed

Currently the H1, subtitle, CTA, and breathing dots are all inside the `fixed z-0` container, so they drift at speed=0.1 with the background. They need to scroll at speed=1.

**`src/components/Hero.tsx`** (tall variant only):
- Keep the fixed background container as-is (image + overlay, `translateY(-scrollY * 0.1)`)
- Move the text content (H1, subtitle, CTA, breathing dots) OUT of the fixed container
- Place them inside the `h-[100vh]` spacer div, centered with `flex items-center justify-center`
- The spacer becomes `relative z-[1]` so text sits above the background but below subsequent sections

### Fix 2 — Sections have opaque backgrounds to cover the hero

The first section after the hero (`py-24 md:py-40`) has no background color, so the fixed hero image bleeds through.

**`src/pages/Index.tsx`**:
- Add `bg-background` to the Problem Cards section (line 115)
- Add `bg-background` to the Services section (line 166)
- Add `bg-background` to the About Ida section (line 216)
- The sections that already have backgrounds (`bg-mottled-warm`, `bg-card`) are fine

**Other pages using `<Hero tall />`** (if any): same treatment — ensure every section after the hero has an explicit background class.

### Result
- Background image: fixed, speed=0.1 (unchanged)
- Hero text: speed=1, scrolls normally with the page
- Following sections: opaque backgrounds slide over and cover the hero completely

### Files Changed
1. **`src/components/Hero.tsx`** — Move text/CTA out of fixed container into the spacer div
2. **`src/pages/Index.tsx`** — Add `bg-background` to sections without explicit backgrounds

