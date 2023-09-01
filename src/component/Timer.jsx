import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);
  const [running, setRuning] = useState(true);

  useEffect(() => {
    let timerId;

    if (running && time > 0) {
      timerId = setTimeout(() => {
        setTime(time - 1000);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [time, running]);

  const gietFormattedTime = (milliseconds) => {
    const totalSeconds = parseInt(Math.floor(milliseconds / 1000), 10);
    const totalMinutes = parseInt(Math.floor(totalSeconds / 60), 10);
    const totalHours = parseInt(Math.floor(totalMinutes / 60), 10);
    const days = parseInt(Math.floor(totalHours / 24), 10);

    const seconds = parseInt(totalSeconds % 60, 10);
    const minutes = parseInt(totalMinutes % 60, 10);
    const hours = parseInt(totalHours % 24, 10);

    return `${days}: ${hours}: ${minutes}: ${seconds} `;
  };

  const stopTimer = () => {
    setRuning(false);
  };

  const restartTimer = () => {
    setTime(duration);
    setRuning(true);
  };

  return (
    <div className="flex flex-col gap-20 items-center justify-center bg-slate-50 w-full h-screen">
      <p className="font-serif font-lg text-6xl">{gietFormattedTime(time)}</p>
      <div className="flex gap-10">
        <button type="button" className="rounded-full p-2 text-2xl font-serif font-medium text-white cursor-pointer bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={stopTimer}>Stop Timer</button>
        <button type="button" className="rounded-full p-2 text-2xl font-serif font-medium text-white cursor-pointer bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={restartTimer}>Restart Timer</button>
      </div>
    </div>
  );
};

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Timer;
