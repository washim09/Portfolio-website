import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Review from './components/Review';
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
    <div className="flex relative min-h-screen bg-gray-900 w-full max-w-full overflow-x-hidden">
      <div className="noise-wrapper absolute inset-0 opacity-0 overflow-hidden transition-opacity duration-500 z-10">
        <div className="noise absolute inset-[-500px] bg-[url('./noise_black.png')] bg-repeat opacity-35 animate-noise"></div>
      </div>
      <div className="flex-grow z-20 relative">
        <Sidebar />
        <Header />
        <AboutMe />
        <Education />
        <Experience />
        <Service />
        <Portfolio />
        <Review />
        <ContactMe />
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
};

export default App;





