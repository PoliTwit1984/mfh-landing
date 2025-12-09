# MFH MVP Implementation Plan

## Current State

- **Done:** Phases 1-10.10, 10.6 (Vault), 10.7 (AI Vault Nudge), 10.9 (Photo Gallery), 10.16 (Relationship Wisdom), 10.18 (Liquid Glass UI Polish), 10.19 (Dashboard Bug Fixes), 10.20 (Avatar & Data Display Fixes), 14.1 (Timeline), 14.2 (Inside Jokes), 14.11 (Heartboard) ✅
- **Next Up:** Phase 10.17 (Scrapbook PDF Export) ⭐ | Phase 14.5 (Relationship RAG System) | Phase 14.6 (Daily Questions)
- **Remaining:** Phases 11-13 (Notifications & PWA, Billing, Polish & Launch)

---

## Immediate Actions (Before Starting Development)

- [x] **0.1** Copy this plan to `docs/implementation-plan.md`
- [x] **0.2** Add reminder to `CLAUDE.md` to track progress in implementation plan
- [x] **0.3** Add reminder to `AGENTS.md` to track progress in implementation plan

---

## Master To-Do List (Ordered by Dependencies)

### Phase 1: App Foundation ✅

> Get the app running with basic structure

- [x] **1.1** Create root layout (`src/app/layout.tsx`) with providers, fonts, metadata
- [x] **1.2** Create landing page (`src/app/page.tsx`) - simple redirect or marketing page
- [x] **1.3** Create TypeScript types (`src/types/`)

### Phase 2: UI Component Library ✅

> Build reusable Liquid Glass components

- [x] **2.1-2.11** All UI components created (glass-card, glass-button, glass-input, glass-textarea, glass-select, avatar, badge, modal, toast, spinner)

### Phase 3: Authentication ✅

> Firebase Auth integration

- [x] **3.1-3.8** Firebase Auth complete (firebase.ts, auth-context, hooks, signin/signup pages)

### Phase 4: Database Schema ✅

> Drizzle ORM + Cloud SQL setup

- [x] **4.1-4.5** Database complete (Cloud SQL instance, Drizzle schema, migrations run)

### Phase 5: Onboarding Flow ✅

> 7-step new user experience

- [x] **5.1-5.10** All 7 onboarding steps complete with API routes

### Phase 6: Dashboard ✅

> Main app experience

- [x] **6.1-6.9** Dashboard complete (layout, nav, widgets, API routes)

### Phase 7: Memory Capture ✅

> Core feature - capturing thoughts, memories, gift ideas

- [x] **7.1** Create memories page (`src/app/dashboard/memories/page.tsx`)
- [x] **7.2** `src/components/features/memories/memory-form.tsx` - add/edit form
- [x] **7.3** `src/components/features/memories/memory-card.tsx` - display card
- [x] **7.4** `src/components/features/memories/memory-list.tsx` - filterable list
- [x] **7.5** Type selector integrated in memory-form.tsx
- [x] **7.6** `src/components/features/memories/quick-add-modal.tsx` - fast capture
- [x] **7.7** Create memories API routes (`src/app/api/memories/route.ts`)
- [ ] **7.8** Add photo upload to Cloud Storage (deferred to Phase 13)

### Phase 8: AI Integration ✅

> Claude-powered coach and suggestions

- [x] **8.1-8.10** AI integration complete (claude-client, context-builder, prompts, coach page, chat interface, streaming API)

### Phase 9: Dates & Gifts ✅

> Managing important dates and gift ideas

- [x] **9.1-9.11** Dates & Gifts complete (dates page, gifts page, forms, cards, lists, API routes)

### Phase 10: Partner Profile ✅

> View and edit partner details

- [x] **10.1-10.5** Partner Profile complete (profile page, form, love language display, relationship stats, API routes)

---

### Phase 10.5: UI Emotional Redesign ✅ COMPLETE

> Transform sparse UI into warm, emotionally rich experience

**10.5.1 Hero Partner Card Enhancement** ✅ (`src/components/features/dashboard/partner-card.tsx`)

- [x] Add rotating daily affirmation/quote about relationships (via DailyInsight component)
- [x] Add relationship milestone badges (100 days, 1 year, etc.)
- [x] Add "Today's focus" or kanban-style suggestion (via Daily Insight)
- [x] Add subtle decorative gradient layer behind content
- [x] Reduce empty space - make content denser and warmer
- [x] Add shimmer animation on card load

**10.5.2 Micro-Texture & Visual Depth** ✅ (`src/app/globals.css`, components)

- [x] Add soft noise/grain texture overlay to glass cards
- [x] Add faint dividers between sections
- [x] Add contextual tags with colors (Memory, Gift Idea, Touch)
- [x] Add small metadata timestamps ("added 33m ago")
- [x] Add embossed/recessed shadow effects for depth
- [x] Add subtle 3D tilt on hover (perspective transform)

**10.5.3 Sidebar Personality** ✅ (`src/components/layout/nav.tsx`)

- [x] Add MFH doodle heart watermark behind menu (3-4% opacity)
- [x] Add subtle vertical gradient to sidebar
- [x] Add soft shadow under active nav state
- [x] Add "Daily Reminder" inspirational line under logo
- [x] Enhance active state with glow effect

**10.5.4 Background & Layout Warmth** ✅ (`src/app/dashboard/layout.tsx`)

- [x] Add oversized MFH heart logo as background watermark (3-4% opacity)
- [x] Add more floating gradient blobs with slow animations
- [x] Break up symmetrical white space with accent panels
- [x] Add light card header row for visual anchoring
- [x] Add secondary gradient shapes in background

**10.5.5 Quick Actions Enhancement** ✅ (`src/components/features/dashboard/quick-actions.tsx`)

- [x] Make icons slightly larger
- [x] Add tiny labels under icons ("Capture," "Plan," "Remember," "Reflect")
- [x] Add soft shadow/raised effect to buttons
- [x] Reduce spacing between action buttons
- [x] Add sparkle/particle effect on hover
- [x] Add pulse animation on the "Ask Coach" button

**10.5.6 Upcoming Dates Visual Richness** ✅ (`src/components/features/dashboard/upcoming-dates.tsx`)

- [x] Add colored dots for date type/category
- [x] Add timeline connectors between dates
- [x] Add date chips with icons
- [x] Add tasteful emojis for date types
- [x] Add confetti/pulse animation when date is TODAY
- [x] Add urgency glow for dates within 3 days

**10.5.7 Recent Entries Depth** ✅ (`src/components/features/dashboard/recent-entries.tsx`)

- [x] Add hover preview showing full memory content
- [x] Add iconography for each entry type
- [x] Add relative time with more detail ("2 hours ago")
- [x] Add smooth expand animation on click
- [x] Add color-coded left border by memory type

**10.5.8 Today's Thoughtfulness Insight** ✅

- [x] Create `src/components/features/dashboard/daily-insight.tsx`
- [x] Add rotating wisdom quotes about relationships
- [x] Add personalized insights based on context
- [x] Add "Today's focus" for the user
- [ ] Add "moment from this month last year" feature (deferred)
- [x] Style with warm gradient background and soft typography

**10.5.9 Animations & Micro-interactions** ✅ (throughout)

- [x] Add number counter animation for "days together"
- [x] Add staggered card reveals with slide + opacity
- [x] Add bloom/pulse animation on MFH heart logo
- [x] Add success celebration animations when adding entries
- [x] Add smooth loading skeletons matching card shapes
- [x] Add hover lift effect on all interactive cards

**10.5.10 Affirmations Data** ✅ (`src/lib/dailyInsight/`)

- [x] Create affirmations data (integrated with daily insight LLM)
- [x] Add love language specific tips (via LLM context)
- [x] Add milestone celebration messages
- [x] Add seasonal/date-aware messages (via time context)
- [x] Create random rotation logic with daily seed

---

### Phase 10.6: Thoughtfulness Vault ✅ COMPLETE

> A personal library of saved relationship intentions, ideas, and actions

**10.6.1 Database Schema** ✅

- [x] **10.6.1a** Add `thoughtfulnessVault` table to schema
- [x] **10.6.1b** Run `npx drizzle-kit push` to create table

**10.6.2 API Endpoints** ✅

- [x] **10.6.2a** Create `POST /api/vault` - save item
- [x] **10.6.2b** Create `GET /api/vault` - list with filters
- [x] **10.6.2c** Create `PATCH /api/vault/[id]` - update status (complete, snooze, notes)
- [x] **10.6.2d** Create `DELETE /api/vault/[id]` - remove item

**10.6.3 Reusable Save Component** ✅

- [x] **10.6.3a** Create `SaveToVault` wrapper component with highlighted chip design
- [x] **10.6.3b** Create `useVault` hook for save/check status
- [x] **10.6.3c** Add sparkle/success animation

**10.6.4 Vault Page & Components** ✅

- [x] **10.6.4a** Create `vault/page.tsx` with type filters
- [x] **10.6.4b** Create `VaultCard` component with actions
- [x] **10.6.4c** Create `VaultList` with filter tabs (Active/Snoozed/Completed)
- [x] **10.6.4d** Add empty state with CTA
- [x] **10.6.4e** Export components from `index.ts`

**10.6.5 Navigation Integration** ✅

- [x] **10.6.5a** Add Vault to nav items (📦 icon)

**10.6.6 Integration Points** ✅

- [x] **10.6.6a** Integrate SaveToVault into DailyInsight (focus text is saveable)
- [x] **10.6.6b** Add save functionality to Coach chat (LLM marks actionable items with tags)
- [x] **10.6.6c** Parse coach responses for actionable items (tags: action, gift, date, tip)

**10.6.7 Coach Context Enhancement** ✅

- [x] **10.6.7a** Add vault items to coach context
- [x] **10.6.7b** Update system prompt to reference vault

---

### Phase 10.7: AI Vault Nudge ✅ COMPLETE

> Make MFH feel "sentient" by intelligently surfacing saved vault items at the right moment

**10.7.1 API Endpoint** ✅

- [x] **10.7.1a** Create `GET /api/ai/vault-nudge` endpoint
- [x] **10.7.1b** Create nudge prompt template (`src/lib/ai/vault-nudge-prompt.ts`)
- [x] **10.7.1c** Add 4-hour caching logic

**10.7.2 Dashboard Component** ✅

- [x] **10.7.2a** Create `VaultNudge` component with violet gradient design
- [x] **10.7.2b** Add to dashboard layout (below Daily Insight)
- [x] **10.7.2c** Wire up snooze/complete actions

**10.7.3 Selection Logic** ✅

- [x] **10.7.3a** Create item selection/scoring logic (`src/lib/ai/vault-nudge-selector.ts`)
- [x] **10.7.3b** Score by age (3-7 days optimal), type, time context (weekend/evening bonuses)

---

### Phase 10.8: Future Enhancements 🔮 IN PROGRESS

> Features that will take MFH to the next level

**10.8.1 Action Chips in Daily Insights** ✅ COMPLETE

> Add 1-3 saveable "Today Actions" under the daily insight quote

- [x] **10.8.1a** Update daily insight API to return 2-3 actionable suggestions
- [x] **10.8.1b** Update `DailyInsight` component to display action chips
- [x] **10.8.1c** Each chip is saveable to vault with one tap

**10.8.2 Floating Inset Sidebar** ✅ COMPLETE

> Modern consumer app layout like Discord, Notion, OnlyFans

- [x] **10.8.2a** Add left padding to entire app frame (sidebar not flush with window edge)
- [x] **10.8.2b** Style sidebar as floating panel (rounded corners, soft shadow, glass effect)
- [x] **10.8.2c** Add gap between sidebar and content area
- [x] **10.8.2d** Reduce sidebar width for cleaner proportions

**10.8.3 "Do This Now" Mode** ✅ COMPLETE

> Clicking a vault item opens guided execution mode

- [x] **10.8.3a** Create `DoThisNow` modal component with step-by-step guidance
- [x] **10.8.3b** Add "Copy text" functionality for message intentions
- [x] **10.8.3c** Add guided prompts based on item type (action, gift, date, insight, coachTip)
- [x] **10.8.3d** Add micro-coaching tips that rotate with each step

**10.8.4 Vault Sorting & Filtering** ✅ COMPLETE

> Help users find the right gesture for the moment

- [x] **10.8.4a** Add sort dropdown (newest, oldest, by type)
- [ ] **10.8.4b** Add AI-estimated impact scores to vault items (deferred)
- [ ] **10.8.4c** Add time-required estimates (deferred)
- [ ] **10.8.4d** Add mood-based filtering (deferred)

**10.8.5 Three-Column Layout** ✅ COMPLETE

> Modern dashboard with relationship signals panel

- [x] **10.8.5a** Refactor layout to 3-column: sidebar | main | signals panel
- [x] **10.8.5b** Create RelationshipSignals component (upcoming dates, recent entries)
- [x] **10.8.5c** Add independent scrolling for right panel
- [x] **10.8.5d** Collapse right panel to bottom on mobile

**10.8.6 Love Language Icons on Actions** ✅ COMPLETE

> Tag each action chip with love language iconography

- [x] **10.8.6a** Add love language detection to action text
- [x] **10.8.6b** Display icons: ❤️ Words, ⏳ Quality Time, 🎁 Gifts, 🧹 Acts of Service, 🤗 Physical Touch
- [x] **10.8.6c** Use partner's love language for contextual suggestions

**10.8.7 Why This Matters Expander** ✅ COMPLETE

> Educational micro-content explaining the emotional impact

