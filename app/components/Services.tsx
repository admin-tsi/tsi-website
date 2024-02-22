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
    offset: ['start end', 'start start'],
  });
  const scale = useTransform(progress, range, [1, targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  console.log(scale, "scale")
  return (
    <div ref={container} className="h-screen flex justify-center items-center sticky top-0 text-yellow-900">
      <motion.div
        className="max-w-5xl w-full h-3/6 bg-secondary border-gray-300 border rounded-lg shadow-xl transition duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 flex overflow-hidden"
        style={{ marginTop: `calc(-5vh + ${i * 50}px)`, scale }}
      >
        <div className="w-3/5 flex flex-col justify-between p-6 m-6">
            <div className="flex">
              <SvgComponent className="w-12 h-12 " />

              <h2 className="text-5xl font-semibold mx-4 mb-2">{title}</h2>
            </div>
            <p className="text-lg">{description}</p>
          <div className="bg-yellow-900 py-4 px-2 rounded-full w-2/6 text-center font-medium hover:scale-105 transition duration-300 ease-in-out">
            <a href={url} target="_blank" rel="noopener noreferrer"
               className="text-white">See more</a>
          </div>
        </div>

        <div className="w-2/5 relative m-12">
          <motion.div
            style={{ scale: imageScale }}
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
          >
            <img
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
  svg: React.ElementType; // Use React.ElementType for SVG components
  url: string;
}

const services: Service[] = [
  {
    title: 'Events',
    description: 'We orchestrate premier sporting events across Africa, fostering talent, unity, and global recognition. Through engaging tournaments and workshops, we aim to spotlight and elevate the continent\'s sporting scene.',
    svg: EventLogo,
    url: '/services/events',
  },
  {
    title: 'Workforces',
    description: 'Our program focuses on molding young sports enthusiasts into professionals, including athletes, coaches, and trainers. Through targeted training, we empower them with the skills needed for success in and out of the arena.',
    svg: WorkforceLogo,
    url: '/services/workforces',
  },
  {
    title: 'Health',
    description: 'We advance physical and mental well-being in sports by training health professionals in sports medicine, psychology, and nutrition, ensuring athletes achieve peak performance and holistic health.',
    svg: HealthLogo,
    url: '/services/health',
  },
  {
    title: 'Infrastructures',
    description: 'Committed to elevating Africa\'s sporting infrastructure, we invest in modern facilities to nurture talent, host international events, and inspire community participation, setting the stage for global competitiveness.',
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
    <section ref={ref} className="font-clash relative mt-[50vh]" id="services">
      <motion.h3 className="text-8xl text-center font-semibold text-primary">Our services</motion.h3>
      {services.map((service, i) => {
        const targetScale = 1 - ((services.length - i) * 0.05);
        return <Card key={`p_${i}`} i={i} {...service} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
      })}
    </section>);
};

export default Services;
