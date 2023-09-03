import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './timer.css';

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

    return (
      <div className="flex container">
        <div className="items-timer">
          <h5 className="text-2xl text-slate-800">Days</h5>
          <div className="timer flex">
            <div className="flip-card">
              <div className="top text-slate-800">{Math.floor(days / 10)}</div>
              <div className="bottom text-slate-800">{Math.floor(days / 10)}</div>
            </div>
            <div className="flip-card ">
              <div className="top text-slate-800">{Math.floor(days % 10)}</div>
              <div className="bottom text-slate-800">{Math.floor(days % 10)}</div>
            </div>
          </div>
        </div>
        <div className="items-timer">
          <p className="text-2xl">Hours</p>
          <div className="timer flex">
            <div className="flip-card ">
              <div className="top">{Math.floor(hours / 10)}</div>
              <div className="bottom">{Math.floor(hours / 10)}</div>
            </div>
            <div className="flip-card ">
              <div className="top">{Math.floor(hours % 10)}</div>
              <div className="bottom">{Math.floor(hours % 10)}</div>
            </div>
          </div>
        </div>
        <div className="items-timer">
          <p className="text-2xl text-slate-800">Minutes</p>
          <div className="timer flex">
            <div className="flip-card ">
              <div className="top text-slate-800">{Math.floor(minutes / 10)}</div>
              <div className="bottom text-slate-800">{Math.floor(minutes / 10)}</div>
            </div>
            <div className="flip-card ">
              <div className="top text-slate-800">{Math.floor(minutes % 10)}</div>
              <div className="bottom text-slate-800">{Math.floor(minutes % 10)}</div>
            </div>
          </div>
        </div>
        <div className="items-timer">
          <p className="text-2xl">Seconds</p>
          <div className="timer flex">
            <div className="flip-card ">
              <div className="top">{Math.floor(seconds / 10)}</div>
              <div className="bottom">{Math.floor(seconds / 10)}</div>
            </div>
            <div className="flip-card ">
              <div className="top ">{seconds % 10}</div>
              <div className="bottom ">{seconds % 10}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const stopTimer = () => {
    setRuning(false);
  };

  const restartTimer = () => {
    setTime(duration);
    setRuning(true);
  };

  return (
    <div className="flex flex-col gap-20 items-center justify-center w-full h-screen">
      <p className="text-4xl">
        Countdown
        <span className="text-slate-800">Timer</span>
      </p>
      <p className=" font-lg text-6xl">{gietFormattedTime(time)}</p>
      <div className="flex gap-10">
        <button
          type="button"
          className="rounded-full p-2 text-2xl  font-medium text-text-red-600 cursor-pointer bg-white hover:bg-slate-800 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={stopTimer}
        >
          Stop Timer
        </button>
        <button
          type="button"
          className="rounded-full p-2 text-2xl  font-medium text-slate-800 cursor-pointer bg-white hover:bg-slate-800 hover:text-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={restartTimer}
        >
          Restart Timer
        </button>
      </div>
    </div>
  );
};

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
};

export default Timer;
