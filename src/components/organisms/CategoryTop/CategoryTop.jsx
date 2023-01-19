import React from 'react'
import Footer from '../../organisms/Footer/Footer'
import Header from "../../organisms/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ButtonCategory from '../../atom/ButtonCategory/ButtonCategory';
import ProductCardTop from '../../molecules/ProductCardTop/ProductCardTop';
import { NavLink } from 'react-router-dom';

const CategoryTop = () => {
  return (
    <>
        <Header></Header>
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
        <ProductCardTop></ProductCardTop>
        <Footer></Footer>
    </>
  )
}

export default CategoryTop