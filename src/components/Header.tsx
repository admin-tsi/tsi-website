import React from 'react';
import { Logo, MobileLogo } from '@/utils/svgs';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <nav className="w-full z-20 top-0 left-0 fixed p-4 mix-blend-difference">
      <div className="flex justify-between items-center">
        <a href="#" aria-label="Home">
          <span className="md:hidden">
            <MobileLogo className="text-white" />
          </span>
          <span className="hidden md:block">
            <Logo />
          </span>
        </a>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none ring-4 ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5"
        >
          MENU
        </button>
      </div>
    </nav>
  );
};

export default Header;
