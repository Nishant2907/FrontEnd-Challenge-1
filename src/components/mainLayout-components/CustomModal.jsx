import React, { useState } from "react";
import "./CustomModal.css";
const CustomModal = ({ isModalopen, setIsModalopen, shade }) => {
    const [isReactchecked, setReactchecked] = useState(false);
    const svgStyle ={
        color: shade,
    }
    return (

        <div className="h-full w-full absolute">
            <div className={`modal h-fit w-fit overflow-scroll ${isModalopen ? "modal-open" : "modal-close"}`}>
                <div className="modal-body p-4 h-fit w-fit">
                    <div className="modal-head flex text-white">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="current" className="w-6 h-6 fill-current" style={svgStyle}>
                            <path fill="current" d="m19.636 0-1.374 3-2.99 1.364 2.99 1.374 1.374 2.99L21 5.737l3-1.374L21 3m-12.273.273L6 9.273 0 12l6 2.727 2.727 6 2.727-6 6-2.727-6-2.727m8.182 6-1.374 2.989-2.99 1.374L18.263 21l1.374 3L21 21l3-1.364-3-1.374"></path>
                        </svg>
                        <p className="pl-2">Ask AI</p>
                    </div>
                    <div className="modal-content">
                        <textarea className="rounded-xl mt-4 p-4 bg-[#201F23] focus:outline-none "
                            placeholder="Ask AI to do something ..."
                            rows={3} cols={40} />
                    </div>
                    <div className="modal-footer w-full flex pt-2">

                        <div>
                            <div class="bg-[#201F23] rounded-lg text-sm p-1 flex gap-1 ">
                                <button onClick={() => { setReactchecked(true) }}
                                    className={`text-white/60 rounded-md p-2 px-4 hover:bg-[#141417] ${isReactchecked ? "bg-[#141417]" : ""}`}>React</button>
                                <button onClick={() => { setReactchecked(false) }}
                                    className={`text-white/60 rounded-md p-2 px-4 hover:bg-[#141417] ${!isReactchecked ? "bg-[#141417]" : ""}`}>Vue</button>
                            </div>
                        </div>

                        <div className="ml-auto">
                            <div className="modal-btn" onClick={() => { setIsModalopen(!isModalopen); }}>
                                Generate
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default CustomModal;
