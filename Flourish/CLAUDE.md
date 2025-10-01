# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flourish is a React + TypeScript + Vite application that provides age-specific guidance for women across different life stages. The app organizes content into categories (Health, Finance, Social, Self-Care) with subcategories that deliver tailored recommendations based on the user's age group (Teens, Twenties, Thirties, Forties, Fifties, Sixties+).

## Development Commands

- `npm run dev` - Start Vite development server with HMR
- `npm run build` - TypeScript compilation followed by production build
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

## Architecture

### State Management Pattern
The app uses React Context for global state management with a specific separation of concerns:

- **AppContext** (`src/contexts/AppContextDefinition.ts`) - Defines the context interface
- **AppProvider** (`src/contexts/AppContext.tsx`) - Implements the provider with state logic
- **useApp hook** (`src/hooks/useApp.ts`) - Custom hook for consuming context with error handling

This pattern ensures the context is only used within the provider boundary, throwing an error if used outside.

### Application Flow
1. User selects age group (`AgeSelector` component)
2. User navigates categories (`CategoryNav` component)
3. User browses subcategories (`SubcategoryList` component)
4. User views age-specific guidance (`GuidanceView` component)

The `App.tsx` conditionally renders either the age selector or the main app based on whether a user profile exists.

### Data Structure
All content data is structured in `src/data/`:
- `ageGroups.ts` - Age group definitions with ranges and descriptions
- `categories.ts` - Complete category/subcategory hierarchy with age-specific guidance

Each guidance entry includes:
- `ageGroupId` - Links to specific age group
- `title` and `description` - Context for the age group
- `recommendations` - Action items array
- `testsToRun` (optional) - Health-related tests
- `resources` (optional) - External resources

### Component Structure
Components are organized by responsibility:
- **Layout components**: `Header.tsx`
- **Navigation components**: `AgeSelector.tsx`, `CategoryNav.tsx`, `SubcategoryList.tsx`
- **Content components**: `GuidanceView.tsx`

### TypeScript Configuration
The project uses TypeScript project references:
- `tsconfig.json` - Root configuration (references only)
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Build tooling configuration

## Adding New Content

To add guidance for a new subcategory:
1. Add the subcategory object to the appropriate category in `src/data/categories.ts`
2. Include `ageSpecificGuidance` array with entries for each relevant age group
3. Follow the existing structure with `ageGroupId`, `title`, `description`, and `recommendations`

To add a new category:
1. Add category object to `categories` array in `src/data/categories.ts`
2. Include `id`, `name`, `icon` (emoji), `color` (hex), and `subcategories` array
3. Create corresponding navigation logic if needed

## Code Style

- ESLint configuration includes React Hooks rules and React Refresh plugin
- Uses functional components with TypeScript
- Prefers explicit typing with interfaces defined in `src/types/index.ts`
- CSS is handled through separate CSS files (e.g., `App.css`, `index.css`)
