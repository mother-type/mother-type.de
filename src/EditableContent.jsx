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
        <style>
          {`
            @font-face {
              font-family: '${props.fontFamily}';
              src: url('https:raw.githubusercontent.com/mother-type/${props.fontFamily}/main/fonts/${props.fontFamily}-Regular.woff') format('woff');
              /* Add additional font formats if necessary */
            }

            .${props.fontFamily}-class {
              font-family: '${props.fontFamily}', sans-serif;
              /* Use the custom class where you want to apply this font */
            }
          `}
        </style>
      <div
        contentEditable={true}
        spellCheck={false}
        className={props.fontFamily + "-class editableContent"}
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
