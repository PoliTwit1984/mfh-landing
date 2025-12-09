# Documentation Standards

**"Documentation is not an afterthought; it is part of the definition of Done."**

To ensure this project remains maintainable by both Humans and AI Agents, follow these rules.

---

## 1. Code Documentation (The "Micro" Level)

### TypeScript/React (Frontend)

- **Style**: **JSDoc**.
- **Mandatory For**: All exported Components, Hooks, and Utility functions.
- **Example**:
    ```tsx
    /**
     * Displays a grid of clothing items with selection capability.
     *
     * @param items - Array of clothing items to display.
     * @param onSelect - Callback when an item is clicked.
     */
    export function ClosetGrid({ items, onSelect }: ClosetGridProps) { ... }
    ```

### Python (Backend - if applicable)

- **Style**: Use **Google-style Docstrings**.
- **Mandatory For**: All Route Handlers (`routes/`), Service Functions (`services/`), and Pydantic Models.
- **Example**:
    ```python
    def generate_outfit(image_b64: str, items: list[str]) -> str:
        """Generates a virtual try-on image using Gemini.

        Args:
            image_b64: Base64 encoded string of the user's photo.
            items: List of base64 encoded strings of clothing items.

        Returns:
            Base64 encoded string of the generated result.

        Raises:
            ValueError: If the image data is corrupt.
        """
        ...
    ```

---

## 2. Guidelines Folder Structure

All project documentation lives in `guidelines/`. Each file has a specific purpose:

| File | Purpose |
|------|---------|
| `ui_guidelines.md` | UI framework selection, Tailwind patterns, component standards |
| `GOOGLE_CLOUD_ARCHITECTURE.md` | GCP service selection, architecture patterns |
| `MLM2PRO-Onboard_Google_Cloud.md` | Project-specific deployment guide |
| `adobe_fonts.md` | Adobe Fonts/Typekit setup and CSP requirements |
| `mixpanel_analytics.md` | Event naming conventions, analytics catalog |
| `documentation_standards.md` | This file - documentation conventions |

### When to Create New Guidelines

Create a new guideline file when:
- Setting up a new external service (fonts, analytics, error tracking)
- Documenting a complex integration that required troubleshooting
- Establishing patterns that should be followed across projects

---

## 3. Project Documentation (The "Macro" Level)

### The "Golden Rule" of Architecture

**If you change the code structure, you MUST update the relevant guidelines.**

- **Scenario**: You add a new external service (e.g., Stripe payments).
- **Action**:
    1. Update `GOOGLE_CLOUD_ARCHITECTURE.md` if it affects infrastructure
    2. Create a new guideline file (e.g., `stripe_integration.md`) if setup is complex
    3. Update CSP in `server/index.ts` if the service needs whitelisting

### READMEs

- **Root `README.md`**: Project overview, quick start, links to guidelines
- **`client/README.md`**: Frontend-specific setup (environment vars, build scripts)
- **`server/README.md`**: Backend-specific setup (API keys, middleware config)

---

## 4. AI Agent Protocol

When an AI Agent works on a task:

1. **Read**: Check `guidelines/` folder to understand project conventions
2. **Plan**: Use TodoWrite tool to track multi-step tasks
3. **Document**: Add JSDoc comments *as you write the code* - do not leave for later
4. **Update Guidelines**: If you solve a complex integration problem, document it in a guideline file

### Company Standards

- **Cloud Platform**: Google Cloud (Cloud Run for all deployments)
- **Frontend Framework**: Vite + Express (default) or Next.js (if SEO required)
- **See**: `ui_guidelines.md` and `GOOGLE_CLOUD_ARCHITECTURE.md` for details
