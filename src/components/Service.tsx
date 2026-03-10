import { Laptop, Search, Mail, Monitor } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ServiceItem = ({
  Icon,
  title,
  description,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="w-full md:w-1/2 mb-8 px-4">
    <div className="relative w-full">
      <Icon className="text-[#FF6F61] mb-4" size={30} />
      <h3 className="mb-2 text-lg font-semibold tracking-wide md:text-xl md:font-bold">{title}</h3>
      <p className="text-sm leading-7 text-gray-600">{description}</p>
    </div>
  </div>
);

const Service = () => {
  const services = [
    {
      Icon: Monitor,
      title: "Web Design",
      description: "Designs engaging and user-centric web interfaces that balance aesthetics with functionality to provide an optimal user experience."
    },
    {
      Icon: Laptop,
      title: "Web Development",
      description: "Builds robust and scalable web applications using modern front-end and back-end technologies, ensuring seamless performance."
    },
    {
      Icon: Search,
      title: "SEO",
      description: "Implements effective SEO strategies to enhance website visibility, drive traffic, and improve search engine rankings."
    },
    {
      Icon: Mail,
      title: "Digital Marketing",
      description: "Executes comprehensive digital marketing plans, combining SEO, content creation, and targeted campaigns to boost online presence."
    }
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="bg-white ml-[21rem] mr-8 mt-10 py-16 px-8 text-[#222222] hidden lg:block">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 relative inline-block">
            Service
            <span className="absolute left-0 w-1/4 h-1 top-12 bg-[#FF6F61]"></span>
          </h2>
          <div className="flex flex-wrap -mx-4 items-center">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Tablet View */}
      <div className="bg-white ml-20 mr-5 mt-5 py-16 px-8 text-[#222222] hidden md:block lg:hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            Service
            <span className="absolute left-0 w-1/4 h-1 top-10 bg-[#FF6F61]"></span>
          </h2>
          <div className="flex flex-wrap -mx-4 items-center">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="bg-white md:hidden mx-4 w-[calc(100%-2rem)] mt-4 py-4 px-4 text-[#222222]">
        <h2 className="text-2xl font-bold mb-5 relative inline-block">
          Service
          <span className="absolute left-0 h-0.5 w-12 top-8 bg-[#FF6F61]"></span>
        </h2>
        <div className="flex flex-wrap -mx-2 items-center">
          {services.map((service, index) => (
            <div key={index} className="w-full px-2 mb-6">
              <ServiceItem {...service} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
