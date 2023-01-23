import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "../../atom/Button/Button";
import perlas_azules from "../../../assets/img/products/bags/perlas_azules.jpg";
import perlas_doradas from "../../../assets/img/products/bags/perlas_doradas.jpg";
import perlas_moradas from "../../../assets/img/products/bags/perlas_moradas.jpg";
import perlas_verdes from "../../../assets/img/products/bags/perlas_verdes.jpg";
import perlas_blancas from "../../../assets/img/products/bags/perlas_blancas.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const BagList = () => {
  const [products] = useState([
    {
      id: 1,
      nameProduct: "Product 1",
      color: "Azul",
      imgProduct: perlas_azules,
      price: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      nameProduct: "Product 2",
      color: "Verde",
      imgProduct: perlas_verdes,
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      nameProduct: "Product 3",
      color: "Morado",
      imgProduct: perlas_moradas,
      price: 30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      nameProduct: "Product 4",
      color: "Blanco",
      imgProduct: perlas_blancas,
      price: 40,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      nameProduct: "Product 5",
      color: "Dorado",
      imgProduct: perlas_doradas,
      price: 50,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
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
                <NavLink to={`/product/bagdetail/${product.id}`}>
                  <Button text="VER"></Button>
                </NavLink>
              </Container>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default BagList;
