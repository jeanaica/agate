import { FC } from 'react';

import navJson from './nav.json';
import { usePathname } from 'next/navigation';
import Icon from '../icon/Icon';
import Title from '../title/Title';
import ThemeToggle from '../theme/ThemeToggle';
import Header from '../header/Header';

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
            <Header asLink={!isHome} />
          </div>
        )}
        <div className='flex'>
          <ul className={`hidden md:flex flex-1 md:h-[84px] md:justify-end`}>
            {navJson.map((navItem) => (
              <li
                key={navItem.text}
                className='flex justify-center items-center'
              >
                <a
                  className={`flex w-full p-4 ${
                    pathname === navItem.href
                      ? 'italic pointer-events-none opacity-50 cursor-not-allowed'
                      : 'not-italic'
                  }`}
                  href={navItem.href}
                  aria-disabled={pathname === navItem.href}
                >
                  {navItem.text}
                </a>
              </li>
            ))}
          </ul>

          <div className={`flex justify-between w-5/6 md:w-4/5 lg:w-2/3`}>
            <div className={`flex justify-start`}>
              <button
                className='flex flex-1 justify-center items-center md:hidden'
                onClick={setIsOpen}
              >
                <Icon icon='menu' type='round' />
              </button>
              {!isHome && (
                <div className='p-4 md:hidden'>
                  <Title asLink={!isHome} />
                </div>
              )}
            </div>

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
