import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleHireMe = () => {
    navigate('/contactme');
  };

  return (
    <>
      {/* Desktop View */}
      <div className="bg-white ml-[21rem] mr-8 mt-10 py-16 px-8 text-[#222222] hidden lg:block">
        <h2 className="text-4xl font-bold mb-8 relative inline-block">
          About Me
          <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
        </h2>
        
        <div className="flex">
          <div className="w-2/5 pr-8">
            <div className="h-[360px] w-[280px] overflow-hidden">
              <video
                src="/profile_animation_1.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/my-pic-white-background.webp"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="w-3/5 mt-0">
            <div className="mb-6 space-y-4 text-sm leading-relaxed">
              <p>
                Hi, I am Washim Akram - a Full-Stack Developer who enjoys building complete, scalable web products from idea to deployment.
              </p>
              <p>
                With over 4 years of experience, I work across both frontend and backend technologies, specializing in React, TypeScript, Node.js, Express, and PostgreSQL. I focus on writing clean, maintainable code and designing systems that are scalable, secure, and performance-optimized.
              </p>
              <p>
                As the Founder of Riviewit, I built a production-ready review platform from scratch. I designed and implemented the frontend architecture using React and TypeScript, developed backend APIs with Node.js and Express, structured the database using PostgreSQL, and handled authentication and deployment.
              </p>
              <p>
                I also worked on real-time features, including chat and call system integrations, ensuring smooth communication between users through robust backend design, API handling, and system-level performance thinking.
              </p>
              <p>
                I approach development with a product mindset - understanding business goals, user experience, and long-term scalability before writing code. I am open to remote opportunities and freelance projects where I can contribute as a full-stack engineer and help turn ideas into reliable, real-world applications.
              </p>
              <p>Let us build something impactful.</p>
            </div>
            <button
              type="button"
              onClick={handleHireMe}
              className="bg-[#FF6F61] text-white px-6 py-2 mb-8 hover:bg-[#222222] transition duration-300"
            >
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
      <div className="bg-white ml-20 mr-5 mt-5 py-16 px-8 text-[#222222] hidden md:block lg:hidden">
        <h2 className="text-3xl font-bold mb-8 relative inline-block">
          About Me
          <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
        </h2>
        
        <div className="flex items-start gap-6">
          <div className="w-2/5">
            <div className="h-[320px] w-full max-w-[250px] overflow-hidden">
              <video
                src="/profile_animation_1.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/my-pic-white-background.webp"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="w-3/5">
            <div className="mb-6 space-y-4 text-sm leading-7 text-[#333333]">
              <p>
                Hi, I am Washim Akram - a Full-Stack Developer who enjoys building complete, scalable web products from idea to deployment.
              </p>
              <p>
                With over 4 years of experience, I work across both frontend and backend technologies, specializing in React, TypeScript, Node.js, Express, and PostgreSQL.
              </p>
              <p>
                As the Founder of Riviewit, I built a production-ready review platform from scratch and handled frontend architecture, backend APIs, database design, authentication, and deployment.
              </p>
              <p>
                I also implemented real-time features, including chat and call system integrations, with strong focus on API handling, reliability, and performance.
              </p>
              <p>
                I am open to remote opportunities and freelance projects where I can contribute as a full-stack engineer and build reliable, scalable products.
              </p>
              <p>Let us build something impactful.</p>
            </div>
            <button
              type="button"
              onClick={handleHireMe}
              className="mb-6 bg-[#FF6F61] px-5 py-2 text-sm text-white transition duration-300 hover:bg-[#222222]"
            >
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
        <h2 className="text-2xl font-bold mb-5 relative inline-block">
          About Me
          <span className="absolute left-0 h-0.5 w-12 top-8 bg-[#FF6F61]"></span>
        </h2>
        <div className="mx-auto h-[320px] w-full max-w-[280px] overflow-hidden">
          <video
            src="/profile_animation_1.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/my-pic-white-background.webp"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="mb-3 mt-3 space-y-4 text-sm leading-7 text-[#333333]">
          <p>
            Hi, I am Washim Akram - a Full-Stack Developer who builds complete, scalable web products from idea to deployment.
          </p>
          <p>
            With 4+ years of experience, I specialize in React, TypeScript, Node.js, Express, and PostgreSQL, with focus on clean code, scalability, security, and performance.
          </p>
          <p>
            As Founder of Riviewit, I delivered a production-ready platform end-to-end, including frontend architecture, backend APIs, database design, authentication, deployment, and real-time chat/call integrations.
          </p>
          <p>
            I am open to remote and freelance full-stack opportunities. Let us build something impactful.
          </p>
        </div>
        <button
          type="button"
          onClick={handleHireMe}
          className="mb-4 bg-[#FF6F61] px-4 py-2 text-sm text-white transition duration-300 hover:bg-[#222222]"
        >
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
