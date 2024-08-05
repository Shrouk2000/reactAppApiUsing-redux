// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux'; 
// import store from './store/store'; 
// import Navbar from './components/Navbar/Navbar';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductItem from './components/ProductItem/ProductItem';
// import ProductList from './components/Products/Products';

// const App = () => {
//   return (
//     <Provider store={store}> 
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/products" element={<ProductList />} />
//           <Route path="/product/:id" element={<ProductItem />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
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
// import CartPage from './components/cartPage/cartPage'; 
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductItem />} />
          {/* <Route path="/cart" element={<CartPage />} />  */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
