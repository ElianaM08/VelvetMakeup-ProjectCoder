import "./CartWidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { toast } from "react-toastify";

const CartWidget = () => {
  const { cart, deleteCart, totalPrice } = useContext(CartContext);

  const total = totalPrice();

  const onPurchase = () => {
    deleteCart();
    toast.success("¡Tu compra fue realizada con éxito!", {
      position: "top-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="cart-widget-container">
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <Link to={`/item/${item.id}`} className="cart-item-link">
              {item.img && (
                <img src={item.img} alt={item.name} className="cart-item-img" />
              )}
              <div className="cart-item-info">
                <p>Producto: {item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: ${item.price * item.quantity}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <h3>Total: ${total}</h3>
        <button className="buy-button" onClick={onPurchase}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
};

export default CartWidget;

