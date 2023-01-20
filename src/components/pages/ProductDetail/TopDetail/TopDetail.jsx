import React, { useState } from "react";
import { useParams } from "react-router-dom";
const TopDetail = () => {

    const [products] = useState([
      { id: 1, nameProduct: "Product 1", imgProduct:"../../../assets/img/products/tops/dorado.jpg", price: "$10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 2, nameProduct: "Product 2", imgProduct:"../../../assets/img/products/tops/plateado.jpg", price: "$20", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 3, nameProduct: "Product 3", imgProduct:"../../../assets/img/products/tops/blanco.jpg", price: "$30", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 4, nameProduct: "Product 4", imgProduct:"../../../assets/img/products/tops/rosado.jpg", price: "$40", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."  },
    ]);

  let { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <h1>{product.nameProduct}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default TopDetail;