- [x] **10.8.7a** Add collapsible "Why this matters" section to Daily Insight
- [x] **10.8.7b** Generate rationale text in LLM prompt
- [x] **10.8.7c** Style as subtle, optional, warm

**10.8.8 Micro-Success Celebration** ✅ COMPLETE

> Delightful feedback when marking vault items done

- [x] **10.8.8a** Add soft pulse animation on "Done it!" click
- [x] **10.8.8b** Show "Beautiful. Well done." fade-out message
- [x] **10.8.8c** Add sparkle/confetti effect

**10.8.9 Behavioral Loop Analytics**

> Track and optimize the save → remind → act loop

- [ ] **10.8.9a** Track vault save events
- [ ] **10.8.9b** Track nudge impressions and clicks
- [ ] **10.8.9c** Track completion rates
- [ ] **10.8.9d** Surface "most acted on" insights

**10.8.10 Three-Column Layout Polish** ✅ COMPLETE

> Make the 3-column layout feel premium, centered, cohesive

- [x] **10.8.10a** Reduce gap between center and right column (move right panel inward)
- [x] **10.8.10b** Increase right panel width by 64px for breathing room (w-64 → w-80, 256px → 320px)
- [x] **10.8.10c** Increase typography size/weight in Relationship Signals for readability
- [x] **10.8.10d** Add subtle violet-tinted shadow/glow to right panel for floating card feel

**10.8.11 Relationship Signals Premium Polish** ✅ COMPLETE

> Transform the right panel into an emotionally rich, visually warm companion

**Visual Treatment:**

- [x] **10.8.11a** Wrap each section (Upcoming, Recent, Saved) in glassy card with subtle inner shadow
- [x] **10.8.11b** Add emotional section headers with emojis (✨ Upcoming, 💬 Recent Activity, ❤️ Saved Ideas)
- [x] **10.8.11c** Add color-coded category tags (Intention=rose, Appreciation=violet, Gift=amber, Service=emerald)
- [x] **10.8.11d** Add hover state lift effect and soft glow on items

**New Content Sections:**

- [x] **10.8.11e** Add "This Time Last Year" memory flashback (if memories exist from same time last year)
- [x] **10.8.11f** Add "Partner Facts" section (love language badge, interests as tags, quick tidbits)
- [ ] **10.8.11g** Add "Micro Nudges" section (contextual nudges based on time of day) - deferred
- [ ] **10.8.11h** Add "Ritual Reminders" section (recurring relationship habits) - deferred

**API Support:**

- [x] **10.8.11i** Create `GET /api/memories/flashback` endpoint for "this time last year" data
- [x] **10.8.11j** Add partner interests/facts to dashboard API response

**10.8.12 Brand Identity Polish** ✅ COMPLETE

> Make MFH branding feel warm, present, memorable, and emotionally anchored

**Logo & Typography:**

- [x] **10.8.12a** Increase doodle heart icon size (36px → 48px)
- [x] **10.8.12b** Increase "MFH" text size and weight (text-lg → text-xl, bold)
- [x] **10.8.12c** Increase "My Favorite Human" size and warmth (text-[10px] → text-sm, rose-400)
- [x] **10.8.12d** Add letter-spacing refinement (tracking-tight on both)

**Spacing & Layout:**

- [x] **10.8.12e** Add py-5 vertical padding in brand block
- [x] **10.8.12f** Center the brand block for visual gravity (flex-col items-center)
- [x] **10.8.12g** Add soft gradient divider below brand section (via-rose-200/40)

**Visual Warmth:**

- [x] **10.8.12h** Add soft gradient/glow background behind brand block (from-rose-100/40)
- [x] **10.8.12i** Add subtle heart watermark (opacity-[0.06])
- [x] **10.8.12j** Hover animation on logo (scale + rotate wiggle)

**10.8.13 Top Branding Bar (Calm-style)** ✅ COMPLETE

> Move MFH brand identity to a dedicated top bar for maximum emotional impact

**Top Bar Component:**

- [x] **10.8.13a** Create `TopBar` component with full-width layout
- [x] **10.8.13b** Add soft pastel gradient background (from-rose-50/80 via-pink-50/70 to-amber-50/60)
- [x] **10.8.13c** Add backdrop-blur-xl and subtle bottom border
- [x] **10.8.13d** Center MFH heart logo (40-48px) with "MFH" title and "My Favorite Human" subtitle
- [x] **10.8.13e** Add optional tagline: "Love lives in the details" (visible on lg screens)
- [x] **10.8.13f** Add shimmer animation on logo (repeating with delay)

**Sidebar Simplification:**

- [x] **10.8.13g** Remove primary branding from sidebar (moved to TopBar)
- [x] **10.8.13h** Convert sidebar to navigation-only (daily reminder + nav items + settings)
- [x] **10.8.13i** Sidebar already has vertical gradient
- [x] **10.8.13j** Active nav glow effect already present

**Layout Integration:**

- [x] **10.8.13k** Integrate TopBar into dashboard layout
- [x] **10.8.13l** Adjust main content area and sidebar sticky position for top bar height
- [x] **10.8.13m** Responsive behavior (TopBar visible on all sizes)

**10.8.14 Layout Width Constraint (Premium Feel)** ✅ COMPLETE

> Pull sidebars inward for intimate, premium layout like Calm/Day One

**Problem:** Three-column layout stretches full-width on large monitors, pushing sidebars to edges and creating empty, spread-out feeling that lacks intimacy.

**Solution:** Constrain layout width and pull columns closer together.

**Layout Container:**

- [x] **10.8.14a** Wrap entire dashboard layout in max-w-[1440px] centered container
- [x] **10.8.14b** Add horizontal padding (px-4 md:px-6 lg:px-8) to the wrapper
- [x] **10.8.14c** Center with flex justify-center

**Column Spacing:**

- [x] **10.8.14d** Reduce grid gap between columns to gap-4 lg:gap-5
- [x] **10.8.14e** Constrain center column max-width to 720px
- [x] **10.8.14f** Sidebars use flex-shrink-0 to maintain width, sit close to center

**Visual Result:**

- Left sidebar moves inward gracefully
- Center column becomes the visual anchor
- Right Relationship Signals panel aligns closer to content
- Entire screen feels more intimate and emotionally warm
- White space becomes balanced instead of empty
- Premium feel like Calm / Headspace / Day One

---

### Phase 10.9: Partner Photo Gallery 📸 ✅ COMPLETE

> **The Big Idea:** Let users upload multiple photos of their partner AND themselves. Display beautifully in the Hero Card with two portrait circles (you + them) and optionally a couple photo. Makes the app feel personal from the first glance.

### Why This Feature Is Essential

| Current State | With Photo Gallery |
|---------------|-------------------|
| Generic placeholder avatar | Their face smiling at you |
| App feels like a tool | App feels like YOUR relationship |
| Cold, impersonal | Warm, personal, emotional |
| "Another app" | "OUR app" |

**The Hero Card Vision:**
```
┌─────────────────────────────────────┐
│         [Days Together: 847]        │
│                                     │
│    ┌───┐   ❤️   ┌───┐              │
│    │You│───────│Her│              │
│    └───┘       └───┘              │
│                                     │
│    Joe  &  Sarah                    │
│                                     │
│   [Optional: Couple photo below]    │
└─────────────────────────────────────┘
```

---

### 10.9.1 Database Schema

```typescript
// Add to src/lib/db/schema.ts

export const userPhotos = pgTable('user_photos', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),

  // Photo metadata
  url: text('url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  type: varchar('type', { length: 20 }).notNull(), // self | partner | couple

  // Selection
  isPrimary: boolean('is_primary').default(false), // The one shown in hero
  displayOrder: integer('display_order').default(0),

  // Storage reference (for deletion)
  storageKey: text('storage_key').notNull(),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

**Photo Types:**
| Type | Description | Max Count |
|------|-------------|-----------|
| `self` | User's own photo | 5 |
| `partner` | Partner's photo | 10 |
| `couple` | Photo of them together | 5 |

- [x] **10.9.1a** Add `user_photos` table schema
- [x] **10.9.1b** Run database migration

---

### 10.9.2 Cloud Storage Setup (Google Cloud Storage)

**Bucket Structure:**
```
mfh-user-photos/
├── {userId}/
│   ├── self/
│   │   ├── {photoId}.jpg
│   │   └── {photoId}_thumb.jpg
│   ├── partner/
│   │   ├── {photoId}.jpg
│   │   └── {photoId}_thumb.jpg
│   └── couple/
│       ├── {photoId}.jpg
│       └── {photoId}_thumb.jpg
```

**Upload Flow:**
1. User selects image from device
2. Client compresses to max 2MB
3. Generate signed upload URL from API
4. Client uploads directly to GCS
5. API creates database record
6. Generate thumbnail (Cloud Function or on-demand)

- [x] **10.9.2a** Create GCS bucket with CORS config
- [x] **10.9.2b** Create signed URL generation endpoint
- [x] **10.9.2c** Create upload completion handler
- [x] **10.9.2d** Create thumbnail generation (resize to 200x200)

---

### 10.9.3 API Endpoints

**`GET /api/photos`** - Get all user photos
```typescript
// Query: ?type=partner (optional filter)
// Returns: { photos: Photo[], primarySelf: Photo, primaryPartner: Photo, primaryCouple: Photo }
```

**`POST /api/photos/upload-url`** - Get signed upload URL
```typescript
// Body: { type: "partner", mimeType: "image/jpeg" }
// Returns: { uploadUrl: string, photoId: string, storageKey: string }
```

**`POST /api/photos`** - Confirm upload complete
```typescript
// Body: { photoId: string, storageKey: string, type: "partner" }
// Returns: { photo: Photo }
```

**`PATCH /api/photos/{id}/primary`** - Set as primary
```typescript
// Body: { isPrimary: true }
// Returns: { photo: Photo }
```

**`DELETE /api/photos/{id}`** - Delete photo
```typescript
// Deletes from GCS + database
```

- [x] **10.9.3a** Create `GET /api/photos` endpoint
- [x] **10.9.3b** Create `POST /api/photos/upload-url` endpoint
- [x] **10.9.3c** Create `POST /api/photos` confirm endpoint
- [x] **10.9.3d** Create `PATCH /api/photos/[id]/primary` endpoint
- [x] **10.9.3e** Create `DELETE /api/photos/[id]` endpoint

---

### 10.9.4 Photo Upload Component

**`PhotoUploader`** - Reusable upload component

```tsx
<PhotoUploader
  type="partner"
  maxPhotos={10}
  onUploadComplete={(photo) => refetch()}
/>
```

**Features:**
- Drag & drop zone
- Click to select
- Client-side compression (max 2MB)
- Progress indicator
- Preview before upload
- Error handling with retry
- Mobile camera capture support

- [x] **10.9.4a** Create `PhotoUploader` component
- [x] **10.9.4b** Add client-side image compression (browser-image-compression)
- [x] **10.9.4c** Add drag & drop support
- [x] **10.9.4d** Add upload progress indicator
- [x] **10.9.4e** Add mobile camera capture

---

### 10.9.5 Photo Gallery Component

**`PhotoGallery`** - Display + manage photos

```tsx
<PhotoGallery
  type="partner"
  photos={partnerPhotos}
  onSetPrimary={(id) => setPrimary(id)}
  onDelete={(id) => deletePhoto(id)}
/>
```

**Features:**
- Grid display with thumbnails
- Star icon on primary photo
- Click to set as primary
- Delete with confirmation
- Reorder via drag (future)

- [x] **10.9.5a** Create `PhotoGallery` component
- [x] **10.9.5b** Add primary photo indicator (star/crown)
- [x] **10.9.5c** Add delete confirmation modal
- [x] **10.9.5d** Add lightbox preview on click

---

### 10.9.6 Partner Profile Photo Section

**Add to Partner Profile page:**

```tsx
// src/app/dashboard/partner/page.tsx

<section className="space-y-4">
  <h2>Photos of {partner.name}</h2>
  <PhotoGallery type="partner" photos={partnerPhotos} />
  <PhotoUploader type="partner" />
</section>
```

- [x] **10.9.6a** Add photos section to partner profile page
- [x] **10.9.6b** Wire up photo management

---

### 10.9.7 User Profile Photo Section

**Create or update user settings/profile:**

```tsx
// src/app/dashboard/settings/page.tsx or new profile page

<section className="space-y-4">
  <h2>Your Photo</h2>
  <PhotoGallery type="self" photos={selfPhotos} />
  <PhotoUploader type="self" maxPhotos={5} />
</section>

<section className="space-y-4">
  <h2>Photos Together</h2>
  <PhotoGallery type="couple" photos={couplePhotos} />
  <PhotoUploader type="couple" maxPhotos={5} />
</section>
```

- [x] **10.9.7a** Add user photo section to settings
- [x] **10.9.7b** Add couple photo section
- [x] **10.9.7c** Wire up photo management

---

### 10.9.8 Hero Partner Card Enhancement ✅

**Transform the Hero Card with photos:**

```tsx
// src/components/features/dashboard/partner-card.tsx

// Current: Just partner name and stats
// New: Two portrait circles + optional couple photo

<div className="flex items-center justify-center gap-6">
  {/* Your photo */}
  <div className="relative">
    <Avatar
      src={selfPhoto?.thumbnailUrl}
      fallback={userName?.charAt(0)}
      size="lg"
      className="ring-2 ring-rose-200"
    />
    <span className="text-xs mt-1">You</span>
  </div>

  {/* Heart connector */}
  <div className="text-2xl animate-pulse">❤️</div>

  {/* Partner photo */}
  <div className="relative">
    <Avatar
      src={partnerPhoto?.thumbnailUrl}
      fallback={partner.name.charAt(0)}
      size="lg"
      className="ring-2 ring-rose-200"
    />
    <span className="text-xs mt-1">{partner.name}</span>
  </div>
