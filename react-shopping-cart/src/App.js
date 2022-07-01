import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/MainLayout/Header/Header';
import Footer from './components/MainLayout/Footer/Footer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Product from './components/ProductDetail/ProductDetail';
import './index.css';

function App() {
  
  return (
     <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/carts" element={<ShoppingCart/>}/>
            <Route exact path='/product/:id' element={<Product/>}/>
          </Routes>
          <Footer />
        </div>
     </Router>
  );
}

export default App;
