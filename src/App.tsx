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

const App: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.noise-wrapper')?.classList.add('opacity-100');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        @layer base {
          body {
            color: #fff;
          }
        }
        @layer utilities {
          .animate-noise {
            animation: noise 1s steps(8,end) infinite both;
          }
        }
        @keyframes noise {
          0% { transform: translate(0px, 0px); }
          10% { transform: translate(-100px, 100px); }
          20% { transform: translate(150px, -100px); }
          30% { transform: translate(-100px, 100px); }
          40% { transform: translate(100px, -150px); }
          50% { transform: translate(-100px, 200px); }
          60% { transform: translate(-200px, -100px); }
          70% { transform: translate(50px, 100px); }
          80% { transform: translate(100px, -150px); }
          90% { transform: translate(0px, 200px); }
          100% { transform: translate(-100px, 100px); }
        }
        @keyframes borderLoop {
          0%, 100% { 
            left: -6px; 
            top: 0; 
          }
          25% { 
            left: -6px; 
            top: calc(100% - 6px); 
          }
          50% { 
            left: calc(100% - 6px); 
            top: calc(100% - 6px); 
          }
          75% { 
            left: -6px; 
            top: calc(100% - 6px); 
          }
        }
        .animate-border-loop {
          animation: borderLoop 16s linear infinite;
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-jump {
          animation: jump 1s ease-in-out infinite;
        }
        .hover\\:animate-none:hover {
          animation: none;
        }
      `}</style>
      <Router>
        <div className="flex relative min-h-screen bg-gray-900 w-full max-w-full overflow-x-hidden">
          <div className="noise-wrapper absolute inset-0 opacity-0 overflow-hidden transition-opacity duration-500 z-10">
            <div className="noise absolute inset-[-500px] bg-[url('/noise_black.png')] bg-repeat opacity-35 animate-noise"></div>
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
    </>
  );
};

export default App;