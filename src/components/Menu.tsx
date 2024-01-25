import React, { useState, useEffect, MouseEvent } from 'react';
import { motion } from 'framer-motion';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mouseYPosition, setMouseYPosition] = useState<number>(0);

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
    // Calculate the element's top position relative to the viewport
    const elementTop = event.currentTarget.getBoundingClientRect().top;

    // Adjust mouseYPosition to account for the element's offset
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

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

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
        className="fixed top-0 left-0 w-full h-full bg-accent text-white z-50 flex flex-col justify-center items-center font-clash"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5"
        >
          {/* Replace this with your SVG close icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <ul className="text-center text-2xl md:text-8xl font-black uppercase">
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              onHoverStart={() => handleHoverStart(index)}
              onHoverEnd={handleHoverEnd}
              onMouseMove={handleMouseMove}
              variants={menuItemVariants}
              animate={
                hoveredItem === null || hoveredItem === index
                  ? 'default'
                  : 'dimmed'
              }
              className="mb-4 relative"
            >
              {item}
              {hoveredItem === index && (
                <motion.span
                  style={{
                    position: 'absolute',
                    left: '110%',
                    top: mouseYPosition,
                  }}
                  variants={floatingTextVariants}
                  initial="hoverEnd" // Initial state
                  animate="hoverStart" // Animate to this state on hover start
                  exit="hoverEnd" // Animate to this state on hover end
                  className="text-sm text-white"
                >
                  Floating Text
                </motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default Menu;
