"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IanTradi from "../../../public/img_2.png";
import One from "../../../public/biography/1.jpg";
import Two from "../../../public/biography/2.jpg";
import Image from "next/image";

// Define TypeScript interfaces for your components
interface Event {
  imgs: string[]; // Assuming these are the import paths for images
  title: string;
  description: string;
}

interface EventCardProps {
  event: Event;
  fadeInUp: any; // Define more specific type if known
}

// Define SVG icons directly in the file
const LeftArrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Page: React.FC = () => {
  // Define your animation variants
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

  // Sample data with multiple images for events
  const imageData: Event[] = [
    {
      imgs: [One, Two].map((img) => img.src), // Convert to src strings if using module imports
      title: "Event Title 1",
      description: "Event Description 1",
    },
    {
      imgs: [Two].map((img) => img.src), // Single image event for comparison
      title: "Event Title 2",
      description: "Event Description 2",
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="font-cinzel"
    >
      <div className="font-clash z-50 bg-base overflow-hidden">
        <Header />
        <section className="relative bg-base h-[50vh]">
          <div className=" h-full">
            <Image
              src={IanTradi.src}
              alt="Ian Mahinmi"
              className="w-screen h-full object-cover object-center" // Adjust image to cover the new height
              fill
            />

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold">TSE</h1>
                <p className="text-xl md:text-2xl font-light mt-4">
                  WE ORGANIZE EVENTS TO IMPROVE AND PROMOTE SPORT IN AFRICA.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="i-am-foundation-section">
          <div className="container mx-auto py-12 md:py-24">
            <motion.div variants={fadeInUp}>
              <p className="mt-4">
                Lorem ipsum s simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`&apos;`s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </motion.div>
          </div>
        </section>
        <section className="event-section py-12">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {imageData.map((event, index) => (
              <EventCard key={index} event={event} fadeInUp={fadeInUp} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </motion.div>
  );
};

const EventCard: React.FC<EventCardProps> = ({ event, fadeInUp }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.imgs.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? event.imgs.length - 1 : prevIndex - 1,
    );
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="event-card cursor-pointer overflow-hidden rounded-lg shadow-lg relative"
    >
      <Image
        src={event.imgs[currentImageIndex]}
        alt={event.title}
        className="w-full h-full object-cover"
        fill
      />
      {event.imgs.length > 1 && (
        <div className="absolute inset-0 flex justify-between items-center px-4 text-white">
          <button onClick={prevImage} className="focus:outline-none">
            <LeftArrow />
          </button>
          <button onClick={nextImage} className="focus:outline-none">
            <RightArrow />
          </button>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p>{event.description}</p>
        {event.imgs.length > 1 && (
          <p>{`${currentImageIndex + 1} of ${event.imgs.length}`}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Page;
