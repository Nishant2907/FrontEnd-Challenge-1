import React, { useState, useEffect } from "react";
import "./AiModel.css";

export default function AiModel({ shade, shade1 }) {

  const [checklist, setChecklist] = useState([
    { id: 1, name: "UX/UI Design", isChecked: false },
    { id: 2, name: "Frontend", isChecked: false },
    { id: 3, name: "Backend", isChecked: false },
    { id: 4, name: "Full Stack", isChecked: false },
    { id: 5, name: "Graphic Designer", isChecked: false },
    { id: 6, name: "Web Designer", isChecked: false },
    { id: 7, name: "QA", isChecked: false },
  ]);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    // Update "All" checkbox based on checklist state
    const allChecked = checklist.every(item => item.isChecked);
    setAllChecked(allChecked);
  }, [checklist]);

  const handleCheckboxChange = (itemId, isChecked) => {
    const updatedChecklist = checklist.map(item =>
      item.id === itemId ? { ...item, isChecked } : item
    );
    setChecklist(updatedChecklist);
    // Check if all checkboxes are checked
    const allChecked = updatedChecklist.every(item => item.isChecked);
    setAllChecked(allChecked);
  };

  const handleAllCheckboxChange = () => {
      const updatedAllChecked = !allChecked;
    setAllChecked(updatedAllChecked);
    // Directly modify the existing state object using spread operator
    setChecklist(
      checklist.map((item) => ({ ...item, isChecked: updatedAllChecked }))
    );
  };

  const checkboxStyle = {
    '--chkbg': shade,
  };

  const hexToRgba = (hex, opacity) => {
    if (!hex) return 'rgba(0, 0, 0, 0)';
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  const maskStyle = {
    backgroundColor: hexToRgba(shade1, "var(--tw-bg-opacity)")
  }

  return (
    <div className="h-full rounded-xl bg-ui-gray text-white relative p-1">

      <div className="h-[9.2rem] rounded-xl bg-[#201F23] px-6 pt-6 pb-2">
        <h1 className="text-2xl mb-4 font-bold">AI Models</h1>

        <div className="flex gap-x-2">
          {/* Dropdown 1 */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn min-h-8 h-8 text-xs rounded-3xl bg-[#17171A]">
              Model
              <svg className="fill-current h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>

            <ul tabIndex={0} className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="py-0 px-2">
                  <div className="form-control" >
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

              {checklist.map((task) => (
                <li key={task.id}>
                  <a className="py-0 px-2">
                    <div className="form-control">
                      <label className="cursor-pointer label p-0">
                        <input
                          type="checkbox"
                          className={`checkbox checkbox-sm [--chkfg:white]`}
                          checked={task.isChecked}
                          style={checkboxStyle}
                          onChange={() => handleCheckboxChange(task.id, !task.isChecked)}
                        />
                        <span className="label-text py-1 px-2">{task.name}</span>
                      </label>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown 2 */}
          <div className="dropdown">
            <div tabIndex={1} role="button" className="btn min-h-8 h-8 text-xs rounded-3xl bg-[#17171A]">
              Model
              <svg className="fill-current h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>

            <ul tabIndex={1} className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href=" " className="py-0 px-2">
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

              {checklist.map((task, index) => (
                <li key={task.id}>
                  <a href=" " className="py-0 px-2">
                    <div className="">
                      <label className="cursor-pointer label p-0">
                        <input
                          type="checkbox"
                          className={`checkbox checkbox-sm [--chkfg:white]`}
                          checked={task.isChecked} style={checkboxStyle}
                          onChange={() => handleCheckboxChange(task.id, !task.isChecked)}
                        />
                        <span className="label-text py-1 px-2">{task.name}</span>
                      </label>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dropdown 3 */}
          <div className="dropdown">
            <div tabIndex={2} role="button" className="btn min-h-8 h-8 text-xs rounded-3xl bg-[#17171A]">
              Model
              <svg className="fill-current h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>

            <ul tabIndex={2} className="dropdown-content z-[2] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href=" " className="py-0 px-2">
                  <div className="">
                    <label className="cursor-pointer label p-0">
                      <input
                        type="checkbox"
                        className={`checkbox checkbox-sm [--chkfg:white]`}
                        checked={allChecked} style={checkboxStyle}
                        // onChange={() => setAllChecked(!allChecked)}
                        onChange={handleAllCheckboxChange}
                      />
                      <span className="label-text py-1 px-2">All</span>
                    </label>
                  </div>
                </a>
              </li>

              {checklist.map((task, index) => (
                <li key={task.id}>
                  <a href=" " className="py-0 px-2">
                    <div className="form-control">
                      <label className="cursor-pointer label p-0">
                        <input
                          type="checkbox"
                          className={`checkbox checkbox-sm [--chkfg:white]`}
                          checked={task.isChecked} style={checkboxStyle}
                          onChange={() => handleCheckboxChange(task.id, !task.isChecked)}
                        />
                        <span className="label-text py-1 px-2">{task.name}</span>
                      </label>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 w-full flex flex-auto text-xs text-[#ffffff99]">
          <p className="w-full ">Model</p>
          <div className="flex gap-x-5">
            <p className="w-16 ">Versions</p>
            <p className="w-12 ">License</p>
            <p className="w-24 ">Contributors</p>
            <p className="w-16 ">Ratings</p>
          </div>

        </div>
      </div>

      <div className="h-56 bg-transparent rounded-xl px-1 my-1 overflow-y-auto">
        {/* Collapse-1 */}
        <div className="collapse w-full bg-transparent hover:bg-[#17171A] mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-sm font-medium flex py-1 px-6" >
            {/* Model */}
            <div className="w-full flex items-center gap-x-2">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-6 h-6 rounded-full"
                alt="Avatar" />
              <p>Chat GPT</p>
            </div>

            <div className="gap-x-5 flex items-center text-[#ffffff99] ">
              {/* Version */}
              <div className="w-16  flex justify-center">
                <p>v2.1</p>
              </div>
              {/* License */}
              <div className="w-12 flex pr-1 justify-end">
                <p>MIT</p>
              </div>
              {/* Contributors */}
              <div className="w-24 flex justify-center">
                <div className="flex">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                </div>
              </div>
              {/* Ratings */}
              <div className="w-16 rating z-[2] flex justify-center">
                <input type="radio" name="rating-1" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-1" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-1" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-1" className="mask mask-star-2" checked style={maskStyle} />
                <input type="radio" name="rating-1" className="mask mask-star-2" style={maskStyle} />
              </div>
            </div>

          </div>
          <div className="collapse-content text-sm bg-[#17171A]">
            <p className="pt-4">ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.</p>
          </div>
        </div>

        {/* Collapse-2 */}
        <div className="collapse w-full bg-transparent hover:bg-[#17171A] mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-sm font-medium flex py-1 px-6" >
            {/* Model */}
            <div className="w-full flex items-center gap-x-2">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-6 h-6 rounded-full"
                alt="Avatar" />
              <p>TensorFlow</p>
            </div>

            <div className="gap-x-5 flex items-center text-[#ffffff99] ">
              {/* Version */}
              <div className="w-16  flex justify-center">
                <p>v1.1</p>
              </div>
              {/* License */}
              <div className="w-12 flex pr-1 justify-end">
                <p>MIT</p>
              </div>
              {/* Contributors */}
              <div className="w-24 flex justify-center">
                <div className="flex">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                </div>
              </div>
              {/* Ratings */}
              <div className="w-16 rating z-[2] flex justify-center">
                <input type="radio" name="rating-2" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-2" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-2" className="mask mask-star-2" checked style={maskStyle} />
                <input type="radio" name="rating-2" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-2" className="mask mask-star-2" style={maskStyle} />
              </div>
            </div>

          </div>
          <div className="collapse-content text-sm bg-[#17171A]">
            <p className="pt-4">ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.</p>
          </div>
        </div>

        {/* Collapse-3 */}
        <div className="collapse w-full bg-transparent hover:bg-[#17171A] mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-sm font-medium flex py-1 px-6" >
            {/* Model */}
            <div className="w-full flex items-center gap-x-2">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-6 h-6 rounded-full"
                alt="Avatar" />
              <p>Bard</p>
            </div>

            <div className="gap-x-5 flex items-center text-[#ffffff99] ">
              {/* Version */}
              <div className="w-16  flex justify-center">
                <p>v2.1</p>
              </div>
              {/* License */}
              <div className="w-12 flex pr-1 justify-end">
                <p>MIT</p>
              </div>
              {/* Contributors */}
              <div className="w-24 flex justify-center">
                <div className="flex">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                </div>
              </div>
              {/* Ratings */}
              <div className="w-16 rating z-[2] flex justify-center">
                <input type="radio" name="rating-3" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-3" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-3" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-3" className="mask mask-star-2" checked style={maskStyle} />
                <input type="radio" name="rating-3" className="mask mask-star-2" style={maskStyle} />
              </div>
            </div>

          </div>
          <div className="collapse-content text-sm bg-[#17171A]">
            <p className="pt-4">ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.</p>
          </div>
        </div>

        {/* Collapse-4 */}
        <div className="collapse w-full bg-transparent hover:bg-[#17171A] mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-sm font-medium flex py-1 px-6" >
            {/* Model */}
            <div className="w-full flex items-center gap-x-2">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-6 h-6 rounded-full"
                alt="Avatar" />
              <p>Gemini</p>
            </div>

            <div className="gap-x-5 flex items-center text-[#ffffff99] ">
              {/* Version */}
              <div className="w-16  flex justify-center">
                <p>v3.2</p>
              </div>
              {/* License */}
              <div className="w-12 flex pr-1 justify-end">
                <p>Apache 2.0</p>
              </div>
              {/* Contributors */}
              <div className="w-24 flex justify-center">
                <div className="flex">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                </div>
              </div>
              {/* Ratings */}
              <div className="w-16 rating z-[2] flex justify-center">
                <input type="radio" name="rating-4" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-4" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-4" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-4" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-4" className="mask mask-star-2" checked style={maskStyle} />
              </div>
            </div>

          </div>
          <div className="collapse-content text-sm bg-[#17171A]">
            <p className="pt-4">ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.</p>
          </div>
        </div>

        {/* Collapse-5 */}
        <div className="collapse w-full bg-transparent hover:bg-[#17171A] mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-sm font-medium flex py-1 px-6" >
            {/* Model */}
            <div className="w-full flex items-center gap-x-2">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-6 h-6 rounded-full"
                alt="Avatar" />
              <p>Sora</p>
            </div>

            <div className="gap-x-5 flex items-center text-[#ffffff99] ">
              {/* Version */}
              <div className="w-16  flex justify-center">
                <p>v2.1</p>
              </div>
              {/* License */}
              <div className="w-12 flex pr-1 justify-end">
                <p>MIT</p>
              </div>
              {/* Contributors */}
              <div className="w-24 flex justify-center">
                <div className="flex">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                </div>
              </div>
              {/* Ratings */}
              <div className="w-16 rating z-[2] flex justify-center">
                <input type="radio" name="rating-5" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-5" className="mask mask-star-2" checked style={maskStyle} />
                <input type="radio" name="rating-5" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-5" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-5" className="mask mask-star-2" style={maskStyle} />
              </div>
            </div>

          </div>
          <div className="collapse-content text-sm bg-[#17171A]">
            <p className="pt-4">ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.</p>
          </div>
        </div>

        {/* Collapse-6 */}
        <div className="collapse w-full bg-transparent hover:bg-[#17171A] mb-2">
          <input type="checkbox" />
          <div className="collapse-title text-sm font-medium flex py-1 px-6" >
            {/* Model */}
            <div className="w-full flex items-center gap-x-2">
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                className="w-6 h-6 rounded-full"
                alt="Avatar" />
              <p>Llama</p>
            </div>

            <div className="gap-x-5 flex items-center text-[#ffffff99] ">
              {/* Version */}
              <div className="w-16  flex justify-center">
                <p>v1.1</p>
              </div>
              {/* License */}
              <div className="w-12 flex pr-1 justify-end">
                <p>MIT</p>
              </div>
              {/* Contributors */}
              <div className="w-24 flex justify-center">
                <div className="flex">
                  <img className="w-6 h-6 rounded-full border-2 border-white" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                  <img className="w-6 h-6 rounded-full border-2 border-white -ml-2" src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" alt="" />
                </div>
              </div>
              {/* Ratings */}
              <div className="w-16 rating z-[2] flex justify-center">
                <input type="radio" name="rating-6" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-6" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-6" className="mask mask-star-2" style={maskStyle} />
                <input type="radio" name="rating-6" className="mask mask-star-2" checked style={maskStyle} />
                <input type="radio" name="rating-6" className="mask mask-star-2" style={maskStyle} />
              </div>
            </div>

          </div>
          <div className="collapse-content text-sm bg-[#17171A]">
            <p className="pt-4">ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
