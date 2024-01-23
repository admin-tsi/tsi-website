import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IanTradi from '../../../public/ian_tradi.png';
import One from '../../../public/biography/1.jpg';
import Two from '../../../public/biography/2.jpg';
import Three from '../../../public/biography/3.jpg';
import Four from '../../../public/biography/4.jpg';
import Five from '../../../public/biography/5.jpg';
import Six from '../../../public/biography/6.jpg';
import Seven from '../../../public/biography/7.jpg';
import Eight from '../../../public/biography/8.jpg';
import Nine from '../../../public/biography/9.jpg';

export default function Index() {
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
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="container mx-auto h-full">
          <img
            src={IanTradi.src}
            alt="Ian Mahinmi"
            className="w-full h-full object-cover object-center" // Adjust image to cover the new height
          />

          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold">TSE</h1>
              <p className="text-xl md:text-2xl font-light mt-4">
                Ian Mahinmi (born November 5, 1986) is a French former
                professional basketball player...
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="i-am-foundation-section">
        <div className="container mx-auto py-12 md:py-24">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold">
              I AM Foundation: Empowering Youth
            </h2>
            <p className="mt-4">
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

      <section className="gallery-section">
        <div className="container mx-auto py-12 md:py-24">
          <motion.div variants={fadeIn}>
            <h2 className="text-3xl font-bold text-center">Gallery</h2>
            <p className="text-center mt-4 mb-8">
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
