import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EventLogo, HealthLogo, InfraLogo, WorkforceLogo } from '@/utils/svgs';
import Lenis from '@studio-freight/lenis';

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  svg: React.ElementType; // Assuming SVGs are React components
  progress: any; // use proper type from Framer Motion if available
  range: [number, number];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ i, title, description, url, svg: SvgComponent, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  const scale = useTransform(progress, range, [1, targetScale]);

  //const scale = useTransform(progress, range, [1, 2]);

  return (
    <div ref={container} className="h-screen flex justify-center items-center sticky top-0 text-black">
      <motion.div
        className="w-2/3 h-2/3 bg-white border-red-950 border-4 rounded-3xl shadow-lg p-6 m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        style={{ marginTop: `calc(-5vh + ${i * 50}px)`, scale: scale }}
      >
        <div className="flex justify-center mb-4">
          <SvgComponent className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
        <p className="text-lg mb-4">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">See more</a>
      </motion.div>
    </div>
  );
};

interface Service {
  title: string;
  description: string;
  svg: React.ElementType; // Use React.ElementType for SVG components
  url: string;
}

const services: Service[] = [
  {
    title: 'Events',
    description: 'We organize events to improve and promote sport in Africa.',
    svg: EventLogo,
    url: '/services/events',
  },
  {
    title: 'Workforces',
    description: 'We develop young sports talent, shaping them into professionals as athletes, coaches, content creators, or trainers.',
    svg: WorkforceLogo,
    url: '/services/workforces',
  },
  {
    title: 'Health',
    description: 'We contribute to the training of physical and mental health professionals in the field of sport.',
    svg: HealthLogo,
    url: '/services/health',
  },
  {
    title: 'Infrastructures',
    description: 'We support the development of high-level sports infrastructure in Africa.',
    svg: InfraLogo,
    url: '/services/infrastructures',
  },
];

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Clean up Lenis on component unmount
  }, []);

  return (
    <section ref={ref} className="font-clash relative mt-[50vh]" id="services" data-bgcolor="#032F35">
      {services.map((service, i) => {
        const targetScale = 1 - ((services.length - i) * 0.05);
        return <Card key={`p_${i}`} i={i} {...service} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>

      })}
    </section>);
};

export default Services;
