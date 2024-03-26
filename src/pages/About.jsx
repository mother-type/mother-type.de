import ColorPicker from '../components/ColorPicker.jsx';
import { useState } from 'react';



function About() {
  const [textColor, setTextColor] = useState('#000000');

  const handleColorChange = (color) => {
    setTextColor(color);
  };

  return (
    <div className="main About">
      <ColorPicker onColorChange={handleColorChange} />
      <h1   
      style={{
          color: textColor,
        }}>About</h1>
      <p>Mother Type is an open source type foundry.</p>
    </div>
    
  );
}

export default About;
