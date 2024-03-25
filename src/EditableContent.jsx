import { useState } from 'react';
import sampleTexts from './sampleTexts';
import './slider.css';

function EditableContent(props) {
  const [fontSize, setFontSize] = useState(100);
  const [leading, setLeading] = useState(1);
  const [kerning, setKerning] = useState(1);
  const [content, setContent] = useState(props.text);
  const [textColor, setTextColor] = useState('#000000');

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

  const SliderContainer = ({ title, value, onChange, step }) => (
    <div>
      <h4>{title}</h4>
      <div className='slider-container'>
        <input
          type="range"
          min={title === "Size" ? 16 : -100}
          max={title === "Size" ? 600 : 100}
          value={value}
          step={step} // Adjust the step size here
          className='slider'
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
  
  const handleColorChange = (color) => {
    setTextColor(color);
  };

  return (
    <div className='editableContentWrapper'>
      <div className='editableRow flex'>
        <h2 className='editable-title'>{props.title}</h2>
        <SliderContainer title="Size" value={fontSize} onChange={setFontSize} step={50} />
        <SliderContainer title="Leading" value={leading} onChange={setLeading} step={.1} />
        <SliderContainer title="Kerning" value={kerning} onChange={setKerning} step={1} />
        <div>
          <h4>Color</h4>
          <div className="color-picker">
            <div className="color-option" style={{ backgroundColor: '#00D03B' }} onClick={() => handleColorChange('#00D03B')}></div>
            <div className="color-option" style={{ backgroundColor: '#FF4141' }} onClick={() => handleColorChange('#FF4141')}></div>
            <div className="color-option" style={{ backgroundColor: '#6066FF' }} onClick={() => handleColorChange('#6066FF')}></div>
            <div className="color-option" style={{ backgroundColor: '#D9D9D9' }} onClick={() => handleColorChange('#D9D9D9')}></div>
          </div>
        </div>
        <button onClick={handleRefreshClick}>&#8635;</button>
        {props.showDownload && <a className="refresh-button" href={`/fonts/${props.link}`}>Download ➬</a>}
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
        className={`${props.fontFamily}-class editableContent`}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: `${leading}`,
          letterSpacing: `${kerning}px`,
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default EditableContent;
