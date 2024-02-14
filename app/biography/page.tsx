import React from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import IanTradi from '../../public/ian_tradi.png';
import Jamaica from '../../public/biography/jamaica.png';
import France from '../../public/biography/france.png';
import Benin from '../../public/biography/benin.png';
import One from '../../public/biography/1.jpg';
import Two from '../../public/biography/2.jpg';
import Three from '../../public/biography/3.jpg';
import Four from '../../public/biography/4.jpg';
import Five from '../../public/biography/5.jpg';
import Six from '../../public/biography/6.jpg';
import Seven from '../../public/biography/7.jpg';
import Eight from '../../public/biography/8.jpg';
import Nine from '../../public/biography/9.jpg';

export default function Page() {
  // Animation Variants
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6 } },
  };

  const imageData = [
    {
      img: One,
      description: 'Ian Mahinmi',
    },
    {
      img: Two,
      description: 'Ian Mahinmi',
    },
    {
      img: Three,
      description: 'Ian Mahinmi',
    },
    {
      img: Four,
      description: 'Ian Mahinmi',
    },
    {
      img: Five,
      description: 'Ian Mahinmi',
    },
    {
      img: Six,
      description: 'Ian Mahinmi',
    },
    {
      img: Seven,
      description: 'Ian Mahinmi',
    },
    {
      img: Eight,
      description: 'Ian Mahinmi',
    },
    {
      img: Nine,
      description: 'Ian Mahinmi',
    },
  ];
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="font-cinzel"
    >
      {/* Hero Section */}
      <section className="mt-44 px-6 md:px-16">
        <div className="container mx-auto flex flex-col justify-between md:flex-row items-start py-12 md:py-24">
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">IAN MAHINMI</h1>
              <p className="text-xl md:text-2xl font-light mt-4">
                Ian Mahinmi, born on November 5, 1986, in Rouen, France, is a
                former professional basketball player with a richly diverse
                heritage. His father hails from Benin and his mother from
                Jamaica, a blend of cultures that has significantly influenced
                his life and values.
              </p>
              <div className="flex flex-row justify-between items-center mt-4">
                <div className="w-18 h-[5.2rem] overflow-hidden">
                  <img
                    src={Benin.src}
                    alt="Benin"
                    className="object-contain  h-full"
                  />
                </div>
                <div className="w-22 h-16 overflow-hidden">
                  <img
                    src={Jamaica.src}
                    alt="Jamaica"
                    className="object-contain h-full"
                  />
                </div>
                <div className="w-18 h-20 overflow-hidden">
                  <img
                    src={France.src}
                    alt="France"
                    className="object-contain  h-full"
                  />
                </div>
                {/*         <div className="w-22 h-16 overflow-hidden">
                  <img
                    src={Usa.src}
                    alt="USA"
                    className="object-contain  h-full"
                  />
                </div>*/}
              </div>
              <p className="text-xl md:text-2xl font-light mt-4"></p>
            </div>
          </div>
          <div className="w-full md:w-1/3 ">
            <img
              src={IanTradi.src}
              alt="Ian Mahinmi"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="nba px-6 md:px-16">
        <div className="container mx-auto py-12 md:py-24">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold">
              Basketball Career: NBA and France National Team
            </h2>
            <p className="mt-4 text-xl md:text-2xl">
              Mahinmi&apos;s journey in basketball began in{' '}
              <strong>France</strong>, where he played for{' '}
              <strong>STB Le Havre</strong>, showcasing his talent early on. His
              impressive skills on the court led to him being drafted{' '}
              <strong>28th overall</strong> by the{' '}
              <strong>San Antonio Spurs</strong> in the{' '}
              <strong>2005 NBA Draft</strong>, marking the beginning of an
              eventful NBA career. Throughout his time in the NBA, Mahinmi
              played for various teams, most notably the{' '}
              <strong>Dallas Mavericks</strong>, where he was a part of the{' '}
              <strong>2011 NBA Championship</strong> team. He also played
              significant roles with the <strong>Indiana Pacers</strong> and the{' '}
              <strong>Washington Wizards</strong>. His defensive prowess and
              rebounding skills earned him a reputation as a{' '}
              <strong>reliable center</strong>. Representing France in
              international basketball, Mahinmi demonstrated his commitment to
              his birth country, contributing significantly to the national
              team&apos;s successes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="i-am-foundation-section px-6 md:px-16">
        <div className="container mx-auto py-12 md:py-24">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold">
              I AM Foundation: Empowering Youth
            </h2>
            <p className="mt-4 text-xl md:text-2xl">
              <a
                href="https://iamfoundation.wpenginepowered.com/i-am/"
                target="_blank"
                className="gradient-link hover:underline font-semibold text-xl"
              >
                Ian Mahinmi I AM Foundation
              </a>{' '}
              is dedicated to{' '}
              <strong>nurturing strong, vibrant communities</strong>. Our focus
              is on fostering{' '}
              <strong>service, leadership, and mentorship</strong> both locally
              and globally. Our vision is to impact the lives of countless
              children and adults, instilling in them a{' '}
              <strong>healthy self-image</strong>, the ability to give and
              receive love, and the drive to contribute positively to one
              another and our planet. This ripple effect is our path to creating
              a <strong>brighter future for all</strong>.
              <br />
              <br />
              At the heart of our mission are core values that include{' '}
              <strong>
                Advocacy, Education, Integrity, Honesty, Compassion, Trust,
                Contribution, Love, Leadership, Joy, Spirituality, Teaching,
                Mastery, Creativity, Harmony, and Play
              </strong>
              . These values guide us in every action, every day, as we strive
              to embody them within our community and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="retirement px-6 md:px-16">
        <div className="container mx-auto py-12 md:py-24">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold">
              New Chapter: Retirement and Beyond
            </h2>
            <p className="mt-4 text-xl md:text-2xl">
              Off the court, Mahinmi is known for his{' '}
              <strong>philanthropic efforts</strong> and{' '}
              <strong>business ventures</strong>. He has been actively involved
              in community projects, demonstrating a deep connection to his
              diverse roots and a commitment to giving back. Following his
              retirement, Mahinmi embarked on a mission to{' '}
              <strong>revolutionize the sports industry</strong> in{' '}
              <strong>Africa</strong>, beginning with <strong>Benin</strong>,
              his father&apos;s homeland where he founded a company focusing on{' '}
              <strong>sports</strong> with the goal of elevating competition
              levels, encouraging creativity, and inspiring new generations of
              athletes and sports entrepreneurs. His efforts aim to transform
              the African sports landscape into a vibrant ecosystem, rich in
              opportunities and poised for global recognition. Ian
              Mahinmi&apos;s story is one of{' '}
              <strong>multicultural richness</strong> and{' '}
              <strong>professional achievement</strong>. From his early days in
              France to his triumphs in the NBA, and now his visionary work in
              Africa, Mahinmi&apos;s journey reflects his diverse background and
              commitment to making a lasting impact in the world of sports.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="gallery-section px-6 md:px-16">
        <div className="container mx-auto py-12 md:py-24">
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold text-center">Gallery</h2>
            <p className="text-center mt-4 mb-8 text-xl md:text-2xl">
              Explore Ian&apos;s journey through a curated collection of moments
              from his career and foundation events.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {imageData.map((image, index) => (
                <div key={index} className="relative overflow-hidden">
                  <img
                    src={image.img.src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    style={{ aspectRatio: '1 / 1' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                    <p className="text-white text-center">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
