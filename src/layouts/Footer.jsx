import "../css/elements/grid.css";
import "../css/index.css";
import MenuItem from "./MenuItem.jsx"

function Footer() {
  return (
    <footer>
      <div className="grid-layout condensed-grid">
        <div className="grid-item">
          <a href="/">
            <h2 className="logo">Mother</h2>
          </a>
        </div>
        <MenuItem href="/about" color="green" text="About" />
        <MenuItem href="mailto:itsmothertype@gmail.com" color="red" text="Mail" />
        <MenuItem href="https://www.are.na/printer-scanner" color="blue" text="Are.na" />
        <MenuItem href="https://www.github.com/mother-type" color="gray" text="Github" />
        <div className="grid-item"></div>
      </div>
    </footer>
  );
}

export default Footer;
