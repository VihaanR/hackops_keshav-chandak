import React, { useEffect, useRef, useState } from 'react';

export default function TrainrscrResourceModal({ trainrscrOpen, trainrscrOnClose, trainrscrSubject }) {
  const [activeTab, setActiveTab] = useState('documents');
  const modalRef = useRef(null);
  const firstFocusable = useRef(null);

  useEffect(() => {
    if (trainrscrOpen) {
      setActiveTab('documents');
      setTimeout(() => {
        firstFocusable.current?.focus();
      }, 0);
      const onKey = (e) => {
        if (e.key === 'Escape') trainrscrOnClose();
        if (e.key === 'Tab' && modalRef.current) {
          const focusable = modalRef.current.querySelectorAll('button, a, iframe, [tabindex="0"]');
          if (focusable.length === 0) return;
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, [trainrscrOpen, trainrscrOnClose]);

  if (!trainrscrOpen || !trainrscrSubject) return null;
  const { subject, documents = [], videos = [], schedule = [] } = trainrscrSubject;

  const TabButton = ({ id, label, count }) => (
    <button
      ref={id === 'documents' ? firstFocusable : null}
      onClick={() => setActiveTab(id)}
      className={`px-3 py-2 text-sm rounded-md font-medium transition-colors ${activeTab === id ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}
    >{label} {count !== undefined && <span className="opacity-70">({count})</span>}</button>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/30" onClick={trainrscrOnClose} aria-hidden="true" />
      <div ref={modalRef} role="dialog" aria-modal="true" className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col max-h-full">
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{subject}</h2>
            <p className="text-xs text-gray-500">Training Program Resources</p>
          </div>
          <button onClick={trainrscrOnClose} className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded" aria-label="Close modal">✕</button>
        </div>
        <div className="px-6 pt-4 flex gap-2 flex-wrap border-b border-gray-200 bg-white">
          <TabButton id="documents" label="Documents" count={documents.length} />
          <TabButton id="videos" label="Videos" count={videos.length} />
            <TabButton id="schedule" label="Schedule" count={schedule.length} />
        </div>
        <div className="p-6 overflow-y-auto text-sm flex-1">
          {activeTab === 'documents' && (
            <div>
              {documents.length === 0 && <p className="text-gray-500">No documents available.</p>}
              <ul className="space-y-3">
                {documents.map(doc => (
                  <li key={doc.id} className="flex items-center justify-between gap-4 bg-gray-50 border border-gray-200 rounded p-3">
                    <span className="font-medium text-gray-700">{doc.title}</span>
                    <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs font-semibold hover:underline">Open</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'videos' && (
            <div>
              {videos.length === 0 && <p className="text-gray-500">No videos available.</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videos.map(v => (
                  <div key={v.id} className="aspect-video bg-black/5 rounded overflow-hidden border border-gray-200">
                    {v.platform === 'youtube' ? (
                      <iframe
                        title={v.title}
                        width="100%" height="100%"
                        src={`https://www.youtube.com/embed/${v.videoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500 text-xs">Unsupported platform</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'schedule' && (
            <div>
              {schedule.length === 0 && <p className="text-gray-500">No schedule items available.</p>}
              <ol className="space-y-4 list-decimal ml-4">
                {schedule.map(item => (
                  <li key={item.day} className="bg-gray-50 border border-gray-200 rounded p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700">Day {item.day}: {item.focus}</span>
                    </div>
                    <ul className="list-disc ml-5 text-gray-600 space-y-1">
                      {item.tasks.map((t, idx) => <li key={idx}>{t}</li>)}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
