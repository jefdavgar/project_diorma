import './App.css'
import Button from "./components/atom/Button/Button"
import Link from './components/atom/Link/Link'
import ButtonProduct from './components/atom/ButtonProduct/ButtonProduct'
import ButtonCategory from './components/atom/ButtonCategory/ButtonCategory'
import QuantityButton from './components/atom/QuantityButton/QuantityButton'
import CarouselProduct from './components/molecules/CarouselProduct/CarouselProduct'
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
function App() {
  return (
    <div>
        <Header></Header>
        <Button text="Presioname" />
        <Link text="Home"></Link>
        <ButtonProduct text="ver"></ButtonProduct>
        <ButtonCategory text="Hola"></ButtonCategory>
        <QuantityButton></QuantityButton>
        <CarouselProduct></CarouselProduct>
        <Footer></Footer>
    </div>
  )
}

export default App
