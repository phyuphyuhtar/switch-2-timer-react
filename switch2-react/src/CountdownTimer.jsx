// src/CountdownTimer.jsx
import { useState, useEffect } from "react";

function CountdownTimer({ launchDate }) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const distance = new Date(launchDate) - now;

    if (distance <= 0) return null;

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  if (!timeLeft) {
    return <h1>🚀 Switch 2 is out! 🎉</h1>;
  }

  return (
    <div>
      <h2>Countdown to Launch:</h2>
      <p>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </p>
    </div>
  );
}

export default CountdownTimer;
