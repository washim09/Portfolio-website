import React from 'react';
import { Smartphone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
      {/* Desktop View */}
      <footer className="ml-96 w-[850px] py-8 px-6 hidden lg:block">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-left">
              <p className="text-white">
                &copy; Copyright{" "}
                <span
                  className="text-[#FF6F61] font-semibold hover:text-white"
                >
                  @
                </span>{" "}
                The Washim Coder 2024
              </p>
            </div>
            <div className="text-right">
              <p className="text-white">
                Powered by{" "}
                <span
                  className="text-[#FF6F61] font-semibold hover:text-white"
                >
                  React Vite
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <Smartphone className="text-[#FF6F61] mr-2 hover:text-white" size={24} />
              <p className="text-white text-sm">
                Click to download our Android App
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Tablet View */}
      <footer className="ml-20 w-[668px] py-6 px-4 hidden md:block lg:hidden">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-left">
                <p className="text-white text-[12px]">
                  &copy; Copyright{" "}
                  <span
                    className="text-[#FF6F61] font-semibold hover:text-white"
                  >
                    @
                  </span>{" "}
                  The Washim Coder 2024
                </p>
              </div>

              <div className="flex justify-center items-center">
              <Smartphone className="text-[#FF6F61] mr-2 hover:text-white" size={20} />
              <p className="text-white text-xs">
                Click to download our Android App
              </p>
            </div>

              <div className="text-right">
                <p className="text-white text-sm">
                  Powered by{" "}
                  <span
                    className="text-[#FF6F61] font-semibold hover:text-white"
                  >
                    React Vite
                  </span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </footer>

      {/* Mobile View */}
      <footer className="m-4 w-72 py-4 px-3 md:hidden">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-3 text-center">
            <p className="text-white text-xs">
              &copy; Copyright{" "}
              <span
                className="text-[#FF6F61] font-semibold hover:text-white"
              >
                @
              </span>{" "}
              The Washim Coder 2024
            </p>
            <p className="text-white text-xs">
              Powered by{" "}
              <span
                className="text-[#FF6F61] font-semibold hover:text-white"
              >
                React Vite
              </span>
            </p>
            <div className="flex justify-center items-center">
              <Smartphone className="text-[#FF6F61] mr-1 hover:text-white" size={16} />
              <p className="text-white text-xs">
                Click to download our Android App
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
