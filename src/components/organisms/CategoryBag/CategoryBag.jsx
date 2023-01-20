import React from 'react'
import Footer from '../../organisms/Footer/Footer'
import Header from "../../organisms/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image } from 'react-bootstrap';
import ButtonCategory from '../../atom/ButtonCategory/ButtonCategory';
import { NavLink } from 'react-router-dom';
import bannerbag from "../../../assets/img/banner/bannerbags.jpg";
import BagList from '../../molecules/BagList/BagList';
import imgcart from "../../../assets/img/icons/shopping_cart.png";

const CategoryBag = () => {
  return (
    <>
        <Header title="Colección" imgNav={imgcart} NavDirection="/cart"></Header>
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
        </Container>
        <Container>
          <Image src={bannerbag} alt="top-destacado" className="bags"></Image>
        </Container>
          <Container>
            <BagList/>
          </Container>
        <Footer></Footer>
    </>
  )
}

export default CategoryBag