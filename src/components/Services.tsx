import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EventLogo, HealthLogo, InfraLogo, WorkforceLogo } from '@/utils/svgs';
import Link from 'next/link';

interface ServiceSectionProps {
  title: string;
  description: string;
  isActive: boolean;
  onHover: (title: string | null) => void;
  logo: React.FC<{ className: string }>;
  url: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  isActive,
  onHover,
  logo: Logos,
  url,
}) => {
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <Link href={url} passHref>
      <div
        className="overflow-hidden cursor-pointer"
        onMouseEnter={() => onHover(title)}
        onMouseLeave={() => onHover(null)}
      >
        <div className="flex pt-6 lg:pt-10 items-baseline">
          <motion.h3
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            className="text-2xl lg:text-8xl font-black uppercase"
          >
            {title}
          </motion.h3>
          <motion.div
            variants={animationVariants}
            initial="hidden"
            animate={isActive ? 'visible' : 'hidden'}
          >
            <Logos className="p-0 lg:pl-6 h-6 lg:h-20 justify-center text-secondary " />
          </motion.div>
        </div>
        <motion.h6
          className="text-md lg:text-4xl font-light"
          variants={animationVariants}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
          transition={{ duration: 0.5 }}
        >
          {description}
        </motion.h6>
      </div>
    </Link>
  );
};

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateViewportSize = () => {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      updateViewportSize();
      window.addEventListener('resize', updateViewportSize);
      return () => window.removeEventListener('resize', updateViewportSize);
    }
  }, []);

  // Adjust transformation based on viewport size
  const h3Y = useTransform(
    scrollYProgress,
    [0, 1],
    [-viewportSize.height / 2, viewportSize.height / 2]
  );
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const handleHover = useCallback((service: string | null) => {
    setHoveredService(service);
  }, []);
  const services = [
    {
      title: 'Events',
      description: 'We organize events to improve and promote sport in Africa.',
      svg: EventLogo,
      url: '/services/events',
    },
    {
      title: 'Workforces',
      description:
        'We develop young sports talent, shaping them into professionals as athletes, coaches, content creators, or trainers.',
      svg: WorkforceLogo,
      url: '/services/workforces',
    },
    {
      title: 'Health',
      description:
        'We contribute to the training of physical and mental health professionals in the field of sport.',
      svg: HealthLogo,
      url: '/services/heath',
    },
    {
      title: 'Infrastructures',
      description:
        'We support the development of high-level sports infrastructure in Africa.',
      svg: InfraLogo,
      url: '/services/infrastructures',
    },
  ];

  const sectionClassNames =
    'w-full min-h-full pb-20 md:pb-72 lg:py-72 overflow-hidden font-clash bg-primary text-white';
  const titleClassNames = 'uppercase text-xl lg:text-3xl px-6 md:px-16';
  const servicesClassNames =
    'uppercase text-3xl lg:text-8xl font-black flex-col px-6 container';

  return (
    <section ref={ref} className={sectionClassNames} id="services">
      <div className="flex flex-col md:flex-row items-start my-20">
        <motion.h3
          className={titleClassNames}
          style={viewportSize.width > 1024 ? { y: h3Y } : {}}
        >
          Services
        </motion.h3>
        <motion.div
          className={servicesClassNames}
          style={viewportSize.width > 1024 ? { y: textY } : {}}
        >
          {services.map((service) => (
            <ServiceSection
              url={service.url}
              key={service.title}
              title={service.title}
              description={service.description}
              isActive={hoveredService === service.title}
              onHover={handleHover}
              logo={service.svg}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
