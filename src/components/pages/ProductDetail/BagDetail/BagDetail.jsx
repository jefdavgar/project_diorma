import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../organisms/Header/Header";
import perlas_azules from "../../../../assets/img/products/bags/perlas_azules.jpg";
import perlas_doradas from "../../../../assets/img/products/bags/perlas_doradas.jpg";
import perlas_moradas from "../../../../assets/img/products/bags/perlas_moradas.jpg";
import perlas_verdes from "../../../../assets/img/products/bags/perlas_verdes.jpg";
import perlas_blancas from "../../../../assets/img/products/bags/perlas_blancas.jpg";
import product_menu from "../../../../assets/img/icons/store.png";
import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Button from "../../../atom/Button/Button";
import "./css/BagDetail.css";
import Footer from "../../../organisms/Footer/Footer";
import { NavLink } from "react-router-dom";

const BagDetail = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const [products] = useState([
    {
      id: 1,
      nameProduct: "Product 1",
      color: "Azul",
      imgProduct: perlas_azules,
      price: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
    {
      id: 2,
      nameProduct: "Product 2",
      color: "Verde",
      imgProduct: perlas_verdes,
      price: 20,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
    {
      id: 3,
      nameProduct: "Product 3",
      color: "Morado",
      imgProduct: perlas_moradas,
      price: 30,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
    {
      id: 4,
      nameProduct: "Product 4",
      color: "Blanco",
      imgProduct: perlas_blancas,
      price: 40,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
    {
      id: 5,
      nameProduct: "Product 5",
      color: "Dorado",
      imgProduct: perlas_doradas,
      price: 50,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      quantity: 1,
    },
  ]);

  let { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  const [selectedOption, setSelectedOption] = useState("Ninguna");
  const [selectedColor, setSelectedColor] = useState("Ninguna");
  const [miVariable, setMiVariable] = useState(false);
  const [buttonDrop, setButtonDrop] = useState(true);

  const handleClick = (event) => {
    event.preventDefault();
    if (selectedOption === "Ninguna") {
      alert("Seleccione el tama??o");
      setMiVariable(false);
    } else if (selectedColor === "Ninguna") {
      alert("Seleccione el color");
      setMiVariable(false);
    } else {
      const confirmResult = window.confirm(
        `Desea comprar ${product.nameProduct} con tama??o ${selectedOption} y color ${selectedColor}? `
      );
      if (confirmResult) {
        setButtonDrop(false);
        setMiVariable(true);
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
          <div className="content_store">
            <div className="d-flex flex-column align-items-center">
              {buttonDrop && (
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Tama??o"
                  onSelect={(eventKey) => setSelectedOption(eventKey)}
                >
                  <Dropdown.Item eventKey="Peque??o" className="dropbutton">
                    Peque??o
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Mediano" className="dropbutton">
                    Mediano
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Grande" className="dropbutton">
                    Grande
                  </Dropdown.Item>
                </DropdownButton>
              )}
              {selectedOption && <h5>Opci??n seleccionada: {selectedOption}</h5>}
            </div>
            <div className="d-flex flex-column align-items-center">
              {buttonDrop && (
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Tama??o"
                  onSelect={(eventKey) => setSelectedColor(eventKey)}
                >
                  <Dropdown.Item eventKey="Blanco">Blanco</Dropdown.Item>
                  <Dropdown.Item eventKey="Morado">Morado</Dropdown.Item>
                  <Dropdown.Item eventKey="Azul">Azul</Dropdown.Item>
                  <Dropdown.Item eventKey="Dorado">Dorado</Dropdown.Item>
                  <Dropdown.Item eventKey="Verde">Verde</Dropdown.Item>
                </DropdownButton>
              )}
              {selectedColor && <h5>Color seleccionado: {selectedColor}</h5>}
            </div>
          </div>
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
export default BagDetail;
