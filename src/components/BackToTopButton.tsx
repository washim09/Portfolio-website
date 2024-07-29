import React, { useState, useEffect } from 'react';
import { ChevronsUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 z-50 text-white
                     right-[-3px] lg:right-2
                     transition-all duration-300 ease-in-out
                     hover:scale-110
                     animate-jump
                     hover:animate-none"
          aria-label="Back to top"
        >
          <ChevronsUp className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8" />
        </button>
      )}
    </>
  );
};

export default BackToTopButton;