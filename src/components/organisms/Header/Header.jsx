import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Link from '../../atom/Link/Link';
import logo from "../../../assets/img/logo/Logo_responsive.png"
import "./css/Header.css"
import img_arrow from "../../../assets/img/icons/back arrow.png"
const Header = () => {
  return (
    <Navbar className='custom-Navbar' expand="lg" fixed="top">
      <Container>
        <NavLink to="/home" className="img_arrow"><img src={img_arrow} alt="logo" /></NavLink>
        <NavLink to="/home" className="logo"><img src={logo} alt="logo" /></NavLink>
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