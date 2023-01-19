import React from 'react'
import Footer from '../../organisms/Footer/Footer'
import Header from '../../organisms/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image } from 'react-bootstrap';
import ButtonCategory from '../../atom/ButtonCategory/ButtonCategory';
import "./css/Products.css"
import ProductCard from '../../organisms/ProductCard/ProductCard';
const Products = () => {
  return (
    <>
        <Header></Header>
        <Container>
           <ButtonCategory text="Todo"></ButtonCategory>
           <ButtonCategory text="Bolsos"></ButtonCategory>
           <ButtonCategory text="Tops"></ButtonCategory>
        </Container>
        <ProductCard></ProductCard>
        <Footer></Footer>
    </>
  )
}

export default Products