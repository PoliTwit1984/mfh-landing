# MFH — Product Requirements Document

> "My Forever Holly" — The relationship app you'll wish you'd had.

---

## 1. Executive Summary

**MFH** is an AI-powered relationship companion that helps people be more thoughtful, present, and intentional partners. It combines the organizational power of a CRM with the emotional intelligence of a relationship coach.

**The Problem:** People forget. They forget what their partner said they wanted. They forget the little things that matter. They get busy and stop being intentional. Relationships die from neglect, not from lack of love.

**The Solution:** A beautiful, private app that remembers everything, notices patterns, and proactively helps you show up as the partner you want to be.

**Success Criteria (6 months post-launch):**
- 10,000 registered users
- 1,000 paid subscribers
- 4.5+ app store rating
- 60% trial-to-paid conversion
- NPS > 50

---

## 2. Strategic Context

### Market Opportunity

- **Relationship apps market:** $2.1B (2024), growing 12% CAGR
- **Adjacent markets:** Couples therapy ($3B), gift planning ($200B), calendar/productivity ($5B)
- **Gap:** Most relationship apps are either couples therapy tools (heavy) or date idea generators (shallow). Nothing combines memory + intelligence + daily utility.

### Why Now

- LLMs make personalized coaching economically viable
- People are increasingly comfortable with AI for personal matters
- Remote work means more relationship strain, more need for intentionality
- "Soft life" and "intentional living" cultural trends

### Competitive Landscape

| Competitor | What They Do | Gap |
|------------|--------------|-----|
| Lasting | Couples therapy exercises | Heavy, clinical, requires both partners |
| Love Nudge | Love language reminders | Surface-level, no memory |
| Relish | Text-based coaching | Expensive ($150/mo), therapist-dependent |
| Notion/Notes | DIY tracking | No intelligence, manual everything |

**MFH Positioning:** The *personal* relationship tool (not couples therapy). Your private brain for being a better partner.

---

## 3. Problem & Users

### Primary User Persona

**"Intentional Ian" (or "Intentional Irene")**
- Age: 28-45
- In a committed relationship (1-10+ years)
- Knows they could be more thoughtful
- Has forgotten important things before (and felt terrible)
- Busy professional, calendar-driven
- Willing to invest in relationship quality
- Tech-comfortable, uses productivity tools

### Jobs to Be Done

| Job | Current Solution | Pain |
|-----|------------------|------|
| Remember what they said they wanted | Mental note, forget | Guilt, missed opportunities |
| Plan thoughtful dates | Google "date ideas" | Generic, not personalized |
| Track important dates | Calendar (maybe) | No context, just a reminder |
| Be more present daily | Willpower | Inconsistent, falls off |
| Understand relationship patterns | Therapy ($$$) or nothing | Expensive or invisible |
| Give better gifts | Amazon wishlist | Impersonal, no surprise |

### Secondary Personas (Future)

- **New Relationship Nate**: 0-12 months in, wants to build good habits early
- **Long-Distance Laura**: Extra need for intentional connection
- **Rekindling Rick**: Trying to save/improve a struggling relationship

---

## 4. Success Metrics

### Product Metrics

| Metric | Target | Rationale |
|--------|--------|-----------|
| DAU/MAU | > 40% | Daily habit = sticky |
| Entries per week | > 5 | Active engagement |
| Trial-to-paid | > 60% | Value clear quickly |
| Churn (monthly) | < 5% | Long-term value |
| NPS | > 50 | Word of mouth growth |

### AI-Specific Metrics

| Metric | Target | Rationale |
|--------|--------|-----------|
| Recommendation acceptance rate | > 40% | AI suggestions are relevant |
| Proactive alert click-through | > 30% | Notifications are valuable |
| AI coach session completion | > 70% | Conversations are helpful |
| "This was helpful" rating | > 4.2/5 | Quality perception |

### Business Metrics

| Metric | Target | Rationale |
|--------|--------|-----------|
| MRR (Month 6) | $15,000 | 1,000 users × $15/mo |
| CAC | < $30 | Sustainable acquisition |
| LTV | > $150 | 10+ month retention |
| LTV:CAC | > 5:1 | Healthy unit economics |

---

## 5. Scope

### In Scope (v1 — MVP)

**Core Memory**
- Partner profile (basics, preferences, love language)
- Important dates with context
- Gift ideas capture + history
- Notes and memories log
- Photo attachment to memories

**Intelligence**
- Proactive reminders (dates coming up, "haven't logged in a while")
- Gift recommendations based on captured ideas
- Date suggestions based on history + preferences
- Daily check-in prompts
- Weekly relationship pulse