</div>

{/* Optional: Couple photo as background or below */}
{couplePhoto && (
  <div className="mt-4 rounded-xl overflow-hidden opacity-90">
    <img src={couplePhoto.url} alt="Together" className="object-cover" />
  </div>
)}
```

**Design Options for Couple Photo:**

| Option | Description |
|--------|-------------|
| **Background blur** | Couple photo as blurred background behind the two circles |
| **Below circles** | Full-width banner below the portrait circles |
| **Rotating** | Cycle through couple photos with slow fade |
| **Hover reveal** | Couple photo appears on card hover |

- [x] **10.9.8a** Add self + partner avatar circles to Hero Card
- [x] **10.9.8b** Add heart connector animation
- [x] **10.9.8c** Add couple photo display (pick design option)
- [x] **10.9.8d** Add loading skeleton for photos
- [x] **10.9.8e** Add fallback for missing photos (initials)

---

### 10.9.9 Dashboard API Enhancement

**Update dashboard API to include primary photos:**

```typescript
// GET /api/dashboard
{
  partner: { ... },
  photos: {
    self: { url, thumbnailUrl } | null,
    partner: { url, thumbnailUrl } | null,
    couple: { url, thumbnailUrl } | null
  },
  ...
}
```

- [x] **10.9.9a** Add photos to dashboard API response
- [x] **10.9.9b** Add photos to DashboardContext or props

---

### Files to Create (Phase 10.9)

```text
# Database
src/lib/db/schema.ts                             # Add user_photos table

# Storage
src/lib/storage/gcs-client.ts                    # GCS client + signed URLs
src/lib/storage/image-utils.ts                   # Compression, thumbnails

# API Routes
src/app/api/photos/route.ts                      # GET, POST (confirm)
src/app/api/photos/upload-url/route.ts           # POST (get signed URL)
src/app/api/photos/[id]/route.ts                 # DELETE
src/app/api/photos/[id]/primary/route.ts         # PATCH

# Components
src/components/features/photos/photo-uploader.tsx
src/components/features/photos/photo-gallery.tsx
src/components/features/photos/index.ts

# Pages
src/app/dashboard/partner/page.tsx               # Add photo section
src/app/dashboard/settings/page.tsx              # Add user photo section

# Dashboard
src/components/features/dashboard/partner-card.tsx  # Enhanced with photos
src/app/api/dashboard/route.ts                      # Add photos to response
```

---

### Phase 10.16: Relationship Wisdom ✅ COMPLETE

> Deeply personalized, emotionally intelligent 2-paragraph guidance that reflects the relationship back to the user

**The Vision:** Transform the simple Daily Insight into a profound "Relationship Wisdom" card that demonstrates MFH truly *understands* the relationship. This is the moment users feel "this app gets me."

**Why This Matters:**
| Before | After |
|--------|-------|
| Generic relationship tips | Personalized insight based on *their* patterns |
| "Try sending a sweet text" | "Sarah's been quiet this week. A gentle check-in that references your beach trip might mean everything right now." |
| Feels like any app | Feels like a caring, present companion |

---

#### 10.16.1 System Prompt

**File:** `src/lib/ai/relationship-wisdom-prompt.ts`

```typescript
export const RELATIONSHIP_WISDOM_SYSTEM_PROMPT = `You are MFH, the relationship intelligence companion for the "My Favorite Human" app.
Your role is to generate deeply personalized, emotionally intelligent two-paragraph Relationship Wisdom based entirely on the user's relationship context.

Your tone must always be:
- warm
- gentle
- grounded
- emotionally intelligent
- encouraging
- non-judgmental
- empathetic
- thoughtful
- never clinical, never moralizing
- speaking to one person about their favorite human
- focused, intimate, and grounded in real context

You are not giving generic relationship advice.
You are giving reflective insight based on the actual patterns, memories, love languages, preferences, emotional themes, and dynamics you see in the user's relationship data.

---

YOU WILL ALWAYS PRODUCE EXACTLY TWO PARAGRAPHS:

**Paragraph 1 — Personalized Reflection**

Reflect back what you see in the relationship context:
- recent emotional patterns
- strengths of the relationship
- ways they connect
- partner tendencies (love language, mood patterns, rituals)
- any notable memories recently added
- behaviors that deepen connection
- signals from Try Today, Vault, Memories, or Photos
- what matters most to the partner
- ways the user has shown up well
- what the relationship seems to need lately

This paragraph should feel like:
- "I see your relationship clearly."
- "Here's what matters most right now."

It must reference specific elements in the context (no generic statements).

**Paragraph 2 — Gentle Direction**

Offer meaningful, actionable direction for the week ahead:
- anchored in their relationship
- grounded in the reflection above
- one simple, specific way to show up
- something emotionally resonant, not tactical
- framed softly ("might," "could," "often helps")
- emphasizing presence, intention, and small gestures
- connected to love language and emotional rhythms

This paragraph must not feel like a command or checklist — it should feel like gentle support or guidance.

---

CONTENT SOURCES

Pull insight from all available user context, including but not limited to:
- partner profile details
- love language
- attachment tendencies
- relationship_facts entries
- memories
- photos + extracted details
- gift ideas
- vault intentions
- upcoming dates
- emotional signals
- patterns MFH has identified
- saved Heartboard items
- onboarding answers
- mood/energy descriptions
- conflict tendencies
- rituals
- shared activities
- joyful triggers
- recent daily insights

If something is missing or unclear, do NOT fabricate — stay grounded in what is known.

---

STRUCTURE RULES
- Always write exactly two paragraphs, each 2–4 sentences.
- Never mention that you are an AI.
- Never refer to "data," "context blocks," or "input."
- Never use generic advice. Everything must feel personal and specific to this relationship.
- Use simple, warm language—no jargon, no therapy buzzwords.
- Never blame either partner.
- Never give directives ("you must," "you should"). Use gentle suggestions.
- Refer to the partner by name when possible.
- Emphasize emotional presence, gentleness, attention, listening, ritual, small gestures, and meaning.
- Tone must always feel like MFH: soft, loving, thoughtful, supportive.

---

OUTPUT FORMAT

Return plain text only (no JSON).
Two paragraphs separated by a blank line.`;
```

- [x] **10.16.1a** Create relationship wisdom prompt file ✅
- [x] **10.16.1b** Add context builder integration ✅ (using existing buildUserContext)

---

#### 10.16.2 API Endpoint

**File:** `src/app/api/ai/relationship-wisdom/route.ts`

```typescript
// GET /api/ai/relationship-wisdom
// Returns: { wisdom: string, generatedAt: string, cached: boolean }
```

**Logic:**
1. Build full user context (partner, memories, vault, dates, photos, facts)
2. Send to Claude with relationship wisdom prompt
3. Cache result for 12-24 hours (one per day, refreshes on login)
4. Return formatted response

- [x] **10.16.2a** Create relationship wisdom API endpoint ✅
- [x] **10.16.2b** Add 24-hour caching with daily refresh ✅
- [x] **10.16.2c** Handle context-poor scenarios gracefully ✅ (via MINIMAL_CONTEXT_WISDOM)

---

#### 10.16.3 Dashboard Component

**File:** `src/components/features/dashboard/relationship-wisdom.tsx`

**Design:**
- Premium card with subtle rose/violet gradient
- Warm emoji header (🌸 or ✨)
- Title: "Relationship Wisdom" or "This Week's Insight"
- Two paragraphs with elegant typography
- Soft fade-in animation
- Optional: "Refresh" button (with cooldown)
- Optional: "Save to Journal" action

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  ✨ Relationship Wisdom                         │
├─────────────────────────────────────────────────┤
│                                                 │
│  [Paragraph 1: Personalized Reflection]         │
│  Something deeply specific about their          │
│  relationship patterns and current state...     │
│                                                 │
│  [Paragraph 2: Gentle Direction]                │
│  A warm, actionable suggestion grounded in      │
│  everything MFH knows about them...             │
│                                                 │
│                          ────────────           │
│                          [Save to Journal]      │
└─────────────────────────────────────────────────┘
```

- [x] **10.16.3a** Create RelationshipWisdom component ✅
- [x] **10.16.3b** Add premium gradient styling ✅ (violet gradient)
- [x] **10.16.3c** Add loading skeleton state ✅
- [x] **10.16.3d** Add save to journal action (creates memory) ✅
- [x] **10.16.3e** Replace or augment DailyInsight on dashboard ✅ (added above DailyInsight)

---

#### 10.16.4 Context Enhancement

**File:** `src/lib/ai/context-builder.ts`

Ensure the context builder provides rich data for wisdom generation:

```typescript
// Enhanced context for relationship wisdom
interface WisdomContext {
  partner: PartnerContext;
  recentMemories: MemoryContext[];      // Last 20
  upcomingDates: DateContext[];          // Next 5
  vaultItems: VaultItemContext[];        // Active intentions
  insideJokes: InsideJokeContext[];      // Personal touches
  recentPhotos: PhotoContext[];          // Last 5 photos + captions
  relationshipFacts: FactContext[];      // Extracted preferences
  milestones: { daysTogether: number; nextAnniversary?: Date };
  activityPatterns: {
    lastMemoryAdded?: Date;
    vaultCompletionRate?: number;
    engagementLevel?: 'high' | 'medium' | 'low';
  };
}
```

- [ ] **10.16.4a** Add relationship facts to context
- [ ] **10.16.4b** Add photo captions to context
- [ ] **10.16.4c** Add activity patterns calculation
- [ ] **10.16.4d** Add engagement level detection

---

#### 10.16.5 Future Prompt Library

> Additional prompts to create later (as mentioned in the spec)

| Prompt | Purpose |
|--------|---------|
| **Daily Insight** | Quick, daily actionable suggestion |
| **Photo Understanding** | Analyze uploaded photos for relationship context |
| **Vault Resurfacing** | Intelligent nudges for saved items |
| **Daily Questions** | Personalized reflection prompts |
| **Try Today Generator** | Context-aware action suggestions |
| **Partner Profile Enrichment** | Extract facts from conversations |

- [ ] **10.16.5a** (Future) Create prompt library structure
- [ ] **10.16.5b** (Future) Create Try Today generator prompt
- [ ] **10.16.5c** (Future) Create Daily Questions prompt

---

#### Files to Create (Phase 10.16)

```text
# Prompts
src/lib/ai/relationship-wisdom-prompt.ts

# API
src/app/api/ai/relationship-wisdom/route.ts

# Components
src/components/features/dashboard/relationship-wisdom.tsx

# Updates
src/lib/ai/context-builder.ts (enhance for wisdom)
src/app/dashboard/page.tsx (add RelationshipWisdom)
```

---

### Phase 10.18: Liquid Glass UI Polish ✅ COMPLETE

> Consistent color semantics, reusable Tag component, and UI fixes across dashboard

**Color Semantic System:**
- **Amber (🟡)** = Financial Energy (gifts, purchases, "To Buy")
- **Rose (🔴)** = Love & Action (memories, dates, hero cards)
- **Violet (🟣)** = Wisdom & Magic (AI insights, coach tips, thoughts)
- **Emerald (🟢)** = Health & Status (success states, travel, christmas)

**10.18.1 Tag Component** ✅ (`src/components/ui/tag.tsx`)
- [x] Create reusable Tag component with 3 variants
- [x] Pastel variant for feeds/cards
- [x] Overlay variant for photos/lightbox
- [x] Status variant for hero card badges
- [x] Color props: rose, violet, emerald, amber, cyan, gray

**10.18.2 Relationship Wisdom Improvements** ✅ (`src/components/features/dashboard/relationship-wisdom.tsx`)
- [x] Add expand/collapse for long wisdom text
- [x] Add "Read more" / "Show less" toggle
- [x] Add gradient fade when collapsed

**10.18.3 Hero Card Drag Positioning** ✅ (`src/components/features/dashboard/partner-card.tsx`)
- [x] Add drag-to-reposition for partner photo
- [x] Add position save/cancel UI
- [x] Persist position to database (imagePositionX, imagePositionY)
- [x] Add PATCH endpoint for position update (`/api/photos/[id]`)

**10.18.4 Recent Moments Fix** ✅ (`src/components/features/dashboard/recent-moments.tsx`)
- [x] Fix 404 for text memories (open in lightbox instead of broken link)
- [x] Use consistent Tag component for tags

**10.18.5 Color Semantic Fixes** ✅
- [x] Fix memory type colors in memory-card.tsx (memory: rose, gift: amber)
- [x] Fix vault-card.tsx colors (giftIdea: amber, dateIdea: rose)
- [x] Fix relationship-signals.tsx (date types, vault types, love languages)
- [x] Fix lightbox.tsx category colors
- [x] Fix daily-insight.tsx (pink → rose throughout)
- [x] Replace all pink references with rose (pink not part of design system)

**10.18.6 Documentation** ✅
- [x] Add Tag component documentation to CLAUDE.md
- [x] Document color semantic system

---

### Phase 10.19: Dashboard Bug Fixes ✅ COMPLETE

> Fix visual and data issues on the dashboard

**10.19.1 Signals Avatar** (`src/components/features/dashboard/signals-card.tsx`)
- [x] Use couple photo from DB instead of placeholder "H" avatar
- [x] Fall back to partner photo if no couple photo
- [x] Fall back to default-avatar.png if no photos

