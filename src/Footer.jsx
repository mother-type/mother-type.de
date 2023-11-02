// CSS
import "./index.css";

function Footer() {
  return (
    <footer>
      <br />
      <div className="grid-layout condensed-grid">
        <div className="grid-item span-2">
          <a href="mailto:itsprinterscanner@gmail.com">
            itsyourmother@gmail.com
          </a>
        </div>
				<div className="grid-item span-2"></div>
				<div className="grid-item"><a href="https://www.are.na/printer-scanner">are.na</a></div>
				<div className="grid-item"><a className="right" href="https://instagram.com/printer_scanner">Instagram</a></div>
      </div>
      <br />
    </footer>
  );
}

export default Footer;
