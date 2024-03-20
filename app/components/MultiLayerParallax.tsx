import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

type MultiLayerParallaxProps = {
  mouseEnter: React.MouseEventHandler<HTMLDivElement>;
  mouseLeave: React.MouseEventHandler<HTMLDivElement>;
};

export default function MultiLayerParallax({
  mouseEnter,
  mouseLeave,
}: MultiLayerParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"], {
    clamp: false,
    ease: easeIn,
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="w-full min-h-screen overflow-hidden relative grid place-items-center items-center"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <motion.div
        style={{ y: textY }}
        className="font-bold text-cyan-100 text-7xl md:text-9xl relative z-10 font-clash flex-col items-center justify-center text-center mix-blend-difference"
      >
        <h3 className="uppercase text-3xl md:text-7xl">Let&apos;s</h3>
        <div className="flex justify-center">
          <h3 className="uppercase text-3xl md:text-7xl">Build</h3>
          <Image
            src="https://assets-global.website-files.com/642402ce3901ac9095690c17/64f9cf621abdf9988819970c_img_1432432432532.png"
            alt=""
            className="rounded-full w-14 h-8 md:w-32 md:h-20 mx-4"
            fill
          />
          <h3 className="uppercase text-3xl md:text-7xl">the</h3>
        </div>
        <h3 className="uppercase text-4xl md:text-8xl">Future together</h3>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/img.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
    </div>
  );
}
