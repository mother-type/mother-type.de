import "./index.css";


function Header() {
	return (
		<div>
			<div className="grid-layout condensed-grid">
				<div className="grid-item span-2"><a href="/"><h1 className="logo">Mother</h1></a></div>
				<div className="grid-item span-3"></div>
				<div className="grid-item grid-item--link">
					<a href="https://github.com/mother-type">
						↗ Github
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header;
	