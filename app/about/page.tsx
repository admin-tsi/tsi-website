"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import JobItem from "@/components/JobItem";
import TeamMemberModal, { TeamMember } from "@/components/TeamMember";
import CustomCursor from "@/components/CustomCursor";
import { useCustomCursor, useCustomMouse } from "@/hook/useConditionalMouse";
import Ian from "../../public/img_6.png";
import Xena from "../../public/img_5.png";
import Emile from "../../public/img_7.png";
import Families from "../../public/img_10.png";
import Image from "next/image";

export default function Page() {
  const teamMembers = [
    {
      name: "Ian Mahinmi",
      role: "Coach & CEO",
      description:
        "Creates tile jewels, devises a solution to every problem and gets to the bottom of any question until he strikes gold.",
      imgSrc: Ian.src,
    },
    {
      name: "Xena Arisa",
      role: "Goalkeeper & Executive Assistant",
      description:
        "Designs celestial ornaments, pursues his dreams, and navigates ship and crew across the open sea with subtle assurance.",
      imgSrc: Xena.src,
    },
    {
      name: "Emile Epaminondas",
      role: "Defender & Backend Developer",
      description:
        "Consults, designs and navigates. Steers order processing with patience and composure and keeps the ship on course.",
      imgSrc: Emile.src,
    },
    {
      name: "Stanlay Hounnouvi",
      role: "Defender & Fullstack Developer",
      description:
        "Designs and navigates. He is the one who keeps the ship on course and ensures that the crew is always in good spirits.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
    {
      name: "Jordan Vitou",
      role: "Offensive Midfielder & Tech Lead",
      description:
        "Designs and navigates. He is the one who keeps the ship on course and ensures that the crew is always in good spirits.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
    {
      name: "Elikem Medehou",
      role: "Box-to-Box Midfielder & Head of Digital Conception",
      description:
        "Creates tile jewels, devises a solution to every problem and gets to the bottom of any question until he strikes gold.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
    {
      name: "Esperanza Kounde",
      role: "Left Winger & Creative 3D Designer",
      description:
        "Designs celestial ornaments, pursues his dreams, and navigates ship and crew across the open sea with subtle assurance.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
    {
      name: "Précieux Dagba",
      role: "Right Winger & Graphic Designer/UI Designer",
      description:
        "Designs celestial ornaments, pursues his dreams, and navigates ship and crew across the open sea with subtle assurance.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
    {
      name: "Espérat Dimon",
      role: "Right Striker & Frontend Developer",
      description:
        "Designs celestial ornaments, pursues his dreams, and navigates ship and crew across the open sea with subtle assurance.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
    {
      name: "Ibrahim Fikara",
      role: "Center Forward & Marketing Manager",
      description:
        "Designs celestial ornaments, pursues his dreams, and navigates ship and crew across the open sea with subtle assurance.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
    {
      name: "Jerry Boko",
      role: "Right Striker & Visual content creator",
      description:
        "Designs celestial ornaments, pursues his dreams, and navigates ship and crew across the open sea with subtle assurance.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
    {
      name: "Jerry Boko",
      role: "Captain & Star Navigator",
      description:
        "Designs celestial ornaments, pursues his dreams, and navigates ship and crew across the open sea with subtle assurance.",
      imgSrc:
        "https://www.ueberbild.de/img/asset/YXNzZXRzL3RvbXRvbXRvbS5qcGc=?p=md-webp&s=114ac2c07ccdbe32452c6159ec096612",
    },
  ];

  const companyValues = [
    {
      title: "Tradition",
      description:
        "Honoring our roots and culture in every endeavor, we tirelessly strive to blend tradition with modern innovation for a richer legacy.",
      imgSrc:
        "https://blog.olivierlarose.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F7.6ae8015e.jpeg&w=2048&q=75",
    },
    {
      title: "Education",
      description:
        "Striving for excellence in execution and delivery, we ensure every project surpasses expectations with unmatched quality and precision.",
      imgSrc:
        "https://blog.olivierlarose.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.d5b577c3.jpg&w=2048&q=75",
    },
    {
      title: "Innovation",
      description:
        "Pioneering the Future of African Sports and Entertainment, leading with innovation and creativity, setting new industry standards.",
      imgSrc:
        "https://blog.olivierlarose.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.d5b577c3.jpg&w=2048&q=75",
    },
  ];

  const container = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [1, 0], [1.5, 1.2]);

  const companyValuesWithAnimation = companyValues.map((value, index) => ({
    ...value,
  }));

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Function to handle opening the modal
  const handleOpenModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  const { cursorVariant, cursorText, mouseEnter, mouseLeave } =
    useCustomCursor();

  const ref = React.useRef(null);

  const { mouseXPosition, mouseYPosition } = useCustomMouse(ref);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="relative"
      ref={ref}
    >
      <CustomCursor
        cursorText={cursorText}
        cursorVariant={cursorVariant}
        mouseXPosition={mouseXPosition}
        mouseYPosition={mouseYPosition}
      />
      <div className="font-clash z-50 bg-base overflow-hidden">
        <section className="px-4 sm:px-6 py-10 md:py-26 font-clash my-12 md:my-48">
          <div className="mx-auto flex flex-col md:flex-row justify-between text-black">
            <div className="md:flex-1 mb-6 md:mb-0">
              <h2 className="text-xl md:text-2xl font-medium uppercase italic tracking-wide">
                About
                <span className="font-cinzel italic font-medium px-2">TSI</span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-6">
                Waving the TSI flag and building towards big achievements since
                2023.
              </h1>
              <p className="md:text-lg font-thin">
                TSI is committed to revolutionizing the sports industry in Benin
                and throughout Africa. Our goal is to ignite innovation and
                pursue excellence, driving forward the development and
                visibility of African sports. We welcome you to join us on this
                ambitious journey, as we work together to forge a new future for
                African sports.
              </p>
              <div className="mt-6">
                <a href="#" className="underline font-semibold">
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-4 sm:px-6 py-10 md:py-26 font-clash my-12 md:my-48 text-black values"
          ref={container}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-4">
            Our passion binds us, driven by shared conviction. Here are our team
            members—their unique personalities embody our collective spirit.
          </h2>
          <div className="flex flex-col items-center justify-center">
            <motion.div className="w-full h-auto md:h-[70vh] flex items-center justify-center overflow-hidden m-6 md:m-12 px-4 md:px-48">
              <motion.img
                style={{ scale: imageScale }}
                src={Families.src}
                className="w-full object-cover md:object-fill"
                alt="Dynamic"
              />
            </motion.div>
          </div>
          <div className="py-6 md:py-12">
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="text-md font-medium text-gray-900 mb-6 md:mb-10 italic uppercase">
                Our <span className="font-cinzel">Values</span>
              </h2>
              <h2 className="text-xl font-thin text-gray-900 md:w-1/2 mb-6 md:mb-10">
                Guided by three foundational pillars, our mission at Tailoring
                Sports Investments (TSI) is to revolutionize the sports
                landscape in Africa. These principles deeply influence our
                strategy, shaping every project we embark on. By combining depth
                with precision and a visionary approach, we embed our efforts
                with a profound commitment.
              </h2>
            </div>
            <div>
              <div className="flex flex-col">
                {companyValuesWithAnimation.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col md:flex-row group"
                  >
                    <div className="w-full md:w-1/3 flex items-center justify-center p-4">
                      <motion.img
                        src={value.imgSrc}
                        alt={value.title}
                        className="max-w-full h-64 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      />
                    </div>

                    <div className="w-full md:w-2/3 flex flex-col justify-center border-t border-black">
                      <div>
                        <h2 className="font-cinzel pl-4 md:pl-0">
                          {"0" + (index + 1)}
                        </h2>
                        <h2 className="text-4xl md:text-8xl font-medium pl-4 md:pl-0">
                          {value.title}
                        </h2>
                      </div>
                      <motion.h6 className="text-gray-500 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pl-4 md:pl-0">
                        {value.description}
                      </motion.h6>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="text-black py-12 px-4">
          <div className="flex justify-between">
            <h2 className="text-5xl mb-32 uppercase">
              Meet our{" "}
              <span className="italic font-cinzel font-thin">Visionaries</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container ml-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="space-y-2 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-105"
                onClick={() => handleOpenModal(member)}
              >
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full h-5/6 object-cover"
                />
                <p className="text-sm font-medium uppercase font-cinzel">
                  {member.name}
                </p>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="p-4 md:p-12 lg:m-4 text-black mt-8">
          <div className="text-xl mb-8">
            <h1 className="font-thin font-cinzel">Career</h1>
          </div>
          <JobItem
            number=""
            title="Digiatal experience designer"
            description="16/04/24"
          />
          <JobItem
            number=""
            title="Frontend developer"
            description="View Job"
          />
          <JobItem number="" title="Backend developer" description="16/04/24" />
        </section>
      </div>
      <TeamMemberModal member={selectedMember} onClose={handleCloseModal} />

      <Footer />
    </motion.div>
  );
}
