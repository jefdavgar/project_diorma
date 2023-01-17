import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import perlas_azules from "../../../assets/img/products/bags/perlas_azules.jpg"
import perlas_doradas from "../../../assets/img/products/bags/perlas_doradas.jpg"
import perlas_moradas from "../../../assets/img/products/bags/perlas_moradas.jpg"
import "./css/CarouselProduct.css"
const CarouselProduct = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
      <div className='container_img'>
            <img
            className="d-block w-80 custom_img"
            src={perlas_doradas}
            alt="Third slide"
            />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container_img'>
            <img
            className="d-block w-80 custom_img"
            src={perlas_moradas}
            alt="Third slide"
            />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='container_img'>
            <img
            className="d-block w-80 custom_img"
            src={perlas_azules}
            alt="Third slide"
            />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselProduct