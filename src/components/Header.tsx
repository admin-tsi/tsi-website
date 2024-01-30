import React from 'react';
import { useRouter } from 'next/router';
import {
  Logo,
  MobileLogo,
  HealthLogo,
  WorkforceLogo,
  InfraLogo,
  TailoringSportEvent,
} from '@/utils/svgs';
import Link from 'next/link';
import Menu from '@/components/Menu';

const Header = () => {
  const router = useRouter();

  const services = [
    {
      path: '/services/events',
      svg: TailoringSportEvent,
    },
    {
      path: '/services/infra',
      svg: InfraLogo, // Assuming you have different logos for each service
    },
    {
      path: '/services/health',
      svg: HealthLogo,
    },
    {
      path: '/services/workforce',
      svg: WorkforceLogo,
    },
  ];

  const getLogoForPath = () => {
    const service = services.find((service) =>
      router.pathname.includes(service.path)
    );
    return service ? service.svg : Logo;
  };

  const DynamicLogo = getLogoForPath();
  console.log(DynamicLogo);

  return (
    <nav className="w-full z-20 top-0 left-0 fixed p-4 ">
      <div className="flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <span className="cursor-pointer">
            {router.pathname.includes('/services/') ? (
              <span className="hidden md:block mix-blend-difference">
                <DynamicLogo className="text-white" />
              </span>
            ) : (
              <>
                <span className="md:hidden mix-blend-difference">
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
