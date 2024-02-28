import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = ({shade}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleHandStyles = (unit) => ({
    transform: `rotateZ(${
      unit === "hour"
        ? time.getHours() * 30 + time.getMinutes() / 2
        : unit === "minute"
        ? time.getMinutes() * 6
        : time.getSeconds() * 6
    }deg)`
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--clock_shade", shade);
  }, [shade]);

  return (
    <div className="clock_wrapper">
      <div className="clock">
        <div className="hour_hand" style={handleHandStyles("hour")} />
        <div className="min_hand" style={handleHandStyles("minute")} />
        <div className="sec_hand" style={handleHandStyles("second")} />
        <span className="twelve"></span>
        <span className="three"></span>
        <span className="six"></span>
        <span className="nine"></span>
      </div>
    </div>
  );
};

export default Clock;
