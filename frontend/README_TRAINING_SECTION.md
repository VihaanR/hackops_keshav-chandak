# Training Program Resources Module (trainrscr*)

This module provides a local-only UI for browsing core Computer Science subject resources: documents, videos, and structured study schedules.

## Features
- Responsive subject card grid (Data Structures & Algorithms, DBMS, OS)
- Accessible modal with tabs: Documents, Videos, Schedule
- Local static data in `src/trainrscr/trainrscrData.js`
- YouTube iframe embedding (placeholder IDs)
- Keyboard accessible (ESC to close, focus trapping)
- Graceful empty states
- Tailwind CSS styling

## File Naming Convention
All module-related files and exported props/functions are prefixed with `trainrscr` to ensure easy future extraction or code generation.

## Running the Project
```bash
npm install
npm run dev
```
Open: http://localhost:5173

## Build
```bash
npm run build
```

## Future Integration Points
- AI Resume Scanner (inject actionable improvement suggestions)
- Mock Interview Simulator (context-aware question sets)
- AI Career Assistant (chat-driven guidance)
- Virtual Job Fairs / Recruiter announcements
- Add tags, difficulty levels, progress tracking

## Test Plan (Manual)
1. Load page, verify header and subject cards
2. Click a card -> modal opens focused on first tab
3. Switch tabs (Documents, Videos, Schedule)
4. Press ESC -> modal closes
5. Click overlay -> modal closes
6. Tab navigation cycles within modal
7. Empty states show correctly (e.g., OS has no documents)

## Assets
PDFs referenced under `/public/resources/...` should be added. Placeholder paths currently used. If real PDFs are not available, create them or add `.md` placeholders.

## Notes
Video IDs are placeholders and should be replaced with real YouTube video IDs.
