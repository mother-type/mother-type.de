// CSS
import "../css/elements/grid.css";

function Footer() {
  return (
    <footer>
      <div className="grid-layout condensed-grid">
        <div className="grid-item span-2">
          <a href="mailto:itsmothertype@gmail.com">
            itsmothertype@gmail.com
          </a>
        </div>
				<div className="grid-item span-3"></div>
				<div className="grid-item"><a href="https://www.are.na/mother-type">are.na</a></div>
      </div>
    </footer>
  );
}

export default Footer;
