import React from 'react'
import instagram from "../../../assets/img/icons/INSTAGRAM.png"
import whatsapp from "../../../assets/img/icons/WHATSAPP.png"
import up from "../../../assets/img/icons/up.png"
import logo from "../../../assets/img/logo/Logo_responsive.png"
import "./css/Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className='container-fluid footer'>
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
        <a href='#'>
            <img src={up} alt=""/>
        </a>
    </div>
  )
}

export default Footer