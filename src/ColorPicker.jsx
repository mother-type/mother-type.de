const ColorPicker = ({ textColor, onColorChange }) => (
  <div>
    <h4>Color</h4>
    <div className="color-picker">
      <div className="color-option" style={{ backgroundColor: '#00D03B' }} onClick={() => onColorChange('#00D03B')}></div>
      <div className="color-option" style={{ backgroundColor: '#FF4141' }} onClick={() => onColorChange('#FF4141')}></div>
      <div className="color-option" style={{ backgroundColor: '#6066FF' }} onClick={() => onColorChange('#6066FF')}></div>
      <div className="color-option" style={{ backgroundColor: '#D9D9D9' }} onClick={() => onColorChange('#D9D9D9')}></div>
    </div>
  </div>
);

export default ColorPicker;
