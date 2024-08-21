import "../css/index.css";
import "../css/elements/grid.css";
import MenuItem from "./MenuItem.jsx"


function Header() {
	return (
		<div>
			<div className="grid-layout condensed-grid">
				<MenuItem href="/" color="black" text="Mother" logo={true} />
				<div className="grid-item span-3"></div>
				<MenuItem href="/about" color="gray" text="About" />
				<MenuItem href="mailto:itsmothertype@gmail.com" color="blue" text="Contact" />
			</div>
		</div>
	)
}

export default Header;
	