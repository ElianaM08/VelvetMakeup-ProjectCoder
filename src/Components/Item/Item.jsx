import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} className="item-img" />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`} className="btn-detail">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;