**10.19.2 Upcoming Section - Real Data** (`src/components/features/dashboard/upcoming-timeline.tsx`)
- [x] Remove hardcoded fake dates
- [x] Pull upcoming dates from database via API
- [x] Show empty state if no upcoming dates

**10.19.3 Love Language Tooltip Fix** (`src/components/features/dashboard/partner-card.tsx`)
- [x] Fix tooltip display - love language keys mismatched with DB values
- [x] Ensure tooltip shows full love language name and description

**10.19.4 Heartboard Dashboard Preview** (`src/components/features/dashboard/heartboard-preview.tsx`)
- [x] Fix new heartboard items not appearing - now fetches from API
- [x] Added empty state when no items saved
- [x] Component fetches its own data instead of relying on props

---

### Phase 10.20: Avatar & Data Display Fixes ✅ COMPLETE

> Fix recurring dates display, nav badge counts, and avatar photos

**10.20.1 Recurring Dates Fix** (`src/components/features/dashboard/upcoming-timeline.tsx`)

- [x] Fix timezone bug - parse YYYY-MM-DD as local date, not UTC
- [x] Add `getNextOccurrence()` function for yearly/monthly recurring dates
- [x] Birthdays stored with birth year (e.g., 1975-08-31) now show next occurrence
- [x] Filter and sort by calculated next date, not original date

**10.20.2 Nav Badge Counts** (`src/components/layout/nav.tsx`, `src/app/api/dashboard/route.ts`)

- [x] Remove hardcoded badge counts (was showing "2" and "12")
- [x] Add vault and heartboard counts to dashboard API response
- [x] Fetch dynamic counts from database
- [x] Heartboard count excludes archived items (`is_archived = false`)

**10.20.3 Top Bar Avatar** (`src/components/layout/top-bar.tsx`)

- [x] Fetch user's uploaded self photo from dashboard API
- [x] Display actual photo instead of hardcoded `/default-avatar.png`
- [x] Show gradient initials as fallback when no photo uploaded

**10.20.4 Profile Page Partner Avatar** (`src/app/dashboard/profile/page.tsx`)

- [x] Use primary partner photo from `userPhotos` table
- [x] Fallback chain: primary photo → first photo → legacy `partner.photoUrl`
- [x] Partner "H" initial now shows actual uploaded photo

---

### Phase 10.17: Scrapbook PDF Export ⭐ KILLER FEATURE

> Export-to-PDF that reads like a scrapbook + love story + memory journal — an emotional deliverable people will treasure, print, gift, and cry over

**The Vision:** MFH is uniquely positioned to generate something FAR more meaningful than a simple "export list" because the LLM already creates narrative memories, emotional captions, tags, themes, wisdom entries, timelines, and story arcs.

**What Users Will Feel:**
> "Holy shit… this is the story of our relationship."

---

#### What The PDF Should Feel Like

Think:
- Day One "Book Export"
- Artifact Uprising photo journal
- A couple's anniversary memory book
- A soft, pastel, emotional keepsake

Design aesthetic should match MFH:
- Pastel gradients
- Soft borders, rounded corners
- Custom MFH doodle icons
- Sparkles (sparingly)
- Gentle typefaces (Inter, Plus Jakarta Sans, or soft serif)
- Lots of whitespace
- Emotional typography hierarchy

Every page should feel like a page in a memory book.

---

#### 10.17.1 PDF Sections

**❤️ Cover Page**
- MFH doodle heart icon
- "Our Story" or "Joe & Holly"
- Optional tagline: "Every moment we've lived, remembered with love."

**❤️‍🔥 Introduction Page (LLM-written)**
- 1–2 paragraph introduction summarizing relationship themes
- Support, adventure, creativity, devotion, shared rituals, growth together
- Totally unique per couple

**📅 Timeline / Table of Contents**
- Chronological list of memories, key events, photos, milestones, "firsts"
- Helps the PDF feel structured

**📸 Photo Memories Section**
For each photo:
- Large image
- LLM-generated emotional caption
- Follow-up insights (from Q&A)
- Date
- Tags (soft, pastel chips)
- Optional "reflection" paragraph

Each memory reads like a page in a love-story book.

**✨ Relationship Wisdom Section**
- Title: "Reflections on Us"
- Two-paragraph wisdom entries become like relationship journal entries

**💞 Intentions & Gestures Section**
- Thoughtful actions saved in the vault
- Users LOVE seeing that they showed up

**🎁 Gift Ideas Section**
- A place for "future surprises" you loved

**🧩 Patterns MFH Detected**
Most unique section — couple-specific relationship analysis:
> "Your relationship thrives on…"
- Shared creativity
- Physical adventure
- Quality time
- Reassurance
- Rituals
- Support
- Humor

No other app can do this.

**💗 Favorite Moments Section**
- LLM chooses 3–5 top moments
- Writes narrative summary like:
> "This was a moment of pure connection — the kind you didn't have to plan, just be present for."

**🌅 Closing Letter**
MFH generates a soft closing reflection:
> "Your love story is built from the details — the small gestures, the shared laughter, the quiet evenings, the courage to try again. Here's to every chapter ahead."

This is "cry-in-a-good-way" material.

---

#### 10.17.2 Technical Implementation

**Option A — Server-side PDF generation**
- `react-pdf` (React components → PDF)
- `pdfmake`
- Puppeteer (render HTML → PDF)

**Option B — Template rendering**
- Prebuilt scrapbook templates
- Images dropped into frames
- Markdown for text
- LLM writes markdown → renderer exports PDF

---

#### 10.17.3 Scrapbook Generation Prompt

```typescript
export const SCRAPBOOK_GENERATION_PROMPT = `Create a structured scrapbook export using the memories, photos, insights, and relationship themes.

Include:
1. Introduction (1-2 paragraphs summarizing the relationship)
2. Timeline of key moments
3. Themed sections (adventure, intimacy, growth, etc.)
4. Emotional summaries for top 5 moments
5. Detected relationship patterns and strengths
6. Final closing reflection letter

Output in markdown sections that map to PDF layout.
Use warm, emotionally intelligent language throughout.
Reference specific memories, dates, and details from the context.`;
```

---

#### 10.17.4 Monetization

This feature WILL SELL the app:

| Model | Price |
|-------|-------|
| Per export | $4.99 |
| Pro plan | $29/year |
| Bundle | "MFH Memories Book" |

Perfect timing for:
- Anniversaries
- Valentine's Day
- Birthdays
- Weddings
- Reconciliation
- "Just because"

---

#### 10.17.5 Implementation Tasks

- [ ] **10.17.5a** Create scrapbook generation prompt template
- [ ] **10.17.5b** Create `/api/export/scrapbook` endpoint
- [ ] **10.17.5c** Build PDF template components (cover, intro, memories, wisdom, closing)
- [ ] **10.17.5d** Integrate react-pdf or Puppeteer for generation
- [ ] **10.17.5e** Create export customization UI (select sections, date range, cover style)
- [ ] **10.17.5f** Add photo embedding and layout
- [ ] **10.17.5g** Create "relationship patterns" analysis prompt
- [ ] **10.17.5h** Create "favorite moments" selection prompt
- [ ] **10.17.5i** Create closing letter generation prompt
- [ ] **10.17.5j** Add export progress indicator
- [ ] **10.17.5k** Wire up to Stripe for premium export

---

#### Files to Create (Phase 10.17)

```text
# Prompts
src/lib/ai/scrapbook-prompt.ts
src/lib/ai/patterns-prompt.ts
src/lib/ai/closing-letter-prompt.ts

# API
src/app/api/export/scrapbook/route.ts

# PDF Templates
src/lib/pdf/scrapbook-template.tsx
src/lib/pdf/cover-page.tsx
src/lib/pdf/memory-page.tsx
src/lib/pdf/wisdom-page.tsx
src/lib/pdf/closing-page.tsx

# UI
src/app/dashboard/export/page.tsx
src/components/features/export/export-customizer.tsx
src/components/features/export/export-preview.tsx
```

---

### Phase 11: Notifications & PWA

> Push notifications and installable app

- [ ] **11.1** Setup Firebase Cloud Messaging (`src/lib/notifications/fcm.ts`)
- [ ] **11.2** Create notification preferences UI
- [ ] **11.3** Create reminder scheduling service
- [ ] **11.4** Create `public/manifest.json` - PWA manifest
- [ ] **11.5** Create service worker for offline support
- [ ] **11.6** Add install prompt component
- [ ] **11.7** Implement dark mode toggle + CSS variables

### Phase 12: Billing & Subscriptions

> Stripe integration

- [ ] **12.1** Create `src/lib/stripe/stripe-client.ts` - Stripe SDK setup
- [ ] **12.2** Create pricing page (`src/app/pricing/page.tsx`)
- [ ] **12.3** Create checkout flow
- [ ] **12.4** Create customer portal link
- [ ] **12.5** Create webhook handler (`src/app/api/stripe/webhook/route.ts`)
- [ ] **12.6** Create subscription status hooks
- [ ] **12.7** Add paywall to premium features
- [ ] **12.8** Implement trial flow (7-day free)

### Phase 13: Polish & Launch

> Final touches

- [ ] **13.1** Add loading states to all components
- [ ] **13.2** Add error boundaries and error states
- [ ] **13.3** Add empty states (no memories, no dates, etc.)
- [ ] **13.4** Setup Mixpanel analytics (`src/lib/analytics/`)
- [ ] **13.5** Setup Sentry error tracking
- [ ] **13.6** Performance optimization (lazy loading, image optimization)
- [ ] **13.7** SEO metadata for all pages
- [ ] **13.8** Final accessibility audit
- [ ] **13.9** Deploy to Cloud Run
- [ ] **13.10** Setup CI/CD with GitHub Actions

---

## Files Created/Modified in Phase 10.6-10.8.1

```text
# Phase 10.6: Thoughtfulness Vault
src/lib/db/schema.ts                    # Added thoughtfulnessVault table
src/app/api/vault/route.ts              # GET, POST, DELETE endpoints
src/app/api/vault/[id]/route.ts         # PATCH, DELETE for individual items
src/app/dashboard/vault/page.tsx        # Vault page
src/components/features/vault/save-to-vault.tsx  # SaveToVault component
src/components/features/vault/vault-card.tsx     # VaultCard component
src/components/features/vault/vault-list.tsx     # VaultList with tabs
src/components/features/vault/index.ts           # Barrel exports
src/hooks/use-vault.ts                           # useVault hook

# Phase 10.7: AI Vault Nudge
src/app/api/ai/vault-nudge/route.ts             # GET endpoint with caching
src/lib/ai/vault-nudge-prompt.ts                # LLM prompt template
src/lib/ai/vault-nudge-selector.ts              # Scoring algorithm
src/components/features/dashboard/vault-nudge.tsx  # Dashboard component

# Phase 10.8.1: Action Chips
src/lib/dailyInsight/schema.ts          # Added actions[] to DailyInsightResult
src/lib/dailyInsight/prompt.ts          # Updated prompt to generate actions
src/components/features/dashboard/daily-insight.tsx  # Added action chips UI
```

---

## Key Integration Points

| Component | Integration | Status |
|-----------|-------------|--------|
| Daily Insight | SaveToVault on focus text | ✅ |
| Daily Insight | 2-3 Action Chips with SaveToVault | ✅ |
| Coach Chat | LLM tags actionable items with [[action]], [[gift]], [[date]], [[tip]] | ✅ |
| Message Bubble | Parses tags, renders SaveToVault chips | ✅ |
| Dashboard | VaultNudge component surfaces saved items | ✅ |
| Context Builder | Vault items sent to coach for reference | ✅ |

---

# 🚀 MFH FULL VISION ROADMAP

> **The Thesis:** Most relationship advice is generic. MFH makes it specific to YOUR relationship because it has context.

## The Core Loop (Already Built)

```
Memory → Context → Intelligence → Proactive Action
```

Everything below builds on this foundation.

---

## Phase 14: Memory & History Deep Dive 🧠

> **Why this matters:** This is MFH's core differentiator. The more you store, the more intelligent MFH becomes.

### 14.1 Relationship Timeline ✅ COMPLETE

**Database: `relationship_milestones` table**

- [x] **14.1a** Create milestones table (id, userId, type, title, date, notes, photos)
- [x] **14.1b** Add milestone types: first_date, first_kiss, first_trip, first_fight, first_makeup, engagement, wedding, moved_in, etc.
- [x] **14.1c** Create visual timeline component (vertical with connections)
- [x] **14.1d** Auto-populate from existing important_dates table + partner relationshipStart
- [ ] **14.1e** "How We Met" story field with rich text editor

**Files Created:**
```
src/lib/db/schema.ts                    # Added relationshipMilestones table + MILESTONE_TYPES
src/app/api/milestones/route.ts         # GET (with auto-seed), POST
src/app/api/milestones/[id]/route.ts    # GET, PATCH, DELETE
src/app/dashboard/timeline/page.tsx     # Timeline page with stats
src/components/features/timeline/milestone-card.tsx   # MilestoneCard component
src/components/features/timeline/timeline.tsx         # Visual timeline with year groups
src/components/features/timeline/milestone-form.tsx   # Add/Edit form with emoji picker
src/components/features/timeline/index.ts             # Barrel exports
src/components/layout/nav.tsx           # Added Timeline to navigation
```

### 14.2 Inside Jokes Log ✅ COMPLETE

**Database: `inside_jokes` table**

