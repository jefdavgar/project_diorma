import React from "react";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
import ButtonCategory from "../../atom/ButtonCategory/ButtonCategory";
import { NavLink } from "react-router-dom";
import TopList from "../../molecules/TopList/TopList";
import bannerbag from "../../../assets/img/banner/bannerbags.jpg";
import bannertops from "../../../assets/img/banner/bannertops.jpg";
import BagList from "../../molecules/BagList/BagList";
import "./css/CategoryAll.css";
import imgcart from "../../../assets/img/icons/shopping_cart.png";

const CategoryAll = () => {
  return (
    <>
      <Header title="Colección" imgNav={imgcart} NavDirection="/cart" Navlink="/"></Header>
      <Container>
        <NavLink to="/product">
          <ButtonCategory text="Todo"></ButtonCategory>
        </NavLink>
        <NavLink to="/product/bag">
          <ButtonCategory text="Bolsos"></ButtonCategory>
        </NavLink>
        <NavLink to="/product/top">
          <ButtonCategory text="Tops"></ButtonCategory>
        </NavLink>
        <Image src={bannerbag} alt="top-destacado" className="bags"></Image>
        <BagList />
        <Image src={bannertops} alt="top-destacado" className="bags"></Image>
        <TopList />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default CategoryAll;
