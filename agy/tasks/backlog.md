# Follow-Up Backlog

## Identified Technical Follow-Ups

1. **Resolve ESLint 9 / React 19 Warnings & Errors**
   - Refactor `src/components/layout/Navbar.tsx` to eliminate `react-hooks/set-state-in-effect` violations (avoid synchronous `setState` in `useEffect`).
   - Remove unused variable `isLast` in `src/components/contact/ContactInfo.tsx`.
   - Remove unused import `portfolioCategories` in `src/components/portfolio/ProjectGrid.tsx`.

2. **Asset Ingestion (`public/images/`)**
   - Populate actual photography assets for services and portfolio projects in `public/images/services/` and `public/images/projects/` to replace current placeholder fallbacks.

3. **Consultation Form Integration**
   - Connect `src/components/contact/ConsultationForm.tsx` to an actual Next.js Server Action or API endpoint (`/api/contact` or `/api/consultation`) with email notification or CRM integration.
