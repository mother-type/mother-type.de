import "../css/components/ColorPicker.css";

function ColorPicker({ onColorChange }) {
  const handleColorClick = (color) => {
    onColorChange(color);
  };

  return (
    <div>
      <h4>Color</h4>
      <div className="ColorPicker">
        <div className="ColorPicker__option" style={{ backgroundColor: '#00D03B' }} onClick={() => handleColorClick('#00D03B')}></div>
        <div className="ColorPicker__option" style={{ backgroundColor: '#FF4141' }} onClick={() => handleColorClick('#FF4141')}></div>
        <div className="ColorPicker__option" style={{ backgroundColor: '#6066FF' }} onClick={() => handleColorClick('#6066FF')}></div>
        <div className="ColorPicker__option" style={{ backgroundColor: '#D9D9D9' }} onClick={() => handleColorClick('#D9D9D9')}></div>
      </div>
    </div>
  );
}

export default ColorPicker;