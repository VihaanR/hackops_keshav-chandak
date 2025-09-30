// Data module for Training Program Resources (trainrscr)
// Future: extend with difficulty tags, progress tracking, AI recommendations metadata

export const trainrscrData = [
  {
    id: 'ds',
    subject: 'Data Structures & Algorithms',
    documents: [
      { id: 'complexity', title: 'Time & Space Complexity', file: '/resources/ds/complexity.pdf' },
      { id: 'arrays-hashing', title: 'Arrays & Hashing Cheat Sheet', file: '/resources/ds/arrays_hashing.pdf' },
    ],
    videos: [
      { id: 'yt-ds-1', title: 'Big-O Notation Explained', platform: 'youtube', videoId: '__big_o_sample__' },
      { id: 'yt-ds-2', title: 'Hash Tables Deep Dive', platform: 'youtube', videoId: '__hash_table_sample__' },
    ],
    schedule: [
      { day: 1, focus: 'Complexity Basics', tasks: ['Read complexity PDF', 'Practice 5 Big-O classifications'] },
      { day: 2, focus: 'Arrays & Hashing', tasks: ['Review arrays-hashing PDF', 'Implement 2 hash map problems'] },
    ],
  },
  {
    id: 'db',
    subject: 'Database Management Systems',
    documents: [
      { id: 'normalization', title: 'Normalization Guide', file: '/resources/db/normalization.pdf' },
    ],
    videos: [
      { id: 'yt-db-1', title: 'Intro to Relational Databases', platform: 'youtube', videoId: '__rel_db_sample__' },
    ],
    schedule: [
      { day: 1, focus: 'Relational Model', tasks: ['Understand tables, rows, keys', 'Define a sample schema'] },
      { day: 2, focus: 'Normalization', tasks: ['Read normalization PDF', 'Identify anomalies in sample schema'] },
    ],
  },
  {
    id: 'os',
    subject: 'Operating Systems',
    documents: [],
    videos: [
      { id: 'yt-os-1', title: 'Processes vs Threads', platform: 'youtube', videoId: '__proc_thread_sample__' },
    ],
    schedule: [
      { day: 1, focus: 'Processes & Threads', tasks: ['Watch video', 'List differences', 'Explore process states'] },
    ],
  },
];

export function trainrscrFindSubject(id) {
  return trainrscrData.find(s => s.id === id) || null;
}
