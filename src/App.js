import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import Footer from './components/Footer';
import React from "react";
import {useState,useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Products from "./pages/Products";
import Product from "./pages/Product";
import Allproducts from "./pages/Allproducts";
import Order from "./pages/Order";
import About from "./pages/About";
import NotFound from "./pages/NotFound";



document.body.style.backgroundColor = "#1e2034";
const URL ='http://localhost:3001/';

function App(){
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
   }, [])

   function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id ===product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1,product);
    } else {
      product['amount'] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(newCart));
    }
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }

  function updateAmount(amount,product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart],{[index]: product});
    setCart(modifiedCart);
    localStorage.setItem('cart',JSON.stringify(modifiedCart));
  }

  return (
    <>
        <Navbar url={URL} cart={cart}/>
        <div className='container'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products/:tuoteryhma_id" element={<Products url={URL} addToCart={addToCart} />} />
                <Route path="/product/:tuotteen_id" element={<Product url={URL} />} />
                <Route path="/allproducts/" element={<Allproducts url={URL} />} />
                <Route path="/order" element={<Order cart={cart} removeFromCart={removeFromCart} updateAmount={updateAmount}/>} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>

<Footer/>
    </>

  
  );
}

export default App;
