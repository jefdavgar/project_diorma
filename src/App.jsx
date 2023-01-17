import './App.css'
import Button from "./components/atom/Button/Button"
import Menu from './components/molecules/Menu/Menu'
import Link from './components/atom/Link/Link'
import ButtonProduct from './components/atom/ButtonProduct/ButtonProduct'
import ButtonCategory from './components/atom/ButtonCategory/ButtonCategory'
import QuantityButton from './components/atom/QuantityButton/QuantityButton'
function App() {
  return (
    <div>
        <Button text="Presioname" />
        <Link text="Home"></Link>
        <Menu></Menu>
        <ButtonProduct text="ver"></ButtonProduct>
        <ButtonCategory text="Hola"></ButtonCategory>
        <QuantityButton></QuantityButton>
    </div>
  )
}

export default App
