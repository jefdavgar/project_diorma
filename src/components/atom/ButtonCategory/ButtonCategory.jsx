import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/ButtonCategory.css"
const ButtonCategory = ({text}) => {
  return (
    <button className='btn btn-dark'>{text}</button>
  )
}

export default ButtonCategory