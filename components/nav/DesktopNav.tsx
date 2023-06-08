import { FC } from 'react';
import { usePathname } from 'next/navigation';

import navJson from './nav.json';
import PageTitle from '../PageTitle';
import Title from '../Title';
import ThemeToggle from '../theme/ThemeToggle';
import Link from '../Link';
import NavItem from './NavItem';

type Props = {
  isOpen: boolean;
  setIsOpen(): void;
  isHome: boolean;
};

const DesktopNav: FC<Props> = ({ isOpen, setIsOpen, isHome }) => {
  const pathname = usePathname();

  return (
    <div className='hidden md:flex md:justify-center md:w-full'>
      <div
        className={`w-5/6 md:w-4/5 lg:w-2/3 flex  items-center ${
          isHome ? 'justify-end' : 'justify-between'
        }`}
      >
        {!isHome && (
          <div className='hidden md:block'>
            <PageTitle asLink={!isHome} />
          </div>
        )}
        <div className='flex'>
          <ul className={`hidden md:flex flex-1 md:h-[84px] md:justify-end`}>
            {navJson.map((navItem) => (
              <NavItem key={navItem.text}>
                <Link
                  tabIndex={0}
                  href={navItem.href}
                  isActive={pathname === navItem.href}
                >
                  {navItem.text}
                </Link>
              </NavItem>
            ))}
          </ul>

          <div className={`flex justify-between w-5/6 md:w-4/5 lg:w-2/3`}>
            {!isHome && (
              <div className={`flex justify-start p-4 md:hidden`}>
                <Title asLink={!isHome} />
              </div>
            )}
            <div className='flex'>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
