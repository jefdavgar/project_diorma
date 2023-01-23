import { useState } from "react";
import "./css/QuantityButton.css";
const QuantityButton = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  product,
}) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const onIncrement = (product) => {
    let quantityAdd = 1;
    if (allProducts.find((dato) => dato.id === product.id)) {
      const products = allProducts.map((dato) =>
      dato.id === product.id
          ? { ...dato, quantity: dato.quantity + quantityAdd }
          : dato
      );
      setTotal(total + product.price * quantityAdd);
      setCountProducts(countProducts + quantityAdd);
      setQuantity(quantity + 1);
      return setAllProducts([...products]);
    }
  };
  const onDecrement = (product) => {
    let quantitySub = 1;
    if (allProducts.find((dato) => dato.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - quantitySub }
          : item
      );
      setTotal(total - product.price * quantitySub);
      setCountProducts(countProducts - quantitySub);
      setQuantity(quantity - 1);
      return setAllProducts([...products]);
    }
  };

  return (
    <div className="container-content">
      <button className="quantity" onClick={() => onDecrement(product)} disabled={product.quantity === 1 ? "enabled" : ''}
>
        -
      </button>
      <span className="quantity">{quantity}</span>
      <button className="quantity" onClick={() => onIncrement(product)}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
