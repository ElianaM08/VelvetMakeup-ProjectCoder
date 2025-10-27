import React, { useEffect, useState } from "react";

import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Mi Carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío 😢</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} className="cart-item-img" />
              <div className="item-info">
                <p>{item.name}</p>
                <p>${item.price} x {item.quantity}</p>
                <p>Subtotal: ${item.price * item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="remove-btn">
                Eliminar
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
