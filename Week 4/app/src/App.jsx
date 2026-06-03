import { useState } from 'react';

function App() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [isBreak, setIsBreak] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const minutes = Math.floor(time / 60);  
  const seconds = time % 60;
  const display = `${minutes}:${String(seconds).padStart(2, '0')}`;

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <p>{display}</p>
    </div>
  );
}

export default App;
