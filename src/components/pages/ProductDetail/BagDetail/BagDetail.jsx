import React, { useState } from "react";
import { useParams } from "react-router-dom";
const BagDetail = () => {

    const [products] = useState([
        { id: 1, nameProduct: "Product 1", imgProduct: "perlas_azules", price: "$10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, nameProduct: "Product 2", imgProduct: "perlas_verdes", price: "$20", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 3, nameProduct: "Product 3", imgProduct: "perlas_moradas", price: "$30", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 4, nameProduct: "Product 4", imgProduct: "perlas_blancas", price: "$40", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."  },
        { id: 5, nameProduct: "Product 5", imgProduct: "perlas_doradas", price: "$50", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."  },
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

export default BagDetail;
