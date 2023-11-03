/* eslint-disable react/prop-types */
import { useState } from 'react';
import sampleTexts from './sampleTexts';

function EditableContent(props) {
  const [fontSize, setFontSize] = useState(200);
  const [content, setContent] = useState(props.fontFamily);

  const getRandomSampleText = () => {
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    return sampleTexts[randomIndex];
  };

  const handleRefreshClick = () => {
    setFontSize(58);
    setContent(getRandomSampleText());
  };

  return (
    <div className='editableContentWrapper'>
      <div className='editableRow'>
        <h2>{props.title}</h2>
        <div className='flex'>
            <input
              type="range"
              min="16"
              max="300"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
            <button onClick={handleRefreshClick} className="refresh-button">&#8635;</button>
          </div>
        </div>
      <div
        className='editableContent'
        contentEditable={true}
        spellCheck={false}
        style={{
          fontFamily: props.fontFamily,
          fontSize: `${fontSize}px`,
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default EditableContent;
