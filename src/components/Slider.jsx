import "../css/components/Slider.css";


const Slider = ({ title, value, onChange, step, min, max }) => (
  <div>
    <h4>{title}</h4>
    <div className='Slider__container'>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step} // Adjust the step size here
        className='Slider'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

export default Slider;
