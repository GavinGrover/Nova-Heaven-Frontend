# AI Context: KottaiKinaru Landing Page

## 1. Project Overview
**Name**: KottaiKinaru Homestay Landing Page
**Purpose**: A promotional website for a homestay in Sankarnagar, Tamil Nadu, focusing on heritage, peace, and family events.
**Current State**: A deeply polished 2D React application with pseudo-3D parallax effects. (Note: True 3D/Spline elements appear to have been removed or are not currently active in the main branch).

## 2. Tech Stack
-   **Framework**: React 18, Vite 5, TypeScript
-   **Styling**: Tailwind CSS 3.4, Shadcn/ui (Radix UI primitives), Custom CSS Variables (HSL)
-   **Animation**: Framer Motion (heavy usage for parallax and scroll reveals)
-   **State Management**: React Context (Language), TanStack Query (Data Fetching setup)
-   **Routing**: React Router DOM 6
-   **Icons**: Lucide React
-   **Forms**: React Hook Form + Zod
-   **I18n**: Custom `LanguageContext` (English & Tamil)

## 3. Project Structure
-   `src/components`: UI components. `Hero.tsx` is the centerpiece.
-   `src/components/ui`: Shadcn/ui primitive components (Button, Toast, etc.).
-   `src/contexts`: Global state (only `LanguageContext.tsx` currently).
-   `src/pages`: Route-level components (`Index.tsx`, `NotFound.tsx`).
-   `src/assets`: Images and static resources.
-   `src/lib`: Utilities (`utils.ts` with `cntl` patterns).

## 4. Design System (`src/index.css`)
The project uses a custom HSL-based color palette defined in CSS variables:
-   **Primary (Terracotta)**: `12 65% 45%` (Warm earthy red)
-   **Secondary (Earthy Green)**: `145 35% 35%` (Nature tone)
-   **Background**: Warm Cream (`39 45% 96%`)
-   **Typography**: Inter (primary), Noto Sans Tamil (for Tamil support).

## 5. Key Components
-   **`Hero.tsx`**: Uses `framer-motion` for scroll-linked animations (`useScroll`, `useTransform`) to create a parallax effect on the background image. It pseudo-simulates 3D with `perspective-1000` and `rotateX`/`rotateY` springs based on mouse position.
-   **`Gallery.tsx`**: Likely a grid or carousel for property images (uses `embla-carousel-react` if installed, or manual grid).
-   **`LanguageContext.tsx`**: Manages `en`/`ta` switching. Translations are hardcoded in the file. stored in `sessionStorage`.

## 6. Critical Logic
-   **Parallax**: `Hero.tsx` lines 67-84 implement a CSS3D transform (`preserve-3d`) driven by motion values.
-   **Responsiveness**: Tailwind classes (`md:`, `lg:`) handle layout shifts.
-   **Navigation**: `Header.tsx` likely contains scroll-to-section logic (based on IDs like `#home`).

## 7. Development Guidelines
-   **Images**: Stored in `src/assets/images`.
-   **New Sections**: Create in `src/components`, add to `src/pages/Index.tsx`.
-   **Language**: Always add new text to `translations` object in `LanguageContext.tsx` for both 'en' and 'ta'.
