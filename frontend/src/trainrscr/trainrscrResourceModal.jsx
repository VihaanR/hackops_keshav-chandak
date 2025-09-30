/**
 * trainrscrResourceModal Component
 * Modal with tabs: Documents, Videos, Schedule
 * Accessible with ESC key and backdrop click to close
 */

import { useState, useEffect, useRef } from 'react';

const TrainrscrResourceModal = ({ trainrscrOpen, trainrscrOnClose, trainrscrSubject }) => {
  const [trainrscrActiveTab, setTrainrscrActiveTab] = useState('documents');
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && trainrscrOpen) {
        trainrscrOnClose();
      }
    };

    if (trainrscrOpen) {
      document.addEventListener('keydown', handleEscape);
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [trainrscrOpen, trainrscrOnClose]);

  // Reset to documents tab when opening new subject
  useEffect(() => {
    if (trainrscrOpen) {
      setTrainrscrActiveTab('documents');
    }
  }, [trainrscrOpen, trainrscrSubject?.id]);

  if (!trainrscrOpen || !trainrscrSubject) return null;

  const { subject, documents = [], videos = [], schedule = [] } = trainrscrSubject;

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      trainrscrOnClose();
    }
  };

  // Tab button component
  const TabButton = ({ trainrscrTabKey, trainrscrLabel, trainrscrCount }) => (
    <button
      onClick={() => setTrainrscrActiveTab(trainrscrTabKey)}
      className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors ${
        trainrscrActiveTab === trainrscrTabKey
          ? 'bg-white text-blue-600 border-b-2 border-blue-600'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {trainrscrLabel} ({trainrscrCount})
    </button>
  );

  // Render Documents tab content
  const renderDocumentsTab = () => {
    if (documents.length === 0) {
      return (
        <div className="text-center py-12 text-gray-500">
          <p>No documents available.</p>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">{doc.title}</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    );
  };

  // Render Videos tab content
  const renderVideosTab = () => {
    if (videos.length === 0) {
      return (
        <div className="text-center py-12 text-gray-500">
          <p>No videos available.</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
            {video.platform === 'youtube' && video.videoId && (
              <div className="relative" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <div className="p-3">
              <p className="font-medium text-gray-900 text-sm">{video.title}</p>
              {video.duration && (
                <p className="text-xs text-gray-500 mt-1">Duration: {video.duration}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render Schedule tab content
  const renderScheduleTab = () => {
    if (schedule.length === 0) {
      return (
        <div className="text-center py-12 text-gray-500">
          <p>No schedule items available.</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {schedule.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-gray-900">{item.day}</h4>
                <p className="text-sm text-blue-600 mt-1">{item.focus}</p>
              </div>
            </div>
            {item.tasks && item.tasks.length > 0 && (
              <ul className="space-y-2 mt-3">
                {item.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{subject}</h2>
          <button
            ref={closeButtonRef}
            onClick={trainrscrOnClose}
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 px-6 pt-4 border-b">
          <TabButton
            trainrscrTabKey="documents"
            trainrscrLabel="Documents"
            trainrscrCount={documents.length}
          />
          <TabButton
            trainrscrTabKey="videos"
            trainrscrLabel="Videos"
            trainrscrCount={videos.length}
          />
          <TabButton
            trainrscrTabKey="schedule"
            trainrscrLabel="Schedule"
            trainrscrCount={schedule.length}
          />
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {trainrscrActiveTab === 'documents' && renderDocumentsTab()}
          {trainrscrActiveTab === 'videos' && renderVideosTab()}
          {trainrscrActiveTab === 'schedule' && renderScheduleTab()}
        </div>
      </div>
    </div>
  );
};

export default TrainrscrResourceModal;
