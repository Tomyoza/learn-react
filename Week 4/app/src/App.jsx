import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [isBreak, setIsBreak] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const minutes = Math.floor(time / 60);  
  const seconds = time % 60;
  const display = `${minutes}:${String(seconds).padStart(2, '0')}`;

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>{display}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setTime(25 * 60)}>Reset</button>
      <button onClick={() => setBreakTime(5 * 60)}>Break</button>
    </div>
  );
}

export default App;
