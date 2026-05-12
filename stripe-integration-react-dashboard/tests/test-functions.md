# React Testing Library – UX & Test Functions Cheat Sheet

This document categorizes common React Testing Library matchers and user-event functions by **test intent type**.

---

# 1. Rendering & Existence (DOM Presence)

| Function | Purpose | When to Use |
|----------|--------|-------------|
| `toBeInTheDocument()` | Checks if element exists in DOM | Basic render tests, structural validation |
| `queryBy...()` | Returns null if not found | Checking absence of elements |
| `getBy...()` | Throws if not found | Strict existence checks |

---

# 2. Visibility & User Perception

| Function | Purpose | When to Use |
|----------|--------|-------------|
| `toBeVisible()` | Element is visible to user | Modals, dropdowns, conditional UI |
| `not.toBeVisible()` | Element is hidden | Hidden menus, loading states |
| `toBeInTheDocument()` | Exists but may be hidden | Structural presence only |

---

# 3. User Interaction State

| Function | Purpose | When to Use |
|----------|--------|-------------|
| `toBeEnabled()` | Element is usable | Buttons, inputs |
| `toBeDisabled()` | Element is not usable | Loading/locked states |
| `toBeChecked()` | Checkbox/radio selected | Forms |
| `toHaveFocus()` | Element has focus | Keyboard navigation |

---

# 4. Content Validation (What user reads)

| Function | Purpose | When to Use |
|----------|--------|-------------|
| `toHaveTextContent()` | Checks visible text | UI labels, titles |
| `toHaveValue()` | Input value check | Forms, controlled inputs |
| `toHaveDisplayValue()` | Visible value in input/select | Form UX validation |

---

# 5. Style (Use Sparingly – UX-driven only)

| Function | Purpose | When to Use |
|----------|--------|-------------|
| `toHaveStyle()` | Checks CSS styles | Error states, active states, UI feedback |

⚠️ Avoid testing exact design pixels (colors, spacing) unless behavior-critical.

---

# 6. Query Functions (User-Centered Selection)

| Function | Purpose | When to Use |
|----------|--------|-------------|
| `getByRole()` ⭐ | Best UX query | Buttons, inputs, accessibility-first testing |
| `getByLabelText()` | Form fields via label | Forms |
| `getByText()` | Visible text match | Static content |
| `getByPlaceholderText()` | Input placeholder | Search bars, inputs |
| `findBy...()` | Async element retrieval | API-loaded UI |

---

# 7. User Interaction (user-event)

| Function | Purpose | When to Use |
|----------|--------|-------------|
| `user.click()` | Click interaction | Buttons, links |
| `user.type()` | Typing input | Forms |
| `user.clear()` | Clear input | Reset fields |
| `user.selectOptions()` | Select dropdown option | Forms |
| `user.tab()` | Keyboard navigation | Accessibility testing |

---

# 8. Async / State Changes (UX flow)

| Function | Purpose | When to Use |
|----------|--------|-------------|
| `findByText()` | Wait for UI update | API loading states |
| `waitFor()` | Wait for condition | Animations, async logic |

---

# 🧠 UX Testing Rule of Thumb

- If a **user sees it → test visibility**
- If a **user interacts with it → simulate user-event**
- If a **user reads it → test text content**
- If a **developer only cares → avoid testing it**

---