**AI Coach**
- Conversational interface for advice
- Context-aware (knows your relationship history)
- Difficult conversation prep
- Conflict resolution suggestions

**Experience**
- Beautiful, warm UI (not clinical)
- Onboarding that captures key context
- Quick capture (< 10 seconds to log something)
- Privacy-first (encrypted, no sharing)

### Explicitly Out of Scope (v1)

- Partner/couples mode (v2)
- Native mobile apps (v2 — PWA first)
- Calendar sync (v2)
- Social features (never?)
- Shared accounts
- Video/voice input
- Integrations (Spotify, Amazon, etc.)
- Family member tracking (beyond basics)

---

## 6. Tech Stack & AI Stack

### Technology

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 15 (App Router) | Fast iteration, great DX, SSR for SEO |
| Styling | Tailwind + Framer Motion | Beautiful UI with smooth animations |
| Database | Cloud SQL (Postgres) | GCP-native, managed, scalable |
| Auth | Firebase Auth | GCP-native, social logins, easy setup |
| Payments | Stripe | Industry standard, subscription support |
| Hosting | Cloud Run | Container-based, auto-scaling, GCP-native |
| CDN/Edge | Cloud CDN + Firebase Hosting | Static assets, global edge caching |
| AI | Anthropic Claude API | Best for nuanced, empathetic conversation |
| Vector DB | AlloyDB + pgvector (or Vertex AI Vector Search) | GCP-native semantic search |
| Storage | Cloud Storage | User uploads (photos) |
| Secrets | Secret Manager | API keys, secure config |

### AI Model Routing

| Task | Model | Reasoning |
|------|-------|-----------|
| Conversational coach | Claude Sonnet 4.5 | Empathetic, nuanced, fast |
| Deep relationship analysis | Claude Opus 4.5 | Complex pattern recognition |
| Quick suggestions (gifts, dates) | Claude Haiku 4.5 | Fast, cost-effective |
| Embeddings | OpenAI text-embedding-3-small | Best price/performance for vectors |

### AI Cost Projections

| Action | Tokens (avg) | Cost per action | Monthly per user (est) |
|--------|--------------|-----------------|------------------------|
| Daily prompt | 500 | $0.002 | $0.06 |
| Coach session | 3,000 | $0.01 | $0.30 (3/mo) |
| Gift recommendation | 1,500 | $0.005 | $0.05 |
| Weekly digest | 2,000 | $0.007 | $0.03 |
| **Total** | | | **~$0.50/user/mo** |

At $15/mo subscription, AI costs are ~3% of revenue. Healthy margin.

---

## 7. Context Strategy

### What the AI Knows

For every AI interaction, we inject:

1. **Partner Profile**: Name, basics, love language, personality notes
2. **Recent Context**: Last 10 logged memories/notes
3. **Relevant History**: Semantically similar past entries (via embeddings)
4. **Upcoming Events**: Dates in next 30 days
5. **Relationship Pulse**: Recent check-in scores, trends
6. **User Preferences**: Communication style, advice preferences

### Prompt Architecture

```
System: You are a thoughtful relationship advisor for {user}. You know 
their partner {partner} and their relationship history. Be warm, specific, 
and actionable. Never generic. Reference specific memories when relevant.

Context: 
- Partner: {partner_profile}
- Recent memories: {recent_entries}
- Relevant history: {semantic_matches}
- Upcoming: {upcoming_events}
- Pulse: {relationship_health}

User: {user_message}
```

### Privacy & Data Handling

- All relationship data encrypted at rest
- AI context assembled on-demand, not stored
- No training on user data (contractual with Anthropic)
- User can export/delete all data anytime
- No sharing with partners without explicit action

---

## 8. Features (Detailed)

### 8.1 Onboarding (First 5 Minutes)

**Goal:** Capture enough context to be immediately useful.

**Flow:**
1. Welcome + value prop (15 sec)
2. Partner basics: Name, how long together, photo (optional)
3. Love language quiz (30 sec version)
4. 3 important dates (anniversary, birthday, one more)
5. "What's one thing they've mentioned wanting?" (first gift idea)
6. "What's something you want to remember about them?" (first memory)
7. Notification preferences
8. Done → first proactive suggestion within 24 hours

**Design Notes:**
- Progress bar, feels quick
- Skip options everywhere
- Warm, conversational copy
- Celebrate completion

### 8.2 Dashboard (Home)

