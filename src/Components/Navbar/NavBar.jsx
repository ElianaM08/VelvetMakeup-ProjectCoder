import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/Velvet Logo.jpg";
import { CartContext } from "../../Context/CartContext";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    const {cart} = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Velvet logo" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/category/Labiales">Labiales</Link></li>
        <li><Link to="/category/Gloss">Gloss</Link></li>
        <li><Link to="/category/Paletas">Paletas</Link></li>
        <li><Link to="/category/Combos">Combos</Link></li>
      </ul>
     <CartWidget totalItems={totalItems} />
    </nav>
  );
};

export default Navbar;

