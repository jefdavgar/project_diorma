import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Link from '../../atom/Link/Link';
import logo from "../../../assets/img/logo/Logo_responsive.png"
import "./css/Header.css"
import img_arrow from "../../../assets/img/icons/back arrow.png"
import imgcart from "../../../assets/img/icons/shopping_cart.png"

const Header = () => {
  return (
    <Navbar className='custom-Navbar' expand="lg">
      <Container>
        <NavLink to="/home" className="img_arrow"><img src={img_arrow} alt="logo" /></NavLink>
        <NavLink to="/home" className="logo"><img src={logo} alt="logo" /></NavLink>
        <Nav className="me-auto name_section">
            <h1>Colección</h1>
        </Nav>
        <Nav className="me-rigth">
           <NavLink to="/cart" className="img_arrow">
             <img src={imgcart} alt="shopping_cart" />
           </NavLink>
        </Nav>
        <Navbar.Toggle className='custom-button custom_two' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavLink to="/home" className="Nav-Link"><Link text="DESCUBRE"></Link></NavLink>
            <NavLink to="/home" className="Nav-Link"><Link text="HISTORIA"></Link></NavLink>
            <NavLink to="/home" className="Nav-Link"><Link text="PRODUCTOS"></Link></NavLink>
            <NavLink to="/home" className="Nav-Link"><Link text="COLECCIÓN"></Link></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header