import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

function BenchmarkResults() {
  const { token } = useAuth();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchResults() {
      try {
        const response = await fetch('http://localhost:3001/api/benchmarks', {
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(`Server returned ${response.status}`);

        const data = await response.json();
        setResults(data);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();

    return () => controller.abort();
  }, [token]);

  if (loading) return <p style={{ padding: 24 }}>Loading results…</p>;
  if (error) return <p style={{ padding: 24, color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Benchmark Results</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            {['Model', 'Benchmark', 'Score', 'Date'].map((h) => (
              <th
                key={h}
                style={{ textAlign: 'left', borderBottom: '2px solid #ccc', padding: '8px 12px' }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>{r.model}</td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>{r.benchmark}</td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>{r.score}</td>
              <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BenchmarkResults;
