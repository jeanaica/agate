'use client';
import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import ThemeToggle from './ThemeToggle';
import Icon from './Icon';

const container = {
  hidden: { height: 0, overflow: 'hidden' },
  show: {
    height: 'auto',
    transition: {
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: '-100%' },
  show: { y: 0 },
};

const Nav: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const contentElement = document.getElementById('content');
    // Add inline styles to the body element
    if (menuOpen) {
      document.body.style.overflow = 'hidden';

      if (contentElement) {
        contentElement.style.filter = 'blur(4px)';
      }
    }

    // Cleanup function to remove the inline styles when the component is unmounted
    return () => {
      document.body.style.overflow = '';
      if (contentElement) {
        contentElement.style.filter = '';
      }
    };
  }, [menuOpen]);

  return (
    <nav
      className={` flex flex-col w-full ${
        menuOpen
          ? 'bg-peach-300 dark:bg-midnight-700'
          : 'bg-white dark:bg-midnight-900'
      }`}
    >
      <motion.ul
        animate={menuOpen ? 'show' : 'hidden'}
        variants={container}
        className={`flex flex-col overflow-hidden`}
      >
        <motion.li
          variants={item}
          className='hover:bg-peach-700 hover:dark:bg-midnight-700 hover:underline'
        >
          <a className='flex w-full px-8 py-4'>About</a>
        </motion.li>
        <motion.li
          variants={item}
          className='hover:bg-peach-700 hover:dark:bg-midnight-700 hover:underline'
        >
          <a className='flex w-full px-8 py-4'>About</a>
        </motion.li>
        <motion.li
          variants={item}
          className='hover:bg-peach-700 hover:dark:bg-midnight-700 hover:underline'
        >
          <a className='flex w-full px-8 py-4'>About</a>
        </motion.li>
      </motion.ul>
      <div className={`flex justify-between gap-4 px-8 py-4`}>
        <button className='flex flex-1 items-center' onClick={toggleMenu}>
          <Icon icon='menu' type='round' />
        </button>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Nav;
