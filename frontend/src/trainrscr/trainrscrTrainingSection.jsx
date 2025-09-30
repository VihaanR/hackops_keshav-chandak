/**
 * trainrscrTrainingSection Component
 * Main container for Training Program Resources
 * 
 * Future Integration Points:
 * - AI Resume Scanner CTA can be added below the subject cards
 * - Mock Interview Simulator link can be integrated in a separate section
 * - AI Career Assistant widget can be placed in a sidebar
 * - Virtual Job Fairs announcements can be displayed above this section
 * - Resource difficulty tags can be added to trainrscrData
 * - Progress tracking can be added to schedule items
 * - Personalized recommendations based on user profile
 */

import { useState } from 'react';
import { trainrscrData, trainrscrFindSubject } from './trainrscrData';
import TrainrscrSubjectCard from './trainrscrSubjectCard';
import TrainrscrResourceModal from './trainrscrResourceModal';

const TrainrscrTrainingSection = () => {
  const [trainrscrActiveSubjectId, setTrainrscrActiveSubjectId] = useState(null);

  const trainrscrActiveSubject = trainrscrActiveSubjectId
    ? trainrscrFindSubject(trainrscrActiveSubjectId)
    : null;

  const handleCardClick = (subjectId) => {
    setTrainrscrActiveSubjectId(subjectId);
  };

  const handleModalClose = () => {
    setTrainrscrActiveSubjectId(null);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Training Program Resources</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Access comprehensive learning materials including documents, video tutorials, and
          structured schedules to help you prepare for your career goals.
        </p>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainrscrData.map((subject) => (
          <TrainrscrSubjectCard
            key={subject.id}
            trainrscrSubject={subject}
            trainrscrOnClick={() => handleCardClick(subject.id)}
          />
        ))}
      </div>

      {/* Future: Add CTA for AI Resume Scanner */}
      {/* Future: Add link to Mock Interview Simulator */}
      {/* Future: Add AI Career Assistant widget */}

      {/* Resource Modal */}
      <TrainrscrResourceModal
        trainrscrOpen={!!trainrscrActiveSubjectId}
        trainrscrOnClose={handleModalClose}
        trainrscrSubject={trainrscrActiveSubject}
      />
    </section>
  );
};

export default TrainrscrTrainingSection;
