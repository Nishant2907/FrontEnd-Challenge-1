import React, { useEffect, useState } from "react";
import { Resize, ResizeHorizon } from "react-resize-layout";
import "./Filter.css";

export default function Filter({ shade }) {
  const [filterColor, setFilterColor] = useState(shade);
  useEffect(() => {
    setFilterColor(shade);
  }, [shade]);

const filterStyle = {
  backgroundColor: filterColor+"4f",
};

  return (
    <div className="filter h-full rounded-xl bg-ui-gray text-white relative p-7">
      <div className="w-[26rem] h-full bg-white rounded-xl relative">
        <img src="/assets/filterImg.png" alt="" className="w-full h-full object-cover" />
        <Resize handleWidth="4px" handleColor="#fff">
          <ResizeHorizon width="225px">
            <div className="h-full w-full" style={filterStyle}>
            </div>
          </ResizeHorizon>
          <ResizeHorizon minWidth="0px">
          </ResizeHorizon>
        </Resize>
      </div>




    </div>
  )
}
