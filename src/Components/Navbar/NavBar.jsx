import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Velvet Logo.jpg";

const Navbar = ({cart}) => {
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
      <div className="navbar-cart">
        <Link to="/cart" >🛒 Carrito ({totalItems})</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;

