import './App.css'
import Button from "./components/atom/Button/Button"
import Link from "./components/atom/Link/Link"
import ButtonProduct from './components/atom/ButtonProduct/ButtonProduct'
import ButtonCategory from './components/atom/ButtonCategory/ButtonCategory'
import QuantityButton from './components/atom/QuantityButton/QuantityButton'
function App() {
  return (
    <div>
        <Button text="Presioname" />
        <Link text="Hola soy un link"></Link>
        <ButtonProduct text="ver"></ButtonProduct>
        <ButtonCategory text="Hola"></ButtonCategory>
        <QuantityButton></QuantityButton>
    </div>
  )
}

export default App
