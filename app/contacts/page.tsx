"use client";

import React from "react";
import { motion } from "framer-motion";

const Page: React.FC = () => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <section className="bg-primary text-white py-6 font-clash pt-20 lg:pt-44 w-full min-h-screen flex flex-col lg:flex-row">
        <div className="px-4">
          <h1 className="py-10 text-4xl lg:text-8xl font-bold">
            LET`&apos;`S TALK.
          </h1>
          <h1 className="text-slate-300 text-xs uppercase mb-4">
            Send us an email
          </h1>

          <h1 className="text-slate-300 text-xs uppercase  ">Our Office</h1>
          <h2 className="text-white ">Haie vive 1602, Ipsum Lorem</h2>
          <h2 className="text-white ">Rue Poisson</h2>
          <h2 className="text-white ">+229 96050020</h2>
          <h2 className="text-white ">N: 15.72816, W: 39.30582</h2>
          <div className="mt-8 container ">
            <div className="flex lg:flex-row gap-2 text-xs md:text-md">
              <motion.span
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-full border text-center flex items-center justify-center min-w-[60px] sm:min-w-[120px] h-8 sm:h-10"
                whileHover={{
                  scale: 1.1,
                  transition: { ease: "easeInOut", duration: 0.5 },
                  backgroundColor: "#E9C168",
                }}
              >
                <a href="https://www.facebook.com/people/Tailoring-Sports-Investments/61554677080597/?mibextid=%22%22">
                  Facebook
                </a>
              </motion.span>
              <motion.span
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-full border text-center flex items-center justify-center min-w-[60px] sm:min-w-[120px] h-8 sm:h-10"
                whileHover={{
                  scale: 1.1,
                  transition: { ease: "easeInOut", duration: 0.5 },
                  backgroundColor: "#E9C168",
                }}
              >
                <a href="https://www.instagram.com/tailoringsports">
                  Instagram
                </a>
              </motion.span>
              <motion.span
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-full border text-center flex items-center justify-center min-w-[60px] sm:min-w-[120px] h-8 sm:h-10"
                whileHover={{
                  scale: 1.1,
                  transition: { ease: "easeInOut", duration: 0.5 },
                  backgroundColor: "#E9C168",
                }}
              >
                X/Twitter
              </motion.span>
              <motion.span
                className="px-2 sm:px-4 py-1 sm:py-2 rounded-full border text-center flex items-center justify-center min-w-[60px] sm:min-w-[120px] h-8 sm:h-10"
                whileHover={{
                  scale: 1.1,
                  transition: { ease: "easeInOut", duration: 0.5 },
                  backgroundColor: "#E9C168",
                }}
              >
                <a href="https://www.linkedin.com/company/tailoring-sports-investments/">
                  Linkedin
                </a>
              </motion.span>
            </div>
          </div>
        </div>

        <div className="p-4 flex-1">
          <h1 className="text-slate-300 text-xs uppercase mt-40">
            Contact Form
          </h1>
          <div className="mt-8">
            <div className="mb-4">
              <span className="text-xl font-bold">REGISTER INTEREST</span>
              <span className="text-sm float-right align-top pt-1">
                *REQUIRED FIELDS
              </span>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full ">
                  <label htmlFor="firstName" className="uppercase text-xs">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="bg-transparent border-b border-white text-white p-2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lastName" className="uppercase text-xs">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="bg-transparent border-b border-white text-white p-2 focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col w-full ">
                  <label htmlFor="email" className="uppercase text-xs">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent border-b border-white text-white p-2 focus:outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col w-full ">
                  <label htmlFor="phone" className="uppercase text-xs">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="bg-transparent border-b border-white text-white p-2 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="request" className="uppercase text-xs">
                  Request*
                </label>
                <textarea
                  name="request"
                  id="request"
                  className="bg-transparent border-b border-white text-white p-2 focus:outline-none"
                  rows={3}
                  required
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  id="privacyPolicy"
                  className="accent-white h-4 w-4"
                />
                <label htmlFor="privacyPolicy" className="ml-2 text-xs">
                  I have read and accept the privacy policy.
                </label>
              </div>
              <button
                type="submit"
                className="self-start px-8 py-4 mt-4 bg-white text-black rounded-full font-bold uppercase text-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Page;
