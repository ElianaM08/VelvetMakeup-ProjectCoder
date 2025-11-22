
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const quantity = totalQuantity();

  return (
    <Link to="/cart" className="cartwidget">
      <FaShoppingCart className="cart-icon" />
      {quantity > 0 && <p className="cart-count">{quantity}</p>}
    </Link>
  );
};

export default CartWidget;

