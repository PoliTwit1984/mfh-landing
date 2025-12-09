# MFH Implementation Plan

## Phase 1: MVP (8 weeks)

### Week 1-2: Foundation
- [x] Project setup (Next.js 15, Tailwind, TypeScript)
- [x] Liquid Glass design system (Tailwind config, globals.css)
- [x] Core UI components (GlassCard, GlassButton, GlassInput)
- [x] CLAUDE.md, AGENTS.md, Cursor rules
- [ ] Firebase Auth setup
- [ ] Cloud SQL + Drizzle schema
- [ ] Basic layout (nav, page wrapper, animated background)

### Week 2-3: Auth & Onboarding
- [ ] Sign up / Sign in pages
- [ ] Email + Google auth
- [ ] Onboarding flow (7 steps)
  - [ ] Welcome screen
  - [ ] Partner basics (name, photo, duration)
  - [ ] Love language quiz
  - [ ] 3 important dates
  - [ ] First gift idea
  - [ ] First memory
  - [ ] Notification preferences
- [ ] User profile storage

### Week 3-4: Core Features
- [ ] Dashboard home
  - [ ] Partner card with photo
  - [ ] Upcoming dates widget
  - [ ] Quick actions
  - [ ] AI nudge card
  - [ ] Recent entries
- [ ] Memory capture
  - [ ] Quick add modal
  - [ ] Memory types (thought, gift, date, memory, note)
  - [ ] Photo attachment
  - [ ] Tags

### Week 4-5: AI Integration
- [ ] Claude API integration
- [ ] Context builder (partner profile, memories, dates)
- [ ] AI Coach chat interface
- [ ] Streaming responses
- [ ] Quick suggestions (gift, date, compliment)

### Week 5-6: Dates & Gifts
- [ ] Important dates CRUD
- [ ] Date reminders
- [ ] Gift ideas CRUD
- [ ] Gift recommendations

### Week 6-7: Notifications & Polish
- [ ] Push notification setup
- [ ] Reminder scheduling
- [ ] PWA manifest
- [ ] Install prompts
- [ ] Dark mode
- [ ] Loading states
- [ ] Error states
- [ ] Empty states

### Week 7-8: Billing & Launch Prep
- [ ] Stripe integration
- [ ] Subscription plans
- [ ] Trial flow
- [ ] Paywall
- [ ] Analytics (Mixpanel)
- [ ] Error tracking
- [ ] Cloud Run deployment
- [ ] Beta testing

---

## Current Focus

**Next up:** Firebase Auth setup

## Notes

<!-- Add implementation notes here -->
