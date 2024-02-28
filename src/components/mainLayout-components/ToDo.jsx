import React, { useState, useEffect } from "react";
import "./ToDo.css";


export default function ToDo({ shade }) {
    var colr = shade;
    // console.log("Todo ", colr);
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--fgDim', colr);
    }, [colr]);

    useEffect(() => {
        const handleChange = (e) => {
            e.target.removeAttribute("className");
        };

        const form = document.forms[0];
        form.addEventListener("change", handleChange);

        return () => {
            form.removeEventListener("change", handleChange);
        };
    }, []);

    // const [tasks, setTasks] = useState([
    //     "Frontend",
    //     "Review the Design",
    //     "Estimate the time",
    //     "Code UI",
    //     "Testing",
    //     "Submit",
    // ]);
    const tasks = ["Frontend",
        "Review the Design",
        "Estimate the time",
        "Code UI",
        "Testing",
        "Submit"]
    return (
        <div className="h-full rounded-xl bg-ui-gray text-white relative p-7 todo">
            <h1 className="text-2xl	mb-4 font-bold">Today's Task</h1>
            <form className="todo">
                {tasks.map((task, index) => (
                    <div key={index}>
                        <label>
                            <input
                                className="pristine"
                                type="checkbox"
                            />
                            <span className="text-base">{task}</span>
                        </label>
                        <br />
                    </div>
                ))}

            </form>


        </div>
    )
}