import { useState } from "react";
import "./css/QuantityButton.css";
const QuantityButton = ({ product, setAllProducts }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  if (quantity < 1) {
    setQuantity(quantity + 1);
  }
  const onIncrement = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };

  const onDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      console.log(quantity);
    }
  };

  return (
    <div className="container-content">
      <button className="quantity" onClick={onDecrement}>
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button className="quantity" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
