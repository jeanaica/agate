'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

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
      className={`w-full flex justify-center items-center flex-col md:flex-row md:justify-between md:items-center  ${
        menuOpen
          ? 'bg-peach-100 dark:bg-midnight-700'
          : 'bg-white dark:bg-midnight-900'
      }`}
    >
      <MobileNav isHome={isHome} isOpen={menuOpen} setIsOpen={toggleMenu} />
      <DesktopNav isHome={isHome} isOpen={menuOpen} setIsOpen={toggleMenu} />
    </nav>
  );
};

export default Nav;
