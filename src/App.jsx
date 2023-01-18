import "./App.css";
import Home from "./components/pages/Home/Home";
import Header from "./components/organisms/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./components/pages/Products/Products"
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

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
