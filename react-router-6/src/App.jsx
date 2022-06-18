import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Products from "./pages/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
