import React from 'react';
import { useRouter } from 'next/router';
import { Logo, MobileLogo, TailoringSportEvent } from '@/utils/svgs';
import Link from 'next/link';
import Menu from '@/components/Menu';

const Header = () => {
  // Use the useRouter hook to access the current route
  const router = useRouter();

  // Determine if the current route is '/event'
  const isEventPage = router.pathname === '/events';

  return (
    <nav className="w-full z-20 top-0 left-0 fixed p-4 ">
      <div className="flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <span className="md:hidden mix-blend-difference">
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
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
