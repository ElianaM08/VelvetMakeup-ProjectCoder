import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = ({ cart = [], onPurchase }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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

