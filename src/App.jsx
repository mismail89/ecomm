import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Switch } from '@headlessui/react';
import Home from './pages/home'
import Footer from './pages/footer';
import Header from './pages/header';
import About from './pages/about'
import Signcard from './pages/signcard';
import Carts from './pages/carts'
import Samsung from './pages/samsung';
import Lg from './pages/lg'
import Signup from './pages/signup';
import Shop from './pages/shop';
import Details from './pages/pro'
import Contact from './pages/contact';
export default function App() {
  return (
    <Router>
    
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/carts" element={<Carts />} />
    <Route path="/samsung" element={<Samsung />} />
    <Route path="/lgtvs" element={<Lg />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/details/:id" element={<Details />} />

    </Routes>
    <Signcard />
    <Footer />
    
    </Router>

  )
}
