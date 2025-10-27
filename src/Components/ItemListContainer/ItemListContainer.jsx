import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  products  from "../../Data/Products";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams(); 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(p => p.category === categoryId));
        } else {
          resolve(products);
        }
      }, 200); 
    });

    fetchProducts.then((res) => {
      setItems(res);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <Loading />;

  return (
    <main className="item-list-container">
      {greeting && !categoryId && <h1>{greeting}</h1>}
      {categoryId && <h1>{categoryId}</h1>}
      <ItemList items={items} />
    </main>
  );
};

export default ItemListContainer;
