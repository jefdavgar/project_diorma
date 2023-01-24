import React, { useState } from "react";
import { Container, Image, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "../../atom/Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import QuantityButton from "../../atom/QuantityButton/QuantityButton";
import "./css/Cart.css";
import Header from "../../organisms/Header/Header";
import imglogo from "../../../assets/img/icons/store.png";
import Footer from "../../organisms/Footer/Footer";
import "./css/Cart.css";

const Cart = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };


  //whatsapp order message const message "Pole, soy Sidata[ pataria salicitar la siguiente orden a domicilio.

  const handleShow = () => {
    const data = [{
      "totalPrice": total,
      "products": allProducts
    }];

    const message = `Hola soy un cliente de diorma Bags, me gustaria solicitar la siguiente orden.
    *----------------------------------*
    *Datos del envio*:
    *--------------------------------------------*
  
    *Productos*:
    *--------------------------------------------*
    ${data[0].products.map(
      (item) =>
        `
    *Producto:* ${item.nameProduct}
    *Especificaciones:* ${item.description}
    *Valor unitario:* ${item.price}
    *Cantidad de productos:* ${item.quantity}
    `
    )}
    *--------------------------------------------*
    *VALOR TOTAL DE LA ORDEN:* $ ${data[0].totalPrice}`;
      const url = `https://api.whatsapp.com/send?phone=573223388603&text=${encodeURIComponent(message)}`;    
       window.open(url, '_blank');
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div>
      <Header
        title="Compra"
        imgNav={imglogo}
        NavDirection="/"
        Navlink="/product"
      ></Header>
      <>
      <Modal
        id="Modal"
      >
        <Modal.Body id="modal-body">
         <img src={imglogo} id="Modal-image"/>
         <NavLink to={"/"} onClick={() => clearStorage()}><Button variant="primary" id="modal-button">Regresar al inicio</Button></NavLink>
        </Modal.Body>
      </Modal>
        <div>
          <div>
            {allProducts.length ? (
              <>
                {allProducts.length ? (
                  <Container>
                    <div className="row-product">
                      {allProducts.map((product) => (
                        <div className="row productCard" key={product.id}>
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
                                  <h4 className="subtitle col col-12">
                                    {product.nameProduct}
                                  </h4>
                                  <h4 className="subtitle col col-12">
                                    ${product.price}
                                  </h4>
                                  <QuantityButton
                                    allProducts={allProducts}
                                    setAllProducts={setAllProducts}
                                    total={total}
                                    setTotal={setTotal}
                                    countProducts={countProducts}
                                    setCountProducts={setCountProducts}
                                    product={product}
                                    onQuantityChange={(quantity) =>
                                      onDeleteProduct(product, quantity)
                                    }
                                  />

                                  <div
                                    className="icon_delete"
                                    onClick={() => onDeleteProduct(product)}
                                  >
                                    <Button
                                      text="ELIMINAR"
                                      className="icon_delete"
                                    ></Button>
                                  </div>
                                  <Container className="d-flex align-items-end col col-4">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="currentColor"
                                      className="icon-close"
                                      onClick={() => onDeleteProduct(product)}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                      />
                                    </svg>
                                  </Container>
                                </div>
                              </Container>
                            </div>
                          </Container>
                        </div>
                      ))}
                    </div>

                    <div className="informationCart">
                      <div className="row">
                        <h3 className="col col-6">Total:</h3>
                        <h3 className="col col-6">${total}</h3>
                      </div>
                      <NavLink onClick={onCleanCart}>
                        <Button
                          text="VACIAR"
                          className="btn-clear-all"
                        ></Button>
                      </NavLink>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center button-final" onClick={handleShow}>
                    <Button text=" Enviar" variant="primary" id="send-order" onClick={handleShow}>
             
          </Button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                  </Container>
                ) : (
                  <p className="cart-empty">El carrito está vacío</p>
                )}
              </>
            ) : (
              <p className="cart-empty">El carrito está vacío</p>
            )}
          </div>
        </div>
      </>
      <div className="container-fluid footer-cart">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Cart;
