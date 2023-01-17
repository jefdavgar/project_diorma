import React from 'react'
import instagram from "../../../assets/img/icons/INSTAGRAM.png"
import whatsapp from "../../../assets/img/icons/WHATSAPP.png"
import up from "../../../assets/img/icons/up.png"
import logo from "../../../assets/img/logo/Logo_responsive.png"
import Container from 'react-bootstrap/Container';
import "./css/Footer.css"

const Footer = () => {
  return (
    <Container className='footer'>
        <div className='social'>
            <a href='#Instagram'>
                <img src={instagram} alt=""/>
            </a>
            <a href='#Whatsapp'>
                <img src={whatsapp} alt=""/>
            </a>
        </div>
        <a href='#home'>
            <img src={logo} alt="" />
        </a>
        <a href='#home'>
            <img src={up} alt=""/>
        </a>
    </Container>
  )
}

export default Footer