import React from 'react'
import "./css/NavLink.css"
import { BrowserRouter as Link } from 'react-router-dom'
const NavLink = ({text}) => {
  return (
    <Link to={`/${text.toLowerCase()}`}>{text}</Link>
  )
}
export default NavLink
  