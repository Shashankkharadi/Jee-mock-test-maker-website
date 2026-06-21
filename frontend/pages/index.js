import { useEffect, useState } from 'react';

export default function Home() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/mocktests')
      .then((r) => r.json())
      .then((data) => {
        setTests(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>JEE Mock Test Maker</h1>
      <p>Frontend (Next.js) is running. Below are mock tests fetched from the local API.</p>

      {loading ? (
        <p>Loading...</p>
      ) : tests.length === 0 ? (
        <p>No tests found. Create one via the API (POST /api/mocktests).</p>
      ) : (
        <ul>
          {tests.map((t) => (
            <li key={t._id}>
              <strong>{t.exam} - {t.subject}</strong> — Score: {t.score ?? 'N/A'} — Duration: {t.duration ?? 'N/A'}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
