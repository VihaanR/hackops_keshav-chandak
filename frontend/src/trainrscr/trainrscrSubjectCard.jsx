import React from 'react';

export default function TrainrscrSubjectCard({ trainrscrSubject, trainrscrOnOpen }) {
  const { subject, documents = [], videos = [], schedule = [] } = trainrscrSubject;
  const counts = [];
  if (documents.length) counts.push(`${documents.length} doc${documents.length>1?'s':''}`);
  if (videos.length) counts.push(`${videos.length} video${videos.length>1?'s':''}`);
  if (schedule.length) counts.push(`${schedule.length} schedule item${schedule.length>1?'s':''}`);

  return (
    <button
      onClick={() => trainrscrOnOpen(trainrscrSubject.id)}
      className="text-left w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <h3 className="font-semibold text-gray-800 mb-2">{subject}</h3>
      <p className="text-sm text-gray-500">{counts.join(' • ') || 'No resources yet'}</p>
    </button>
  );
}
