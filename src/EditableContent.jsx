/* eslint-disable react/prop-types */
import { useState } from 'react';
import sampleTexts from './sampleTexts';

function EditableContent(props) {
  const [fontSize, setFontSize] = useState(100);
  const [content, setContent] = useState(props.text);

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
          {props.showDownload && <a className="refresh-button" href={`/fonts/${props.link}`}>Download ➬</a>}

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
