# Flourish — Architecture Documentation

> Auto-generated from source. Update with `/update-docs` after code changes.

## Table of Contents

- [Overview](#overview)
- [File Structure](#file-structure)
- [Type System](#type-system)
- [State Management](#state-management)
- [Components](#components)
- [Data Layer](#data-layer)
- [Styling](#styling)
- [Configuration](#configuration)
- [Application Flow](#application-flow)
- [Extensibility](#extensibility)

---

## Overview

Flourish is a **React 19 + TypeScript + Vite** application delivering age-specific life guidance for women across six life stages. Content is organized into four categories (Health, Finance, Social, Self-Care) with subcategories tailored per age group.

| Aspect | Details |
|--------|---------|
| Framework | React 19.1.1 |
| Language | TypeScript ~5.8.3 |
| Build Tool | Vite 7.1.7 |
| State Management | React Context + Custom Hook |
| Age Groups | 6 (Teens → Sixties+) |
| Categories | 4 |
| Subcategories | 8 (2–3 per category) |
| Guidance Entries | 48+ (6 age groups × 8 subcategories) |

---

## File Structure

```
Flourish/
├── index.html                         # HTML entry point
├── package.json                       # Scripts, dependencies
├── vite.config.ts                     # Vite + React plugin config
├── tsconfig.json                      # TypeScript project references (root)
├── tsconfig.app.json                  # App TypeScript compiler options
├── tsconfig.node.json                 # Node/build TypeScript options
├── docs/
│   └── ARCHITECTURE.md                # This file
└── src/
    ├── main.tsx                       # React DOM entry point
    ├── App.tsx                        # Root component + AppContent
    ├── App.css                        # App-level styles + CSS variables
    ├── index.css                      # Global resets and base styles
    ├── types/
    │   └── index.ts                   # All TypeScript interfaces
    ├── contexts/
    │   ├── AppContextDefinition.ts    # Context interface (AppContextType)
    │   └── AppContext.tsx             # AppProvider implementation
    ├── hooks/
    │   └── useApp.ts                  # Safe context consumer hook
    ├── data/
    │   ├── ageGroups.ts               # Age group definitions (6 entries)
    │   └── categories.ts             # All categories, subcategories, guidance
    └── components/
        ├── AgeSelector.tsx            # Initial age group selection screen
        ├── Header.tsx                 # Sticky header with user info
        ├── CategoryNav.tsx            # Horizontal category tab navigation
        ├── SubcategoryList.tsx        # Subcategory card grid
        └── GuidanceView.tsx          # Detailed guidance display
```

---

## Type System

All interfaces are defined in `src/types/index.ts`.

### `AgeGroup`
```typescript
interface AgeGroup {
  id: string;           // 'teens' | 'twenties' | 'thirties' | 'forties' | 'fifties' | 'sixties-plus'
  name: string;         // Display name e.g. 'Twenties'
  range: string;        // Age range e.g. '20-29'
  description: string;  // Life stage description
}
```

### `Category`
```typescript
interface Category {
  id: string;                   // 'health' | 'finance' | 'social' | 'self-care'
  name: string;
  icon: string;                 // Emoji e.g. '🏥'
  color: string;                // Hex color e.g. '#FF6B8D'
  subcategories: Subcategory[];
}
```

### `Subcategory`
```typescript
interface Subcategory {
  id: string;
  name: string;
  ageSpecificGuidance: AgeSpecificGuidance[];
}
```

### `AgeSpecificGuidance`
```typescript
interface AgeSpecificGuidance {
  ageGroupId: string;          // Links to AgeGroup.id
  title: string;
  description: string;
  recommendations: string[];
  testsToRun?: string[];       // Only used in Health category
  resources?: Resource[];
}
```

### `Resource`
```typescript
interface Resource {
  title: string;
  url?: string;
  description: string;
}
```

### `UserProfile`
```typescript
interface UserProfile {
  ageGroup: string;        // Selected AgeGroup.id
  preferences: string[];   // Reserved for future expansion
}
```

### `AppContextType`
```typescript
interface AppContextType {
  userProfile: UserProfile | null;
  setUserProfile: (profile: UserProfile | null) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedSubcategory: string;
  setSelectedSubcategory: (subcategory: string) => void;
}
```

---

## State Management

The app uses a **three-file Context pattern** for clean separation of concerns:

```
AppContextDefinition.ts  →  defines the shape (interface)
AppContext.tsx           →  implements the provider (state + setters)
useApp.ts               →  exposes the hook (safe consumption)
```

### AppProvider (`src/contexts/AppContext.tsx`)

State variables and their defaults:

| State | Type | Default |
|-------|------|---------|
| `userProfile` | `UserProfile \| null` | `null` |
| `selectedCategory` | `string` | `'health'` |
| `selectedSubcategory` | `string` | `''` |

### `useApp` Hook (`src/hooks/useApp.ts`)

Wraps `useContext(AppContext)` and throws an error if called outside `<AppProvider>`. All components use this hook — none accept props.

---

## Components

All components are **props-free** and consume state exclusively via `useApp()`.

### Component Hierarchy

```
<App>
└── <AppProvider>
    └── <AppContent>
        ├── <AgeSelector>        (rendered when userProfile === null)
        └── <div className="app">
            ├── <Header>
            ├── <CategoryNav>
            └── (one of):
                ├── <SubcategoryList>  (when selectedSubcategory === '')
                └── <GuidanceView>     (when selectedSubcategory !== '')
```

### `AgeSelector` (`src/components/AgeSelector.tsx`)

- **Renders:** When `userProfile === null`
- **Returns `null`:** When profile already exists
- **Action:** Calls `setUserProfile({ ageGroup: id, preferences: [] })`
- **Layout:** Full-screen centered grid of age group cards

### `Header` (`src/components/Header.tsx`)

- **Returns `null`:** When `userProfile === null`
- **Shows:** App name, current age group name + range
- **Action:** "Change" button calls `setUserProfile(null)` to reset

### `CategoryNav` (`src/components/CategoryNav.tsx`)

- **Shows:** One tab per category from `categories` data
- **Active state:** Colored border/background via `--category-color` CSS var
- **Action:** `setSelectedCategory(id)` + `setSelectedSubcategory('')`

### `SubcategoryList` (`src/components/SubcategoryList.tsx`)

- **Returns `null`:** When `selectedCategory` not found in data
- **Shows:** Grid of subcategory cards for the active category
- **Action:** `setSelectedSubcategory(id)`

### `GuidanceView` (`src/components/GuidanceView.tsx`)

- **Rendered when:** `selectedSubcategory !== ''`
- **Shows:**
  - Breadcrumb: Category › Subcategory › Age Group (range)
  - Title and description for current age group
  - Recommendations list (always shown)
  - Tests & Screenings (shown if `testsToRun` exists)
  - Resources (shown if `resources` exists)
- **Placeholder:** Shown if any selection is incomplete

---

## Data Layer

### Age Groups (`src/data/ageGroups.ts`)

Six `AgeGroup` objects exported as `ageGroups` array:

| ID | Name | Range |
|----|------|-------|
| `teens` | Teens | 13–19 |
| `twenties` | Twenties | 20–29 |
| `thirties` | Thirties | 30–39 |
| `forties` | Forties | 40–49 |
| `fifties` | Fifties | 50–59 |
| `sixties-plus` | Sixties+ | 60+ |

### Categories (`src/data/categories.ts`)

Four `Category` objects exported as `categories` array:

| Category | ID | Icon | Color | Subcategories |
|----------|----|------|-------|---------------|
| Health | `health` | 🏥 | `#FF6B8D` | Preventive Care, Nutrition, Mental Health |
| Finance | `finance` | 💰 | `#4ECDC4` | Budgeting & Saving, Investing |
| Social | `social` | 👥 | `#FFD93D` | Relationships, Professional Network |
| Self-Care | `self-care` | 🌸 | `#B19CD9` | Personal Development, Stress Management |

Each subcategory has 6 `AgeSpecificGuidance` entries — one per age group.

---

## Styling

### CSS Architecture

| File | Scope |
|------|-------|
| `src/index.css` | Browser resets, base typography, light/dark scheme |
| `src/App.css` | CSS custom properties, all component classes, responsive breakpoints |

### CSS Custom Properties (defined in `App.css :root`)

**Category Colors:**
```css
--primary-pink:   #FF6B8D   /* Health */
--primary-teal:   #4ECDC4   /* Finance */
--primary-yellow: #FFD93D   /* Social */
--primary-purple: #B19CD9   /* Self-Care */
```

**Soft Variants:** `--soft-pink`, `--soft-teal`, `--soft-yellow`, `--soft-purple`

**Neutrals:** `--neutral-dark: #2D3748`, `--neutral-medium: #718096`, `--neutral-light: #F7FAFC`

**Effects:** `--shadow-light/medium/large`, `--border-radius: 12px`, `--transition: all 0.3s ease`

### Dynamic Styling

Category color is injected inline so child components can use it:
```tsx
// CategoryNav.tsx
<button style={{ '--category-color': category.color } as React.CSSProperties}>
```

### Responsive Breakpoints

| Breakpoint | Changes |
|------------|---------|
| `max-width: 768px` | Header stacks vertically, grids become single-column, reduced font sizes |
| `max-width: 480px` | Reduced padding/margin throughout |

---

## Configuration

### `vite.config.ts`
- `@vitejs/plugin-react` for JSX transform and HMR

### `tsconfig.app.json` — Key Compiler Options
```json
{
  "target": "ES2022",
  "lib": ["ES2022", "DOM", "DOM.Iterable"],
  "jsx": "react-jsx",
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true
}
```

### npm Scripts
```
npm run dev      → Vite dev server (HMR)
npm run build    → tsc + vite build
npm run lint     → ESLint
npm run preview  → Preview production build
```

---

## Application Flow

```
1. App mounts → userProfile === null
2. AgeSelector shown → user picks age group
3. setUserProfile({ ageGroup: 'teens', preferences: [] })
4. Main layout shown: Header + CategoryNav + SubcategoryList
5. Default category: 'health'
6. User clicks category tab → setSelectedCategory() + reset subcategory
7. User clicks subcategory card → setSelectedSubcategory()
8. GuidanceView shown with age-matched content
9. User clicks "Change" in Header → setUserProfile(null) → back to step 2
```

---

## Extensibility

### Add Guidance to Existing Subcategory

Edit `src/data/categories.ts` — add an `AgeSpecificGuidance` entry to the target subcategory's `ageSpecificGuidance` array:

```typescript
{
  ageGroupId: 'thirties',
  title: 'Your Title',
  description: 'Context paragraph.',
  recommendations: ['Action 1', 'Action 2'],
  testsToRun: ['Test A'],         // optional, Health category
  resources: [{ title: 'Org', description: 'Desc', url: 'https://...' }] // optional
}
```

### Add a New Subcategory

Add to a category's `subcategories` array in `src/data/categories.ts`:
```typescript
{
  id: 'sleep',
  name: 'Sleep & Recovery',
  ageSpecificGuidance: [ /* 6 entries, one per age group */ ]
}
```
No component changes needed — `SubcategoryList` auto-renders all subcategories.

### Add a New Category

Add to the `categories` array in `src/data/categories.ts`:
```typescript
{
  id: 'spirituality',
  name: 'Spirituality',
  icon: '🙏',
  color: '#A8E6CF',
  subcategories: [ /* ... */ ]
}
```
No component changes needed — `CategoryNav` auto-renders all categories.

### Add a New Age Group

1. Add `AgeGroup` to `src/data/ageGroups.ts`
2. Add corresponding `ageSpecificGuidance` entry to every subcategory in `src/data/categories.ts`
