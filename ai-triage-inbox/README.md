# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# AI Triage Inbox

An AI-assisted operational inbox built with React, TypeScript, Redux Toolkit, and React Query.

The application simulates an internal operations workflow where agents review incoming customer messages, apply triage actions, and use AI-generated recommendations and reply drafts.

---

# Features

## Inbox Management

- Inbox list view
- Message detail panel
- Search and filtering
- Status filtering
- Priority filtering
- Keyboard navigation
- Bulk actions

## AI Assistance

- AI-generated summaries
- Suggested operational actions
- AI-generated draft replies
- Confidence scoring
- Prompt injection detection
- Streaming response simulation
- Deterministic mock AI responses
- Retry and failure handling

## UX Features

- Responsive layout
- Optimistic UI updates
- Undo bulk actions
- Toast notifications
- Loading skeletons
- Empty states
- Keyboard shortcuts
- Accessibility improvements

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- TailwindCSS

## State Management

- Redux Toolkit
- React Query

## Utilities

- React Hot Toast

---

# Project Structure

```txt
src/
├── components/
├── features/
├── hooks/
├── services/
├── store/
├── types/
├── utils/
```

---

# Architecture Decisions

## Redux Toolkit

Used for:

- selected inbox items
- UI state
- optimistic updates
- undo state
- filters

Redux Toolkit was chosen because:

- predictable state management
- scalable architecture
- simplified reducers
- strong TypeScript support

---

## React Query

Used for:

- async inbox fetching
- AI request simulation
- loading/error handling
- request lifecycle management

React Query simplifies:

- caching
- retries
- async state management

---

## Deterministic Mock AI

The assignment required deterministic responses.

The AI layer uses:

- seeded hashing utilities
- deterministic confidence values
- deterministic latency
- deterministic failures

This ensures:

- same inbox item → same AI output

---

# Keyboard Shortcuts

| Key | Action           |
| --- | ---------------- |
| j   | Next message     |
| k   | Previous message |
| /   | Focus search     |
| Esc | Clear selection  |

---

# Setup

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

## Build Project

```bash
npm run build
```

---

# AI Assumptions

The AI layer is intentionally mocked and deterministic.

The implementation simulates:

- classification
- summarization
- confidence scoring
- prompt injection detection
- streaming draft generation

No external AI APIs are used.

---

# Tradeoffs

## Mocked Backend

The project uses mocked data and AI services instead of a real backend to focus on frontend architecture and workflow UX.

## Local Undo State

Undo actions are stored locally in Redux and are not persisted.

## Simplified AI Detection

Prompt injection detection uses lightweight heuristics instead of real LLM safety models.

---

# Future Improvements

- Real authentication
- Persistent backend
- WebSocket updates
- Real AI API integration
- Virtualized inbox list
- Unit and integration testing
- Dark/light theme toggle
- AI action approval workflows

---

# Accessibility

The application includes:

- keyboard navigation
- focus states
- semantic HTML
- accessible controls

---

# Performance Optimizations

- memoized filtering
- optimistic updates
- deterministic AI caching
- minimized re-renders

---

# Author

Mohit Kumar
