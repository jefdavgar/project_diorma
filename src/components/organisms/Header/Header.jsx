import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Link from '../../atom/Link/Link';
import logo from "../../../assets/img/logo/Logo_responsive.png"
const Header = () => {
  return (
    <Navbar className='Navbar' expand="lg" fixed="top">
      <Container>
        <NavLink to="/home"><img src={logo} alt="logo" /></NavLink>
        <Navbar.Toggle className='custom-button' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavLink to="/home"><Link text="DESCUBRE"></Link></NavLink>
            <br />
            <NavLink to="/home"><Link text="HISTORIA"></Link></NavLink>
            <br />
            <NavLink to="/home"><Link text="PRODUCTOS"></Link></NavLink>
            <br />
            <NavLink to="/home"><Link text="COLECCIÓN"></Link></NavLink>
            <br />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header