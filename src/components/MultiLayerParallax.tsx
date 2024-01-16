import { easeIn, motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'], {
    clamp: false,
    ease: easeIn,
  });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={ref}
      className="w-full min-h-full overflow-hidden relative grid place-items-center items-center"
    >
      <motion.div
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10 font-clash flex-col items-center justify-center text-center"
      >
        <h3 className="uppercase text-7xl">Let's</h3>
        <h3 className="uppercase text-7xl">Build the</h3>
        <h3 className="uppercase text-8xl">Future together</h3>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/img.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
    </div>
  );
}
