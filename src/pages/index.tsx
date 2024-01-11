import { Logo, MobileLogo } from '@/utils/svgs';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
export default function Index() {
  let easing = [0.6, -0.05, 0.01, 0.99];

  return (
    <div className="flex flex-col h-screen relative">
      <nav className="w-full z-20 top-0 left-0 absolute p-4 mix-blend-difference">
        <div className="flex justify-between items-center">
          <a href="#" aria-label="Home">
            <span className="md:hidden">
              <MobileLogo className="text-white" />
            </span>
            <span className="hidden md:block">
              <Logo />
            </span>
          </a>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none ring-4 ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
          >
            MENU
          </button>
        </div>
      </nav>

      <section className="relative flex items-center min-h-screen bg-cover bg-center font-clash ">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10 bg-neutral2 mtz-vlc-dkbcc"
          autoPlay
          loop
          muted
          preload="meta"
        >
          <source src="e.mp4" type="video/mp4" />
        </video>
        <div className="mix-blend-difference text-white font-bold text-center w-full left-1/2 -translate-x-1/2 absolute uppercase overflow-hidden bottom-0 mb-12 font-clash px-4">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, ease: easing, duration: 1.5 }}
              className="text-2xl sm:text-3xl md:text-5xl xl:text-7xl"
            >
              Everyone has
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, ease: easing, duration: 1.7 }}
              className="text-3xl sm:text-4xl md:text-6xl xl:text-8xl"
            >
              A story to tell
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 150 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, ease: easing, duration: 1.9 }}
              className="text-4xl sm:text-5xl md:text-7xl xl:text-9xl"
            >
              And to be heard
            </motion.div>
          </div>
          <motion.h3
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, ease: easing, duration: 2.2 }}
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
              transition={{ delay: 1, ease: easing, duration: 2.2 }}
              className="text-xs sm:text-lg font-light"
            >
              Elevate Sports In Africa
            </motion.h3>
            <motion.h3
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, ease: easing, duration: 2.2 }}
              className="text-xs sm:text-lg font-light"
            >
              Based in Benin 🇧🇯
            </motion.h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