**Layout:**
- Top: Partner photo + name + "Together X years, Y months"
- Pulse: Simple heart icon showing relationship health trend
- Upcoming: Next 2-3 important dates/reminders
- Quick Actions: + Add Memory, + Gift Idea, + Date Idea
- AI Nudge: One proactive suggestion (rotates)
- Recent: Last 3-5 logged items

**Design Notes:**
- Warm, personal feel (not a spreadsheet)
- Glanceable — value in < 5 seconds
- Beautiful empty states that encourage first entry

### 8.3 Memory Capture

**Types:**
- 💭 Something they said
- 🎁 Gift idea
- 📅 Important date
- 💕 Memory/moment
- 📝 General note

**Capture Flow:**
- Tap +, select type
- Text input (voice-to-text optional, v2)
- Optional: date, photo, tags
- Save (< 10 seconds total)

**AI Enhancement:**
- Auto-suggests tags
- Extracts potential dates ("they said their mom's birthday is in March")
- Links related memories

### 8.4 AI Coach

**Access:** Floating button or dedicated tab

**Modes:**
1. **Open Chat**: "How can I be a better partner today?"
2. **Guided Prompts**: 
   - "Help me plan a date"
   - "I need gift ideas"
   - "We had a fight about..."
   - "I want to have a hard conversation about..."
   - "Surprise me with something thoughtful"

**Conversation Features:**
- Remembers conversation history
- References specific memories ("You mentioned Holly loves sunflowers...")
- Asks clarifying questions
- Provides actionable next steps
- Can create entries/reminders from conversation

### 8.5 Gift Intelligence

**Capture:**
- Quick add from any screen
- "She mentioned wanting this" → AI extracts product/category
- Price range tags
- Occasion tags (or "just because")

**Recommendations:**
- Based on captured ideas
- Based on interests/preferences
- Based on upcoming occasions
- With lead time warnings ("Order by X to arrive in time")

**History:**
- What you gave, when, reaction
- Prevents re-gifting
- Shows what worked

### 8.6 Date Planner

**Input:**
- Budget
- Vibe (adventure, romantic, chill, fancy)
- Duration
- Location constraints

**Output:**
- 3 personalized suggestions
- Based on what you haven't done recently
- Based on shared interests
- With logistics (reservations, tickets, timing)

**History:**
- Past dates rated
- "Haven't done in a while" surfacing

### 8.7 Proactive Nudges (Push Notifications)

**Types:**
- 📅 Date reminder: "Anniversary in 7 days — want to plan something?"
- 🎁 Gift alert: "Her birthday is in 3 weeks. She mentioned wanting..."
- 💭 Check-in: "How are things going? Quick pulse check?"
- 💡 Suggestion: "You haven't had a date night in 3 weeks. Here's an idea..."
- 🔙 Memory: "1 year ago today: [memory]"

**Controls:**
- Frequency settings
- Quiet hours
- Type toggles

### 8.8 Weekly Digest (Email/In-App)

**Contents:**
- Relationship pulse trend
- Upcoming important dates
- This week's suggestion
- "This time last year" memory
- Quick prompt to log something

---

## 9. Design Principles

### Visual Language: Liquid Glass

Inspired by Apple's iOS 26 / macOS Tahoe "Liquid Glass" design system:

**Core Elements:**
- **Translucent layers**: Frosted glass panels that reveal hints of content beneath
- **Dynamic blur**: Background blur that responds to content and context
- **Depth through light**: Subtle gradients, specular highlights, ambient reflections
- **Floating surfaces**: Cards and modals feel like they hover, not sit flat
- **Soft edges**: Rounded corners, gentle shadows, no harsh lines
- **Color diffusion**: Colors bleed softly through glass layers
- **Motion with weight**: Elements have physics — momentum, bounce, settle

**Implementation:**
```css
/* Example: Glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(40px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
```

**Key UI Patterns:**
- Dashboard cards float over a softly animated gradient background
- Modals slide up with glass blur, dimming what's beneath
- AI coach appears as a translucent overlay conversation
- Navigation bar is frosted, content scrolls beneath
- Dark mode: darker glass, more pronounced edge highlights
- Micro-interactions: elements respond to hover/press with light shifts

**Color Palette:**
- Primary: Soft rose/coral (warmth, love)
- Accent: Deep violet (depth, premium)
- Glass tints: Warm whites, soft pinks
- Backgrounds: Animated gradients (subtle, slow-moving)
- Text: High contrast for readability despite translucency

### Emotional

