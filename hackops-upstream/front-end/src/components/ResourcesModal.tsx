import React, { useEffect, useMemo, useState } from 'react';

const clientCache = new Map<string, any>();

type Item = {
  title: string;
  type: 'article' | 'video';
  url: string;
  description?: string;
  source?: string;
  duration?: string;
  level?: string;
};

export default function ResourcesModal({
  topic,
  open,
  onClose,
}: {
  topic: string;
  open: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [tab, setTab] = useState<'docs'|'videos'|'schedule'>('docs');
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setError(null);
    setItems([]);

    const cached = clientCache.get(topic);
    if (cached?.items) {
      setItems(cached.items);
      setLoading(false);
      // background refresh
      fetch('http://localhost:4000/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, count: 8 }),
      })
        .then(r => (r.ok ? r.json() : null))
        .then(j => { if (j?.items) { clientCache.set(topic, j); setItems(j.items); } })
        .catch(() => {});
      return;
    }

    fetch('http://localhost:4000/api/resources', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, count: 8 }),
    })
      .then(async r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const j = await r.json();
        clientCache.set(topic, j);
        setItems(Array.isArray(j.items) ? j.items : []);
      })
      .catch(e => setError(e.message || 'Failed to fetch'))
      .finally(() => setLoading(false));
  }, [open, topic]);

  const articles = useMemo(() => items.filter(i => i.type === 'article'), [items]);
  const videos = useMemo(() => items.filter(i => i.type === 'video'), [items]);

  const ytId = (url: string) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtube.com')) return u.searchParams.get('v');
      if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
    } catch {}
    return null;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Training Program Resources</h3>
            <p className="text-sm text-gray-600">{topic}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="px-6 pt-4">
          <div className="flex gap-2">
            <button onClick={() => setTab('docs')} className={`px-3 py-2 text-sm rounded-md ${tab==='docs'?'bg-blue-100 text-blue-700':'text-gray-600 hover:bg-gray-100'}`}>Documents ({articles.length})</button>
            <button onClick={() => setTab('videos')} className={`px-3 py-2 text-sm rounded-md ${tab==='videos'?'bg-blue-100 text-blue-700':'text-gray-600 hover:bg-gray-100'}`}>Videos ({videos.length})</button>
            <button onClick={() => setTab('schedule')} className={`px-3 py-2 text-sm rounded-md ${tab==='schedule'?'bg-blue-100 text-blue-700':'text-gray-600 hover:bg-gray-100'}`}>Schedule</button>
          </div>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {loading && <div className="text-gray-600">Fetching resources…</div>}
          {error && <div className="text-red-600">Error: {error}</div>}

          {!loading && !error && tab === 'docs' && (
            <ul className="space-y-3">
              {articles.map((a, i) => (
                <li key={i} className="flex items-center justify-between border rounded-lg p-4 hover:bg-gray-50">
                  <div>
                    <div className="text-gray-900 font-medium">{a.title}</div>
                    {a.description && <p className="text-sm text-gray-600 mt-1">{a.description}</p>}
                    <div className="text-xs text-gray-500 mt-1">{[a.source, a.level].filter(Boolean).join(' • ')}</div>
                  </div>
                  <a className="px-3 py-2 text-sm border rounded-md text-gray-700 hover:bg-gray-50" href={a.url} target="_blank" rel="noreferrer">Open</a>
                </li>
              ))}
            </ul>
          )}

          {!loading && !error && tab === 'videos' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {videos.map((v, i) => {
                const id = ytId(v.url);
                return (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <div className="bg-black aspect-video flex items-center justify-center">
                      {id ? (
                        <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${id}?rel=0`} title={v.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                      ) : (
                        <a href={v.url} target="_blank" rel="noreferrer" className="text-white/80 text-sm underline">Open Video</a>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="text-gray-900 font-medium">{v.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{[v.duration, v.source, v.level].filter(Boolean).join(' • ')}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {!loading && !error && tab === 'schedule' && (
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold mb-1">Week 1</div>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Big-O and complexity analysis</li>
                  <li>Practice time/space tradeoffs</li>
                  <li>Warm-up coding tasks</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold mb-1">Week 2</div>
                <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                  <li>Arrays & Hashing fundamentals</li>
                  <li>Implement common operations</li>
                  <li>Topic drills</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t flex justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-50">Close</button>
        </div>
      </div>
    </div>
  );
}


