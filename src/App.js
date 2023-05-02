import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import Footer from './components/Footer';
import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from "./pages/Products";
import Product from "./pages/Product";
import Allproducts from "./pages/Allproducts";
import Manage from "./pages/Manage";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import GridCard from "./components/GridCard";


document.body.style.backgroundColor = "#f5f5f5";
// Backendin osoite! Päivitä jos muuttuu!
const URL = 'http://localhost:3001/';

function App(){
  const [cart, setCart] = useState([]);
 

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, [])

  function addToCart(product) {
    
    if (cart.some(item => item.tuotteen_id === product.tuotteen_id)) {
      const existingProduct = cart.filter(item => item.tuotteen_id === product.tuotteen_id);
      updateAmount(parseInt(existingProduct[0].amount) + 1, product);

    }
    else {
      product['amount'] = 1
      const newCart = [...cart, product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.tuotteen_id !== product.tuotteen_id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.tuotteen_id === product.tuotteen_id));
    const modifiedCart = Object.assign([...cart], { [index]: product });
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }
  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  
  return (
    <>
      <Navbar url={URL} cart={cart} />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Products/:tuoteryhma_id" element={<Products url={URL} addToCart={addToCart} />} />
          <Route path="/search/:searchPhrase" element={<Products url={URL} addToCart={addToCart}/>} />
          <Route path="/Product/:tuotteen_id" element={<Product url={URL} addToCart={addToCart}/>} />
          <Route path="/allproducts/" element={<Allproducts url={URL} addToCart={addToCart}/>} />
          <Route path="/Order" element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount}empty={emptyCart} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Product" element={<Order cart={cart} />} />
          <Route path="/Manage" element={<Manage/>} />
          <Route path="/GridCard" element={<GridCard/>}/>
        </Routes>
      </div>
      <Footer />
    </>


  );
}

export default App;
