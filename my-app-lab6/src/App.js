import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import CategoriesPage from './components/CategoriesPage';
import ProductsPage from './components/ProductPage';
import ProductPage from './components/ProductsPage';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:category/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;