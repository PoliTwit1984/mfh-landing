# MFH Dashboard "Liquid Glass" Redesign

## Overview
Redesign the dashboard to match the new Liquid Glass design system from the HTML mockup. Focus on dashboard only (not other pages).

## Key Changes Summary
| Aspect | Current | Target |
|--------|---------|--------|
| Typography | Inter | Plus Jakarta Sans + Playfair Display |
| Glass opacity | 40% | 65% |
| Glass blur | varies | 16px consistent |
| Icons | Emojis | Lucide icons |
| Layout | Flexbox | 12-column CSS Grid |
| Background | Static gradient blobs | Animated gradient mesh + noise |
| New components | — | FAB Menu, Lightbox, DailyFive |

---

## Phase 1: Foundation

### 1.1 Typography Setup
**File:** `src/app/layout.tsx`

- Replace `Inter` with `Plus_Jakarta_Sans` and `Playfair_Display` from `next/font/google`
- Create CSS variables: `--font-sans` and `--font-serif`
- Update `<html>` className to include both font variables

### 1.2 Tailwind Config Updates
**File:** `tailwind.config.ts`

- Add font families: `sans: ['var(--font-sans)']`, `serif: ['var(--font-serif)']`
- Update glass opacity: `white: 'rgba(255, 255, 255, 0.65)'`
- Add primary color palette (rose-50 through rose-600)
- Add `gradientMove` animation keyframe (15s ease infinite)

### 1.3 Global CSS Updates
**File:** `src/styles/globals.css`

- Add CSS custom properties for theming (--primary-50 through --primary-600)
- Add animated gradient background to body
- Add noise texture SVG overlay (::before pseudo-element)
- Update `.glass-panel` class with 65% opacity and blur(16px)
- Add `.sparkle-deco::after` for sparkle decorations
- Add `.timeline-line::before` for vertical connector line

---

## Phase 2: Layout Structure

### 2.1 Dashboard Layout
**File:** `src/app/dashboard/layout.tsx`

Change from flexbox to 12-column CSS grid:
```
grid-cols-12:
  - Nav: col-span-2 (hidden on mobile)
  - Content: col-span-12 md:col-span-7
  - Signals: col-span-3 (hidden below lg)
```

- Make nav and right sidebar `sticky top-32`
- Increase top nav height to `h-24`
- Update background to use animated gradient (remove floating blobs)

### 2.2 Top Bar Redesign
**File:** `src/components/layout/top-bar.tsx`

- Left: Logo (h-16) + "MFH" title (Playfair) + "My Favorite Human" subtitle
- Center: Tagline "Love lives in the details." (Playfair italic) + sparkle icon
- Right: Theme toggle button, screenshot button (optional), profile avatar with gradient ring

### 2.3 Side Navigation Redesign
**File:** `src/components/layout/nav.tsx`

**SideNav changes:**
- Floating pill style (not full-height)
- Section headers: "Menu" and "Saved"
- Menu items: Home, Timeline, Memories, Dates (Lucide icons)
- Saved items: Intentions, Heartboard (with badge counts)
- Active state: white bg, colored icon, soft shadow
- Separate "Days Together" card below nav

**BottomNav changes:**
- Replace emojis with Lucide icons
- Height: h-[85px] with safe-area-inset

---

## Phase 3: Dashboard Components

### 3.1 Partner Card (Hero)
**File:** `src/components/features/dashboard/partner-card.tsx`

Complete redesign to hero card:
- Full-width photo with `aspect-[16/9]` on desktop
- Gradient overlay (`bg-gradient-to-t from-black/60`)
- Partner name in Playfair Display (text-6xl)
- "Current Vibe" badge with status dot
- Love Language badge with tooltip on hover/click
- (Optional) Draggable image repositioning

### 3.2 Relationship Wisdom
**File:** `src/components/features/dashboard/relationship-wisdom.tsx`

- Add violet left border (`border-l-4 border-l-violet-400`)
- Add sparkle decoration (`sparkle-deco` class)
- Header: Wand2 icon + "Relationship Wisdom" label
- Quote in Playfair serif
- Two action buttons: "Plan Dinner" (violet) + "Ask Muse More" (white)

### 3.3 Daily Five Widget (NEW)
**File:** `src/components/features/dashboard/daily-five.tsx`

