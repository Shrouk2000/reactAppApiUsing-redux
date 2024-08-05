
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from './components/ProductItem/ProductItem';
import ProductList from './components/Products/Products';
;

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/product/:id" element={<ProductItem />} /> */}
          <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductItem />} />
        </Routes>
    </BrowserRouter>
    
  );
};

export default App;
