import React, { useState } from "react";
import { Container, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Button from "../../atom/Button/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import QuantityButton from "../../atom/QuantityButton/QuantityButton";
import "./css/Cart.css";
import Header from "../../organisms/Header/Header";
import imglogo from "../../../assets/img/icons/store.png";
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
                                  <h5 className="subtitle col col-12">
                                    {product.nameProduct}
                                  </h5>
                                  <h5 className="subtitle col col-12">
                                    ${product.price}
                                  </h5>
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

                                  <div className="icon_delete">
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

                    <div className="d-flex">
                      <div className="cart-total">
                        <h3>Total:</h3>
                        <span className="total-pagar">${total}</span>
                      </div>

                      <button className="btn-clear-all" onClick={onCleanCart}>
                        Vaciar Carrito
                      </button>
                    </div>
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
    </div>
  );
};

export default Cart;
