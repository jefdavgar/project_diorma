import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from '../../atom/Link/Link';
import "./css/Menu.css"
import logo from "../../../assets/img/logo/Logo_responsive.png"

function Menu() {
  return (
    <Navbar className='Navbar' expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle className='custom-button' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#home"><Link className="change-color" text="DESCUBRE"></Link></Nav.Link>
            <Nav.Link href="#home"><Link text="HISTORIA"></Link></Nav.Link>
            <Nav.Link href="#home"><Link text="PRODUCTOS"></Link></Nav.Link>
            <Nav.Link href="#home"><Link text="COLECCIÓN"></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;