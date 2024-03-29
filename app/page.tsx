"use client";
import React, { useEffect, useState } from "react";
import {
  cubicBezier,
  motion,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import ArticleSection from "@/components/Articles";
import { Star } from "@/utils/svgs";
import Link from "next/link";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { useCustomCursor, useCustomMouse } from "@/hook/useConditionalMouse";

export default function Page() {
  const controls = useAnimation();

  let easing = [0.6, -0.05, 0.01, 0.99];

  const ref = React.useRef(null);

  const { mouseXPosition, mouseYPosition } = useCustomMouse(ref);

  const { cursorVariant, cursorText, mouseEnter, mouseLeave } =
    useCustomCursor();

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [largeScreen, setLargeScreen] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setLargeScreen(window.innerWidth);
    };

    // Set the initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={ref}>
      <motion.div
        animate={controls}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="min-h-screen relative bg-base"
      >
        <CustomCursor
          cursorText={cursorText}
          cursorVariant={cursorVariant}
          mouseXPosition={mouseXPosition}
          mouseYPosition={mouseYPosition}
        />
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.video className=" mtz-vlc-dkbcc" autoPlay controls={true}>
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
          className="relative flex items-center min-h-screen bg-cover bg-center font-clash z-40"
          onMouseEnter={() => mouseEnter("play", "play")}
          onMouseLeave={() => mouseLeave("", "default")}
          onClick={openModal}
        >
          <motion.video
            className="absolute inset-0 w-full h-full object-cover -z-10 bg-neutral2 mtz-vlc-dkbcc"
            autoPlay
            loop
            muted
            preload="meta"
            style={
              largeScreen > 768
                ? {
                    scale,
                    translateY,
                    translateX,
                    transformOrigin: "right top",
                  }
                : {}
            }
          >
            <source src="hero.mp4" type="video/mp4" />
          </motion.video>
          <div className="mix-blend-difference text-white font-bold text-center w-full left-1/2 -translate-x-1/2 absolute uppercase overflow-hidden bottom-0 mb-12 font-clash">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                style={{ translateY }}
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
                style={{ translateY }}
                transition={{ delay: 0.6, ease: easing, duration: 0.7 }}
                className="text-3xl sm:text-4xl md:text-6xl xl:text-8xl"
              >
                Inspiring Progress
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                style={{ translateY }}
                transition={{ delay: 0.9, ease: easing, duration: 0.9 }}
                className="text-4xl sm:text-5xl md:text-7xl xl:text-9xl"
              >
                Creating Impact
              </motion.div>
            </div>
            <motion.h3
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, ease: easing, duration: 1.8 }}
              style={{ translateY }}
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
                style={{ translateY }}
                transition={{ delay: 1, ease: easing, duration: 1.8 }}
                className="text-xs sm:text-lg font-light"
              >
                Elevate Sports In Africa
              </motion.h3>
              <motion.h3
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                style={{ translateY }}
                transition={{ delay: 1, ease: easing, duration: 1.8 }}
                className="text-xs sm:text-lg font-light"
              >
                Based in Benin 🇧🇯
              </motion.h3>
            </div>
          </div>
        </section>
        <section className="px-6 md:px-16 py-10 md:py-26 font-clash min-h-screen">
          <div className="flex flex-col w-full md:w-3/4">
            <div className="flex">
              <Star className="text-orange-700" />
              <h1 className="text-3xl md:text-4xl text-primary font-bold uppercase pb-8">
                Who we are
              </h1>
            </div>
            <div className="scroll-reveal">
              <p className="text-2xl lg:text-4xl mr-12 w-full md:w-3/4">
                <span className="here">
                  Welcome to TAILORING SPORTS INVESTMENTS (TSI), founded in
                  August 2023 by{" "}
                  <span
                    className="font-semibold cursor-pointer animate-pulse"
                    onMouseEnter={() => mouseEnter("", "image")}
                    onMouseLeave={() => mouseLeave("", "default")}
                  >
                    <Link href="/biography">Ian Mahinmi</Link>
                  </span>
                  , a seasoned entrepreneur and athlete with over 20 years of
                  experience in NBA and the FIBA. Our mission at TSI is to
                  foster the growth of the sports industry in Benin and Africa,
                  emphasizing innovation and excellence. Join us in shaping the
                  future of African sports.
                </span>
              </p>
            </div>
          </div>
        </section>
        <Services />
        <ArticleSection
          onMouseEnter={() => mouseEnter("View", "article")}
          onMouseLeave={() => mouseLeave("", "default")}
        />
        <MultiLayerParallax
          mouseEnter={() => mouseEnter("Lets talk", "talk")}
          mouseLeave={() => mouseLeave("", "default")}
        />
      </motion.div>
      <Footer />
    </div>
  );
}
