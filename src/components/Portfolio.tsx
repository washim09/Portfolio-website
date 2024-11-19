import React, { useState, useEffect } from 'react';
import { Eye, Link, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  image: string;
  title: string;
  type: string;
  link: string;
}

const portfolioItems: Project[] = [
  { id: 1, category: 'web-des', image: './portfolio-1.jpg', title: 'O2lenses', type: 'Web Design', link: 'https://www.o2lenses.com' },
  { id: 2, category: 'web-des', image: './portfolio-2.jpg', title: 'Ldt Technology', type: 'Web Design', link: 'https://ldttechnology.com' },
  { id: 3, category: 'web-dev', image: './portfolio-3.jpg', title: 'Mapmystudy', type: 'Web Development', link: 'https://www.mapmystudy.com' },
  { id: 4, category: 'web-dev', image: './portfolio-4.jpg', title: 'Nadaku', type: 'Web Development', link: 'https://mycontents.id/category/nadaku' },
  { id: 5, category: 'dig-mar', image: './portfolio-5.jpg', title: 'Acnosoft', type: 'Digital Marketing', link: 'https://www.acnosoft.com' },
  { id: 6, category: 'dig-mar', image: './portfolio-6.jpg', title: 'Drapster', type: 'Digital Marketing', link: 'https://drapster.com' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('*');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

  useEffect(() => {
    setProjects(portfolioItems);
  }, []);

  useEffect(() => {
    setProjects(portfolioItems.filter(item => filter === '*' || item.category === filter));
  }, [filter]);

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="bg-white ml-96 mt-10 w-[850px] py-16 px-8 text-[#222222] hidden lg:block">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 relative inline-block">
            Portfolio
            <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
          </h2>
          <ul className="flex justify-start space-x-4 mb-8">
            {['*', 'web-des', 'web-dev', 'dig-mar'].map((category) => (
              <li key={category}>
                <button
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 text-sm font-medium ${
                    filter === category
                      ? 'bg-[#FF6F61] text-white'
                      : 'bg-white text-gray-700 border border-[#FF6F61]'
                  } rounded-md transition-colors duration-200`}
                >
                  {category === '*' ? 'All' : category === 'web-des' ? 'Design' : category === 'web-dev' ? 'Development' : 'Digital Marketing'}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <ProjectItem key={item.id} item={item} index={index} openGallery={openGallery} />
          ))}
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-white ml-20 mt-5 w-[668px] py-16 px-8 text-[#222222] hidden md:block lg:hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            Portfolio
            <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
          </h2>
          <ul className="flex flex-wrap justify-start space-x-2 space-y-2 mb-8">
            {['*', 'web-des', 'web-dev', 'dig-mar'].map((category) => (
              <li key={category}>
                <button
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 text-sm font-medium ${
                    filter === category
                      ? 'bg-[#FF6F61] text-white'
                      : 'bg-white text-gray-700 border border-[#FF6F61]'
                  } rounded-md transition-colors duration-200`}
                >
                  {category === '*' ? 'All' : category === 'web-des' ? 'Design' : category === 'web-dev' ? 'Development' : 'Digital Marketing'}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {projects.map((item, index) => (
            <ProjectItem key={item.id} item={item} index={index} openGallery={openGallery} />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white md:hidden m-4 w-72 py-4 px-4 text-[#222222]">
        <h2 className="text-xl font-bold mb-4 relative inline-block">
          Portfolio
          <span className="absolute left-0 w-1/4 h-0.5 top-7 bg-[#FF6F61]"></span>
        </h2>
        <ul className="flex flex-wrap justify-start space-x-1 space-y-1 mb-4">
          {['*', 'web-des', 'web-dev', 'dig-mar'].map((category) => (
            <li key={category}>
              <button
                onClick={() => setFilter(category)}
                className={`px-2 py-1 text-xs font-medium ${
                  filter === category
                    ? 'bg-[#FF6F61] text-white'
                    : 'bg-white text-gray-700 border border-[#FF6F61]'
                } rounded-md transition-colors duration-200`}
              >
                {category === '*' ? 'All' : category === 'web-des' ? 'Design' : category === 'web-dev' ? 'Dev' : 'Digital Marketing'}
              </button>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((item, index) => (
            <ProjectItem key={item.id} item={item} index={index} openGallery={openGallery} />
          ))}
        </div>
      </div>

      {/* Gallery Popup */}
      {isGalleryOpen && (
        <GalleryPopup
          projects={projects}
          currentImageIndex={currentImageIndex}
          closeGallery={closeGallery}
          nextImage={nextImage}
          prevImage={prevImage}
          showLeftArrow={showLeftArrow}
          showRightArrow={showRightArrow}
          showCloseButton={showCloseButton}
          setShowLeftArrow={setShowLeftArrow}
          setShowRightArrow={setShowRightArrow}
          setShowCloseButton={setShowCloseButton}
        />
      )}
    </>
  );
};

const ProjectItem: React.FC<{ item: Project; index: number; openGallery: (index: number) => void }> = ({ item, index, openGallery }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative group">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-30"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => openGallery(index)}
          className="bg-[#FF6F61] text-white p-2 rounded-full mx-2 hover:bg-gray-800 transition-colors duration-200"
        >
          <Eye size={20} />
        </button>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF6F61] text-white p-2 rounded-full mx-2 hover:bg-gray-800 transition-colors duration-200"
        >
          <Link size={20} />
        </a>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-[#FF6F61] bg-opacity-50 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm">{item.type}</p>
      </div>
    </div>
  </div>
);

const GalleryPopup: React.FC<{
  projects: Project[];
  currentImageIndex: number;
  closeGallery: () => void;
  nextImage: () => void;
  prevImage: () => void;
  showLeftArrow: boolean;
  showRightArrow: boolean;
  showCloseButton: boolean;
  setShowLeftArrow: (show: boolean) => void;
  setShowRightArrow: (show: boolean) => void;
  setShowCloseButton: (show: boolean) => void;
}> = ({
  projects,
  currentImageIndex,
  closeGallery,
  nextImage,
  prevImage,
  showLeftArrow,
  showRightArrow,
  showCloseButton,
  setShowLeftArrow,
  setShowRightArrow,
  setShowCloseButton,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div 
      className="max-w-xl w-full mx-4 relative"
      onMouseEnter={() => setShowCloseButton(true)}
      onMouseLeave={() => setShowCloseButton(false)}
    >
      <div className="relative">
        <img 
          src={projects[currentImageIndex].image} 
          alt={projects[currentImageIndex].title} 
          className="w-full h-auto border-4 border-white" 
        />
        <div 
          className="absolute top-0 left-0 w-1/2 h-full"
          onMouseEnter={() => setShowLeftArrow(true)}
          onMouseLeave={() => setShowLeftArrow(false)}
        >
          {showLeftArrow && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-300"
            >
              <ChevronLeft size={55} />
            </button>
          )}
        </div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full"
          onMouseEnter={() => setShowRightArrow(true)}
          onMouseLeave={() => setShowRightArrow(false)}
        >
          {showRightArrow && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white transition-opacity duration-300"
            >
              <ChevronRight size={55} />
            </button>
          )}
        </div>
      </div>
      <div className="bg-white p-4">
        <h3 className="text-xl font-semibold">{projects[currentImageIndex].title}</h3>
        <p className="text-gray-600">{projects[currentImageIndex].type}</p>
      </div>
      {showCloseButton && (
        <button
          onClick={closeGallery}
          className="absolute -top-6 right-3 transform translate-x-1/2 -translate-y-1/2 text-white p-2 transition-all duration-300"
        >
          <X size={40} />
        </button>
      )}
    </div>
  </div>
);

export default Portfolio;