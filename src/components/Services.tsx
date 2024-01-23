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
        className="pt-10 hover:text-secondary text-4xl lg:text-8xl font-black uppercase"
      >
        {title}
      </motion.h3>
      <motion.h6
        className="text-2xl lg:text-4xl font-light"
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
  // Initialize with a default value, such as `false`
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Define a function to update the state based on the media query
      const media = window.matchMedia(query);
      const updateMatch = () => {
        setMatches(media.matches);
      };

      // Set the initial state based on the current window properties
      updateMatch();

      // Add the listener for changes in the media query
      media.addEventListener('change', updateMatch);

      // Cleanup function to remove the listener when the component unmounts
      return () => media.removeEventListener('change', updateMatch);
    }
  }, [query]);

  return matches;
};

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const [viewportHeight, setViewportHeight] = useState(0);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    // Update the state to the actual window height once the component is mounted
    if (typeof window !== 'undefined') {
      const updateViewportHeight = () => {
        setViewportHeight(window.innerHeight);
      };

      // Set the initial value
      updateViewportHeight();

      // Update the value on resize
      window.addEventListener('resize', updateViewportHeight);

      // Cleanup the event listener when the component unmounts
      return () => window.removeEventListener('resize', updateViewportHeight);
    }
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
    {
      title: 'Events',
      description: 'We organize events to improve and promote sport in Africa.',
    },
    {
      title: 'Workforces',
      description:
        'We develop young sports talent, shaping them into professionals as athletes, coaches, content creators, or trainers.',
    },
    {
      title: 'Health',
      description:
        'We contribute to the training of physical and mental health professionals in the field of sport.',
    },
    {
      title: 'Infrastructures',
      description:
        'We support the development of high-level sports infrastructure in Africa.',
    },
  ];

  return (
    <section
      ref={ref}
      className="w-full min-h-full pb-72 lg:py-72 overflow-hidden font-clash bg-primary text-white"
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
