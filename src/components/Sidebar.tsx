import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faStar,
  faTasks,
  faFileArchive,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", icon: faHome, href: "#header", iconClass: "text-white" },
    { name: "About", icon: faAddressCard, href: "#about", iconClass: "text-red-500" },
    { name: "Experience", icon: faStar, href: "#experience", iconClass: "text-red-500" },
    { name: "Service", icon: faTasks, href: "#service", iconClass: "text-red-500" },
    { name: "Portfolio", icon: faFileArchive, href: "#portfolio", iconClass: "text-red-500" },
    { name: "Contact", icon: faEnvelope, href: "#contact", iconClass: "text-red-500" },
  ];

  const socialIcons = [
    { icon: faTwitter, href: "#" },
    { icon: faFacebookF, href: "#" },
    { icon: faLinkedinIn, href: "#" },
  ];

  return (
    <>
      {/* Mobile View */}
      <div className="fixed top-0 left-0 w-full bg-gray-800 text-white md:hidden z-50">
        {/* Always visible navigation bar */}
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold">Navigation</h2>
          <button className="text-white focus:outline-none" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        </div>

        {/* Dropdown menu */}
        <div
          className={`absolute top-0 left-0 w-full bg-gray-800 transition-all duration-300 ease-in-out transform ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Navigation header within the dropdown */}
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold">Navigation</h2>
            <button className="text-white focus:outline-none" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
          </div>

          {/* Navigation items */}
          <nav className="mt-4">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="border-t border-gray-600"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                    transition: 'opacity 300ms, transform 300ms',
                  }}
                >
                  <a
                    href={item.href}
                    className={`flex items-center px-4 py-2 ${
                      index === 0 ? 'text-red-500' : 'text-white'
                    }`}
                    onClick={toggleSidebar}
                  >
                    {item.name}
                    <FontAwesomeIcon icon={item.icon} className={`ml-auto ${item.iconClass}`} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Tablet View */}
      <div 
        className="hidden md:block lg:hidden fixed left-0 top-0 h-full bg-gray-800 text-white z-50 transition-all duration-300 ease-in-out overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: isHovered ? '240px' : '60px' }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4">
            <img src="./profile.jpg" alt="Profile" className="w-full h-auto" />
          </div>
          <nav className="flex-grow">
            <ul>
              {navItems.map((item, index) => (
                <li key={item.name} className="mb-2">
                  <a
                    href={item.href}
                    className={`flex items-center px-4 py-2 ${
                      index === 0 ? 'text-red-500' : 'text-white hover:bg-gray-700'
                    } transition-all duration-300 ease-in-out`}
                  >
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className={`${item.iconClass} ${isHovered ? 'w-6 mr-4' : 'w-full'}`} 
                    />
                    {isHovered && (
                      <span className="flex-grow text-right">{item.name}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {isHovered && (
            <div className="p-4 transition-all duration-300 ease-in-out">
              <div className="flex justify-center space-x-4">
                {socialIcons.map((socialItem) => (
                  <a
                    key={socialItem.icon.iconName}
                    href={socialItem.href}
                    className="bg-red-500 w-8 h-8 text-gray-800 hover:text-red-500 hover:bg-white flex justify-center items-center"
                  >
                    <FontAwesomeIcon icon={socialItem.icon} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Sidebar - Unchanged */}
      <div className="hidden lg:block fixed inset-y-0 left-16 w-72 bg-white">
        <div className="flex items-center justify-center">
          <img src="./profile-1.jpg" alt="Profile" className="object-fit" />
        </div>
        <nav className="mt-4">
          <ul className="space-y-0">
            {navItems.map((item, index) => (
              <li key={item.name} className={index !== 0 ? "border-t border-gray-600 w-full" : ""}>
                <a
                  href={item.href}
                  className={`flex items-center px-4 py-2 group ${
                    index === 0
                      ? "text-red-500"
                      : "text-gray-900 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`mr-auto ${
                      index === 0
                        ? "text-gray-900"
                        : "group-hover:text-red-500"
                    }`}
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="fixed bottom-0 w-72 p-4 bg-gray-900">
          <div className="flex justify-center items-end space-x-6">
            {socialIcons.map((socialItem) => (
              <a
                key={socialItem.icon.iconName}
                href={socialItem.href}
                className="bg-red-500 w-8 h-8 text-gray-800 hover:text-red-500 hover:bg-white flex justify-center items-center"
              >
                <FontAwesomeIcon icon={socialItem.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;