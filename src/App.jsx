import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PlaceOrder from './pages/PlaceOrder';
import Order from './pages/Order';
import Login from './pages/Login';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
    <Router> {/* Only use BrowserRouter once */}
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
};

export default App;
