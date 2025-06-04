import { useEffect, useRef, useState } from 'react';


const ServicesList = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const sectionRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  const services = [
    {
      title: "AI-Powered Depression Screening",
      description: ""
    },
    {
      title: "Secure Therapy Sessions",
      description: ""
    },
    {
      title: "Personalized Treatment Plans",
      description: ""
    },
    {
      title: "Emergency Support",
      description: ""
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let count = 0;
          animationTimeoutRef.current = setInterval(() => {
            setVisibleItems(prev => {
              if (prev >= services.length) {
                clearInterval(animationTimeoutRef.current);
                return prev;
              }
              return prev + 1;
            });
            count++;
            if (count >= services.length) {
              clearInterval(animationTimeoutRef.current);
            }
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (animationTimeoutRef.current) {
        clearInterval(animationTimeoutRef.current);
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [services.length]);

  return (
    <div 
      ref={sectionRef}
      className="xl:w-[35%] lg:w-[30%] bg-gradient-to-r from-[#24025333] to-[#01092336] border border-darkCyan p-6 rounded-xl hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300"
    >
      <p className="text-lg text-center text-cyan mb-6">
        <span className="font-bold text-darkCyan block mt-2">
          At Grace, we provide a safe, modern space for healing and growth. Our evidence-based services include:
        </span>
      </p>

      <ol className="list-decimal list-inside space-y-5">
        {services.map((service, index) => (
          <li 
            key={index}
            className={`text-cyan pb-3 ${index < services.length - 1 ? 'border-b border-darkCyan/30' : ''} 
              transition-all duration-500 ease-out ${visibleItems > index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="font-bold text-white">
              {service.title}
            </span>
            <br />
            <span className="text-sm block mt-1">
              {service.description}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ServicesList;