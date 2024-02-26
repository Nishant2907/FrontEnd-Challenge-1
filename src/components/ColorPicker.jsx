import React, { useState, useEffect } from "react";
import Hue from "@uiw/react-color-hue";
import chroma from "chroma-js";
import hsl from "hsl-to-hex";

import "./ColorPicker.css";

export default function ColorPicker({ onColorChange, onShadesChange }) {
    const [hsva, setHsva] = useState({ h: 257, s: 0, v: 68, a: 1 });  // State to store the current hue value


    // Function to generate shades based on the current hue
    const generateShades = (color) => { 
        const shades = [];
        shades.push("#ffffff");     // First, we push white as the lightest shade
        for (let i = 1; i <= 4; i++) {
            shades.push(chroma.mix("#ffffff", color, i / 5).hex());     // Then we generate 4 shades between white and the color
        }
        var hex = hsl(hsva.h,"100","50");
        shades.push(hex); // Finally, we push the color itself as the darkest shade
        for (let i = 1; i <= 4; i++) {
            shades.push(chroma.mix(color, "black", i / 5).hex());       // Generate darker shades between color and black
        }
        return shades;

    };


    const handleHueChange = (newHue) => {   // Handle hue change and update parent
        setHsva({ ...hsva, ...newHue });
        onColorChange(newHue);  // Call parent's function with updated hue

        // Generate and update shades array
        const updatedShades = generateShades(`hsl(${newHue.h}, 100%, 50%)`);
        onShadesChange(updatedShades); // Call parent's function with updated shades
    };

    // Effect to generate shades initially and call parent
    useEffect(() => {
        const initialShades = generateShades(`hsl(${hsva.h}, 100%, 50%)`);
        onShadesChange(initialShades); // Call parent's function with initial shades
    },[]);

    return (
        <div className="flex items-center">
            <div className="flex flex-row">
                <div className="w-[16rem] bg-ui-gray p-3 rounded-full">
                    <div className="py-[3px]" 
                    style={{ overflow: "hidden", borderRadius: "50.5px" }}>
                        <Hue
                            hue={hsva.h}
                            onChange={handleHueChange}
                            height="12px"
                            // style={{ borderRadius: "50.5px", overflow: "hidden" }}
                        />
                    </div>
                </div>

                <div className="flex w-[910.5px] p-3 ml-4 items-center bg-ui-gray rounded-full">
                    {generateShades(`hsl(${hsva.h},  100%,  50%)`).map((shade, index) => (
                        <div
                            key={index}
                            className="w-[5.25rem] h-3 px-6 m-0.5 rounded-lg"
                            style={{ backgroundColor: shade }}
                            title={shade}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
