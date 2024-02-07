import React, { useState, useEffect, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star } from '@/utils/svgs';
import { useRouter } from 'next/router'; // Correctly importing useRouter

// Define a type for the name of each menu item
type MenuItemName = 'Home' | 'Biography' | 'Services' | 'News' | 'Contacts';

// Define the structure of each menu item
type MenuItem = {
  name: MenuItemName;
  url: string;
};

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mouseYPosition, setMouseYPosition] = useState<number>(0);
  const router = useRouter(); // Use useRouter to handle routing

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  const transition = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
  };

  const menuItemVariants = {
    default: { opacity: 1 },
    dimmed: { opacity: 0.5 },
  };

  const handleHoverStart = (item: number) => {
    setHoveredItem(item);
  };

  const handleHoverEnd = () => {
    setHoveredItem(null);
  };

  const handleMouseMove = (event: MouseEvent<HTMLLIElement>) => {
    const elementTop = event.currentTarget.getBoundingClientRect().top;
    setMouseYPosition(event.clientY - elementTop);
  };

  const floatingTextVariants = {
    hoverStart: {
      opacity: 1,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
    hoverEnd: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  // Define floating texts with the specific type for keys
  const floatingTexts: Record<MenuItemName, string> = {
    Home: 'Welcome',
    Biography: 'About Ian Mahimi',
    Services: 'What We Offer',
    News: 'Latest news',
    Contacts: 'Get in Touch',
  };

  const menuItems: MenuItem[] = [
    { name: 'Home', url: '/' },
    { name: 'Biography', url: '/biography' },
    { name: 'Services', url: '/#services' },
    { name: 'News', url: '/news' },
    { name: 'Contacts', url: '/contacts' },
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none ring-4 ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
        >
          Menu
        </button>
      )}

      <motion.nav
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={transition}
        className="fixed top-0 left-0 w-full h-full bg-primary text-white z-50 flex flex-col justify-center items-center font-clash"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none ring-4 ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
        >
          Close
        </button>

        <ul className="text-center text-4xl md:text-8xl font-black uppercase">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              onHoverStart={() => handleHoverStart(index)}
              onHoverEnd={handleHoverEnd}
              onMouseMove={handleMouseMove}
              onClick={() => setIsOpen(false)}
              variants={menuItemVariants}
              animate={
                hoveredItem === null ||
                hoveredItem === index ||
                router.pathname === item.url
                  ? 'default'
                  : 'dimmed'
              }
              className="mb-4 relative"
            >
              {router.pathname === item.url && (
                <Star className="inline-block" /> // Display the MobileLogo if the item is active
              )}
              <Link href={item.url} className="ml-4">
                {item.name}
              </Link>
              {hoveredItem === index && (
                <motion.span
                  style={{
                    position: 'absolute',
                    left: '110%',
                    top: mouseYPosition,
                  }}
                  variants={floatingTextVariants}
                  initial="hoverEnd"
                  animate="hoverStart"
                  exit="hoverEnd"
                  className="text-sm text-white"
                >
                  {floatingTexts[item.name]}
                </motion.span>
              )}
            </motion.li>
          ))}
        </ul>
        <div className="text-lg text-white font-normal absolute bottom-0 p-4 font-clash w-full">
          <div className="flex gap-2 flex-wrap justify-center text-xs md:text-md m-4">
            <motion.span
              className="px-4 py-2 rounded-full border  flex items-center justify-center min-w-[100px] h-10"
              whileHover={{
                scale: 1.1,
                transition: { ease: 'easeInOut', duration: 0.5 },
                backgroundColor: '#E9C168',
              }}
            >
              <a href="https://www.facebook.com/people/Tailoring-Sports-Investments/61554677080597/?mibextid=%22%22">
                Facebook
              </a>
            </motion.span>
            <motion.span
              className="px-4 py-2 rounded-full border  flex items-center justify-center min-w-[100px] h-10"
              whileHover={{
                scale: 1.1,
                transition: { ease: 'easeInOut', duration: 0.5 },
                backgroundColor: '#E9C168',
              }}
            >
              <a href="https://www.instagram.com/tailoringsports">Instagram</a>
            </motion.span>
            <motion.span
              className="px-4 py-2 rounded-full border  text-center flex items-center justify-center min-w-[100px] h-10"
              whileHover={{
                scale: 1.1,
                transition: { ease: 'easeInOut', duration: 0.5 },
                backgroundColor: '#E9C168',
              }}
            >
              X/Twitter
            </motion.span>
            <motion.span
              className="px-4 py-2 rounded-full border  text-center flex items-center justify-center min-w-[100px] h-10"
              whileHover={{
                scale: 1.1,
                transition: { ease: 'easeInOut', duration: 0.5 },
                backgroundColor: '#E9C168',
              }}
            >
              <a href="https://www.linkedin.com/company/tailoring-sports-investments/">
                Linkedin
              </a>
            </motion.span>
          </div>
          <div className="flex w-full justify-between text-xs sm:text-md font-light pt-2">
            <h3>Elevate Sports In Africa</h3>
            <h3>Based in Benin 🇧🇯</h3>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Menu;
