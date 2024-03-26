import "../css/components/Slider.css";


const Slider = ({ title, value, onChange, step }) => (
  <div>
    <h4>{title}</h4>
    <div className='Slider__container'>
      <input
        type="range"
        min={title === "Size" ? 16 : -100}
        max={title === "Size" ? 600 : 100}
        value={value}
        step={step} // Adjust the step size here
        className='Slider'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </div>
);

export default Slider;
