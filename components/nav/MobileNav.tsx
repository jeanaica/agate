'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import navJson from './nav.json';

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

type Props = {
  isOpen?: boolean;
};

const MobileNav: FC<Props> = ({ isOpen }) => {
  const pathname = usePathname();

  return (
    <motion.ul
      animate={isOpen ? 'show' : 'hidden'}
      initial={'hidden'}
      variants={container}
      className={`flex flex-col overflow-hidden w-full md:hidden md:w-0`}
    >
      {navJson.map((navItem) => (
        <motion.li
          key={navItem.text}
          variants={item}
          className={`hover:bg-peach-700 hover:dark:bg-midnight-800 hover:underline ${
            pathname === navItem.href
              ? 'italic pointer-events-none opacity-50 cursor-not-allowed'
              : 'not-italic'
          }`}
        >
          <a
            className={`flex px-8 py-4`}
            href={navItem.href}
            aria-disabled={pathname === navItem.href}
          >
            {navItem.text}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MobileNav;
