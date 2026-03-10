import React, { useState, useEffect } from 'react';
import { Eye, Link, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  image: string;
  title: string;
  type: string;
  link: string;
  purpose: string;
  features: string[];
  technologies: string[];
  contributions: string[];
}

interface PortfolioCategory {
  value: string;
  label: string;
  mobileLabel: string;
  mobileClassName?: string;
}

const portfolioItems: Project[] = [
  {
    id: 1,
    category: 'web-des',
    image: '/portfolio-1.jpg',
    title: 'O2lenses',
    type: 'Web Design',
    link: 'https://www.o2lenses.com',
    purpose: 'Corporate product website for anti-glare lens products to improve brand credibility and lead capture.',
    features: [
      'Responsive homepage and product showcase sections',
      'Brand-focused hero banners and product callouts',
      'Clear navigation for product and contact discovery',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    contributions: [
      'Designed and implemented the complete frontend layout',
      'Created reusable UI sections for product storytelling',
      'Optimized responsive behavior for desktop and mobile devices',
    ],
  },
  {
    id: 2,
    category: 'web-des',
    image: '/portfolio-2.jpg',
    title: 'Ldt Technology',
    type: 'Web Design',
    link: 'https://ldttechnology.com',
    purpose: 'End-to-end technology company website built from scratch to showcase services, establish brand credibility, and generate qualified inbound inquiries.',
    features: [
      'Complete custom UI/UX architecture designed and implemented from the ground up',
      'Responsive service pages and interactive content sections across all breakpoints',
      'Dynamic inquiry flow with secure contact forms and conversion-focused CTAs',
    ],
    technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'PHP', 'REST API Integration'],
    contributions: [
      'Solely designed and developed the full website lifecycle from concept to deployment',
      'Built frontend with React.js using reusable components and structured page architecture',
      'Implemented mobile, tablet, and desktop responsive behavior with cross-browser support',
      'Developed backend in PHP for form handling, server-side validation, and data processing',
      'Integrated frontend with backend APIs for secure inquiry submission and communication',
      'Optimized performance, user flow, and lead conversion across key landing sections',
    ],
  },
  {
    id: 3,
    category: 'web-dev',
    image: '/portfolio-3.jpg',
    title: 'Mapmystudy',
    type: 'Web Development',
    link: 'https://www.mapmystudy.com',
    purpose: 'Education campaign platform focused on seminar landing pages, lead capture, and conversion-driven user journeys.',
    features: [
      'Responsive seminar landing pages for campaign-based promotions',
      'Conversion-focused UI blocks including forms, CTAs, banners, and structured sections',
      'Dynamic form flows for registrations and lead capture with real-time validation',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP', 'REST API'],
    contributions: [
      'Designed and developed responsive landing pages for education seminars and marketing campaigns',
      'Implemented dynamic form handling and validation using JavaScript and jQuery',
      'Integrated REST APIs for seminar registrations, lead capture, and backend communication',
      'Collaborated with PHP backend to connect frontend forms with server-side processing',
      'Ensured cross-browser compatibility and mobile responsiveness with Bootstrap',
      'Optimized page speed and campaign performance while keeping SEO-friendly page structure',
    ],
  },
  {
    id: 4,
    category: 'web-dev',
    image: '/portfolio-4.jpg',
    title: 'Nadaku',
    type: 'Web Development',
    link: 'https://mycontents.id/category/nadaku',
    purpose: 'Music-first web module built around third-party Music API integration to deliver real-time tracks, playlists, and album discovery.',
    features: [
      'Integrated third-party Music API for tracks, playlists, and album data',
      'Asynchronous REST API fetching with dynamic UI updates',
      'Playback-ready responsive interface for seamless media browsing',
    ],
    technologies: ['Music API', 'REST API', 'JavaScript', 'React', 'State Management', 'CSS'],
    contributions: [
      'Handled API authentication, request lifecycle management, and endpoint integration',
      'Implemented async data fetching for dynamic rendering of tracks, playlists, and albums',
      'Managed state transitions for media lists, playback state, and UI synchronization',
      'Built error handling and fallback UI for API downtime, timeouts, and failed requests',
      'Optimized rendering performance for media-heavy views and frequent API updates',
      'Ensured responsive, smooth user experience during audio playback across devices',
    ],
  },
  {
    id: 5,
    category: 'dig-mar',
    image: '/portfolio-5.jpg',
    title: 'Acnosoft',
    type: 'Digital Marketing',
    link: 'https://www.acnosoft.com',
    purpose: 'Agency website supporting digital marketing campaigns with conversion-driven landing experiences.',
    features: [
      'Campaign landing page UI sections',
      'Lead capture components and CTA optimization',
      'SEO-friendly page structure and content blocks',
    ],
    technologies: [
      'Google Analytics',
      'Google Ads',
      'Google Search Console',
      'Meta Ads Manager',
      'SEMrush / Ahrefs',
      'Keyword Research Tools',
      'CRO Tools',
      'Social Media Marketing Tools',
    ],
    contributions: [
      'Implemented landing pages for performance campaigns',
      'Collaborated on SEO-oriented frontend structure',
      'Tracked and improved key engagement interactions',
    ],
  },
  {
    id: 6,
    category: 'dig-mar',
    image: '/portfolio-6.jpg',
    title: 'Webpulse India',
    type: 'Digital Marketing',
    link: 'https://www.webpulseindia.com/',
    purpose: 'Digital marketing agency website focused on helping businesses improve online visibility, generate qualified leads, and increase conversion performance.',
    features: [
      'SEO-focused service pages and conversion-oriented landing sections',
      'Digital campaign highlights for paid media and social growth',
      'Lead capture touchpoints aligned to agency service funnels',
    ],
    technologies: ['SEO Tools', 'Google Ads', 'Google Analytics', 'Search Console', 'Social Media Platforms'],
    contributions: [
      'Led on-page and off-page SEO strategy implementation to improve rankings',
      'Performed keyword research and competitor analysis for content and campaign direction',
      'Managed Google Ads campaigns including targeting, budget control, and optimization',
      'Built social media marketing strategy aligned with lead generation goals',
      'Tracked campaign performance through analytics dashboards and actionable reporting',
      'Optimized lead funnels and conversion paths to improve inquiry quality and volume',
    ],
  },
  {
    id: 7,
    category: 'personal-pro',
    image: '/portfolio-8.jpg',
    title: 'Riviewit',
    type: 'Personal Project',
    link: 'https://riviewit.com/',
    purpose: 'A trust-first review platform where users share genuine product and service experiences with image and video proof.',
    features: [
      'User authentication and profile-based review publishing',
      'Image and video uploads for proof-backed reviews',
      'Search, filtering, and category navigation for better discovery',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    contributions: [
      'Architected and built the platform end-to-end as founder and developer',
      'Implemented frontend UX flows and backend API integration',
      'Designed scalable data flow, moderation logic, and deployment setup',
    ],
  },
];

const portfolioCategories: PortfolioCategory[] = [
  { value: '*', label: 'All', mobileLabel: 'All' },
  { value: 'web-dev', label: 'Dev', mobileLabel: 'Dev' },
  { value: 'web-des', label: 'Design', mobileLabel: 'Design' },
  { value: 'dig-mar', label: 'Digital Marketing', mobileLabel: 'Digital Marketing' },
  { value: 'personal-pro', label: 'Personal Project', mobileLabel: 'Personal Project', mobileClassName: 'ml-[3rem]' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('*');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

  useEffect(() => {
    if (filter === '*') {
      setProjects([...portfolioItems].sort((a, b) => b.id - a.id));
      return;
    }

    setProjects(portfolioItems.filter(item => item.category === filter));
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
      <div className="bg-white ml-[21rem] mr-8 mt-10 py-16 px-8 text-[#222222] hidden lg:block">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 relative inline-block">
            Portfolio
            <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
          </h2>
          <ul className="flex justify-start space-x-4 mb-8">
            {portfolioCategories.map((category) => (
              <li key={category.value}>
                <button
                  onClick={() => setFilter(category.value)}
                  className={`px-6 py-2 text-sm font-medium ${
                    filter === category.value
                      ? 'bg-[#FF6F61] text-white'
                      : 'bg-white text-gray-700 border border-[#FF6F61]'
                  } rounded-md transition-colors duration-200`}
                >
                  {category.label}
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
      <div className="bg-white ml-20 mr-5 mt-5 py-16 px-8 text-[#222222] hidden md:block lg:hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            Portfolio
            <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
          </h2>
          <ul className="mb-8 flex flex-wrap items-center gap-3">
            {portfolioCategories.map((category) => (
              <li key={category.value}>
                <button
                  onClick={() => setFilter(category.value)}
                  className={`px-4 py-2 text-sm font-medium ${
                    filter === category.value
                      ? 'bg-[#FF6F61] text-white'
                      : 'bg-white text-gray-700 border border-[#FF6F61]'
                  } rounded-md transition-colors duration-200`}
                >
                  {category.label}
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
      <div className="bg-white md:hidden mx-4 w-[calc(100%-2rem)] mt-4 py-4 px-4 text-[#222222]">
        <h2 className="text-2xl font-bold mb-5 relative inline-block">
          Portfolio
          <span className="absolute left-0 h-0.5 w-12 top-8 bg-[#FF6F61]"></span>
        </h2>
        <ul className="mb-5 flex flex-wrap gap-2">
          {portfolioCategories.map((category) => (
            <li key={category.value} className={category.mobileClassName}>
              <button
                onClick={() => setFilter(category.value)}
                className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  filter === category.value
                    ? 'border-[#FF6F61] bg-[#FF6F61] text-white'
                    : 'border-[#FF6F61] bg-white text-gray-700'
                }`}
              >
                {category.mobileLabel}
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
          setShowLeftArrow={setShowLeftArrow}
          setShowRightArrow={setShowRightArrow}
        />
      )}
    </>
  );
};

const ProjectItem: React.FC<{ item: Project; index: number; openGallery: (index: number) => void }> = ({ item, index, openGallery }) => (
  <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
    <div className="relative group aspect-[4/3] bg-gradient-to-br from-[#fff7f5] via-white to-[#f7f7f7] p-4">
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-md bg-white shadow-[inset_0_0_0_1px_rgba(229,231,235,0.9)]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.src = '/review-1.jpg';
          }}
          className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="absolute inset-0 bg-[#222222]/0 transition-colors duration-300 group-hover:bg-[#222222]/15"></div>
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
  setShowLeftArrow: (show: boolean) => void;
  setShowRightArrow: (show: boolean) => void;
}> = ({
  projects,
  currentImageIndex,
  closeGallery,
  nextImage,
  prevImage,
  showLeftArrow,
  showRightArrow,
  setShowLeftArrow,
  setShowRightArrow,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    {projects[currentImageIndex] && (
    <div 
      className="max-w-5xl w-full mx-3 sm:mx-6 lg:mx-8 relative max-h-[90vh] overflow-y-auto rounded-md"
    >
      <button
        onClick={closeGallery}
        aria-label="Close project details"
        className="sticky top-3 ml-auto mr-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#222222] shadow-lg ring-1 ring-gray-300 transition-colors duration-200 hover:bg-[#FF6F61] hover:text-white"
      >
        <X size={22} />
      </button>
      <div className="relative">
        <div className="w-full bg-[#f7f7f7] border-4 border-white rounded-t-md overflow-hidden">
          <img
            src={projects[currentImageIndex].image}
            alt={projects[currentImageIndex].title}
            onError={(event) => {
              event.currentTarget.src = '/review-1.jpg';
            }}
            className="w-full h-auto block"
          />
        </div>
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
      <div className="bg-white p-4 sm:p-6 rounded-b-md">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#222222]">{projects[currentImageIndex].title}</h3>
        <p className="text-gray-600 mt-1">{projects[currentImageIndex].type}</p>

        <div className="mt-5 space-y-4">
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FF6F61]">Purpose</h4>
            <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              {projects[currentImageIndex].purpose}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FF6F61]">Features Implemented</h4>
              <ul className="mt-2 text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
                {projects[currentImageIndex].features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FF6F61]">Technologies Used</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {projects[currentImageIndex].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm px-2.5 py-1 rounded-full bg-white border border-[#FF6F61] text-[#222222]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FF6F61]">My Contributions</h4>
            <ul className="mt-2 text-sm sm:text-base text-gray-700 list-disc list-inside space-y-1">
              {projects[currentImageIndex].contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )}
  </div>
);

export default Portfolio;
