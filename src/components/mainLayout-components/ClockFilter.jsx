import React, { useEffect, useState } from "react";
import moment from "https://cdn.skypack.dev/moment@2.29.1";
import Clock from "./Clock"
import Draggable from 'react-draggable';

export default function ClockFilter({ shade }) {
  const bgStyle = {
    backgroundImage: "url('/assets/clockImg.png')", // Corrected URL and added closing quote
  };

  const [filterBgColor, setFilterBgColor] = useState(shade);
  useEffect(() => {
    setFilterBgColor(shade);
  }, [shade]);

  const filtercoverStyle = {
    backgroundColor: filterBgColor + "4f",
  }

  const [time, setTime] = useState(moment().format("0h:mm A"));

  // useEffect(() => {
    // const intervalId = 
    setInterval(() => {
      setTime(moment().format("0h:mm A"));
    }, 500);

    // return () => clearInterval(intervalId);
  // }, []);


  return (
    <div className="h-full rounded-xl bg-ui-gray text-white relative">
      <div className="h-full bg-cover bg-center rounded-xl " style={bgStyle}>
        <div className="filterLayer h-full w-full flex flex-col justify-between" style={filtercoverStyle}>

          <div className="p-5 h-full w-full bg-cover">
            <Draggable axis="y" bounds="parent">
              <div className="flex justify-center">
                <Clock />
              </div>
            </Draggable>
            <div className="grid place-items-center">
              <p className="text-xl mt-2">{time}</p>
              <img src="/assets/arrow.png" className="h-6 w-4 mt-2"></img>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
