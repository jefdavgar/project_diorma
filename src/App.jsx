import './App.css'
import Button from "./components/atom/Button/Button"
import Link from "./components/atom/Link/Link"
import ButtonProduct from './components/atom/ButtonProduct/ButtonProduct'
import ButtonCategory from './components/atom/ButtonCategory/ButtonCategory'
function App() {
  return (
    <div>
        <Button text="Presioname" />
        <Link text="Hola soy un link"></Link>
        <ButtonProduct text="ver"></ButtonProduct>
        <ButtonCategory text="Hola"></ButtonCategory>
    </div>
  )
}

export default App
