import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ButtonProduct.css"
const ButtonProduct = ({text}) => {
  return (
    <button className="btn btn-primary product">{text}</button>
  )
}

export default ButtonProduct