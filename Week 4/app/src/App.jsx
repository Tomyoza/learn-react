import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [isBreak, setIsBreak] = useState(false);

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
    <div className="container">
      <h1>Pomodoro Timer</h1>
      <p className="mode">{isBreak ? 'Break' : 'Work'}</p>
      <p className="timer">{display}</p>
      <div className="controls">
        <button className="btn-primary" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className="btn-secondary" onClick={() => { setTime(25 * 60); setIsRunning(false); setIsBreak(false); }}>Reset</button>
        <button className="btn-secondary" onClick={() => setIsBreak(true)}>Break</button>
      </div>
    </div>
  );
}

export default App;
