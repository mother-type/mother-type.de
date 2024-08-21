import "../css/elements/grid.css";
import "../css/index.css";

function MenuItem({ href, color, text, logo }) {
  return (
    <a className={`grid-item grid-item--link grid-item__color ${color}`} href={href}>
      {logo ? <h1 className="logo">{text}</h1> : text}
    </a>
  );
}

export default MenuItem;
