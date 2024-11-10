import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Services from './pages/Services';
// import About from './pages/About';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import { motion, AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-quote" element={<GetQuote />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}
export default App;