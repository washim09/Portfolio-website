import React, { useState } from 'react';

type ExperienceItemProps = {
  startDate: string;
  endDate: string;
  company: string;
  location: string;
  position: string;
  description: string;
  index: number;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ startDate, endDate, company, location, position, description, index }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="relative pl-6 pb-8 border-l border-[#FF6F61] last:border-b-0 last:pb-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`absolute w-3 h-3 bg-[#FF6F61] rounded-full ${
          isPaused ? 'animate-none' : 'animate-border-loop'
        }`}
        style={{ 
          animationDelay: `${index * 4}s`,
          top: '-1.5px',
          left: '-7.5px'
        }}
      ></div>
      <span className="text-sm mb-2 block">
        {startDate} <i className="text-[#FF6F61]">to</i> {endDate}
      </span>
      <h3 className="text-xl font-bold mb-1">{company}</h3>
      <h4 className="text-gray-600 italic mb-1">{location}</h4>
      <h5 className="text-lg font-semibold mb-2">{position}</h5>
      <p className="text-sm">{description}</p>
      <div className="absolute w-full h-[1px] bg-[#FF6F61] bottom-0 left-0"></div>
    </div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      startDate: "01-Jan-2020",
      endDate: "31-Dec-2050",
      company: "Codex Solution",
      location: "San Francisco, CA",
      position: "Project Manager",
      description: "Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero."
    },
    {
      startDate: "01-Jan-2020",
      endDate: "31-Dec-2050",
      company: "Soft Solution Ltd",
      location: "San Francisco, CA",
      position: "Web Developer",
      description: "Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero."
    },
    {
      startDate: "01-Jan-2020",
      endDate: "31-Dec-2050",
      company: "ABC Soft Ltd",
      location: "San Francisco, CA",
      position: "Web Designer",
      description: "Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero."
    },
    {
      startDate: "01-Jan-2020",
      endDate: "31-Dec-2050",
      company: "Soft Agency",
      location: "San Francisco, CA",
      position: "Graphic Designer",
      description: "Lorem ipsum dolor sit amet elit suscipit orci. Donec molestie velit id libero."
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="bg-white ml-96 mt-10 w-[850px] py-16 px-8 text-[#222222] hidden lg:block">
        <h2 className="text-4xl font-bold mb-8 relative inline-block">
          Experience
          <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-white ml-20 mt-5 w-[668px] py-16 px-8 text-[#222222] hidden md:block lg:hidden">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Experience
          <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white md:hidden m-4 w-72 py-4 px-4 text-[#222222]">
        <h2 className="text-xl font-bold mb-4 relative inline-block">
          Experience
          <span className="absolute left-0 w-1/4 h-0.5 top-7 bg-[#FF6F61]"></span>
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;