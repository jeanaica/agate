'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import navJson from '../nav.json';
import NavLink from '../NavLink';

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
  animate: boolean;
};

const MenuList: FC<Props> = ({ animate }) => {
  const pathname = usePathname();

  return (
    <motion.ul
      animate={animate ? 'show' : 'hidden'}
      initial={'hidden'}
      variants={container}
      className={`flex flex-col overflow-hidden w-full md:hidden md:w-0`}
    >
      {navJson.map((navItem) => (
        <motion.li key={navItem.text} variants={item} className='font-black'>
          <NavLink
            className='p-4'
            text={navItem.text}
            href={navItem.href}
            isActive={pathname === navItem.href}
          >
            {navItem.text}
          </NavLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MenuList;
