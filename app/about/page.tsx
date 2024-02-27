"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '@/components/Footer';
import One from '../../public/biography/1.jpg';

export default function Page() {
  const teamMembers = [
    {
      name: 'Ian Mahinmi',
      role: 'Captain & Treasure Hunter',
      description:
        'Creates tile jewels, devises a solution to every problem and gets to the bottom of any question until he strikes gold.',
      imgSrc: One,
    },
    {
      name: 'Sebastian Rauch',
      role: 'Captain & Star Navigator',
      description:
        'Designs celestial ornaments, pursues his dreams, and navigates ship and crew across the open sea with subtle assurance.',
      imgSrc: One,
    },
    {
      name: 'Anne Hofmann',
      role: 'Co-Captain & Helmswoman',
      description:
        'Consults, designs and navigates. Steers order processing with patience and composure and keeps the ship on course.',
      imgSrc: One,
    },
  ];

  const companyValues = [
    {
      title: 'Integrity',
      description:
        'We adhere to the highest ethical standards, ensuring our work is always trustworthy and honorable.',
    },
    {
      title: 'Innovation',
      description:
        'We constantly seek new and creative solutions to challenges, pushing the boundaries of what is possible.',
    },
    {
      title: 'Excellence',
      description:
        'We strive for excellence in everything we do, from our services to our customer relationships.',
    },
  ];

  const container = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [1, 0], [1.5, 1]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <div className="font-clash z-50 bg-base">
        <section className="px-6 md:px-16 py-10 md:py-26 font-clash my-48">
          <div className=" mx-auto flex justify-between text-primary">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold uppercase tracking-wide">
                About TSI
              </h2>
            </div>
            <div className="w-1/2">
              <h1 className="text-5xl font-semibold leading-tight mb-6">
                Waving the TSI flag and doing big things since 2020.
              </h1>
              <p className="text-lg">
                Our mission at TSI is to foster the growth of the sports industry
                in Benin and Africa, emphasizing innovation and excellence. Join
                us in shaping the future of African sports.Our mission at TSI is
                to foster the growth of the sports industry in Benin and Africa,
                emphasizing innovation and excellence. Join us in shaping the
                future of African sports.
              </p>
              <div className="mt-6">
                <a href="#" className="underline font-semibold">
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-10 md:py-26 font-clash my-48 text-primary values" ref={container}>
          <h2 className="text-6xl font-medium mb-4">
            We're a team driven by conviction. These are our people and their
            stories.
          </h2>
          <div className="flex flex-col items-center justify-center  ">
            <motion.div
              className=" w-full h-[60vh] flex items-center justify-center overflow-hidden m-6"
            >
              <motion.img
                style={{ scale: imageScale }}
                src="https://thetournament.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-at-5.59.00-PM.png"
                className="w-2/3 object-cover"
                alt="Dynamic"
              />
            </motion.div>
          </div>
          <div className="flex items-center justify-center mt-12">
            <h2 className="text-6xl font-medium mb-4">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="py-12">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      className="w-full object-cover mx-auto"
                      src={member.imgSrc.src}
                      alt={member.name}
                    />
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <h4 className="mt-2 text-sm text-gray-600">{member.role}</h4>
                    <p className="mt-3 text-base text-gray-500">
                      {member.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </motion.div>
  );
}
