// Footer.tsx
import React from 'react';
import { MobileLogo } from '@/utils/svgs';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-6 font-clash">
      <div className="mx-auto px-4 flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-slate-300 text-xs uppercase mb-4">
            Send us an email
          </h1>
          <a
            href="mailto:contact@tailoringsportinvestisement.bj"
            className="glob-hover font-bold mb-8"
          >
            <div className="flex items-baseline">
              <MobileLogo className="text-secondary h-5 md:h-10" />
              <h1 className="uppercase text-xxs xs:text-xs md:text-xl ml-2 ">
                contact@tailoringsportinvestisement.bj
              </h1>
            </div>
          </a>
          <div className="flex justify-between">
            <div className="text-xs md:text-md">
              <h1 className="text-slate-300 text-xs uppercase my-4">
                Our Office
              </h1>
              <h2 className="text-white my-1">Haie vive 1602, Ipsum Lorem</h2>
              <h2 className="text-white my-1">Rue Poisson</h2>
              <h2 className="text-white my-1">+229 96050020</h2>
              <h2 className="text-white my-1">N: 15.72816, W: 39.30582</h2>
            </div>
            <div className="flex flex-col text-xs md:text-md">
              <h1 className="text-slate-300 text-xs uppercase my-4">Socials</h1>
              <motion.span
                className="px-4 py-2 rounded-full border my-1"
                whileHover={{
                  scale: 1.1,
                  transition: { ease: 'easeInOut', duration: 0.5 },
                  backgroundColor: '#E9C168',
                }}
              >
                Facebook
              </motion.span>
              <motion.span
                className="px-4 py-2 rounded-full border my-1"
                whileHover={{
                  scale: 1.1,
                  transition: { ease: 'easeInOut', duration: 0.5 },
                  backgroundColor: '#E9C168',
                }}
              >
                Instagram
              </motion.span>
              <motion.span
                className="px-4 py-2 rounded-full border my-1 text-center"
                whileHover={{
                  scale: 1.1,
                  transition: { ease: 'easeInOut', duration: 0.5 },
                  backgroundColor: '#E9C168',
                }}
              >
                Twitter
              </motion.span>
              <motion.span
                className="px-4 py-2 rounded-full border mb-6 text-center"
                whileHover={{
                  scale: 1.1,
                  transition: { ease: 'easeInOut', duration: 0.5 },
                  backgroundColor: '#E9C168',
                }}
              >
                Linkedin
              </motion.span>
            </div>
          </div>
        </div>
        <div className="border my-2"></div>

        <div className="mt-4 flex justify-between">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Tailoring Sport Investment. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
