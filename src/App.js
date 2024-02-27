import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import MainLayout from './components/MainLayout';
import "./App.css";


function App() {
  const [bgColor, setBgColor] = useState();  // State to store the background color
  const [shadesArray, setShadesArray] = useState([]);  // State to store the received shades array from the ColorPicker

  const handleColorChange = (color) => {  // Function to handle color change from the ColorPicker
    setBgColor(color.h); // Update background color with hue value
  };

  const handleShadesChange = (updatedShades) => {  // Function to handle shades array update from the ColorPicker
    setShadesArray(updatedShades); // Update state with received array
    // console.log('Received shades:', updatedShades); // Log the array
  };

  return (
    <div className="App px-32 py-11" style={{ backgroundColor: `${shadesArray[4]}` }}>
      {/* // <div className="App " style={{ backgroundColor: `hsl(${bgColor},  100%,  50%)` }}> */}
      <ColorPicker
        onColorChange={handleColorChange}
        onShadesChange={handleShadesChange}
      />

      <div className='h-[39.3rem] mt-4 p-4 rounded-3xl bg-black text-white relative' >
          <MainLayout shade={shadesArray[5]} shade1={shadesArray[4]}/>
      </div>


    </div>
  );
}

export default App;