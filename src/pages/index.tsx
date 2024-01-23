import { Star } from '@/utils/svgs';
import { cubicBezier, motion, useScroll, useTransform } from 'framer-motion';
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import useMouse from '@react-hook/mouse-position';
import MultiLayerParallax from '@/components/MultiLayerParallax';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Link from 'next/link';
function useConditionalMouse(ref: any) {
  return useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });
}
export default function Index() {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const ref = React.useRef(null);

  let mouseXPosition: number | null = 0;
  let mouseYPosition: number | null = 0;

  // @ts-ignore
  const mouse = useConditionalMouse(ref);

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: '16px',
      backgroundColor: 'white',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    play: {
      opacity: 1,
      height: 30,
      width: 60,
      fontSize: '14px',
      textTransform: 'uppercase',
      textColor: 'white',
      backgroundColor: '#E9C168',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    talk: {
      opacity: 1,
      height: 30,
      width: 90,
      fontSize: '14px',
      textTransform: 'uppercase',
      textColor: 'white',
      backgroundColor: '#E9C168',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    article: {
      opacity: 1,
      backgroundColor: '#fff',
      border: '0.01rem solid #000',
      color: '#000',
      height: 128,
      width: 128,
      fontSize: '32px',
      x: mouseXPosition !== null ? mouseXPosition - 48 : 0,
      y: mouseYPosition !== null ? mouseYPosition - 48 : 0,
    },
    image: {
      opacity: 1,
      height: '5rem', // Set the height as needed
      width: '5rem', // Set the width as needed
      backgroundColor: '#fff',
      x: mouseXPosition,
      y: mouseYPosition,
      backgroundImage: "url('ian_tradi.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '9999px', // for rounded image
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  function mouseEnter(text: string, variants: string) {
    setCursorText(text);
    setCursorVariant(variants);
  }

  function mouseLeave(text: string, variant: string) {
    setCursorText(text);
    setCursorVariant(variant);
  }

  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const translateY = useTransform(scrollY, [200, 800], [0, 1050], {
    clamp: true,
    ease: cubicBezier(0.6, -0.05, 0.01, 0.99),
  });

  const translateX = useTransform(scrollY, [400, 800], [0, -25], {
    clamp: true,
    ease: cubicBezier(0.6, -0.05, 0.01, 0.99),
  });

  const scale = useTransform(scrollY, [200, 700], [1, 0.35], {
    clamp: true,
    ease: cubicBezier(0.6, -0.05, 0.01, 0.99),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div className="flex flex-col h-screen relative" ref={ref}>
      <motion.div
        // @ts-ignore
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText font-clash">{cursorText}</span>
      </motion.div>

      <Header />
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.video
            className=" mtz-vlc-dkbcc"
            autoPlay
            controls={true}
            preload="meta"
          >
            <source src="hero.mp4" type="video/mp4" />
          </motion.video>
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeModal}
          >
            Close
          </button>
        </motion.div>
      )}

      <section
        className="relative flex items-center min-h-screen bg-cover bg-center font-clash "
        onMouseEnter={() => mouseEnter('play', 'play')}
        onMouseLeave={() => mouseLeave('', 'default')}
        onClick={openModal}
      >
        <motion.video
          className="absolute inset-0 w-full h-full object-cover -z-10 bg-neutral2 mtz-vlc-dkbcc"
          autoPlay
          loop
          muted
          preload="meta"
          style={{
            scale,
            translateY,
            translateX,
            transition: 'all 1s ease-in-out',
            transformOrigin: 'right top',
          }}
        >
          <source src="hero.mp4" type="video/mp4" />
        </motion.video>
        <div className="mix-blend-difference text-white font-bold text-center w-full left-1/2 -translate-x-1/2 absolute uppercase overflow-hidden bottom-0 mb-12 font-clash">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              style={{ translateY, transition: 'all 1.2s ease-in-out' }}
              transition={{ delay: 0.3, ease: easing, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl xl:text-7xl"
            >
              Shaping Future
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              style={{ translateY, transition: 'all 1.6s ease-in-out' }}
              transition={{ delay: 0.5, ease: easing, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-6xl xl:text-8xl"
            >
              Inspiring Progress
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              style={{ translateY, transition: 'all 1.8s ease-in-out' }}
              transition={{ delay: 0.7, ease: easing, duration: 0.9 }}
              className="text-4xl sm:text-5xl md:text-7xl xl:text-9xl"
            >
              Creating Impact
            </motion.div>
          </div>
          <motion.h3
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, ease: easing, duration: 2.2 }}
            style={{ translateY, transition: 'all 2.2s ease-in-out' }}
            className="text-lg font-light"
          >
            (Scroll to explore)
          </motion.h3>
        </div>
        <div className="mix-blend-screen text-lg text-white font-normal absolute bottom-0 p-4 font-clash w-full">
          <div className="overflow-hidden flex justify-between">
            <motion.h3
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              style={{ translateY, transition: 'all 2.2s ease-in-out' }}
              transition={{ delay: 1, ease: easing, duration: 2.2 }}
              className="text-xs sm:text-lg font-light"
            >
              Elevate Sports In Africa
            </motion.h3>
            <motion.h3
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              style={{ translateY, transition: 'all 2.2s ease-in-out' }}
              transition={{ delay: 1, ease: easing, duration: 2.2 }}
              className="text-xs sm:text-lg font-light"
            >
              Based in Benin 🇧🇯
            </motion.h3>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-16 py-10 md:py-26 font-clash my-12">
        <div className="flex flex-col w-full md:w-3/4">
          <div className="flex">
            <Star className="text-orange-700" />
            <h1 className="text-4xl text-primary font-bold uppercase pb-8">
              Who we are
            </h1>
          </div>
          <div className="scroll-reveal">
            <p className="text-3xl lg:text-4xl mr-12 w-full md:w-3/4">
              <span className="here">
                Welcome to TAILORING SPORTS INVESTMENTS (TSI), founded in August
                2023 by{' '}
                <span
                  className="font-semibold cursor-pointer animate-pulse"
                  onMouseEnter={() => mouseEnter('', 'image')}
                  onMouseLeave={() => mouseLeave('', 'default')}
                >
                  <Link href="/biography">Ian Mahinmi</Link>
                </span>{' '}
                , a seasoned entrepreneur and athlete with over 20 years of
                experience in NBA and the FIBA. Our mission at TSI is to foster
                the growth of the sports industry in Benin and Africa,
                emphasizing innovation and excellence. Join us in shaping the
                future of African sports.
              </span>
            </p>
          </div>
        </div>
      </section>
      <Services />
      <section className="px-6 md:px-36 py-10 md:py-26 font-clash">
        <div className="flex flex-col mb-2 lg:mt-20 lg:mb-12 px-4 lg:px-16">
          <div className="flex items-center mb-12 justify-between">
            <h2 className="text-primary text-3xl lg:text-6xl pr-3 ">Latest</h2>
            <div className="border m-4 w-full bg-primary hidden lg:block"></div>
            <motion.button
              whileHover={{
                scale: 1,
                transition: { ease: 'easeInOut', duration: 0.5 },
                backgroundColor: '#E9C168',
              }}
              type="button"
              className="text-white text-xxs md:text-md bg-primary focus:outline-none font-medium rounded-full px-4 py-2 lg:px-12 lg:py-4 whitespace-nowrap"
            >
              VIEW ALL
            </motion.button>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            onMouseEnter={() => mouseEnter('View', 'article')}
            onMouseLeave={() => mouseLeave('', 'default')}
          >
            <div
              className="col-span-4 md:col-span-2 row-span-2 lg:flex-shrink-0 lg:max-w-335px transform translate-x-10 opacity-0 h-[250px] lg:min-h-[375px] lg:h-auto"
              style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <div className="h-full transform transition duration-300 ease-in-out hover:scale-105">
                <img
                  src="https://images.wsj.net/im-880822/?width=1278&size=1"
                  alt="Big Article Image"
                  className="w-full object-cover h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 px-4 py-6 text-white flex flex-col justify-between lg:py-4 lg:px-8 z-10">
                  <div className="flex items-center space-x-4">
                    <h4 className="font-bebas uppercase text-sm tracking-widest leading-6 whitespace-nowrap flex-shrink-0 sm:text-base md:text-lg lg:text-xl">
                      Article
                    </h4>
                    <div
                      className="h-px w-full bg-white relative"
                      style={{ top: '-1px' }}
                    ></div>
                  </div>
                  <h3 className="font-bebas uppercase text-xl tracking-wide leading-6 max-w-306px lg:max-w-none  sm:text-lg md:text-xl lg:text-2xl">
                    Big Article Title
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-span-4">
              <div className="h-full transform transition duration-300 ease-in-out hover:scale-105">
                <img
                  src="https://cdn.nba.com/teams/legacy/www.nba.com/bulls/sites/bulls/files/ss_3pt_lavine_0.jpg"
                  alt="Small Article 1 Image"
                  className="w-full object-cover h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 px-4 py-6 text-white flex flex-col justify-between lg:py-4 lg:px-8 z-10">
                  <div className="flex items-center space-x-4">
                    <h4 className="font-bebas uppercase text-sm tracking-widest leading-6 whitespace-nowrap flex-shrink-0 sm:text-base md:text-lg lg:text-xl">
                      Article
                    </h4>
                    <div
                      className="h-px w-full bg-white relative"
                      style={{ top: '-1px' }}
                    ></div>
                  </div>
                  <h3 className="font-bebas uppercase text-xl tracking-wide leading-6 max-w-306px lg:max-w-none sm:text-lg md:text-xl lg:text-2xl">
                    Small Article 1 Title
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-span-4 md:col-span-2">
              <div className="h-full transform transition duration-300 ease-in-out hover:scale-105">
                <img
                  src="https://thetournament.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-at-5.59.00-PM.png"
                  alt="Small Article 2 Image"
                  className="w-full object-cover h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 px-4 py-6 text-white flex flex-col justify-between lg:py-4 lg:px-8 z-10">
                  <div className="flex items-center space-x-4">
                    <h4 className="font-bebas uppercase text-sm tracking-widest leading-6 whitespace-nowrap flex-shrink-0 sm:text-base md:text-lg lg:text-xl">
                      Article
                    </h4>
                    <div
                      className="h-px w-full bg-white relative"
                      style={{ top: '-1px' }}
                    ></div>
                  </div>
                  <h3 className="font-bebas uppercase text-xl tracking-wide leading-6 max-w-306px lg:max-w-none  sm:text-lg md:text-xl lg:text-2xl">
                    Small Article 2 Title
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-span-4 md:col-span-2">
              <div className="h-full transform transition duration-300 ease-in-out hover:scale-105">
                <img
                  src="https://thetournament.com/wp-content/uploads/2023/08/DSC03768-scaled.jpg"
                  alt="Small Article 3 Image"
                  className="w-full object-cover h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="absolute inset-0 px-4 py-6 text-white flex flex-col justify-between lg:py-4 lg:px-8 z-10">
                  <div className="flex items-center space-x-4">
                    <h4 className="font-bebas uppercase text-sm tracking-widest leading-6 whitespace-nowrap flex-shrink-0 sm:text-base md:text-lg lg:text-xl">
                      Article
                    </h4>
                    <div
                      className="h-px w-full bg-white relative"
                      style={{ top: '-1px' }}
                    ></div>
                  </div>
                  <h3 className="font-bebas uppercase text-xl tracking-wide leading-6 max-w-306px lg:max-w-none lg:text-2xl sm:text-lg md:text-xl">
                    Small Article 3 Title
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MultiLayerParallax
        mouseEnter={() => mouseEnter('Lets talk', 'talk')}
        mouseLeave={() => mouseLeave('', 'default')}
      />

      <Footer />
    </motion.div>
  );
}