- [x] **14.2a** Create inside_jokes table (id, userId, joke, origin_story, context, emoji, usage_count, last_used_at)
- [x] **14.2b** Add page: `/dashboard/memories/inside-jokes`
- [x] **14.2c** AI can reference inside jokes in suggestions (added to context-builder.ts)

**Files Created:**
```
src/lib/db/schema.ts                    # Added insideJokes table + types
src/app/api/inside-jokes/route.ts       # GET, POST
src/app/api/inside-jokes/[id]/route.ts  # PATCH, DELETE (with incrementUsage)
src/app/dashboard/memories/inside-jokes/page.tsx  # Inside jokes page
src/components/features/inside-jokes/*  # Card, Form, index
src/lib/ai/context-builder.ts           # Added insideJokes to AI context
src/app/dashboard/memories/page.tsx     # Added collection links
```

### 14.2.1 Inside Jokes Quick Action ✅ COMPLETE

> **Problem:** Inside Jokes entry point is buried in Memories → Inside Jokes. Should be easily accessible.

- [x] **14.2.1a** Add "Add Inside Joke" to Quick Actions on dashboard
- [x] **14.2.1b** Quick Action navigates to inside jokes page with ?add=true to auto-open form
- [x] **14.2.1c** Inside jokes page handles ?add=true query param

**Files to Modify:**
```
src/components/features/dashboard/quick-actions.tsx  # Add new quick action
src/app/dashboard/page.tsx                           # Import InsideJokeForm modal
```

---

## Phase 14.5: Relationship RAG System 🧠 ARCHITECTURE

> **The Big Idea:** Transform MFH into a relationship intelligence platform where every piece of context powers smarter AI suggestions.

### The Problem with Current Onboarding

Current onboarding asks 7 questions upfront, which feels like a form. Users rush through it, answers are shallow, and we miss the opportunity for deeper context that develops over time.

### The New Model: Light Start, Optional Depth

**Philosophy:** Reduce initial friction, never restrict access. Users who want to fill everything out at once CAN. The goal is relieving pressure, not gatekeeping content.

**Light First Pass (2-3 min):**
1. Partner's name
2. Relationship start date (approximate is fine)
3. Love language (optional, can skip)
4. One important date (birthday)
5. *"That's all we need to get started! You can add more details anytime."*

**Optional Chapters (Always Available):**
After initial onboarding, show a "Deepen Your Profile" section—all chapters unlocked from day 1.

| Chapter | Questions | Why It Helps |
|---------|-----------|--------------|
| 🎁 Gift Intelligence | Sizes, brands they love, gift preferences | Better gift suggestions |
| 🍽️ Food & Dining | Dietary restrictions, favorite restaurants, cuisines | Date & celebration planning |
| 👨‍👩‍👧 Inner Circle | Family members, best friends, important relationships | Contextual reminders |
| 🏠 Daily Life | Routines, rituals, pet peeves | Daily insight personalization |
| 💕 Love Story | How you met, first date, proposal story | Anniversary & memory features |
| 🗣️ Communication | Conflict patterns, apology language, stress signs | Coach advice quality |

**How It Works:**
- Dashboard shows "Complete Your Love Story" with progress ring (optional, not nagging)
- All chapters accessible immediately—no time locks
- Each chapter is 3-5 questions, feels like storytelling not forms
- Users can fill out everything at once OR come back later
- Gentle nudges after a few days: "Want to tell MFH more about [Partner]?"
- LLM can also ask follow-up questions during coach conversations
- Everything feeds into `relationship_facts` table

**Key UX Principle:** Never make users feel restricted. The light start relieves pressure; the chapters provide depth for those who want it.

---

### 14.5.1 Core Database Tables

#### `relationship_facts` - The Universal Context Store

Stores ALL question/answer pairs from onboarding AND LLM follow-ups.

```typescript
// Schema: src/lib/db/schema.ts
export const relationshipFacts = pgTable('relationship_facts', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),

  // Categorization
  category: varchar('category', { length: 50 }).notNull(),
  // Categories: partner_basics, love_languages, gift_preferences, food_dining,
  // inner_circle, daily_life, love_story, communication, intimacy, goals

  subcategory: varchar('subcategory', { length: 50 }),
  // e.g., "clothing_sizes", "favorite_restaurants", "conflict_patterns"

  // The Q&A
  question: text('question').notNull(),
  answer: text('answer').notNull(),

  // Metadata
  source: varchar('source', { length: 30 }).notNull(), // onboarding | chapter | coach | manual
  confidence: real('confidence'), // 0-1, how confident we are this is still true
  lastConfirmedAt: timestamp('last_confirmed_at'),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

**Example Facts:**
| category | subcategory | question | answer | source |
|----------|-------------|----------|--------|--------|
| partner_basics | name | What is your partner's name? | Sarah | onboarding |
| gift_preferences | clothing_sizes | What size does Sarah wear in tops? | Medium (US 8) | chapter |
| food_dining | allergies | Does Sarah have any food allergies? | Shellfish allergy, severe | coach |
| communication | stress_signs | How can you tell when Sarah is stressed? | Gets quiet, needs alone time first | chapter |

- [ ] **14.5.1a** Create `relationship_facts` table schema
- [ ] **14.5.1b** Create `GET /api/facts` endpoint (filter by category)
- [ ] **14.5.1c** Create `POST /api/facts` endpoint (add new fact)
- [ ] **14.5.1d** Create `PATCH /api/facts/[id]` endpoint (update/confirm)
- [ ] **14.5.1e** Run database migration

---

#### `relationship_patterns` - LLM-Detected Insights

Patterns the AI discovers from analyzing user data.

```typescript
export const relationshipPatterns = pgTable('relationship_patterns', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),

  // Pattern details
  type: varchar('type', { length: 50 }).notNull(),
  // Types: conflict_trigger, mood_correlation, seasonal_pattern,
  // communication_preference, gift_success_pattern, date_preference

  title: varchar('title', { length: 200 }).notNull(),
  description: text('description').notNull(),
  evidence: jsonb('evidence'), // Array of fact/memory IDs that support this pattern
  confidence: real('confidence').notNull(), // 0-1

  // Usage tracking
  surfacedCount: integer('surfaced_count').default(0),
  lastSurfacedAt: timestamp('last_surfaced_at'),
  userFeedback: varchar('user_feedback', { length: 20 }), // helpful | not_helpful | null

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

**Example Patterns:**
| type | title | description | confidence |
|------|-------|-------------|------------|
| conflict_trigger | Work stress correlation | Arguments increase 3x when you mention work deadlines | 0.85 |
| gift_success_pattern | Experience over things | Sarah responds most positively to experience gifts | 0.92 |
| communication_preference | Morning check-ins | Your best conversations happen during morning coffee | 0.78 |

- [ ] **14.5.1f** Create `relationship_patterns` table schema
- [ ] **14.5.1g** Create pattern detection job (runs weekly)
- [ ] **14.5.1h** Create `GET /api/patterns` endpoint
- [ ] **14.5.1i** Create feedback endpoint (`POST /api/patterns/[id]/feedback`)

---

#### `partner_preferences` - Quick Lookup Table

Fast-access table for common preferences (denormalized from facts for speed).

```typescript
export const partnerPreferences = pgTable('partner_preferences', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),

  // Sizes
  clothingTopSize: varchar('clothing_top_size', { length: 20 }),
  clothingBottomSize: varchar('clothing_bottom_size', { length: 20 }),
  shoeSize: varchar('shoe_size', { length: 20 }),
  ringSize: varchar('ring_size', { length: 20 }),

  // Food & Dining
  dietaryRestrictions: jsonb('dietary_restrictions'), // ["vegetarian", "gluten-free"]
  foodAllergies: jsonb('food_allergies'), // ["shellfish", "peanuts"]
  favoriteCuisines: jsonb('favorite_cuisines'), // ["Italian", "Thai"]
  dislikedFoods: jsonb('disliked_foods'), // ["olives", "anchovies"]

  // Brands & Shopping
  lovedBrands: jsonb('loved_brands'), // ["Patagonia", "Apple"]
  dislikedBrands: jsonb('disliked_brands'),

  // Gift Preferences
  giftStylePreference: varchar('gift_style_preference', { length: 30 }), // experiences | physical | handmade | practical
  surpriseTolerance: integer('surprise_tolerance'), // 1-5

  // Communication
  preferredApologyLanguage: varchar('preferred_apology_language', { length: 50 }),
  stressCopingStyle: varchar('stress_coping_style', { length: 50 }),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

- [ ] **14.5.1j** Create `partner_preferences` table schema
- [ ] **14.5.1k** Create sync job (populates from relationship_facts)
- [ ] **14.5.1l** Create `GET/PATCH /api/preferences` endpoints

---

#### `rituals` - Shared Routines Tracker

```typescript
export const rituals = pgTable('rituals', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),

  name: varchar('name', { length: 100 }).notNull(),
  description: text('description'),
  frequency: varchar('frequency', { length: 30 }).notNull(), // daily | weekly | monthly | yearly
  dayOfWeek: integer('day_of_week'), // 0-6 for weekly rituals
  timeOfDay: varchar('time_of_day', { length: 20 }), // morning | afternoon | evening | night

  // Tracking
  lastCompletedAt: timestamp('last_completed_at'),
  streakCount: integer('streak_count').default(0),
  totalCompletions: integer('total_completions').default(0),

  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

**Example Rituals:**
| name | frequency | dayOfWeek | timeOfDay |
|------|-----------|-----------|-----------|
| Morning coffee together | daily | null | morning |
| Date night | weekly | 4 (Thursday) | evening |
| Monthly adventure | monthly | null | null |
| Anniversary dinner | yearly | null | evening |

- [ ] **14.5.1m** Create `rituals` table schema
- [ ] **14.5.1n** Create `GET/POST /api/rituals` endpoints
- [ ] **14.5.1o** Create `PATCH /api/rituals/[id]` (mark complete, update streak)
- [ ] **14.5.1p** Add ritual reminders to Daily Insight

---

### 14.5.2 Onboarding Chapter System

**New Files:**
```
src/app/(onboarding)/chapters/page.tsx           # Chapter selection hub
src/app/(onboarding)/chapters/[slug]/page.tsx    # Individual chapter flow
src/components/features/onboarding/chapter-card.tsx
src/components/features/onboarding/chapter-progress.tsx
src/lib/onboarding/chapters.ts                   # Chapter definitions
```

**Chapter Definitions:**
```typescript
// src/lib/onboarding/chapters.ts
export const CHAPTERS = [
  {
    slug: 'gift-intelligence',
    title: 'Gift Intelligence',
    emoji: '🎁',
    description: 'Never give a bad gift again',
    unlockAfterDays: 3,
    questions: [
      { id: 'clothing_top_size', question: "What size does {partner} wear in tops?", type: 'select', options: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'shoe_size', question: "What's their shoe size?", type: 'input' },
      { id: 'loved_brands', question: "What brands do they love?", type: 'tags' },
      { id: 'gift_style', question: "Do they prefer experiences or physical gifts?", type: 'choice', options: ['Experiences', 'Physical gifts', 'Handmade', 'No preference'] },
    ]
  },
  // ... more chapters
];
```

- [ ] **14.5.2a** Create chapter definitions file
- [ ] **14.5.2b** Create chapters hub page
- [ ] **14.5.2c** Create individual chapter flow page
- [ ] **14.5.2d** Create chapter card component
- [ ] **14.5.2e** Create progress tracking component
- [ ] **14.5.2f** Add "Complete Your Story" widget to dashboard

---

### 14.5.3 Context Builder Enhancement

Update the AI context builder to pull from all new tables.

```typescript
// Enhanced buildUserContext() in src/lib/ai/context-builder.ts
export async function buildUserContext(firebaseUid: string): Promise<UserContext> {
  // Existing queries...

  // NEW: Get relationship facts by category
  const facts = await db.select().from(relationshipFacts)
    .where(eq(relationshipFacts.userId, user.id));

  // NEW: Get detected patterns
  const patterns = await db.select().from(relationshipPatterns)
    .where(and(
      eq(relationshipPatterns.userId, user.id),
      gt(relationshipPatterns.confidence, 0.7)
    ));

  // NEW: Get preferences
  const [preferences] = await db.select().from(partnerPreferences)
    .where(eq(partnerPreferences.userId, user.id));

  // NEW: Get active rituals
  const activeRituals = await db.select().from(rituals)
    .where(and(
      eq(rituals.userId, user.id),
      eq(rituals.isActive, true)
    ));

  return {
    ...existingContext,
    facts: groupFactsByCategory(facts),
    patterns,
    preferences,
    rituals: activeRituals,
  };
}
```

- [ ] **14.5.3a** Update UserContext interface with new fields
- [ ] **14.5.3b** Add facts query to buildUserContext
- [ ] **14.5.3c** Add patterns query to buildUserContext
- [ ] **14.5.3d** Add preferences query to buildUserContext
- [ ] **14.5.3e** Add rituals query to buildUserContext
- [ ] **14.5.3f** Update formatContextForPrompt to include new data

---

### 14.5.4 How Features Use the RAG System

| Feature | Uses | How |
|---------|------|-----|
| **Daily Insight** | facts, patterns, rituals | "Based on your Thursday date night ritual, here's something special to try" |
| **Try Today Actions** | preferences, patterns | Suggests actions matching partner's love language + proven success patterns |
| **Vault Nudge** | facts, time context | "Sarah loves surprise notes—this quiet morning is perfect for one" |
| **Coach Chat** | ALL tables | Full context for personalized advice |
| **Gift Suggestions** | preferences, facts | "Sarah wears Medium, loves Patagonia, prefers experience gifts" |
| **Date Ideas** | facts, shared_experiences | "You both loved that Thai place—try the new one downtown" |
| **Conflict Support** | patterns, facts | "When Sarah gets quiet, she needs space first—wait 30 min, then check in" |

