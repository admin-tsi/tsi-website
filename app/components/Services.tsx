import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EventLogo, HealthLogo, InfraLogo, WorkforceLogo } from '@/utils/svgs';

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  svg: React.ElementType;
  progress: any;
  range: [number, number];
  targetScale: number;
  textColor?: string;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ i, title, description, url, svg: SvgComponent, progress, range, targetScale, textColor, backgroundColor }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  return (
    <div ref={container} className="h-screen flex justify-center items-center sticky top-0">
      <motion.div
        className={`max-w-5xl w-full h-3/6 ${backgroundColor} text-white border-gray-300 border rounded-lg shadow-xl transition duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 flex overflow-hidden`}
        style={{ marginTop: `calc(-5vh + ${i * 50}px)`, scale }}
      >
        <div className="flex flex-col justify-between p-4 m-4 sm:w-full lg:w-3/5">
          <div className="flex items-center">
            <SvgComponent className="w-6 h-6 md:w-12 md:h-12" />
            <h2 className="text-2xl font-semibold mx-4 mb-2 sm:text-3xl">{title}</h2>
          </div>
          <p className="text-md md:text-lg">{description}</p>
          <div
            className="bg-white py-4 px-2 rounded-full w-full md:w-2/6 text-center font-medium hover:scale-105 transition duration-300 ease-in-out">
            <a href={url} target="_blank" rel="noopener noreferrer"
               className={`${textColor}`}>See more</a>
          </div>
        </div>

        <div className="hidden md:block w-2/5 relative m-12">
          <motion.div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
          >
            <motion.img
              style={{ scale: imageScale }}
              src="https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg"
              className="w-full h-full object-cover"
              alt="Dynamic"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

interface Service {
  title: string;
  description: string;
  svg: React.ElementType;
  url: string;
  background?: string;
  textColor?: string;
}

const services: Service[] = [
  {
    title: 'Events',
    description: 'We orchestrate premier sporting events across Africa, fostering talent, unity, and global recognition. Through engaging tournaments and workshops, we aim to spotlight and elevate the continent\'s sporting scene.',
    svg: EventLogo,
    url: '/services/events',
    background: 'bg-cyan-700',
    textColor: 'text-cyan-700',
  },
  {
    title: 'Workforces',
    description: 'Our program focuses on molding young sports enthusiasts into professionals, including athletes, coaches, and trainers. Through targeted training, we empower them with the skills needed for success in and out of the arena.',
    svg: WorkforceLogo,
    url: '/services/workforces',
    background: 'bg-cyan-900',
    textColor: 'text-cyan-900',
  },
  {
    title: 'Health',
    description: 'We advance physical and mental well-being in sports by training health professionals in sports medicine, psychology, and nutrition, ensuring athletes achieve peak performance and holistic health.',
    svg: HealthLogo,
    url: '/services/health',
    background: 'bg-yellow-500',
    textColor: 'text-yellow-500',
  },
  {
    title: 'Infrastructures',
    description: 'Committed to elevating Africa\'s sporting infrastructure, we invest in modern facilities to nurture talent, host international events, and inspire community participation, setting the stage for global competitiveness.',
    svg: InfraLogo,
    url: '/services/infrastructures',
    background: 'bg-amber-600',
    textColor: 'text-amber-600',
  },
];

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });


  return (
    <section ref={ref} className="font-clash relative mt-[50vh]" id="services">
      <motion.h3 className="text-4xl md:text-8xl text-center font-medium text-primary">Our services</motion.h3>
      {services.map((service, i) => {
        const targetScale = 1 - ((services.length - i) * 0.05);
        return <Card key={`p_${i}`} i={i} {...service} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} backgroundColor={service.background} textColor={service.textColor} />
      })}
    </section>);
};

export default Services;
