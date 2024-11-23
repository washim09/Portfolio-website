import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: "At LDTtechnology, Washim Akram impressed us with their creativity and dedication, including building our website. His ability to solve problems and deliver results was truly remarkable. His contributions made a lasting impact, and I wish them success ahead.",
    name: "LDT Technologies Pvt. Ltd.",
    profession: "CEO & CO-FOUNDER, LDT Technologies Pvt. Ltd.",
    image: "./review-1.jpg"
  },
  {
    text: "Washim was key to many projects at Echrontech, known for their quality work, problem-solving skills, and leadership. They created a positive and collaborative environment, leaving a lasting impact. I highly recommend them for any future role.",
    name: "Echrontech Technology.",
    profession: "MD, Echrontech Technology.",
    image: "./review-2.jpg"
  },
  {
    text: "Working with Washim at Acnosoft was a pleasure, as they combined strong technical skills with a clear focus on client needs. They consistently delivered innovative solutions and elevated our team’s capabilities. I’m confident they’ll bring great value to any organization.",
    name: "Acnosoft Digital Marketing Agency",
    profession: "CEO, Acnosoft Digital Marketing Agency",
    image: "./review-3.jpg"
  }
];

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState(0);

  const nextReview = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const ReviewContent = () => (
    <div 
      className="review-slider relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        className={`review-slider-item transition-all duration-500 ease-in-out ${
          direction === 1 ? 'animate-slide-left' : direction === -1 ? 'animate-slide-right' : ''
        }`}
      >
        <div className="review-text mb-6">
          <p className="text-lg italic lg:text-base md:text-sm">
            {reviews[currentReview].text}
          </p>
        </div>
        <div className="review-img flex items-center">
          <img src={reviews[currentReview].image} alt="Reviewer" className="w-20 h-20 object-cover mr-4 lg:w-16 lg:h-16 md:w-14 md:h-14 mt-6" />
          <div className="review-name mt-6">
            <h3 className="text-lg font-bold tracking-wider mb-1 lg:text-base md:text-sm">{reviews[currentReview].name}</h3>
            <p className="text-sm lg:text-xs">{reviews[currentReview].profession}</p>
          </div>
        </div>
      </div>
      <button 
        onClick={prevReview} 
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FF6F61] bg-opacity-70 text-white p-1 transition-all duration-300 ease-in-out ${
          isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={nextReview} 
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FF6F61] bg-opacity-70 text-white p-1 transition-all duration-300 ease-in-out ${
          isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop View */}
      <div className="bg-white ml-96 mt-10 w-[850px] px-8 text-[#222222] hidden lg:block">
        <div 
          className="px-8 py-16 relative" 
          style={{backgroundImage: "url('./quote.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom'}}
        >
          <h2 className="text-4xl font-bold mb-8 relative inline-block">
            Review
            <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
          </h2>
          <ReviewContent />
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-white ml-20 mt-5 w-[668px] px-8 text-[#222222] hidden md:block lg:hidden">
        <div 
          className="px-6 py-12 relative" 
          style={{backgroundImage: "url('./quote.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom', backgroundSize: '100px'}}
        >
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            Review
            <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
          </h2>
          <ReviewContent />
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white md:hidden mx-4 w-[calc(100%-2rem)] mt-4 px-4 text-[#222222]">
        <div 
          className="py-8 relative" 
          style={{backgroundImage: "url('./quote.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom', backgroundSize: '80px'}}
        >
          <h2 className="text-xl font-bold mb-4 relative inline-block">
            Review
            <span className="absolute left-0 w-1/4 h-0.5 top-7 bg-[#FF6F61]"></span>
          </h2>
          <ReviewContent />
        </div>
      </div>
    </>
  );
};

export default Review;