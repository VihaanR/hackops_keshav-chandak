# Training Program Resources Module

## Overview

The Training Program Resources (trainrscr*) module is a fully functional React + Tailwind CSS interface that provides students with access to comprehensive learning materials organized by subject. This module lays the groundwork for future AI-driven features while offering a clean, accessible, and responsive user interface.

## Features

### Current Implementation

1. **Subject Cards Display**
   - Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
   - Shows resource counts for each subject (documents, videos, schedule items)
   - Clean card design with hover effects

2. **Resource Modal**
   - Three-tab interface: Documents, Videos, Schedule
   - Accessible modal with keyboard navigation
   - ESC key and backdrop click to close
   - Auto-focus on modal open for better accessibility

3. **Documents Tab**
   - List of available PDF resources
   - External link icons
   - Opens in new tab for easy access
   - Graceful empty state handling

4. **Videos Tab**
   - Embedded YouTube videos with responsive iframe
   - Video metadata (title, duration)
   - Responsive grid layout (1-2 columns)
   - Empty state for subjects without videos

5. **Schedule Tab**
   - Structured learning schedule by week
   - Focus areas and task lists
   - Visual checkmark indicators
   - Empty state support

### Subjects Included

- **Data Structures & Algorithms**: Complexity analysis, arrays, hashing
- **Database Management Systems**: Normalization, SQL operations
- **Operating Systems**: Process management, memory management

## Technical Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS 3
- **Build Tool**: Vite 5
- **Package Manager**: npm

## Project Structure

```
frontend/
├── package.json              # Project dependencies and scripts
├── index.html               # HTML entry point
├── vite.config.js          # Vite configuration
├── tailwind.config.cjs     # Tailwind configuration
├── postcss.config.cjs      # PostCSS configuration
├── public/
│   └── resources/          # Static resource files
│       ├── ds/            # Data Structures PDFs
│       ├── db/            # Database PDFs
│       └── os/            # Operating Systems PDFs
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Main app component
    ├── styles/
    │   └── base.css       # Tailwind directives
    └── trainrscr/         # Training resources module
        ├── trainrscrData.js              # Resource data
        ├── trainrscrSubjectCard.jsx      # Subject card component
        ├── trainrscrResourceModal.jsx    # Modal component
        └── trainrscrTrainingSection.jsx  # Main section component
```

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm v10 or higher

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Build output will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Component Naming Convention

All feature-specific components, functions, variables, and props are prefixed with `trainrscr` to ensure clarity and avoid naming conflicts:

- **Components**: `trainrscrSubjectCard`, `trainrscrResourceModal`, `trainrscrTrainingSection`
- **Data**: `trainrscrData`, `trainrscrFindSubject`
- **Props**: `trainrscrOpen`, `trainrscrOnClose`, `trainrscrSubject`, etc.

## Data Structure

Resources are stored in `trainrscrData.js` as a JavaScript array. Each subject includes:

```javascript
{
  id: 'unique-id',
  subject: 'Subject Name',
  documents: [
    { title: 'Document Title', url: '/path/to/file.pdf' }
  ],
  videos: [
    { title: 'Video Title', platform: 'youtube', videoId: 'abc123', duration: '12:45' }
  ],
  schedule: [
    { day: 'Week 1', focus: 'Topic', tasks: ['Task 1', 'Task 2'] }
  ]
}
```

## Accessibility Features

- **Keyboard Navigation**: ESC key closes modal
- **Focus Management**: Auto-focus on modal open
- **Backdrop Click**: Click outside modal to close
- **ARIA Labels**: Proper labels for screen readers
- **Semantic HTML**: Proper use of buttons, links, and headings

## Future Integration Points

The module is designed to easily integrate with planned features:

1. **AI Resume Scanner**: Add CTA button below subject cards
2. **Mock Interview Simulator**: Link from training section or navigation
3. **AI Career Assistant**: Widget can be added to sidebar or floating button
4. **Virtual Job Fairs**: Announcements can be placed above training section
5. **Progress Tracking**: Add completion status to schedule items
6. **Difficulty Tags**: Extend data structure with difficulty levels
7. **Personalization**: Add user profile integration for recommendations

## Resource Management

### Adding New Subjects

Edit `src/trainrscr/trainrscrData.js` and add a new object to the array following the existing structure.

### Adding PDF Resources

1. Place PDF files in `public/resources/[subject-category]/`
2. Update the subject's `documents` array with the file path and title

### Adding Videos

1. Get the YouTube video ID from the URL
2. Add to the subject's `videos` array with platform, videoId, and metadata

## Testing Checklist

- [x] Application builds successfully
- [x] Development server starts without errors
- [x] Subject cards display correctly
- [x] Modal opens on card click
- [x] All three tabs (Documents, Videos, Schedule) switch correctly
- [x] ESC key closes modal
- [x] Backdrop click closes modal
- [x] YouTube videos embed correctly
- [x] Empty states display when no resources available
- [x] Responsive design works on mobile, tablet, desktop
- [x] No console errors or warnings
- [x] All component names use trainrscr prefix

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is part of the Campus Employability Portal.

## Contributing

When adding new features or components to this module:

1. Follow the `trainrscr` naming convention
2. Keep styling consistent with Tailwind classes
3. Ensure accessibility standards are met
4. Add appropriate documentation
5. Test on multiple screen sizes

## Support

For issues or questions, please refer to the main project documentation or create an issue in the repository.
