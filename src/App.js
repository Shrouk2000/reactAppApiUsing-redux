import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; 
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductItem from './components/ProductItem/ProductItem';
import ProductList from './components/Products/Products';
import CartPage from './components/cartPage/cartPage'; 
import NotfoundPage from './pages/NotfoundPage';
import ThemeContext from './context/ThemeContext';
import LanguageContext from './context/LanguageContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductItem />} />
              <Route path="/cart" element={<CartPage />} /> 
              <Route path="*" element={<NotfoundPage />} /> 
            </Routes>
          </BrowserRouter>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </Provider>
  );
};

export default App;
