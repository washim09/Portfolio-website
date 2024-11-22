import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import noiseBg from './assets/noise_black.png';

const App: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.noise-wrapper')?.classList.add('opacity-100');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="flex relative min-h-screen bg-gray-900 w-full max-w-full overflow-x-hidden">
        <div className="noise-wrapper absolute inset-0 opacity-0 overflow-hidden transition-opacity duration-500 z-10">
        <div 
            className="noise absolute inset-[-500px] bg-repeat opacity-35 animate-noise" 
            style={{ backgroundImage: `url(${noiseBg})` }}
          ></div>
        </div>
        <div className="flex-grow z-20 relative">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>
          <Footer />
          <BackToTopButton />
        </div>
      </div>
    </Router>
  );
};

export default App;




