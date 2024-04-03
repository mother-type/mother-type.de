import ColorPicker from '../components/ColorPicker.jsx';
import { useState } from 'react';



function About() {
  const [textColor, setTextColor] = useState('#000000');

  const handleColorChange = (color) => {
    setTextColor(color);
  };

  return (
    <div className="main">
      <ColorPicker onColorChange={handleColorChange} />
      <h1   
      style={{
          color: textColor,
        }}>About</h1>
      <p>Mother Type is an open source type foundry.</p>
      <p>We are committed to making type design more accessible, and all our typefaces are available for use, distribution and collaboration via the <a href="https://openfontlicense.org">SIL Open Font License (OFL)</a>. With this license, everyone is free to use, modify, and distribute our typefaces. We ask you credit the designer and foundry when using our typefaces.</p>

      <p>Our typefaces are shared and distributed via the <a href="https://github.com/mother-type/Unified-Font-Repository">Unified Font Repository</a>. These repositories also serve as the Content Management System for this website. Change or update the typefaces repository, and the site will change with it. This sites main function is as a visual directory of updatable fonts, which will provide the user with the most up-to-date version of a typeface at any time, and hopefully, avenues for collaboration.</p>
      <h2
        style={{
          color: textColor,
      }}>Submissions</h2>
      <p>If you would like to submit a font, email us at <a href="mailto:itsmothertype@gmail.com">itsmothertype@gmail.com</a>, or make a fork of the <a href="https://github.com/mother-type/Unified-Font-Repository">Unified Font Repository</a> on Github.</p>

    </div>
    
  );
}

export default About;