- Glass panel with brain icon
- "Make MFH Smarter" title
- Progress bar (X/5 completed)
- Chevron right arrow

### 3.4 Heartboard Preview (NEW)
**File:** `src/components/features/dashboard/heartboard-preview.tsx`

- Header: Sparkles icon + "Heartboard" + "Save Idea" button
- 3-column grid (2 on mobile)
- Items: aspect-[3/4], hover zoom effect
- Price tags, category icons
- Click opens lightbox

### 3.5 Recent Moments
**File:** `src/components/features/dashboard/recent-entries.tsx`

- Update styling to match mockup
- Memory card with image
- Colored tags (rose, violet, amber backgrounds)
- Timestamp display

---

## Phase 4: Right Sidebar

### 4.1 Relationship Signals (Simplified)
**File:** `src/components/features/dashboard/relationship-signals.tsx`

Create smaller, focused component:
- Partner avatar with online status dot
- "Signals" label
- Current vibe indicator

### 4.2 Upcoming Dates (Timeline Style)
**File:** `src/components/features/dashboard/upcoming-dates.tsx`

- Vertical timeline with connector line
- Date cards: Month header (colored), Day number (large serif)
- Event title and subtitle

### 4.3 Intentions List (NEW)
**File:** `src/components/features/dashboard/intentions-list.tsx`

- Green top border accent
- Header: Check icon + "Intentions" + plus button
- White cards with colored action badges
- Badge colors: Amber (To Buy), Rose (To Plan)
- "View all active" button

---

## Phase 5: New UI Components

### 5.1 FAB Menu
**File:** `src/components/ui/fab-menu.tsx`

- Floating action button (bottom-right, z-50)
- Gradient background (rose-500 to violet-500)
- 6 menu items with staggered animation:
  - Ask Muse (violet)
  - Inside Joke (orange)
  - Log Mood (blue)
  - Plan Date (rose)
  - Gift Idea (amber)
  - Quick Note (emerald)
- Backdrop blur overlay when open
- Plus icon rotates 45deg when open

### 5.2 Lightbox Modal
**File:** `src/components/ui/lightbox.tsx`

- Full-screen overlay (z-100)
- Split view: Image (left/top) + Context (right/bottom)
- Context panel: Category badge, title, caption, tags
- "Mark as Done" button
- Body scroll lock when open
- Close button (X) and click-outside to close

---

## Phase 6: Dashboard Page Composition

**File:** `src/app/dashboard/page.tsx`

Update component order:
1. PartnerCard (hero)
2. DailyFive
3. RelationshipWisdom
4. HeartboardPreview
5. RecentMoments (mobile only - desktop shows in sidebar)

Add FAB menu to layout.

---

## Files to Modify
- `src/app/layout.tsx` - fonts
- `tailwind.config.ts` - design tokens
- `src/styles/globals.css` - CSS variables, animations
- `src/app/dashboard/layout.tsx` - grid layout
- `src/components/layout/top-bar.tsx` - header redesign
- `src/components/layout/nav.tsx` - nav redesign
- `src/components/features/dashboard/partner-card.tsx` - hero card
- `src/components/features/dashboard/relationship-wisdom.tsx` - styling
- `src/components/features/dashboard/relationship-signals.tsx` - simplify
- `src/components/features/dashboard/upcoming-dates.tsx` - timeline style
- `src/components/features/dashboard/recent-entries.tsx` - styling
- `src/app/dashboard/page.tsx` - composition

## New Files to Create
- `src/components/features/dashboard/daily-five.tsx`
- `src/components/features/dashboard/heartboard-preview.tsx`
- `src/components/features/dashboard/intentions-list.tsx`
- `src/components/features/dashboard/days-together-card.tsx`
- `src/components/ui/fab-menu.tsx`
- `src/components/ui/lightbox.tsx`

## Dependencies
```bash
pnpm add lucide-react
```

---

## Implementation Order

1. **Foundation first** - Typography, Tailwind config, CSS variables
2. **Layout structure** - Dashboard grid, TopBar, SideNav
3. **Core components** - PartnerCard hero, RelationshipWisdom
4. **New widgets** - DailyFive, HeartboardPreview, IntentionsList
5. **Polish** - FAB Menu, Lightbox, final styling

Each phase should leave the app functional. Test after each step.
