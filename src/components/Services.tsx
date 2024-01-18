import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ServiceSectionProps {
  title: string;
  description: string;
  isActive: boolean;
  onHover: (title: string | null) => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  isActive,
  onHover,
}) => {
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => onHover(title)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.h3
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, ease: [0.6, -0.05, 0.01, 0.99], duration: 2.2 }}
        className="pt-10"
      >
        {title}
      </motion.h3>
      <motion.h6
        className="text-4xl font-medium"
        variants={animationVariants}
        initial="hidden"
        animate={isActive ? 'visible' : 'hidden'}
        transition={{ duration: 0.5 }}
      >
        {description}
      </motion.h6>
    </div>
  );
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const h3Y = useTransform(
    scrollYProgress,
    [0, 1],
    [-viewportHeight / 2, viewportHeight / 2]
  );
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  const handleHover = useCallback((service: string | null) => {
    setHoveredService(service);
  }, []);

  const services = [
    { title: 'Events', description: 'We organize and manage events...' },
    { title: 'Workforces', description: 'We provide workforces...' },
    { title: 'Health', description: 'We provide health services...' },
    { title: 'Infrastructures', description: 'We provide infrastructures...' },
  ];

  return (
    <section
      ref={ref}
      className="w-full lg:min-h-full pb-72 lg:py-72 overflow-hidden font-clash bg-primary text-white"
    >
      <div className="flex flex-col md:flex-row items-start">
        <motion.h3
          className="uppercase text-xl lg:text-xl px-6 md:px-16"
          style={{ y: isSmallScreen ? 0 : h3Y }}
        >
          Services
        </motion.h3>
        <motion.div
          className="uppercase text-4xl lg:text-8xl font-black flex-col px-6"
          style={{ y: isSmallScreen ? 0 : textY }}
        >
          {services.map((service) => (
            <ServiceSection
              key={service.title}
              title={service.title}
              description={service.description}
              isActive={hoveredService === service.title}
              onHover={handleHover}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
