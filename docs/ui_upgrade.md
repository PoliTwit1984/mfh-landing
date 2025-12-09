📄 MFH "Liquid Glass" Redesign Specification
Version: 2.0 (High-Fidelity Interactive) Core Philosophy: Move away from "Admin Dashboard" to "Intimate Relationship Sanctuary." The UI should feel organic, soft, and alive.

1. Design System: "Liquid Glass"
A. Visual Foundation
Background: A CSS linear-gradient mesh combining Soft Rose (#fdf2f8), Pale Violet (#ddd6fe), and Warm Amber (#fffbeb).

Animation: A 15s infinite loop (gradientMove) pans the background position to create a "breathing" effect.

Texture: A fixed ::before pseudo-element applies an SVG feTurbulence noise filter at 3-5% opacity to give the screen a tactile, paper-like grain.

Glass Material:

Surface: rgba(255, 255, 255, 0.65) (65% opacity).

Blur: backdrop-filter: blur(16px) (Heavy blur).

Border: 1px solid rgba(255, 255, 255, 0.4) (Subtle white border for definition).

Shadows: Deprecated harsh black shadows in favor of soft, colored diffusions (e.g., shadow-rose-500/20) or subtle CSS box-shadows: 0 8px 32px 0 rgba(31, 38, 135, 0.07).

B. Typography
Primary UI Font: Plus Jakarta Sans. Used for body text, buttons, navigation, and metadata. Selected for its modern, geometric friendliness.

Emotional Header Font: Playfair Display. Used for the Partner Name, "Days Together," and specific high-impact quotes.

Styling Rule: Often paired with tracking-tight for large headers or italic for quotes.

C. Iconography
Library: Lucide Icons (via CDN).

Style: consistent stroke width (2px), rounded caps.

Usage: No emojis allowed for UI controls; purely Lucide. (Exception: emojis used inside user content text).

D. Theming Engine
CSS Variables: All primary colors are abstracted into variables (e.g., --primary-500, --primary-50).

Themes Implemented:

Rose (Default): Warm pinks and reds.

Ocean: Cool blues and azures.

Toggle: A JavaScript function (toggleTheme) swaps these variable values on the root element in real-time.

2. Component Architecture (3-Column Layout)
Column 1: Navigation (The Anchor)
Structure: A floating, frosted glass "pill" container (not a full-height sidebar).

State Styling:

Active: White background (rgba(255,255,255,0.8)), colored icon, soft shadow.

Inactive: Transparent background, gray text/icon.

Widget: "Days Together" counter is a separate floating card below the nav menu.

Column 2: The Feed (The Heart)
Hero Card:

Visual: Full-width partner photo with gradient overlay (to top, rgba(0,0,0,0.6)).

Interaction 1 (Reposition): mousedown/mousemove event listeners allow dragging the background image to adjust object-position (Pan X/Y).

Interaction 2 (Lightbox): Clicking the image (without dragging) opens the Lightbox Modal.

Badge: Interactive "Love Language" glass badge. Hovering/Clicking triggers a tooltip explaining the definition.

Relationship Wisdom: Glass card with a colored left-border accent (border-l-4). Uses sparkle-deco CSS class for decorative elements.

Daily 5 Widget: Gamified input card. Uses brain-circuit icon.

Heartboard: Masonry-style grid of images.

Card Style: Rounded corners, gradient text overlay at the bottom.

Interaction: Clicking opens Lightbox.

Recent Moments: Timeline feed items with "Glass Tags" (colored translucent backgrounds) for metadata.

Column 3: Signals (The Pulse)
Relationship Signals: Compact status card showing "Current Vibe" (green dot).

Upcoming Timeline: Vertical list connected by a CSS ::before pseudo-element line (width: 2px; background: #e5e7eb).

Intentions: Clean white cards with distinct colored badges ("To Buy" in Amber, "To Plan" in Rose).

3. Key Interactions
A. The "Magic Button" (FAB)
Trigger: Floating Action Button in bottom-right (z-index: 50).

Animation: Menu items (.fab-item) animate in upwards with a staggered delay (transition-delay: 0.05s, 0.1s, etc.).

Menu: "Ask Muse", "Inside Joke", "Log Mood", "Plan Date", "Gift Idea", "Quick Note".

Backdrop: A dark blur overlay (backdrop-filter: blur(4px)) fades in to focus attention.

B. Lightbox Modal
Logic: A centralized function openLightbox(imgSrc, title, category, caption, tags) populates a full-screen overlay.

UI: Split view—Image on left/top (black bg), Context details on right/bottom (white bg).

Scroll Lock: Disables body scrolling (overflow: hidden) when active.

C. Screenshot Capture
Library: html2canvas (via CDN).

Logic: Targets document.body but ignores the top navigation bar via data-html2canvas-ignore="true". Generates a PNG download.

4. Branding Assets & Identity
Assistant Name: "Muse" (formerly Coach).

Tagline: "Love lives in the details." (Displayed in Playfair Italic in top nav).

Watermark: A large, 5% opacity grayscale version of the Logo is fixed in the bottom-right background (transform: rotate(-10deg)).

Logo Source: https://i.imgur.com/d7sTOM0.png

5. Mobile Adaptation (iPhone Mockup)
Navigation: Converted Left Sidebar → Bottom Tab Bar (Icon-only, no labels).

Layout: 3-Columns → Single Vertical Feed.

Upcoming Dates: Vertical Timeline → Horizontal Swipe Container (overflow-x: auto, snap-x).

FAB: Repositioned to float above the bottom tab bar.