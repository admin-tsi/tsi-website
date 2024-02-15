"use client";
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';


export default function HomePage() {
  const controls = useAnimation();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ backgroundColor: entry.target.getAttribute('data-bgcolor') });
        }
      });
    };

    let observer = new IntersectionObserver(callback, { threshold: 0.5 });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect(); // Clean up
  }, [controls]);

  return (
    <motion.div
      initial={{ backgroundColor: '#ffffff' }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      <section id="section1" data-bgcolor="#3490dc" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-3xl">Section 1</h1>
      </section>
      <section id="section2" data-bgcolor="#e3342f" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-3xl">Section 2</h1>
      </section>
      <section id="section3" data-bgcolor="#f6993f" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-3xl">Section 3</h1>
      </section>
      <section id="section4" data-bgcolor="#38c172" className="min-h-screen flex items-center justify-center">
        <h1 className="text-white text-3xl">Section 4</h1>
      </section>
    </motion.div>
  );
}
