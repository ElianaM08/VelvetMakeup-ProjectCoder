import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import products from "../../Data/Products";
import Loading from "../Loading/Loading";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewItemCount, setViewItemCount] = useState(true);

  const { addProduct } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === parseInt(itemId)));
      }, 200);
    });

    getProduct.then((res) => {
      setProduct(res);
      setLoading(false);
    });
  }, [itemId]);

  const addToCart = (count) => {
    setViewItemCount(false);

    const newProduct = {
      ...product,
      quantity: count,
    };

    addProduct(newProduct);
  };

  if (loading) return <Loading />;

  if (!product)
    return (
      <div className="item-detail-error">
        <h2>Producto no encontrado 😢</h2>
      </div>
    );

  return (
    <div className="item-detail-container">
      <img src={product.img} alt={product.name} className="item-detail-img" />
      <div className="item-detail-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">
          {product.description ||
            `Este ${product.name.toLowerCase()} es ideal para completar tu look Velvet.`}
        </p>

        {viewItemCount ? (
          <ItemCount stock={product.stock} addToCart={addToCart} />
        ) : (
          <>
            <Link to="/cart">
              <button className="go-cart">Ir al carrito</button>
            </Link>

            <Link to="/productos">
              <button className="go-back">Volver</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

