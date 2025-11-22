import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, deleteProductById, totalPrice, deleteCart } = useContext(CartContext);

  const handleBuy = () => {
    toast.success("¡Tu compra fue realizada con éxito!", {
      position: "top-center",
      autoClose: 2500,
    });

    deleteCart();
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Mi Carrito</h1>
        <p>Tu carrito está vacío 😢</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Mi Carrito</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} className="cart-item-img" />

            <div className="item-info">
              <p>{item.name}</p>
              <p>${item.price} x {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>

            <button
              onClick={() => deleteProductById(item.id)}
              className="remove-btn"
            >
              Eliminar
            </button>
          </div>
        ))}

        <div className="cart-total">
          <h2>Total: ${totalPrice()}</h2>

          <div className="cart-buttons">
            <button className="clear-cart-btn" onClick={deleteCart}>
              Vaciar carrito
            </button>

            <button className="buy-btn" onClick={handleBuy}>
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


