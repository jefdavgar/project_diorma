import "./App.css";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./components/pages/Products/Products"
import Cart from "./components/pages/Cart/Cart";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
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
          <Route path="/productdetail" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
