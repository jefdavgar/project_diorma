import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Link from '../../atom/Link/Link';
import "./css/Header.css"
import img_arrow from "../../../assets/img/icons/back arrow.png"
import logo from "../../../assets/img/logo/Logo_responsive.png";

const Header = ({title, imgNav, NavDirection, Navlink}) => {
  return (
    <Navbar className='custom-Navbar' expand="lg">
      <Container>
        <NavLink to={Navlink} className="img_arrow"><img src={img_arrow} alt="logo" /></NavLink>
        <NavLink to={Navlink} className="logo"><img src={logo} alt="logo" /></NavLink>
        <Nav className="me-auto name_section">
            <h1>{title}</h1>
        </Nav>
        <Nav className="me-rigth">
           <NavLink to={NavDirection} className="img_arrow">
             <img src={imgNav} alt="shopping_cart" />
           </NavLink>
        </Nav>
        <Navbar.Toggle className='custom-button custom_two' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavLink to="/" className="Nav-Link"><Link text="DESCUBRE"></Link></NavLink>
            <NavLink to="/" className="Nav-Link"><Link text="HISTORIA"></Link></NavLink>
            <NavLink to="/" className="Nav-Link"><Link text="PRODUCTOS"></Link></NavLink>
            <NavLink to="/" className="Nav-Link"><Link text="COLECCIÓN"></Link></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header