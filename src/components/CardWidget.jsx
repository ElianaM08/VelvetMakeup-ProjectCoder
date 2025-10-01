function CardWidget({ count = 0, onClick }) {
  return (
    <button
      className="card-widget"
      onClick={onClick}
      aria-label={`Abrir carrito. ${count} artículos en el carrito`}
      title="Carrito"
    >
      <span className="cart-icon" aria-hidden>🛒</span>
      <span className="cart-count" aria-hidden>{count}</span>
    </button>
  );
}

export default CardWidget;
