import { motion } from 'framer-motion'; // Import motion if it's not already imported
import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';

interface ArticleSectionProps {
  onMouseEnter: any;
  onMouseLeave: any;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({
  onMouseEnter,
  onMouseLeave,
}) => {
  const ref = useRef(null);
  const router = useRouter();
  const bgVariants = {
    onscreen: {
      scaleY: 0,
      transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] },
    },
    offscreen: {
      scaleY: 1,
    },
  };
  return (
    <section
      className="px-6 py-10 md:py-26 font-clash min-h-screen relative"
      ref={ref}
    >
      <div className="flex flex-col mb-2 lg:mt-20 lg:mb-12 px-4 lg:px-16">
        <div className="flex items-center mb-12 justify-between">
          <h2 className="text-primary text-3xl lg:text-6xl pr-3 ">Latest</h2>
          <div className="border m-4 w-full hidden lg:block border-primary"></div>
          <motion.button
            whileHover={{
              scale: 1,
              transition: { ease: 'easeInOut', duration: 0.5 },
              backgroundColor: '#E9C168',
            }}
            onClick={() => {
              router.push('/news');
            }}
            type="button"
            className="text-white bg-primary text-xxs md:text-md focus:outline-none font-medium rounded-full border-white border-2 px-4 py-2 lg:px-12 lg:py-4 whitespace-nowrap"
          >
            VIEW ALL
          </motion.button>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div
            className="col-span-4 md:col-span-4 lg:col-span-2 row-span-2 lg:flex-shrink-0  transform translate-x-10 opacity-0 h-[250px] lg:min-h-[375px] lg:h-auto"
            style={{ transform: 'translate(0px, 0px)', opacity: 1 }}
          >
            <div className="h-full transform transition duration-300 ease-in-out hover:scale-105">
              <img
                src="https://images.wsj.net/im-880822/?width=1278&size=1"
                alt="Big Article Image"
                className="w-full object-cover h-full"
              />
              <motion.div
                className="bg-secondary absolute inset-0 origin-top h-full w-full z-50"
                variants={bgVariants}
              ></motion.div>
              <div className="absolute inset-0 bg-black bg-opacity-30 z-40"></div>
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
              <motion.div
                className="bg-secondary absolute inset-0 origin-top h-full w-full z-50"
                variants={bgVariants}
              ></motion.div>
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
              <motion.div
                className="bg-secondary absolute inset-0 origin-top h-full w-full z-50"
                variants={bgVariants}
              ></motion.div>
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
              <motion.div
                className="bg-secondary absolute inset-0 origin-top h-full w-full z-50"
                variants={bgVariants}
              ></motion.div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleSection;
