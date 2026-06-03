import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [isBreak, setIsBreak] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentTime = isBreak ? breakTime : time;
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  const display = `${minutes}:${String(seconds).padStart(2, '0')}`;  

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      if (isBreak) {
        setBreakTime(prev => prev - 1);
        if (breakTime === 0) {
          setIsBreak(false);
          setIsRunning(false);
        }
      } else {
        setTime(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, isBreak]);

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>{isBreak ? 'Break' : 'Work'}</p>
      <p>{display}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => { setTime(25 * 60); setIsRunning(false); setIsBreak(false); }}>Reset</button>
      <button onClick={() => setIsBreak(true)}>Break</button>
    </div>
  );
}

export default App;
