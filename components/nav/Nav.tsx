'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import Title from '@/components/title/Title';
import ThemeToggle from '@/components/theme/ThemeToggle';
import Icon from '@/components/icon/Icon';
import Header from '@/components/header/Header';

import useDetectOutsideClick from '@/utils/hooks/useDetectOutsideClick';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Nav: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const isClickedOutside = useDetectOutsideClick(navRef);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const contentElement = document.getElementById('content');
    const footerElement = document.getElementById('footer');

    // Add inline styles to the body element
    if (menuOpen) {
      document.body.style.overflow = 'hidden';

      if (contentElement && footerElement) {
        contentElement.style.filter = 'blur(4px)';
        footerElement.style.filter = 'blur(4px)';
      }
    }

    // Cleanup function to remove the inline styles when the component is unmounted
    return () => {
      document.body.style.overflow = '';
      if (contentElement && footerElement) {
        contentElement.style.filter = '';
        footerElement.style.filter = '';
      }
    };
  }, [menuOpen]);

  useEffect(() => {
    if (isClickedOutside) {
      setMenuOpen(false);
    }
  }, [isClickedOutside]);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <nav
      ref={navRef}
      className={` flex flex-col md:flex-row md:justify-between md:items-center w-full ${
        menuOpen
          ? 'bg-peach-100 dark:bg-midnight-700'
          : 'bg-white dark:bg-midnight-900'
      }`}
    >
      {!isHome && (
        <div className='hidden md:block'>
          <Header asLink={!isHome} className='pl-5' />
        </div>
      )}
      <MobileNav isOpen={menuOpen} />
      <DesktopNav />
      <div className={`flex justify-between`}>
        <div className={`flex justify-start`}>
          <button
            className='flex flex-1 justify-center items-center pl-4 md:hidden'
            onClick={toggleMenu}
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
          <button
            className='flex flex-1 justify-center items-center p-4'
            onClick={toggleMenu}
          >
            <Icon icon='search' type='round' />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
