import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../../Data/Products";
import Loading from "../Loading/Loading";
import "./ItemDetail.css";

const ItemDetail = ({ addToCart }) => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

        <button
          className="add-to-cart"
          onClick={() =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              img: product.img,
            })
          }
        >
          Agregar al carrito
        </button>


      </div>
    </div>
  );
};

export default ItemDetail;