---

### Files to Create (Phase 14.5)

```
# Database Schema
src/lib/db/schema.ts                             # Add 4 new tables

# API Routes
src/app/api/facts/route.ts                       # GET, POST
src/app/api/facts/[id]/route.ts                  # PATCH, DELETE
src/app/api/patterns/route.ts                    # GET
src/app/api/patterns/[id]/feedback/route.ts      # POST
src/app/api/preferences/route.ts                 # GET, PATCH
src/app/api/rituals/route.ts                     # GET, POST
src/app/api/rituals/[id]/route.ts                # PATCH, DELETE

# Onboarding Chapters
src/app/(onboarding)/chapters/page.tsx
src/app/(onboarding)/chapters/[slug]/page.tsx
src/components/features/onboarding/chapter-card.tsx
src/components/features/onboarding/chapter-progress.tsx
src/lib/onboarding/chapters.ts

# Dashboard Widget
src/components/features/dashboard/complete-story-widget.tsx

# Context Builder
src/lib/ai/context-builder.ts                    # Enhanced with new tables
```

---

## Phase 14.6: Daily Questions System 🎯 LLM-POWERED CONTEXT ENGINE

> **The Big Idea:** 5 rapid-fire, LLM-generated questions daily that adapt to what MFH doesn't know yet. Gamified with streaks. Zero friction. Maximum context capture.

### Why This Works (Psychology + UX)

| Principle | Why It Matters |
|-----------|----------------|
| **Micro-bursts** | ADHD-friendly, zero friction, feels like play not work |
| **Gamified streaks** | Dopamine loop keeps users coming back (Duolingo effect) |
| **Multiple choice/T-F** | Psychologically safe—no blank page anxiety |
| **Gradual deepening** | 100 data points over 20 days vs. 100-question survey on day 1 |
| **Context-aware** | LLM asks ONLY what it doesn't know yet—never repetitive |
| **Reward loop** | "MFH got smarter" → user feels clever, not burdened |

---

### 14.6.1 Database Schema

#### `daily_questions` - Question History & Tracking

```typescript
export const dailyQuestions = pgTable('daily_questions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),

  // Question details
  questionText: text('question_text').notNull(),
  questionType: varchar('question_type', { length: 20 }).notNull(), // true_false | multiple_choice | scale
  options: jsonb('options'), // ["A) Cozy night", "B) Adventure", "C) Surprise", "D) Practical"]
  category: varchar('category', { length: 50 }).notNull(), // emotional_patterns | gift_intel | communication | rituals | memories

  // Answer
  answer: text('answer'),
  answeredAt: timestamp('answered_at'),

  // Follow-up
  followUpTriggered: boolean('follow_up_triggered').default(false),
  followUpAnswer: text('follow_up_answer'),

  // Metadata
  dayNumber: integer('day_number').notNull(), // Which day of streak this was
  batchId: varchar('batch_id', { length: 50 }).notNull(), // Groups today's 5 questions

  createdAt: timestamp('created_at').defaultNow().notNull(),
});
```

#### `daily_question_streaks` - Streak Tracking

```typescript
export const dailyQuestionStreaks = pgTable('daily_question_streaks', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }).unique(),

  currentStreak: integer('current_streak').default(0),
  longestStreak: integer('longest_streak').default(0),
  totalQuestionsAnswered: integer('total_questions_answered').default(0),
  totalDaysCompleted: integer('total_days_completed').default(0),

  lastCompletedAt: timestamp('last_completed_at'),
  streakFreezeAvailable: boolean('streak_freeze_available').default(false), // Premium feature

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

- [ ] **14.6.1a** Create `daily_questions` table schema
- [ ] **14.6.1b** Create `daily_question_streaks` table schema
- [ ] **14.6.1c** Run database migration

---

### 14.6.2 LLM Question Generation System

**The Core Prompt:**

```typescript
// src/lib/ai/daily-questions-prompt.ts
export const DAILY_QUESTIONS_SYSTEM_PROMPT = `You are MFH's Daily Questions engine.

Your job: Generate 5 rapid-fire, low-pressure questions that help deepen understanding of the user's relationship.

## Rules:
1. Questions MUST be multiple-choice OR true/false—NEVER open-ended
2. Each question should fill a GAP in what MFH knows
3. Never repeat questions the user has already answered
4. Tone: warm, playful, curious (not clinical or survey-like)
5. Mix categories: emotional patterns, gift intel, communication, rituals, preferences
6. One question can be "fun" (e.g., "Who apologizes first?" or "Who's the better cook?")
7. If detecting a potential follow-up opportunity, mark it

## Question Categories:
- emotional_patterns: How partner handles stress, opens up, shows love
- gift_intel: Sizes, brands, preferences, surprise tolerance
- communication: Texting style, conflict approach, needs in arguments
- rituals: Routines, traditions, comfort activities
- preferences: Morning/night person, decision style, affection type
- memories: Trigger memory capture ("Any moment this week to remember?")

## Output Format:
Return JSON array:
{
  "questions": [
    {
      "text": "When Sarah is stressed, she tends to:",
      "type": "multiple_choice",
      "options": ["Get quiet and need space", "Talk it out immediately", "Get busy/distracted", "It varies"],
      "category": "emotional_patterns",
      "followUpIf": "Get quiet and need space", // Optional: if this answer, ask follow-up
      "followUpQuestion": "How long does she usually need before she's ready to talk?"
    }
  ]
}`;
```

**How Generation Works:**

1. Pull user's full relationship context
2. Pull previously asked questions (avoid repeats)
3. Identify "knowledge gaps" (missing facts, low-confidence patterns)
4. Send to LLM with system prompt
5. LLM generates 5 targeted questions
6. Store questions with batch ID

- [ ] **14.6.2a** Create daily questions system prompt
- [ ] **14.6.2b** Create knowledge gap detector (what MFH doesn't know yet)
- [ ] **14.6.2c** Create question deduplication logic (no repeats)
- [ ] **14.6.2d** Create `generateDailyQuestions()` function

---

### 14.6.3 API Endpoints

**`GET /api/daily-questions`** - Get today's questions (or generate if none)

```typescript
// Returns:
{
  questions: DailyQuestion[],
  streak: { current: 7, longest: 12, totalAnswered: 89 },
  alreadyCompletedToday: boolean
}
```

**`POST /api/daily-questions/answer`** - Submit answers

```typescript
// Body:
{
  answers: [
    { questionId: "uuid", answer: "Get quiet and need space" },
    { questionId: "uuid", answer: "true" }
  ]
}

// Response:
{
  success: true,
  newStreak: 8,
  factsLearned: 5,
  followUpQuestions: [...] // If any triggered
}
```

**`POST /api/daily-questions/follow-up`** - Submit optional follow-up

```typescript
// Body:
{ questionId: "uuid", followUpAnswer: "Usually about 30 minutes" }
```

- [ ] **14.6.3a** Create `GET /api/daily-questions` endpoint
- [ ] **14.6.3b** Create `POST /api/daily-questions/answer` endpoint
- [ ] **14.6.3c** Create `POST /api/daily-questions/follow-up` endpoint
- [ ] **14.6.3d** Create streak update logic (handle day boundaries, freezes)

---

### 14.6.4 Answer → Fact Pipeline

Every answer automatically creates/updates `relationship_facts`:

```typescript
async function processAnswer(question: DailyQuestion, answer: string, userId: string) {
  // Map question category to fact category
  const factCategory = mapQuestionCategoryToFactCategory(question.category);

  // Create structured fact from Q&A
  await db.insert(relationshipFacts).values({
    userId,
    category: factCategory,
    subcategory: question.subcategory || null,
    question: question.text,
    answer: answer,
    source: 'daily_questions',
    confidence: 0.9, // High confidence—user explicitly answered
  });

  // Update patterns if relevant
  await updateRelationshipPatterns(userId, factCategory, answer);
}
```

- [ ] **14.6.4a** Create answer-to-fact mapping logic
- [ ] **14.6.4b** Create pattern update trigger
- [ ] **14.6.4c** Create confidence scoring (T/F = high, "varies" = lower)

---

### 14.6.5 UI Components

**`DailyQuestionsCard`** - Dashboard prompt

```tsx
// Shows on dashboard when questions available
<DailyQuestionsCard
  questionsRemaining={5}
  currentStreak={7}
  onStart={() => openQuestionModal()}
/>
```

**`DailyQuestionsModal`** - The rapid-fire experience

```tsx
// Full-screen modal with:
// - Progress dots (1 of 5)
// - Question text
// - Answer options (tap to select)
// - Skip button (optional)
// - Streak flame animation
// - "MFH learned something!" celebration
```

**`StreakBadge`** - Shows current streak

```tsx
// 🔥 7-day streak
// Appears in nav or dashboard
```

**Design Principles:**
- Under 30 seconds total
- One tap per answer
- Swipe or tap to advance
- Celebration animation on completion
- "MFH got smarter" feedback

- [ ] **14.6.5a** Create `DailyQuestionsCard` component
- [ ] **14.6.5b** Create `DailyQuestionsModal` with swipe/tap interface
- [ ] **14.6.5c** Create `StreakBadge` component
- [ ] **14.6.5d** Create completion celebration animation
- [ ] **14.6.5e** Add to dashboard layout

---

### 14.6.6 Example LLM-Generated Questions

Based on context where MFH knows: Holly, Quality Time love language, some rituals, 2+ years together

| # | Question | Type | Category |
|---|----------|------|----------|
| 1 | "Holly opens up more at night than during the day" | T/F | emotional_patterns |
| 2 | "When she's stressed, she tends to:" | MC | communication |
| 3 | "Which feels more 'her' for a gift?" (Cozy/Sentimental/Practical/Playful) | MC | gift_intel |
| 4 | "Your movie nights are more:" (Comfort ritual/Rare treat/Background noise) | MC | rituals |
| 5 | "Was there a small moment this week you want to remember?" | T/F | memories |

If Q5 = Yes → Follow-up: "What was the moment?" (creates memory)

---

### 14.6.7 How Daily Questions Powers Everything

| Feature | How Daily Questions Helps |
|---------|---------------------------|
| **Daily Insight** | More personal, more precise quotes and focus |
| **Try Today Actions** | Actions match partner's actual preferences |
| **Vault Nudge** | "She likes surprise notes" → nudge note intentions |
| **Coach Chat** | Coach has deep context, gives specific advice |
| **Gift Suggestions** | Knows sizes, brands, experience vs. physical preference |
| **Date Ideas** | Knows comfort vs. adventure preference |
| **Conflict Support** | "When she gets quiet, give her 30 min first" |

---

### Files to Create (Phase 14.6)

```
# Database Schema
src/lib/db/schema.ts                             # Add 2 new tables

# LLM System
src/lib/ai/daily-questions-prompt.ts             # System prompt
src/lib/ai/daily-questions-generator.ts          # Generation logic
src/lib/ai/knowledge-gap-detector.ts             # What MFH doesn't know

# API Routes
src/app/api/daily-questions/route.ts             # GET (today's questions)
src/app/api/daily-questions/answer/route.ts      # POST (submit answers)
src/app/api/daily-questions/follow-up/route.ts   # POST (optional follow-up)

# Components
src/components/features/daily-questions/daily-questions-card.tsx
src/components/features/daily-questions/daily-questions-modal.tsx
src/components/features/daily-questions/streak-badge.tsx
src/components/features/daily-questions/question-option.tsx
src/components/features/daily-questions/index.ts

