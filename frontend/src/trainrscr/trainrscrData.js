/**
 * Training Program Resources Data
 * All training resources data is stored here for local-only use
 * Future: can be extended with difficulty tags, AI-generated content, etc.
 */

export const trainrscrData = [
  {
    id: 'ds-algo',
    subject: 'Data Structures & Algorithms',
    documents: [
      {
        title: 'Time and Space Complexity Analysis',
        url: '/resources/ds/complexity.pdf',
      },
      {
        title: 'Arrays and Hashing Techniques',
        url: '/resources/ds/arrays_hashing.pdf',
      },
    ],
    videos: [
      {
        title: 'Big O Notation Explained',
        platform: 'youtube',
        videoId: 'BgLTDT03QtU',
        duration: '12:45',
      },
      {
        title: 'Array Data Structure Tutorial',
        platform: 'youtube',
        videoId: 'QJNwK2uJyGs',
        duration: '15:30',
      },
    ],
    schedule: [
      {
        day: 'Week 1',
        focus: 'Complexity Analysis',
        tasks: [
          'Understand Big O notation',
          'Practice time complexity calculations',
          'Learn space complexity concepts',
        ],
      },
      {
        day: 'Week 2',
        focus: 'Arrays & Hashing',
        tasks: [
          'Implement array operations',
          'Study hash table implementations',
          'Solve array-based coding problems',
        ],
      },
    ],
  },
  {
    id: 'dbms',
    subject: 'Database Management Systems',
    documents: [
      {
        title: 'Database Normalization Guide',
        url: '/resources/db/normalization.pdf',
      },
    ],
    videos: [
      {
        title: 'Database Normalization - 1NF, 2NF, 3NF, BCNF',
        platform: 'youtube',
        videoId: 'GFQaEYEc8_8',
        duration: '18:20',
      },
      {
        title: 'SQL Joins Explained',
        platform: 'youtube',
        videoId: '9yeOJ0ZMUYw',
        duration: '11:15',
      },
    ],
    schedule: [
      {
        day: 'Week 1',
        focus: 'Database Design',
        tasks: [
          'Study ER diagrams',
          'Learn normalization forms',
          'Practice schema design',
        ],
      },
      {
        day: 'Week 2',
        focus: 'SQL Queries',
        tasks: [
          'Master JOIN operations',
          'Practice complex queries',
          'Learn query optimization',
        ],
      },
    ],
  },
  {
    id: 'os',
    subject: 'Operating Systems',
    documents: [],
    videos: [
      {
        title: 'Process Management in OS',
        platform: 'youtube',
        videoId: 'OrM7nZcxXZU',
        duration: '14:40',
      },
      {
        title: 'Memory Management Techniques',
        platform: 'youtube',
        videoId: 'qdkxXygc3rE',
        duration: '16:25',
      },
    ],
    schedule: [
      {
        day: 'Week 1',
        focus: 'Process Management',
        tasks: [
          'Understand process lifecycle',
          'Study scheduling algorithms',
          'Learn about context switching',
        ],
      },
      {
        day: 'Week 2',
        focus: 'Memory Management',
        tasks: [
          'Study paging and segmentation',
          'Learn virtual memory concepts',
          'Understand memory allocation strategies',
        ],
      },
    ],
  },
];

/**
 * Helper function to find a subject by ID
 * @param {string} id - Subject ID
 * @returns {object|null} Subject object or null if not found
 */
export const trainrscrFindSubject = (id) => {
  return trainrscrData.find((subject) => subject.id === id) || null;
};
