import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsDataForm from "./components/ProductsDataForm";
import NavBar from "./components/NavBar";
import CamelToKebab from "./components/CamelToKebab";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<CamelToKebab />} />
          <Route path="/products" element={<ProductsDataForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

