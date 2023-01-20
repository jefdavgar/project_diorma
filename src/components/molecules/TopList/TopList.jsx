import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "../../atom/Button/Button";
import top_dorado from "../../../assets/img/products/tops/dorado.jpg";
import top_plateado from "../../../assets/img/products/tops/plateado.jpg";
import top_blanco from "../../../assets/img/products/tops/blanco.jpg";
import top_rosado from "../../../assets/img/products/tops/rosado.jpg";
import "bootstrap/dist/css/bootstrap.min.css";


const TopList = () => {
  const [products] = useState([
    { id: 1, nameProduct: "Product 1", imgProduct: top_dorado, price: "$10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 2, nameProduct: "Product 2", imgProduct: top_plateado, price: "$20", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 3, nameProduct: "Product 3", imgProduct: top_rosado, price: "$30", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { id: 4, nameProduct: "Product 4", imgProduct: top_blanco, price: "$40", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."  },
  ]);

  return (
    <>
      <div>
        {products.map((product) => (
          <CardTop key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

const CardTop = ({ product }) => {
  return (
        <div className="row productCard">
          <Container className=" col col-12">
            <div className="row">
              <Container className="d-flex align-items-center col col-5">
                <Image
                  src={product.imgProduct}
                  alt={product.nameProduct}
                  className="imgProduct"
                ></Image>
              </Container>
              <Container className="d-flex align-items-center col col-7">
                <div className="row">
                  <h6 className="subtitle col col-12">{product.nameProduct}</h6>
                  <p className="paragraph customParagraph">{product.description}</p>
                  <h6 className="subtitle col col-7">{product.price}</h6>
                  <Container className="d-flex align-items-end col col-4">
                    <NavLink to={`/topdetail/${product.id}`}>
                      <Button text="VER">
                      </Button>
                    </NavLink>
                  </Container>
                </div>
              </Container>
            </div>
          </Container>
        </div>
  );
};

export default TopList;