# Dashboard Integration
src/app/dashboard/page.tsx                       # Add DailyQuestionsCard
```

---

### 14.7 Family & Friends Network

**Database: `partner_circle` table**

- [ ] **14.7a** Create partner_circle table (id, userId, name, relationship, birthday, dietary_restrictions, notes)
- [ ] **14.7b** Relationship types: parent, sibling, friend, coworker, ex (for context), pet
- [ ] **14.7c** Add page: `/dashboard/partner/circle`
- [ ] **14.7d** Auto-remind before family birthdays
- [ ] **14.7e** AI references network ("Her mom's birthday is coming up—maybe help her plan something?")

### 14.8 Arguments & Resolution Log (Sensitive)

**Database: `conflict_log` table (encrypted)**

- [ ] **14.8a** Create conflict_log table (id, userId, date, trigger, what_happened, how_resolved, lessons_learned)
- [ ] **14.8b** Optional encrypted storage
- [ ] **14.8c** AI detects patterns ("You tend to argue more when work stress is high")
- [ ] **14.8d** Apology tracker (what works, what doesn't)

### 14.9 Travel & Restaurant History

**Database: `shared_experiences` table**

- [ ] **14.9a** Create shared_experiences table (id, userId, type, name, location, date, rating, notes, would_return)
- [ ] **14.9b** Types: restaurant, trip, activity, movie, show
- [ ] **14.9c** Map visualization for trips
- [ ] **14.9d** "Haven't been back in a while" suggestions
- [ ] **14.9e** AI references: "You loved that Italian place last year—maybe revisit?"

### 14.10 Voice & Text Treasures

- [ ] **14.10a** Voice memo upload (save voicemails, sweet messages)
- [ ] **14.10b** Screenshot text highlights with tags
- [ ] **14.10c** "Things they said that stuck with me" collection
- [ ] **14.10d** Compliments given/received log

---

## Phase 14.11: Heartboard 💕 ✅ COMPLETE

> **The Big Idea:** A visual inspiration board where users save anything that reminds them of their partner—gifts, date ideas, travel spots, aesthetics, quotes. LLM auto-tags and makes it intelligent.

### Why This Feature Is Magic

Relationships aren't just made of memories—they're made of **wishes, ideas, future moments, and inspirations** people don't want to forget.

| Use Case | Example |
|----------|---------|
| Gift inspiration | A ring they think she'd like, a book she mentioned |
| Date ideas | A restaurant screenshot, a hiking trail photo |
| Travel dreams | An Airbnb vibe, a flight deal, a destination |
| Aesthetic vibes | An outfit that "feels like her", home decor |
| Future plans | Wedding venue ideas, anniversary trip spots |
| Things to show them | Memes, quotes, posts that made them think of partner |

**ADHD-friendly:** "I saw something perfect for her—I need to save this NOW."

---

### 14.11.1 Database Schema

```typescript
export const heartboardItems = pgTable('heartboard_items', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),

  // Content
  type: varchar('type', { length: 30 }).notNull(), // image | link | text | screenshot
  title: varchar('title', { length: 200 }),
  content: text('content'), // Caption or extracted text
  imageUrl: text('image_url'), // Uploaded or scraped image
  sourceUrl: text('source_url'), // Original URL if shared from web

  // LLM Intelligence
  llmCaption: text('llm_caption'), // Auto-generated description
  llmCategory: varchar('llm_category', { length: 50 }), // gift | date | travel | aesthetic | memory | home | fashion
  llmTags: jsonb('llm_tags'), // ["romantic", "cozy", "adventure", "her-style"]
  llmInterpretation: jsonb('llm_interpretation'), // { meaning, connections, suggestions }

  // User additions
  userNotes: text('user_notes'),
  userTags: jsonb('user_tags'),

  // Organization
  boardId: uuid('board_id'), // Optional: for sub-boards like "Gift Ideas", "Travel"
  isPinned: boolean('is_pinned').default(false),
  isArchived: boolean('is_archived').default(false),

  // Timing
  remindAt: timestamp('remind_at'), // Optional: surface before birthday, etc.
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Optional: Custom boards for organization
export const heartboardBoards = pgTable('heartboard_boards', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 100 }).notNull(),
  emoji: varchar('emoji', { length: 10 }),
  color: varchar('color', { length: 20 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
```

- [x] **14.11.1a** Create `heartboard_items` table schema
- [x] **14.11.1b** Create `heartboard_boards` table schema (optional sub-boards)
- [x] **14.11.1c** Run database migration

---

### 14.11.2 LLM Intelligence Layer

**Auto-Tagging Prompt:**

```typescript
export const HEARTBOARD_ANALYSIS_PROMPT = `You are MFH's Heartboard analyzer.

When a user saves something to their Heartboard, analyze it and return:

1. **category**: One of: gift | date | travel | aesthetic | memory | home | fashion | food | experience | quote | other
2. **caption**: A warm 1-sentence description of what this is
3. **tags**: 3-5 relevant tags (e.g., ["romantic", "cozy", "her-style", "anniversary-worthy"])
4. **interpretation**: What this might mean for their relationship
5. **connections**: How it connects to their existing context (partner preferences, past memories)
6. **suggestion**: An optional gentle question or action

## Context about the user:
{userContext}

## Item being saved:
Type: {itemType}
Content: {content}
URL: {url}

Return JSON:
{
  "category": "gift",
  "caption": "A vintage-style gold necklace with delicate layering",
  "tags": ["jewelry", "gold", "delicate", "her-style"],
  "interpretation": "This matches Sarah's preference for understated, meaningful jewelry",
  "connections": "Similar to the earrings you noted she loved last month",
  "suggestion": "Want me to save this as a potential birthday gift idea?"
}`;
```

**LLM Integration Points:**

| Trigger | What LLM Does |
|---------|---------------|
| Item saved | Auto-categorize, tag, caption |
| Image uploaded | Describe contents, extract meaning |
| URL shared | Scrape preview, categorize |
| On view | Suggest relevant items for upcoming dates/events |
| Daily Insight | Surface relevant board items |

- [x] **14.11.2a** Create Heartboard analysis prompt
- [x] **14.11.2b** Create image analysis function (describe uploaded images)
- [x] **14.11.2c** Create URL preview scraper
- [x] **14.11.2d** Create auto-tagging pipeline

---

### 14.11.3 API Endpoints

**`POST /api/heartboard`** - Save item to Heartboard

```typescript
// Body:
{
  type: "image" | "link" | "text" | "screenshot",
  content?: string,
  imageUrl?: string,
  sourceUrl?: string,
  userNotes?: string,
  userTags?: string[],
  boardId?: string
}

// Response:
{
  item: HeartboardItem,
  llmAnalysis: { category, caption, tags, interpretation, suggestion }
}
```

**`GET /api/heartboard`** - Get all items (with filters)

```typescript
// Query params: ?category=gift&board=birthday-ideas&limit=20
// Returns: { items: HeartboardItem[], boards: Board[] }
```

**`GET /api/heartboard/suggestions`** - Get relevant items for context

```typescript
// Query: ?occasion=birthday&daysUntil=14
// Returns items that might be relevant for upcoming birthday
```

- [x] **14.11.3a** Create `POST /api/heartboard` endpoint
- [x] **14.11.3b** Create `GET /api/heartboard` endpoint with filters
- [x] **14.11.3c** Create `GET /api/heartboard/suggestions` endpoint
- [x] **14.11.3d** Create `PATCH /api/heartboard/[id]` endpoint
- [x] **14.11.3e** Create `DELETE /api/heartboard/[id]` endpoint

---

### 14.11.4 UI Components

**`HeartboardPage`** - Main grid view

```tsx
// Pinterest-style masonry grid
// Filter tabs: All | Gifts | Dates | Travel | Aesthetic | ...
// Search bar
// "Add" floating action button
```

**`HeartboardCard`** - Individual item card

```tsx
// Image/preview
// LLM caption
// Tags as chips
// Quick actions: Pin, Archive, Edit, Delete
// Hover: Show full interpretation
```

**`HeartboardAddModal`** - Save new item

```tsx
// Paste URL / Upload image / Add text
// LLM analysis preview
// Add notes field
// Select board (optional)
// Save button
```

**`HeartboardSuggestionCard`** - Dashboard widget

```tsx
// "Today's Inspiration" - surface one item
// Or "For [Partner]'s birthday" - relevant saved items
```

**Design:**
- Masonry grid layout (like Pinterest)
- Soft glass cards with rounded corners
- Image-forward design
- Warm color accents based on category
- Hover animations with interpretation reveal

- [x] **14.11.4a** Create `HeartboardPage` with masonry grid
- [x] **14.11.4b** Create `HeartboardCard` component
- [x] **14.11.4c** Create `HeartboardAddModal` with LLM preview
- [x] **14.11.4d** Create `HeartboardSuggestionCard` for dashboard
- [x] **14.11.4e** Add Heartboard to navigation (💕 icon)

---

### 14.11.5 Share Sheet Integration (Mobile PWA)

For users on mobile, enable saving directly from other apps:

**Web Share Target API:**

```json
// manifest.json
{
  "share_target": {
    "action": "/api/heartboard/share",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "title": "title",
      "text": "text",
      "url": "url",
      "files": [{ "name": "image", "accept": ["image/*"] }]
    }
  }
}
```

**Flow:**
1. User sees something on Instagram/Pinterest/Safari
2. Taps Share → MFH
3. MFH opens with content pre-filled
4. LLM analyzes + categorizes
5. User taps Save
6. Done in 5 seconds

- [ ] **14.11.5a** Add share_target to PWA manifest
- [ ] **14.11.5b** Create share handler route
- [ ] **14.11.5c** Create share landing page with quick-save UX

---

### 14.11.6 Integration with Other Features

| Feature | How Heartboard Integrates |
|---------|---------------------------|
| **Gift Ideas** | Heartboard "gift" items appear in gift suggestions |
| **Date Planning** | "date" items surface when planning dates |
| **Daily Insight** | "Based on your saved inspiration, try this today..." |
| **Vault** | Convert Heartboard item → Vault intention |
| **Coach** | "You saved this necklace 2 weeks ago—her birthday is Friday" |
| **Try Today** | Actions based on saved inspiration |

---

### Files to Create (Phase 14.11)

```text
# Database
src/lib/db/schema.ts                             # Add 2 tables

# LLM
src/lib/ai/heartboard-prompt.ts                  # Analysis prompt
src/lib/ai/heartboard-analyzer.ts                # Analysis logic

# API Routes
src/app/api/heartboard/route.ts                  # GET, POST
src/app/api/heartboard/[id]/route.ts             # PATCH, DELETE
src/app/api/heartboard/suggestions/route.ts      # Context-aware suggestions
src/app/api/heartboard/share/route.ts            # Share sheet handler

# Components
src/components/features/heartboard/heartboard-page.tsx
src/components/features/heartboard/heartboard-card.tsx
src/components/features/heartboard/heartboard-add-modal.tsx
src/components/features/heartboard/heartboard-grid.tsx
src/components/features/heartboard/heartboard-suggestion-card.tsx
src/components/features/heartboard/index.ts

# Pages
src/app/dashboard/heartboard/page.tsx

# Navigation
src/components/layout/nav.tsx                    # Add Heartboard nav item
```

---

## Phase 14.12: Chrome Extension 🧩 "SAVE TO MY FAVORITE HUMAN"

> **The Big Idea:** A lightweight browser extension that lets users save anything from the web to MFH—gift ideas, date spots, inspiration—without leaving their current page. Pushes to Heartboard, Vault, or Gifts with LLM enrichment.

### Why This Feature Is Essential

| Moment | What Happens Without Extension |
|--------|-------------------------------|
| Browsing Amazon, see perfect gift | Screenshot → remember to add later → forget |
| Reading article about date ideas | Bookmark → never find it again |
| Friend mentions restaurant on Facebook | Mental note → gone by morning |
| Pinterest scroll, aesthetic that "feels like her" | Lost in infinite scroll |

**With Extension:** One click → saved → LLM categorized → MFH remembers forever.

---

### 14.12.1 Core Capture Flows

**Flow 1: Save Current Page**
```
User on product page → clicks extension → "Save to MFH"
→ Extension scrapes: title, image, URL, price (if available)
→ Sends to API → LLM categorizes (gift/date/travel/etc.)
→ Saves to Heartboard with auto-tags
→ Toast: "Saved to Heartboard 💕"
```

**Flow 2: Save Image**
```
User right-clicks image → "Save to My Favorite Human"
→ Image URL + page context sent to API
→ LLM analyzes image + context
→ Saves to Heartboard with interpretation
```

**Flow 3: Save Highlighted Text**
```
User highlights quote/text → right-click → "Save to MFH"
→ Text + source URL sent to API
→ LLM categorizes (quote/tip/idea/memory trigger)
→ Saves to Vault (if actionable) or Heartboard (if inspiration)
```

**Flow 4: Toolbar Popup Quick Capture**
```
User clicks extension icon → popup opens
→ Text field: "What made you think of [Partner]?"
→ Optional: paste URL, upload image
→ Quick category select (Gift/Date/Memory/Note)
→ Save → done in 10 seconds
```

---

### 14.12.2 Authentication

**Token-Based Auth (No Login Flow in Extension):**

1. User logs into MFH web app
2. In Settings → Extensions → "Connect Browser"
3. Generates unique token, displays as QR code or copy button
4. User opens extension popup → "Connect to MFH"
5. Pastes token or scans QR
6. Token stored in extension local storage
7. All API calls include token in header

```typescript
// Extension auth header
headers: {
  'X-MFH-Extension-Token': storedToken,
  'Content-Type': 'application/json'
}

// API validates token
const user = await validateExtensionToken(token);
```

**Security:**
- Tokens are long-lived but revocable from web app
- Scoped to Heartboard/Vault write operations only
- Rate limited per token
- Token displayed in web app with "Last used: 2 hours ago"

- [ ] **14.12.2a** Create `extension_tokens` table
- [ ] **14.12.2b** Create token generation endpoint (`POST /api/extension/token`)
- [ ] **14.12.2c** Create token validation middleware
- [ ] **14.12.2d** Add token management UI to Settings page

---

### 14.12.3 Extension Architecture

**Manifest V3 Structure:**

```json
// manifest.json
{
  "manifest_version": 3,
  "name": "My Favorite Human - Save to MFH",
  "version": "1.0.0",
  "description": "Save gift ideas, date spots, and inspiration for your favorite human",
  "permissions": ["storage", "activeTab", "contextMenus"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/heart-16.png",
      "48": "icons/heart-48.png",
      "128": "icons/heart-128.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "js": ["content.js"],
    "css": ["content.css"]
  }],
  "icons": {
    "16": "icons/heart-16.png",
    "48": "icons/heart-48.png",
    "128": "icons/heart-128.png"
  }
}
```

**Files:**
```
extension/
├── manifest.json
├── background.js          # Service worker for context menus
├── content.js             # Page scraping, selection detection
├── content.css            # Injected styles (success toast)
├── popup.html             # Quick capture popup
├── popup.js               # Popup logic
├── popup.css              # Popup styles (glass design)
├── options.html           # Settings (token management)
├── options.js
└── icons/
    ├── heart-16.png
    ├── heart-48.png
    └── heart-128.png
