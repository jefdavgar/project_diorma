import React from "react";
import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import top_dorado from "../../../assets/img/products/tops/dorado.jpg";
import top_plateado from "../../../assets/img/products/tops/plateado.jpg";
import top_blanco from "../../../assets/img/products/tops/blanco.jpg";
import top_rosado from "../../../assets/img/products/tops/rosado.jpg";
import banner_top from "../../../assets/img/banner/bannertops.jpg"
import Button from "../../atom/Button/Button";
const ProductCardTop = () => {
  return (
    <Container>
      <Image src={banner_top} alt="top-destacado" className="bags"></Image>
      <div className="product-cards-container">
        <div className="row productCard">
          <Container className=" col col-12">
            <div className="row">
              <Container className="d-flex align-items-center col col-5">
                <Image
                  src={top_dorado}
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
                  src={top_plateado}
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
                  src={top_blanco}
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
                  src={top_rosado}
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
      </div>
    </Container>

  )
}

export default ProductCardTop