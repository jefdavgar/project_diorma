import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../organisms/Header/Header";
import top_dorado from "../../../../assets/img/products/tops/dorado.jpg";
import top_plateado from "../../../../assets/img/products/tops/plateado.jpg";
import top_blanco from "../../../../assets/img/products/tops/blanco.jpg";
import top_rosado from "../../../../assets/img/products/tops/rosado.jpg";
import product_menu from "../../../../assets/img/icons/store.png";
import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Button from "../../../atom/Button/Button";
import "./css/TopDetail.css";
import Footer from "../../../organisms/Footer/Footer";
import { NavLink } from "react-router-dom";
import Cart from "../../Cart/Cart";
const TopDetail = ({allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal}) => {
  const [products] = useState([
    {
      id: 6,
      nameProduct: "Product 6",
      color: "Dorado",
      imgProduct: top_dorado,
      price: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
    {
      id: 7,
      nameProduct: "Product 7",
      color: "Plateado",
      imgProduct: top_plateado,
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
    {
      id: 8,
      nameProduct: "Product 8",
      color: "Rosado",
      imgProduct: top_rosado,
      price: 30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
    {
      id: 9,
      nameProduct: "Product 9",
      color: "Blanco",
      imgProduct: top_blanco,
      price: 40,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
  ]);

  let { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [selectedOption, setSelectedOption] = useState("Ninguna");
  const [miVariable, setMiVariable] = useState(false);
  const [buttonDrop, setButtonDrop] = useState(true);
  const handleClick = (event) => {
    event.preventDefault();
    if (selectedOption === "Ninguna") {
      alert("Seleccione el tamaño");
      setMiVariable(false);
    } else {
      const confirmResult = window.confirm(
        `Desea comprar ${product.nameProduct} con tamaño ${selectedOption} y color ${product.color}? `
      );
      if (confirmResult) {
        setButtonDrop(false);
        setMiVariable(true);
        onAddProduct(product);
      }
    }
  };
  const onAddProduct = (product)=>{
    const isDuplicate = allProducts.find((p) => p.id === product.id);
    if (isDuplicate) {
        
        return;
    }
    if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}
    
    setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
  }
  console.log(allProducts);


  return (
    <>
      <Header
        title="Producto"
        imgNav={product_menu}
        NavDirection="/"
        Navlink="/product"
      ></Header>
      <Container>
        <Image
          src={product.imgProduct}
          alt={product.nameProduct}
          className="imgProduct"
        ></Image>
        <div className="d-flex flex-column">
          <div>
            <h3>{product.nameProduct}</h3>
          </div>
          <div>
            <h4>{product.price}</h4>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat incididunt ut labore.
            </p>
          </div>
          {buttonDrop && (
            <DropdownButton
              id="dropdown-basic-button"
              title="Tamaño"
              onSelect={(eventKey) => setSelectedOption(eventKey)}
            >
              <Dropdown.Item eventKey="Pequeño" className="dropbutton">
                Pequeño
              </Dropdown.Item>
              <Dropdown.Item eventKey="Mediano" className="dropbutton">
                Mediano
              </Dropdown.Item>
              <Dropdown.Item eventKey="Grande" className="dropbutton">
                Grande
              </Dropdown.Item>
            </DropdownButton>
          )}
          {selectedOption && <h5>Opción seleccionada: {selectedOption}</h5>}
        </div>
        <br />
        {miVariable ? (
          <div className="content_store">
            <h5>Click nuevamente en confirmar</h5>
            <NavLink onClick={()=>onAddProduct(product)} className="d-flex justify-content-center" to="/cart">
              <Button text="CONFIRMAR"></Button>
            </NavLink>
          </div>
        ) : (
          <NavLink
            onClick={handleClick}
            className="d-flex justify-content-center"
          >
            <Button text="CONFIRMAR"></Button>
          </NavLink>
        )}
        <br />
      </Container>
      <Footer></Footer>
    </>
  );
};

export default TopDetail;
