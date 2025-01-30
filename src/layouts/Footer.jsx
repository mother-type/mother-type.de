import "../css/elements/grid.css";
import "../css/index.css";
import MenuItem from "./MenuItem.jsx"

function Footer() {
  return (
    <footer>
      <div className="grid-layout condensed-grid">
        <MenuItem href="/" color="black" text="Mother" logo={true} />
        <MenuItem href="/about" color="green" text="About" />
        <MenuItem href="mailto:itsmothertype@gmail.com" color="red" text="Mail" />
        <MenuItem href="https://www.are.na/printer-scanner" color="blue" text="Are.na" />
        <MenuItem href="https://www.github.com/mother-type" color="gray" text="Github" />
        <MenuItem href="https://printerscanner.net" color="black" text="Printer Scanner Studio" />
      </div>
    </footer>
  );
}

export default Footer;
