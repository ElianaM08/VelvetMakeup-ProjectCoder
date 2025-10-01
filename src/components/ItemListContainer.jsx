function ItemListContainer({ greeting, onAddToCart, products }) {
  return (
    <main className="item-list-container">
      <h1>{greeting}</h1>
      <p>Seleccioná productos y agregalos al carrito.</p>

      <div className="product-list">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            {prod.img && (<img src={prod.img} alt={prod.name} className="product-img" />)}
            <h4>{prod.name}</h4>
            <p>${prod.price}</p>
            <button onClick={() => onAddToCart(1)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ItemListContainer;
