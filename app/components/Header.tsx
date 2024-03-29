'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import {
  Logo,
  MobileLogo,
  TailoringSportEvent,
  TailoringSportWorkforce,
  TailoringSportInfra,
  TailoringSportHealth,
} from '@/utils/svgs';
import Link from 'next/link';
import Menu from '@/components/Menu';

const Header = () => {
  const pathname = usePathname();

  const services = [
    {
      path: '/services/events',
      svg: TailoringSportEvent,
    },
    {
      path: '/services/infra',
      svg: TailoringSportInfra,
    },
    {
      path: '/services/health',
      svg: TailoringSportHealth,
    },
    {
      path: '/services/workforce',
      svg: TailoringSportWorkforce,
    },
  ];

  const getLogoForPath = () => {
    const service = services.find(service => pathname.includes(service.path));
    return service ? service.svg : Logo;
  };

  const DynamicLogo = getLogoForPath();

  return (
    <nav className="w-full z-50 top-0 left-0 fixed p-4 font-clash ">
      <div className="flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <span className="cursor-pointer">
            {pathname.includes('/services/') ? (
              <span className="hidden md:block">
                <DynamicLogo />
              </span>
            ) : (
              <>
                <span className="md:hidden">
                  <MobileLogo className="text-white" />
                </span>
                <span className="hidden md:block">
                  <DynamicLogo />
                </span>
              </>
            )}
          </span>
        </Link>
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
