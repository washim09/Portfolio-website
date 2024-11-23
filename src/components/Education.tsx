import { useState } from 'react';

type EducationItemProps = {
  startDate: string;
  endDate: string;
  degree: React.ReactNode;
  description: string;
  index: number;
};

const EducationItem: React.FC<EducationItemProps> = ({ startDate, endDate, degree, description, index }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="relative pl-6 pb-8 border-l border-[#FF6F61]"
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
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <p className="text-sm">{description}</p>
      <div className="absolute w-full h-[1px] bg-[#FF6F61] bottom-0 left-0"></div>
    </div>
  );
};

const Education = () => {
  const educationData = [
    {
      startDate: "Aug-2019",
      endDate: "Jan-2020",
      degree: "Certification Course",
      description: "Web Development From AIDM institute."
    },
    {
      startDate: "Aug-2014",
      endDate: "Dec-2017",
      degree: "Bachelor Degree",
      description: "Bachelor of Computer Application From Indira Gandhi National Open University."
    },
    {
      startDate: "Jun-2008",
      endDate: "Jun-2010",
      degree: (
        <>
          High School (<span>12<sup>th</sup> Grade</span>)
        </>
      ),
      description: "CBSE"
    },
    {
      startDate: "Apr-2006",
      endDate: "May-2007",
      degree: (
        <>
          High School (<span>10<sup>th</sup> Grade</span>)
        </>
      ),
      description: "CBSE",
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="bg-white ml-96 mt-10 w-[850px] py-16 px-8 text-[#222222] hidden lg:block">
        <h2 className="text-4xl font-bold mb-8 relative inline-block">
          Education
          <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-white ml-20 mt-5 w-[668px] py-16 px-8 text-[#222222] hidden md:block lg:hidden">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          Education
          <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white md:hidden mx-4 w-[calc(100%-2rem)] mt-4 py-4 px-4 text-[#222222]">
        <h2 className="text-xl font-bold mb-4 relative inline-block">
          Education
          <span className="absolute left-0 w-1/4 h-0.5 top-7 bg-[#FF6F61]"></span>
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;