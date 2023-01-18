import "./App.css";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./components/pages/Products/Products"
import Cart from "./components/pages/Cart/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/descubre" element={<Home/>} />
          <Route path="/historia" element={<Home/>} />
          <Route path="/colección" element={<Home/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
