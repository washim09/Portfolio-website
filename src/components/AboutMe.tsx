import { useState, useEffect } from 'react';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm mb-1">
        <p>{skill}</p>
        <p>{width}%</p>
      </div>
      <div className="h-1 bg-white border border-[#FF6F61]">
        <div 
          className="h-full bg-[#FF6F61] transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="bg-white ml-96 mt-10 w-[850px] py-16 px-8 text-[#222222] hidden lg:block">
        <h2 className="text-4xl font-bold mb-8 relative inline-block">
          About Me
          <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
        </h2>
        
        <div className="flex">
          <div className="w-2/5 pr-8">
            <video src="./profile_animation.mp4" autoPlay loop muted className="w-80 h-80" />
          </div>
          <div className="w-3/5 mt-20">
            <p className="mb-6">
            I'm a full-stack developer skilled in the MERN stack, with experience building responsive and user-friendly web applications using React Vite and Tailwind CSS. I excel at creating intuitive admin dashboards, scalable backend APIs, and interactive frontends. Passionate about simplifying complex problems, I deliver high-quality solutions that drive impactful user experiences.
            </p>
            <button className="bg-[#FF6F61] text-white px-6 py-2 mb-8 hover:bg-[#222222] transition duration-300">
              Hire Me
            </button>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-1/2 pr-4">
            <SkillBar skill="Design" percentage={85} />
            <SkillBar skill="SEO" percentage={95} />
          </div>
          <div className="w-1/2 pl-4">
            <SkillBar skill="Development" percentage={90} />
            <SkillBar skill="Marketing" percentage={85} />
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-white ml-20 mt-5 w-[668px] py-16 px-8 text-[#222222] hidden md:block lg:hidden">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          About Me
          <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
        </h2>
        
        <div className="flex">
          <div className="w-2/5 pr-4">
            <video src="./profile_animation.mp4" autoPlay loop muted className="w-80 h-80" />
          </div>
          <div className="w-3/5 mt-20">
            <p className="mb-6 text-sm">
            I'm a full-stack developer skilled in the MERN stack, with experience building responsive and user-friendly web applications using React Vite and Tailwind CSS. I excel at creating intuitive admin dashboards, scalable backend APIs, and interactive frontends. Passionate about simplifying complex problems, I deliver high-quality solutions that drive impactful user experiences.
            </p>
            <button className="bg-[#FF6F61] text-white text-sm px-4 py-2 mb-6 hover:bg-[#222222] transition duration-300">
              Hire Me
            </button>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-1/2 pr-4">
            <SkillBar skill="Design" percentage={85} />
            <SkillBar skill="SEO" percentage={95} />
          </div>
          <div className="w-1/2 pl-4">
            <SkillBar skill="Development" percentage={90} />
            <SkillBar skill="Marketing" percentage={85} />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white md:hidden mx-4 w-[calc(100%-2rem)] mt-4 py-4 px-4 text-[#222222]">
        <h2 className="text-xl font-bold mb-4 relative inline-block">
          About Me
          <span className="absolute left-0 w-1/4 h-0.5 top-7 bg-[#FF6F61]"></span>
        </h2>
        <video src="./profile_animation.mp4" autoPlay loop muted className="w-80 h-80 ml-4" />
        <p className="mb-3 text-xs leading-relaxed mt-3">
        I'm a full-stack developer skilled in the MERN stack, with experience building responsive and user-friendly web applications using React Vite and Tailwind CSS. I excel at creating intuitive admin dashboards, scalable backend APIs, and interactive frontends. Passionate about simplifying complex problems, I deliver high-quality solutions that drive impactful user experiences.
        </p>
        <button className="bg-[#FF6F61] text-white text-xs px-3 py-1.5 mb-4 hover:bg-[#222222] transition duration-300">
          Hire Me
        </button>
        <div>
          <SkillBar skill="Design" percentage={85} />
          <SkillBar skill="SEO" percentage={95} />
          <SkillBar skill="Development" percentage={90} />
          <SkillBar skill="Marketing" percentage={85} />
        </div>
      </div>
    </>
  );
};

export default AboutMe;