- **Warm, not clinical**: This is about love, not data entry
- **Encouraging**: Celebrate entries, not streaks
- **Non-judgmental**: No "you're bad at this" messaging
- **Private**: Feels like a journal, not social media
- **Trustworthy**: No data sharing, clear privacy
- **Delightful**: Micro-moments of joy (animations, sounds, haptics)

### Copy

- **Warm first person**: "I noticed..." not "MFH detected..."
- **Specific over generic**: "Holly mentioned..." not "Your partner might like..."
- **Actionable**: Every insight ends with what to do

### Accessibility

- Ensure sufficient contrast despite glass effects
- Reduce motion option for translucency-sensitive users
- Glass effects degrade gracefully on lower-powered devices

---

## 10. Pricing

### Trial
- 14 days full access
- Credit card required (reduces fraud, increases intent)
- Reminder on day 10, 13

### Plans

| Plan | Price | Includes |
|------|-------|----------|
| Free | $0 | Basic capture (10/mo), no AI, limited history |
| **Pro** | $15/mo or $120/yr | Unlimited capture, AI coach, all features |
| Lifetime | $299 (launch only) | Pro forever, early adopter lock-in |

### Why $15/mo

- Higher than "throwaway" ($5) — signals value
- Lower than therapy ($150+) — accessible
- In range of other personal tools (Notion, meditation apps)
- Sustainable with AI costs (~$0.50/user)

---

## 11. Roadmap

### Phase 1: MVP (8 weeks)

- Onboarding
- Partner profile
- Memory capture (all types)
- Basic AI coach
- Important dates + reminders
- Gift idea tracking
- Dashboard
- Push notifications
- Trial + Stripe billing

### Phase 2: Intelligence (4 weeks post-launch)

- Semantic search ("What did she say about...")
- Weekly digest
- Date planner
- Gift recommendations
- Relationship pulse tracking
- "This time last year" memories

### Phase 3: Polish (4 weeks)

- PWA optimization (install prompts, offline)
- Advanced notification tuning
- More AI coach modes
- Conflict resolution guides
- Onboarding A/B tests

### Phase 4: Expansion (Future)

- Partner mode (both contribute)
- Native mobile apps
- Calendar sync
- Voice input
- Integrations (Spotify shared playlists, photo imports)
- Family expansion (kids, in-laws)

---

## 12. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Users don't build habit | High | High | Nail onboarding, smart nudges, clear quick value |
| AI gives bad advice | Medium | High | Conservative prompts, "I'm an AI" framing, feedback loop |
| Privacy concerns | Medium | High | Encryption, clear policy, no data selling, transparency |
| Partner discovers and feels surveilled | Medium | Medium | Positioning as self-improvement, not tracking partner |
| AI costs spike | Low | Medium | Model routing, caching, usage limits on free tier |
| Churn after trial | Medium | High | Ensure value in first 3 days, remind of captured data |

---

## 13. Success Criteria for Launch

### Must Have (MVP)
- [ ] User can sign up and complete onboarding
- [ ] User can add/view/edit partner profile
- [ ] User can capture all memory types
- [ ] User can chat with AI coach (context-aware)
- [ ] User receives date reminders
- [ ] User can subscribe via Stripe
- [ ] PWA installable on mobile
- [ ] Basic analytics (Mixpanel/Amplitude)

### Should Have (Launch Week)
- [ ] Email welcome sequence
- [ ] Weekly digest email
- [ ] Gift idea recommendations working
- [ ] 3 successful beta users validated

### Nice to Have (Fast Follow)
- [ ] Date planner
- [ ] Semantic search
- [ ] "This time last year"

---

## 14. Open Questions

1. **Branding:** Is "MFH" the public name or do we want something more accessible? (Forever Keeper? Us.app? Tend?)
2. **Onboarding depth:** How much is too much? Test with 3-question vs 7-question versions.
3. **AI coach persona:** Name? Personality? Or invisible/tool-like?
4. **Relationship types:** Support non-romantic relationships? (Close friends, family?)
5. **Sensitive content:** How do we handle logged conflicts/fights ethically?

---

## 15. Appendix

### Competitor Screenshots
[To be added]

### UI Inspiration
- **Apple Liquid Glass (iOS 26 / macOS Tahoe)** — Primary design language
- Linear — Clean, calm, premium feel
- Arc Browser — Delightful micro-interactions, playful depth
- Apple Music / Apple TV+ — Gradient backgrounds, floating cards
- Day One — Journaling, memories, personal
- Headspace — Warm, encouraging, soft motion

### Interview Insights
[To be added from user research]

---

*Last updated: December 2025*
*Author: Joe + Claude*
