import "../css/elements/grid.css";
import "../css/index.css";

function MenuItem({ href, color, text }) {
  return (
    <a className={`grid-item grid-item--link grid-item__color ${color}`} href={href}>
        {text}
    </a>
  );
}

export default MenuItem;
