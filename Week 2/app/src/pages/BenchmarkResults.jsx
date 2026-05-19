import { useState } from 'react';

const HARDCODED_RESULTS = [
  { id: 1, model: 'GPT-4o', benchmark: 'MMLU', score: 88.7, date: '2024-11-01' },
  { id: 2, model: 'Claude 3.5 Sonnet', benchmark: 'MMLU', score: 90.4, date: '2024-10-15' },
  { id: 3, model: 'Gemini 1.5 Pro', benchmark: 'HumanEval', score: 84.1, date: '2024-09-20' },
  { id: 4, model: 'GPT-4o', benchmark: 'HumanEval', score: 90.2, date: '2024-11-01' },
];

function BenchmarkResults() {
  const [results] = useState(HARDCODED_RESULTS);

  return (
    <div>
      <h1>Benchmark Results</h1>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Benchmark</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td>{r.model}</td>
              <td>{r.benchmark}</td>
              <td>{r.score}</td>
              <td>{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BenchmarkResults;
