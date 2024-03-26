import "../css/index.css";
import "../css/elements/grid.css";
import MenuItem from "./MenuItem.jsx"


function Header() {
	return (
		<div>
			<div className="grid-layout condensed-grid">
				<div className="grid-item"><a href="/"><h1 className="logo">Mother</h1></a></div>
				<div className="grid-item span-3"></div>
				<MenuItem href="/about" color="gray" text="About" />
				<MenuItem href="mailto:itsmothertype@gmail.com" color="blue" text="Contact" />
			</div>
		</div>
	)
}

export default Header;
	