import React from 'react';
import TrainrscrTrainingSection from './trainrscr/trainrscrTrainingSection.jsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Campus Employability Portal</h1>
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8">
        <TrainrscrTrainingSection />
      </main>
    </div>
  );
}
