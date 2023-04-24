import { useState, useEffect, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStartPauseClick = () => {
    setIsRunning((isRunning) => !isRunning);
  };

  const handleResetClick = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStartPauseClick}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default Counter;