```

- [ ] **14.12.3a** Create extension manifest
- [ ] **14.12.3b** Create background service worker
- [ ] **14.12.3c** Create content script for page scraping
- [ ] **14.12.3d** Create popup UI with glass design
- [ ] **14.12.3e** Create options page for token management

---

### 14.12.4 Context Menu Integration

```javascript
// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "save-page",
    title: "Save this page to MFH 💕",
    contexts: ["page"]
  });

  chrome.contextMenus.create({
    id: "save-image",
    title: "Save image for my favorite human",
    contexts: ["image"]
  });

  chrome.contextMenus.create({
    id: "save-selection",
    title: "Save this to MFH",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "save-link",
    title: "Save link to MFH",
    contexts: ["link"]
  });
});
```

- [ ] **14.12.4a** Implement context menu handlers
- [ ] **14.12.4b** Create page scraper (title, description, images, price)
- [ ] **14.12.4c** Create image URL extractor
- [ ] **14.12.4d** Create selection text handler

---

### 14.12.5 API Endpoints

**`POST /api/extension/save`** - Universal save endpoint

```typescript
// Body:
{
  type: "page" | "image" | "text" | "link" | "quick",
  url?: string,
  title?: string,
  imageUrl?: string,
  text?: string,
  price?: string,
  category?: "gift" | "date" | "travel" | "memory" | "note",
  notes?: string
}

// Response:
{
  success: true,
  destination: "heartboard" | "vault",
  itemId: "uuid",
  llmAnalysis: {
    category: "gift",
    caption: "A cozy oversized sweater in her favorite color",
    tags: ["clothing", "cozy", "winter", "her-style"]
  }
}
```

**`GET /api/extension/status`** - Check connection

```typescript
// Returns: { connected: true, partnerName: "Sarah", lastSaved: "2 hours ago" }
```

- [ ] **14.12.5a** Create `POST /api/extension/save` endpoint
- [ ] **14.12.5b** Create `GET /api/extension/status` endpoint
- [ ] **14.12.5c** Integrate with Heartboard API
- [ ] **14.12.5d** Add LLM enrichment pipeline

---

### 14.12.6 UX Language & Warmth

**Consistent Warm Tone:**

| Action | Message |
|--------|---------|
| Save success | "Saved for [Partner] 💕" |
| Connection success | "Connected! Now you can save inspiration anywhere." |
| Extension popup header | "What reminds you of [Partner]?" |
| Save button | "Remember this" |
| Quick note placeholder | "A fleeting thought for later..." |
| Context menu | "Save to My Favorite Human" |

**Visual Design:**
- Glass card style matching MFH web app
- Soft rose/pink gradients
- Heart icon as primary brand element
- Subtle animations on save success
- Toast notification style: floating card, bottom-right

- [ ] **14.12.6a** Create extension design system (colors, fonts, shadows)
- [ ] **14.12.6b** Design popup with glass card aesthetic
- [ ] **14.12.6c** Create success toast animation
- [ ] **14.12.6d** Create loading states

---

### 14.12.7 Premium Considerations

| Feature | Free | Premium |
|---------|------|---------|
| Saves per day | 5 | Unlimited |
| LLM analysis | Basic category | Full analysis + suggestions |
| Image saves | ❌ | ✅ |
| Quick capture | ✅ | ✅ |
| Auto-tagging | Basic | Smart tags with context |

- [ ] **14.12.7a** Add usage tracking per token
- [ ] **14.12.7b** Implement free tier limits
- [ ] **14.12.7c** Add upgrade CTA in extension

---

### Files to Create (Phase 14.12)

```text
# Database
src/lib/db/schema.ts                             # Add extension_tokens table

# API Endpoints
src/app/api/extension/save/route.ts              # Universal save endpoint
src/app/api/extension/status/route.ts            # Connection check
src/app/api/extension/token/route.ts             # Token generation/revocation

# Web App Settings
src/app/dashboard/settings/extensions/page.tsx   # Token management UI
src/components/features/settings/extension-connect.tsx

# Chrome Extension (separate repo or folder)
extension/
├── manifest.json
├── background.js
├── content.js
├── content.css
├── popup.html
├── popup.js
├── popup.css
├── options.html
├── options.js
└── icons/
```

---

## Phase 15: Gift Intelligence 2.0 🎁

> **Why this matters:** Gifting is where thoughtfulness becomes tangible. This section makes MFH feel like magic.

### 15.1 Gift Preference Database

**Database: `gift_preferences` table**

- [ ] **15.1a** Size chart (clothes, ring, shoes)
- [ ] **15.1b** Brand preferences (loves/hates)
- [ ] **15.1c** "They hate these" anti-list
- [ ] **15.1d** Experience vs. physical gift preference
- [ ] **15.1e** Surprise tolerance level (1-5 scale)
- [ ] **15.1f** Handmade vs. bought preference

### 15.2 Gift History & Reactions

**Database: `gift_history` table**

- [ ] **15.2a** Past gifts given with reaction rating (1-5 hearts)
- [ ] **15.2b** Re-gift prevention (warn if suggesting something already given)
- [ ] **15.2c** AI learns: "Last time you gave jewelry, she loved it"

### 15.3 Smart Gift Reminders

- [ ] **15.3a** Gift lead time alerts ("Birthday in 3 weeks, shipping takes 2")
- [ ] **15.3b** Budget tracker per occasion
- [ ] **15.3c** Wishlist sync (Amazon, etc. via URL parsing)
- [ ] **15.3d** Subscription gift ideas based on interests

### 15.4 AI Gift Generator

- [ ] **15.4a** Generate gift ideas based on interests + love language + budget
- [ ] **15.4b** "She mentioned wanting X" capture (parse from memories/notes)
- [ ] **15.4c** Predict gift success based on reaction history

---

## Phase 16: Date Planning 2.0 🌙

> **Why this matters:** Dates are the infrastructure of intimacy. This section removes the "what should we do?" friction.

### 16.1 Date Idea Generator

- [ ] **16.1a** Weather-aware suggestions (pull local weather)
- [ ] **16.1b** Budget-conscious alternatives (free, $, $$, $$$)
- [ ] **16.1c** Stay-at-home date ideas
- [ ] **16.1d** Quick dates (30 min or less)
- [ ] **16.1e** Adventure dates vs. cozy dates toggle
- [ ] **16.1f** Seasonal date ideas

### 16.2 Date History & Reviews

**Database: `date_history` table**

- [ ] **16.2a** Track dates with ratings (1-5)
- [ ] **16.2b** "Would go back?" boolean
- [ ] **16.2c** "Haven't done in a while" resurfacing
- [ ] **16.2d** Date review prompts after each date

### 16.3 Activity Matching

`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````- [ ] **16.3a** Find overlap between your interests and theirs
- [ ] **16.3b** "New experience finder" (things neither has tried)
- [ ] **16.3c** Recurring date scheduler ("Every Thursday is date night")`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

---

## Phase 17: Communication & Connection 🗣️

> **Why this matters:** This is where MFH becomes a coach, not just a tool.

### 17.1 Daily Check-ins

- [ ] **17.1a** Optional daily prompt: "How did today go with [Partner]?"
- [ ] **17.1b** Quick mood capture (emoji + optional note)
- [ ] **17.1c** Weekly relationship pulse survey (3 questions)

### 17.2 Conversation Starters

- [ ] **17.2a** "Things feel stale" conversation generators
- [ ] **17.2b** "Ask me anything" question generator (deep questions)
- [ ] **17.2c** "They seem off" conversation starters

### 17.3 Love Language Translator

- [ ] **17.3a** Explain what they mean based on love language
- [ ] **17.3b** "They said X, they meant Y" insights
- [ ] **17.3c** Suggest how to respond in THEIR language

### 17.4 Conflict Tools

- [ ] **17.4a** Conflict de-escalation suggestions
- [ ] **17.4b** Apology templates (sincere, not corporate)
- [ ] **17.4c** "Things to tell them" parking lot
- [ ] **17.4d** Difficult conversation prep mode

### 17.5 Mood & Stress Tracking

**Database: `mood_log` table**

- [ ] **17.5a** Track your mood daily (optional)
- [ ] **17.5b** Track partner's perceived mood
- [ ] **17.5c** AI correlates stress with conflict patterns

---

## Phase 18: Intimacy & Romance 💕

> **Why this matters:** Tastefully handled, this adds real depth for long-term couples.

### 18.1 Romance Idea Generator

- [ ] **18.1a** Spontaneous gesture suggestions
- [ ] **18.1b** Love letter prompts
- [ ] **18.1c** "Spark reigniter" ideas for long-term couples

### 18.2 Rituals & Routines

- [ ] **18.2a** Morning/evening ritual suggestions
- [ ] **18.2b** Scheduled romance reminders (works for busy couples)
- [ ] **18.2c** Ritual tracker (streak counter)

### 18.3 Preferences (Tasteful & Private)

- [ ] **18.3a** Physical touch preference tracker (hugs, holding hands, etc.)
- [ ] **18.3b** Fantasy bucket list (optional, encrypted)
- [ ] **18.3c** Romantic getaway planner

---

## Phase 19: Growth & Goals 🌱

> **Why this matters:** This turns MFH from "cute app" into life companion.

### 19.1 Shared Goals Tracker

**Database: `shared_goals` table**

- [ ] **19.1a** Track shared dreams (house, travel, family)
- [ ] **19.1b** Progress updates and milestones
- [ ] **19.1c** Individual goal support ("They're training for X")

### 19.2 Relationship Health Score

- [ ] **19.2a** Monthly pulse survey (5 questions)
- [ ] **19.2b** Trend visualization over time
- [ ] **19.2c** Suggestions based on score changes

### 19.3 Reflection Tools

- [ ] **19.3a** Monthly relationship retrospective prompts
- [ ] **19.3b** Annual "state of us" review template
- [ ] **19.3c** Couples therapy session notes (private)

### 19.4 Life Conversations

- [ ] **19.4a** Money conversation frameworks
- [ ] **19.4b** Family planning tracker
- [ ] **19.4c** Pre-marital conversation guides

---

## Phase 20: Logistics & Life 🏡

> **Why this matters:** Daily utility = subscription longevity.

### 20.1 Chore Balance

- [ ] **20.1a** Chore tracker (who does what)
- [ ] **20.1b** Fair distribution suggestions
- [ ] **20.1c** "Thank them for X" reminders

### 20.2 Life Admin

- [ ] **20.2a** Allergies and dietary restrictions
- [ ] **20.2b** Medical info (doctor, pharmacy)
- [ ] **20.2c** Subscription tracker (who pays what)
- [ ] **20.2d** Home/car maintenance reminders
- [ ] **20.2e** Family event calendar sync

### 20.3 Travel Preferences

- [ ] **20.3a** Aisle vs. window
- [ ] **20.3b** Hotel style preferences
- [ ] **20.3c** Adventure level (1-5)

---

## Phase 21: AI-Powered Magic ✨

> **Why this matters:** This is the secret sauce. This is what makes MFH feel sentient.

### 21.1 Pattern Recognition

- [ ] **21.1a** "You fight more when stressed about work" detection
- [ ] **21.1b** Seasonal mood patterns
- [ ] **21.1c** "This time last year" memories resurfacing

### 21.2 Proactive Intelligence

- [ ] **21.2a** "Anniversary in 2 weeks, you haven't planned anything" alerts
- [ ] **21.2b** "You haven't added a memory in 5 days" gentle nudges
- [ ] **21.2c** Context-aware suggestions (evening = wind-down ideas)

### 21.3 Sentiment Analysis

- [ ] **21.3a** Analyze tone of memories/notes
- [ ] **21.3b** Relationship trend visualization
- [ ] **21.3c** Alert on negative trend detection

### 21.4 Personalization Engine

- [ ] **21.4a** Partner preference learning over time
- [ ] **21.4b** Suggestion accuracy improves with data
- [ ] **21.4c** Personalized date/gift recommendations

### 21.5 Weekly Digest

- [ ] **21.5a** Email/notification: "Here's what's coming up"
- [ ] **21.5b** "Here's how you're doing" relationship summary
- [ ] **21.5c** "Don't forget: [Partner]'s mom's birthday Friday"

---

## 📊 Priority Matrix

| Phase | Impact | Effort | Priority |
|-------|--------|--------|----------|
| 14 Memory Deep Dive | 🔥🔥🔥 | Medium | HIGH - Core differentiator |
| 15 Gift Intelligence | 🔥🔥🔥 | Medium | HIGH - Clear user value |
| 21 AI Magic | 🔥🔥🔥 | High | HIGH - Makes app feel alive |
| 16 Date Planning | 🔥🔥 | Medium | MEDIUM |
| 17 Communication | 🔥🔥 | Medium | MEDIUM |
| 18 Intimacy | 🔥 | Low | MEDIUM - Sensitive |
| 19 Growth & Goals | 🔥🔥 | Medium | MEDIUM |
| 20 Logistics | 🔥 | Medium | LOW - Nice to have |

---

## 🎯 Recommended Next Steps (Post-MVP)

1. **Phase 14.5** - Travel & Restaurant History (builds on existing dates)
2. **Phase 15.1-15.2** - Gift Preferences & History (enhances existing gifts)
3. **Phase 21.1** - Pattern Recognition (leverages all existing data)
4. **Phase 17.1** - Daily Check-ins (creates engagement loop)

---

## 💡 The Killer Insight

> People don't fail at love. They fail at remembering the tiny things that prove love.

MFH is the **brain extension for love**—every feature reinforces this thesis.
