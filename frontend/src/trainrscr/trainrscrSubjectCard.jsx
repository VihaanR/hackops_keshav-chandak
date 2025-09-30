/**
 * trainrscrSubjectCard Component
 * Displays a subject card with resource counts
 */

const TrainrscrSubjectCard = ({ trainrscrSubject, trainrscrOnClick }) => {
  const { subject, documents = [], videos = [], schedule = [] } = trainrscrSubject;

  // Build the counts display string
  const counts = [];
  if (documents.length > 0) {
    counts.push(`${documents.length} doc${documents.length !== 1 ? 's' : ''}`);
  }
  if (videos.length > 0) {
    counts.push(`${videos.length} video${videos.length !== 1 ? 's' : ''}`);
  }
  if (schedule.length > 0) {
    counts.push(`${schedule.length} schedule item${schedule.length !== 1 ? 's' : ''}`);
  }

  const countsText = counts.length > 0 ? counts.join(' • ') : 'No resources available';

  return (
    <button
      onClick={trainrscrOnClick}
      className="w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{subject}</h3>
      <p className="text-sm text-gray-600">{countsText}</p>
    </button>
  );
};

export default TrainrscrSubjectCard;
