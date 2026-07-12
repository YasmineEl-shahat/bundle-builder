# Frontend Bundle Builder

A responsive multi-step Bundle Builder built with **Next.js**, **React**, **TypeScript**, **Redux Toolkit**, **Tailwind CSS**, and **shadcn/ui**.

The application recreates the provided [Figma design](https://www.figma.com/design/JYf61etQVqeseX7oY5alGz/Frontend-Test-Figma?node-id=68-9872&t=8wUmPEtCFyZzxuVq-0) as a production-ready prototype featuring a configurable security bundle with a live synchronized review panel.

---

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Redux Toolkit
- Tailwind CSS
- shadcn/ui
- Lucide Icons

---

## Features

### Multi-step Bundle Builder

- Four-step accordion workflow
- Only one step expanded at a time
- "Next" button navigates to the next step
- Selected product count displayed for each step

### Product Cards

- Data-driven rendering from JSON
- Product badges
- Variant selector
- Independent quantity per variant
- Dynamic pricing
- Selected-state styling

### Variant Selection

Each variant maintains its own quantity.

Example:

- White Camera → Quantity: 2
- Black Camera → Quantity: 1

Switching between variants updates the quantity stepper while preserving quantities for other variants.

### Live Review Panel

Updates instantly whenever selections change.

Includes:

- Cameras
- Sensors
- Accessories
- Plan
- Shipping
- Savings
- Total
- Checkout button

Quantity changes made from either the product cards or the review panel remain synchronized.

### Responsive Design

The application is responsive and adapts from desktop layouts to smaller mobile screens.

### Save My System

Clicking **"Save my system for later"** stores the current bundle configuration in **localStorage**.

When the application is opened again, the saved bundle is restored.

---

## Project Structure

```text
src
├── app
├── components
│   ├── builder
│   ├── review
│   ├── shared
│   └── ui
├── data
├── hooks
├── lib
├── store
├── styles
├── types
└── utils
```

---

## Data Driven Architecture

The UI is completely data-driven.

### Products

All products are defined in

```text
src/data/products.ts
```

### Steps

Accordion steps are defined in

```text
src/data/steps.ts
```

Products are linked to steps through their category rather than duplicating product IDs inside each step.

---

## State Management

Redux Toolkit is used to manage:

- Current accordion step
- Selected products
- Selected variants
- Product quantities

The review panel, product cards, and quantity steppers all consume the same centralized state.

---

## Persistence

The application uses **localStorage** to persist the shopper's configuration.

The bundle is saved only when the user clicks **Save my system for later**, matching the assignment requirements.

On application startup:

- If a saved bundle exists, it is restored.
- Otherwise, the application loads the default seeded configuration from the design.

---

## Installation

Clone the repository

```bash
git clone https://github.com/YasmineEl-shahat/bundle-builder
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## Build

```bash
npm run build
```

Run the production build

```bash
npm start
```

---

## Design Decisions

- Used Redux Toolkit for centralized state management.
- Kept products and steps separated for scalability.
- Implemented reusable hooks for selection, accordion, and review logic.
- Built the UI from reusable components to keep each component focused on a single responsibility.
- Used a flat product catalog with category-based rendering instead of duplicating products inside each step.

---

## Future Improvements

- Backend API for products and bundle persistence.
- Unit tests with React Testing Library.
- End-to-end tests with Playwright.
- Animation improvements for accordion transitions.
- Better accessibility (keyboard navigation and ARIA enhancements).
