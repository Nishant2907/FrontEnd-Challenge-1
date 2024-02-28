import React, { useEffect, useState } from "react";
import { Resize, ResizeHorizon } from "react-resize-layout";
import CustomModal from "./CustomModal"
import "./Filter.css";



export default function Filter({ shade }) {
  const [filterColor, setFilterColor] = useState(shade);

  useEffect(() => {
    setFilterColor(shade);
    const root = document.documentElement;
    root.style.setProperty("--radar-color", shade);
    root.style.setProperty("--modal-trigger-color", shade);
  }, [shade]);

  const filterStyle = {
    backgroundColor: filterColor + "4f",
  };

  const [filterChecklist, setChecklist] = useState([
    { id: 1, name: "UX/UI Design", isChecked: false },
    { id: 2, name: "Frontend", isChecked: false },
    { id: 3, name: "Backend", isChecked: false },
  ]);

  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    // Update "All" checkbox based on checklist state
    const allChecked = filterChecklist.every((item) => item.isChecked);
    setAllChecked(allChecked);
  }, [filterChecklist]);

  const handleCheckboxChange = (itemId, isChecked) => {
    const updatedChecklist = filterChecklist.map((item) =>
      item.id === itemId ? { ...item, isChecked } : item
    );
    setChecklist(updatedChecklist);

    // Check if all checkboxes are checked
    const allChecked = updatedChecklist.every((item) => item.isChecked);
    setAllChecked(allChecked);
  };

  const handleAllCheckboxChange = () => {
    const updatedAllChecked = !allChecked;
    setAllChecked(updatedAllChecked);
    const updatedChecklist = filterChecklist.map((item) => ({
      ...item, isChecked: updatedAllChecked,
    }));
    setChecklist(updatedChecklist);
  };

  const checkboxStyle = {
    "--chkbg": shade,
  };

  // const modalStyle = {
  //   backgroundColor: filterColor,
  // };

  const [isModalopen, setIsModalopen] = useState(false)
  return (
    <div className="filter h-full rounded-xl bg-ui-gray text-white relative p-7">
      <div className="flex h-full">
        <div className="w-[26rem] h-full rounded-xl relative">
          <img src="/assets/filterImg.png" alt="" className="w-full h-full object-cover" />
          <Resize handleWidth="4px" handleColor="#fff">
            <ResizeHorizon width="225px">
              <div className="h-full w-full" style={filterStyle}></div>
            </ResizeHorizon>
            <ResizeHorizon minWidth="0px"></ResizeHorizon>
          </Resize>
        </div>

        <div className="aspect-square h-full ml-20 mr-[10rem]">
          <div className="circle-container spinner h-full w-full">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>

        <div className="flex flex-col">
          <details className="dropdown w-72">
            <summary className="m-1 btn flex justify-start bg-[#17171A]">
              <p className="mr-36">Select item</p>
              <svg
                className="fill-current h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#17171A] rounded-box w-full">
              <li>
                <a className="py-0 px-2">
                  <div className="form-control">
                    <label className="cursor-pointer label p-0">
                      <input
                        type="checkbox"
                        className={`checkbox checkbox-sm [--chkfg:white]`}
                        checked={allChecked}
                        style={checkboxStyle}
                        onChange={handleAllCheckboxChange}
                      />
                      <span className="label-text py-1 px-2">All</span>
                    </label>
                  </div>
                </a>
              </li>
              {filterChecklist.map((task) => (
                <li key={task.id}>
                  <a className="py-0 px-2">
                    <div className="">
                      <label className="cursor-pointer label p-0">
                        <input
                          type="checkbox"
                          className={`checkbox checkbox-sm [--chkfg:white]`}
                          checked={task.isChecked}
                          style={checkboxStyle}
                          onChange={() =>
                            handleCheckboxChange(task.id, !task.isChecked)
                          }
                        />
                        <span className="label-text py-1 px-2">
                          {task.name}
                        </span>
                      </label>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </details>


          <div className="h-full flex justify-end items-end">

            <div className="modal-trigger h-fit w-fit"
              // style={modalStyle}
              onClick={() => { setIsModalopen(!isModalopen) }}>

              {!isModalopen ?
                <svg xmlns="http://www.w3.org/2000/svg"
                  fill="current" className="w-6 h-6 fill-current text-white star">
                  <path fill="current" d="m19.636 0-1.374 3-2.99 1.364 2.99 1.374 1.374 2.99L21 5.737l3-1.374L21 3m-12.273.273L6 9.273 0 12l6 2.727 2.727 6 2.727-6 6-2.727-6-2.727m8.182 6-1.374 2.989-2.99 1.374L18.263 21l1.374 3L21 21l3-1.364-3-1.374"></path>
                </svg>
                :
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              }
            </div>

            <div>
              <CustomModal isModalopen={isModalopen} setIsModalopen={setIsModalopen} shade={shade} />
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}
