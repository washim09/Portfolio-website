import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Volume2, VolumeX } from "lucide-react";
import useSound from "use-sound";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const typedRefDesktop = useRef(null);
  const typedRefMobile = useRef(null);
  const typedRefTablet = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [play, { stop }] = useSound("./static-noise.mp3", {
    loop: true,
    volume: 0.5,
  });

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer",
        "Front End Developer",
        "Software Developer",
      ],
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    };

    const typedDesktop = new Typed(typedRefDesktop.current, options);
    const typedMobile = new Typed(typedRefMobile.current, options);
    const typedTablet = new Typed(typedRefTablet.current, options);

    return () => {
      typedDesktop.destroy();
      typedMobile.destroy();
      typedTablet.destroy();
    };
  }, []);

  useEffect(() => {
    if (isMuted) {
      stop();
    } else {
      play();
    }
  }, [isMuted, play, stop]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleHireMe = () => {
    navigate('/contactme');
  };

  return (
    <>
      {/* Desktop View */}
      <div 
        className="bg-white ml-96 mt-10 w-[850px] relative hidden lg:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <button
            onClick={toggleMute}
            className="absolute top-2 left-2 text-red-500 hover:text-gray-900 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        )}
        <div className="mx-auto px-8">
          <div className="py-8 flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <p className="text-red-500 text-xl font-semibold mb-2">I'm</p>
                <h1 className="text-gray-900 text-5xl font-bold mb-2">
                  Washim Akram
                </h1>
                <h2 className="text-2xl font-light text-gray-600">
                  <span ref={typedRefDesktop}></span>
                </h2>
              </div>
            </div>
            <img src="./profile.png" alt="Michael Miller" className="object-left" />
          </div>
        </div>
        <div className="flex">
          <a
            href="./Resume.pdf" download
            className="w-1/2 py-4 text-center text-xl text-white bg-gray-900 hover:bg-gray-800 transition duration-200"
          >
            <i className="fas fa-download mr-2"></i>Resume
          </a>
          <button
            onClick={handleHireMe}
            className="w-1/2 py-4 text-center text-xl text-gray-900 bg-red-500 hover:bg-red-600 transition duration-200"
          >
            <i className="fas fa-hands-helping mr-2"></i>Hire Me
          </button>
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-white ml-20 mt-5 w-[668px] relative hidden md:block lg:hidden">
        <div className="px-4">
          <div className="py-8 flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <p className="text-red-500 text-xl font-semibold mb-2">I'm</p>
                <h1 className="text-gray-900 text-4xl font-bold mb-2">
                  Washim Akram
                </h1>
                <h2 className="text-xl font-light text-gray-600">
                  <span ref={typedRefTablet}></span>
                </h2>
              </div>
            </div>
            <img src="./profile.png" alt="Michael Miller" className="object-cover w-52 h-72" />
          </div>
        </div>
        <div className="flex">
          <a
            href="#"
            className="w-1/2 py-4 text-center text-lg text-white bg-gray-900 hover:bg-gray-800 transition duration-200"
          >
            <i className="fas fa-download mr-2"></i>Resume
          </a>
          <button
            onClick={handleHireMe}
            className="w-1/2 py-4 text-center text-lg text-gray-900 bg-red-500 hover:bg-red-600 transition duration-200"
          >
            <i className="fas fa-hands-helping mr-2"></i>Hire Me
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white md:hidden mx-4 w-[calc(100%-2rem)] mt-[82px] relative">
        <div className="py-16 px-4">
          <p className="text-red-500 text-xl font-semibold mb-2">I'm</p>
          <h1 className="text-gray-900 text-4xl font-bold mb-2">
            Washim Akram
          </h1>
          <h2 className="text-xl font-light text-gray-600">
            <span ref={typedRefMobile}></span>
          </h2>
        </div>
        <div className="flex">
          <a
            href="#"
            className="flex-1 py-4 text-center text-lg text-white bg-gray-900 hover:bg-gray-800 transition duration-200"
          >
            <i className="fas fa-download mr-2"></i>Resume
          </a>
          <button
            onClick={handleHireMe}
            className="flex-1 py-4 text-center text-lg text-gray-900 bg-red-500 hover:bg-red-600 transition duration-200"
          >
            <i className="fas fa-hands-helping mr-2"></i>Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;