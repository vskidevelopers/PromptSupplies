import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(null);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentTime = new Date();
      const targetTime = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate() + 1, // Set target time to next day
        0, // Set target time to midnight (00:00:00)
        0,
        0
      );
      const timeDiff = targetTime.getTime() - currentTime.getTime();

      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

      setTimeRemaining({
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds),
      });
    };

    calculateTimeRemaining();

    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-bold">
      {timeRemaining && (
        <span className="text-white">
          {timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
        </span>
      )}
    </div>
  );
};

export default CountdownTimer;
