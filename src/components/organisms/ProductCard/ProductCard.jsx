import React from "react";
import bannerbag from "../../../assets/img/banner/bannerbags.jpg";
import "./css/ProductCard.css";
import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import perlas_azules from "../../../assets/img/products/bags/perlas_azules.jpg";
import perlas_doradas from "../../../assets/img/products/bags/perlas_doradas.jpg";
import perlas_moradas from "../../../assets/img/products/bags/perlas_moradas.jpg";
import perlas_verdes from "../../../assets/img/products/bags/perlas_verdes.jpg";
import perlas_blancas from "../../../assets/img/products/bags/perlas_blancas.jpg";


import Button from "../../atom/Button/Button";

const ProductCard = () => {
  return (
    <Container>
      <Image src={bannerbag} alt="top-destacado" className="bags"></Image>
      <div className="row productCard">
        <Container className=" col col-12">
          <div className="row">
            <Container className="d-flex align-items-center col col-5">
              <Image
                src={perlas_moradas}
                alt="top-destacado"
                className="imgProduct"
              ></Image>
            </Container>
            <Container className="d-flex align-items-center col col-7">
              <div className="row">
                <h6 className="subtitle col col-12">Nombre del Producto</h6>
                <p className="paragraph customParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                <h6 className="subtitle col col-8">Valor del producto</h6>
                <Container className="d-flex align-items-end col col-4">
                  <NavLink to="/productdetail">
                    <Button text="VER"></Button>
                  </NavLink>
                </Container>
              </div>
            </Container>
          </div>
        </Container>
      </div>
      <div className="row productCard">
        <Container className=" col col-12">
          <div className="row">
            <Container className="d-flex align-items-center col col-5">
              <Image
                src={perlas_azules}
                alt="top-destacado"
                className="imgProduct"
              ></Image>
            </Container>
            <Container className="d-flex align-items-center col col-7">
              <div className="row">
                <h6 className="subtitle col col-12">Nombre del Producto</h6>
                <p className="paragraph customParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                <h6 className="subtitle col col-8">Valor del producto</h6>
                <Container className="d-flex align-items-end col col-4">
                  <NavLink to="/productdetail">
                    <Button text="VER"></Button>
                  </NavLink>
                </Container>
              </div>
            </Container>
          </div>
        </Container>
      </div>
      <div className="row productCard">
        <Container className=" col col-12">
          <div className="row">
            <Container className="d-flex align-items-center col col-5">
              <Image
                src={perlas_verdes}
                alt="top-destacado"
                className="imgProduct"
              ></Image>
            </Container>
            <Container className="d-flex align-items-center col col-7">
              <div className="row">
                <h6 className="subtitle col col-12">Nombre del Producto</h6>
                <p className="paragraph customParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                <h6 className="subtitle col col-8">Valor del producto</h6>
                <Container className="d-flex align-items-end col col-4">
                  <NavLink to="/productdetail">
                    <Button text="VER"></Button>
                  </NavLink>
                </Container>
              </div>
            </Container>
          </div>
        </Container>
      </div>
      <div className="row productCard">
        <Container className=" col col-12">
          <div className="row">
            <Container className="d-flex align-items-center col col-5">
              <Image
                src={perlas_blancas}
                alt="top-destacado"
                className="imgProduct"
              ></Image>
            </Container>
            <Container className="d-flex align-items-center col col-7">
              <div className="row">
                <h6 className="subtitle col col-12">Nombre del Producto</h6>
                <p className="paragraph customParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                <h6 className="subtitle col col-8">Valor del producto</h6>
                <Container className="d-flex align-items-end col col-4">
                  <NavLink to="/productdetail">
                    <Button text="VER"></Button>
                  </NavLink>
                </Container>
              </div>
            </Container>
          </div>
        </Container>
      </div>
      <div className="row productCard">
        <Container className=" col col-12">
          <div className="row">
            <Container className="d-flex align-items-center col col-5">
              <Image
                src={perlas_doradas}
                alt="top-destacado"
                className="imgProduct"
              ></Image>
            </Container>
            <Container className="d-flex align-items-center col col-7">
              <div className="row">
                <h6 className="subtitle col col-12">Nombre del Producto</h6>
                <p className="paragraph customParagraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                <h6 className="subtitle col col-8">Valor del producto</h6>
                <Container className="d-flex align-items-end col col-4">
                  <NavLink to="/productdetail">
                    <Button text="VER"></Button>
                  </NavLink>
                </Container>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default ProductCard;
