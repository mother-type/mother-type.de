import { useState } from 'react';
import sampleTexts from '../sampleTexts';
import Slider from './Slider';
import ColorPicker from './ColorPicker';
import '../css/components/FontDemo.css';
import '../css/elements/button.css';

function FontDemo(props) {
  const [fontSize, setFontSize] = useState(100);
  const [leading, setLeading] = useState(1);
  const [kerning, setKerning] = useState(1);
  const [content, setContent] = useState(props.text);
  const [textColor, setTextColor] = useState('#000000');

  const handleColorChange = (color) => {
    setTextColor(color);
  };

  const getRandomSampleText = () => {
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    return sampleTexts[randomIndex];
  };

  const handleRefreshClick = () => {
    setFontSize(58);
    setLeading(1);
    setKerning(0);
    setContent(getRandomSampleText());
  };

  return (
    <div className='FontDemo__wrapper'>
      <div className='FontDemo__row flex'>
        <h2 className='FontDemo__title'>{props.title}</h2>
        <button onClick={handleRefreshClick} className='button corner-button'>&#8635;</button>
        <Slider
          title="Size"
          min={10}
          max={500}
          value={fontSize}
          onChange={setFontSize}
          step={50}
        />
        <Slider
          title="Leading"
          min={-15}
          max={20}
          value={leading}
          onChange={setLeading}
          step={1}
        />
        <Slider
          title="Kerning"
          min={-25}
          max={50}
          value={kerning}
          onChange={setKerning}
          step={0.01}
        />
        <ColorPicker onColorChange={handleColorChange} text={"Color"} />
        <br />
        {props.showDownload && <a className="button corner-button" href={`/fonts/${props.link}`}>Details ➬</a>}
      </div>
      <style>
      {`
        @font-face {
          font-family: '${props.fontFamily.replace(/'/g, "\\'")}';
          src: url('https://raw.githubusercontent.com/mother-type/${props.fontFamily}/main/fonts/${props.fontFamily}-Regular.woff') format('woff');
          /* Add additional font formats if necessary */
        }

        .${props.fontFamily}-class {
          font-family: '${props.fontFamily.replace(/'/g, "\\'")}', sans-serif;
          color: ${textColor};
          /* Use the custom class where you want to apply this font */
        }
      `}
    </style>
      <div
        contentEditable={true}
        spellCheck={false}
        className={`${props.fontFamily}-class FontDemo__content`}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: `${leading}`,
          letterSpacing: `${kerning}px`,
          color: textColor,
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default FontDemo;
