import "./App.css";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/pages/Products/Products";
import Cart from "./components/pages/Cart/Cart";
import CategoryAll from "./components/organisms/CategoryAll/CategoryAll";
import CategoryBag from "./components/organisms/CategoryBag/CategoryBag";
import CategoryTop from "./components/organisms/CategoryTop/CategoryTop";
import TopDetail from "./components/pages/ProductDetail/TopDetail/TopDetail";
import BagDetail from "./components/pages/ProductDetail/BagDetail/BagDetail";
import React, { useState } from "react";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/product/topdetail/:id"
            element={
              <TopDetail
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          />
          <Route path="/product/bagdetail/:id" element={<BagDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/cart"
            element={
              <Cart
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
              />
            }
          />
          <Route path="/product/top" element={<CategoryTop />} />
          <Route path="/product/bag" element={<CategoryBag />} />
          <Route path="/product" element={<CategoryAll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
