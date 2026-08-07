import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import "../../../styles/Navbar.css";

function Navbar() {
  const location = useLocation();
  const { totalCount } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h2>🍔 FoodieHub</h2>
        </Link>
      </div>

      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/menu" ? "active" : ""}>
          <Link to="/menu">Menu</Link>
        </li>
        <li className={location.pathname === "/cart" ? "active cart-link" : "cart-link"}>
          <Link to="/cart">
            🛒 Cart {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
