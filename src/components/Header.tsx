import React from 'react';
import { useRouter } from 'next/router';
import { Logo, MobileLogo, TailoringSportEvent } from '@/utils/svgs';
import Link from 'next/link';

const Header = () => {
  // Use the useRouter hook to access the current route
  const router = useRouter();

  // Determine if the current route is '/event'
  const isEventPage = router.pathname === '/events';

  return (
    <nav className="w-full z-20 top-0 left-0 fixed p-4 mix-blend-difference">
      <div className="flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <span className="md:hidden">
            {isEventPage ? (
              <TailoringSportEvent className="text-white" />
            ) : (
              <MobileLogo className="text-white" />
            )}
          </span>
          <span className="hidden md:block">
            {isEventPage ? <TailoringSportEvent /> : <Logo />}
          </span>
        </Link>
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
