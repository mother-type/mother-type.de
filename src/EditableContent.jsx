import { useState } from 'react';
import sampleTexts from './sampleTexts';
import SliderContainer from './SliderContainer';
import ColorPicker from './ColorPicker';
import './EditableContent.css';

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

  const handleColorChange = (color) => {
    setTextColor(color);
  };

  return (
    <div className='editableContentWrapper'>
      <div className='editableRow flex'>
        <h2 className='editable-title'>{props.title}</h2>
        <button onClick={handleRefreshClick} className='button'>&#8635;</button>
        <SliderContainer
          title="Size"
          value={fontSize}
          onChange={setFontSize}
          step={50}
        />
        <SliderContainer
          title="Leading"
          value={leading}
          onChange={setLeading}
          step={0.1}
        />
        <SliderContainer
          title="Kerning"
          value={kerning}
          onChange={setKerning}
          step={1}
        />
        <ColorPicker textColor={textColor} onColorChange={handleColorChange} />
        <br />
        {props.showDownload && <a className="button refresh-button" href={`/fonts/${props.link}`}>Download ➬</a>}
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
          color: textColor,
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default EditableContent;
