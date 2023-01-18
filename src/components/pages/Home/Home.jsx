import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/Home.css"
import Footer from "../../organisms/Footer/Footer"
import imgDestacada from "../../../assets/img/products/tops/dorado.jpg"
import { Container, Image } from "react-bootstrap";
import CarouselProduct from "../../molecules/CarouselProduct/CarouselProduct"
import Button from "../../atom/Button/Button"
import { NavLink } from "react-router-dom"
import Menu from "../../molecules/Menu/Menu";
const Home = () => {
  return (
    <>
        <Container>
        <a name="home"/>
          <Menu></Menu>
          <Image src={imgDestacada} alt="top-destacado" className="top"></Image>
          <a name="historia"/>
          <Container className="d-flex flex-column align-items-center">
            <h2 className="title">Nuestra Historia</h2>
            <p className="paragraph">Diorma Bags fue fundado en plena pandemia por Zuley Girl, quien estaba motivada por la necesidad de ver a las mujeres con un estilo personal y único que las identificara. Con una gran pasión por la moda y la artesanía, decidió crear bolsos y tops únicos y elegantes que ayudaran a las mujeres a encontrar su estilo personal.</p>
          </Container>
          <a name="descubre"/>
          <Container className="d-flex flex-column align-items-center">
            <h2 className="title">Descubre Diorma Bags</h2>
            <p className="paragraph">Diorma Bags es un emprendimiento dedicado a proporcionar valor significativo a las mujeres a través de bolsos y tops artesanales personalizados. Utilizamos perlas y piedras acrílicas de alta calidad para crear productos únicos y elegantes que se adaptan a los gustos personales de cada mujer.</p>
          </Container>
          <a name="productos"/>
          <Container className="d-flex flex-column align-items-center">
            <h2 className="title">Productos Destacados</h2>
          </Container>
          <CarouselProduct></CarouselProduct>
          <a name="colección"/>
          <Container className="d-flex flex-column align-items-center">
            <NavLink to="/products">
              <Button text="VER COLECCIÓN"></Button>
            </NavLink>
          </Container>
          <Container className="d-flex flex-column align-items-center">
            <h1 className="title-important">Elige tu accesorio</h1>
            <h1 className="title-important-2">Diorma</h1>
            <h1 className="title-important">Eliges tu estilo</h1>
          </Container>
        </Container>
        
        <Footer></Footer>      
    </>
  )
}

export default Home