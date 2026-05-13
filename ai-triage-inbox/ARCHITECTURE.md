# Architecture Overview

## Overview

The application follows a modular frontend architecture using React, Redux Toolkit, and React Query.

The design separates:

- UI components
- async data logic
- state management
- AI simulation
- utility helpers

---

# Layers

## Components

Reusable UI building blocks.

Examples:

- inbox list
- detail panel
- AI assist panel
- filters
- bulk actions

---

## Features

Feature-specific async and business logic.

Examples:

- inbox fetching
- AI querying
- streaming simulation

---

## Store

Global UI and workflow state managed with Redux Toolkit.

Examples:

- selected items
- filters
- optimistic updates
- undo state

---

## Services

Mock backend and AI simulation layer.

Examples:

- mock inbox data
- deterministic AI generation

---

## Hooks

Reusable interaction logic.

Examples:

- keyboard navigation
- streaming text generation

---

# Data Flow

```txt
User Action
↓
Redux State Update
↓
UI Re-render
↓
React Query Async Fetch
↓
AI Simulation
↓
Streaming Draft Rendering
```

---

# Design Goals

- predictable state management
- scalable component structure
- deterministic AI simulation
- responsive UX
- keyboard-first workflow
- optimistic interactions
