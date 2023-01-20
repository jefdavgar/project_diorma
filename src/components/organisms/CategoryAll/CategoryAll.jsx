import React from 'react'
import Footer from '../../organisms/Footer/Footer'
import Header from "../../organisms/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image } from 'react-bootstrap';
import ButtonCategory from '../../atom/ButtonCategory/ButtonCategory';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import { NavLink } from 'react-router-dom';
import TopList from '../../molecules/TopList/TopList';
import bannerbag from "../../../assets/img/banner/bannerbags.jpg";
import bannertops from "../../../assets/img/banner/bannertops.jpg";
import BagList from '../../molecules/BagList/BagList';

const CategoryAll = () => {
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
        <Container>
          <Image src={bannerbag} alt="top-destacado" className="bags"></Image>
        </Container>
          <Container>
            <BagList/>
          </Container>
        <Container>
        <Image src={bannertops} alt="top-destacado" className="bags"></Image>
        </Container>
          <Container>
            <TopList/>
          </Container>
        <Footer></Footer>
    </>
  )
}

export default CategoryAll