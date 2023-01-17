import { useState } from 'react';
import "./css/QuantityButton.css"
const QuantityButton = () => {
    const [quantity, setQuantity] = useState(1);
    if (quantity < 0) {
        setQuantity(quantity + 1);
    }
    return (
      <div className='container-content'>
        <button className='quantity' onClick={() => setQuantity(quantity - 1)}>-</button>
        <span>{quantity}</span>
        <button className='quantity' onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    );
};

export default QuantityButton;
