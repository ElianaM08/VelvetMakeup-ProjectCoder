import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controls-count">
        <button onClick={handleDecrement} >-</button>
        <p>{count}</p>
        <button onClick={handleIncrement} >+</button>
      </div>
      <button className="button-add-count" onClick={() => addToCart(count)} >Agregar producto</button>
    </div>
  )
}

export default ItemCount