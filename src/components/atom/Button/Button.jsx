import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Button.css"
const Button = ({ text }) => {
  return (
    <button className="btn btn-primary">
      {text}
    </button>
  );
};

export default Button;
