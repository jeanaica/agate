'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import navJson from './nav.json';
import Icon from '../Icon';
import Title from '../Title';
import ThemeToggle from '../theme/ThemeToggle';
import Link from '../Link';

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
  isOpen: boolean;
  setIsOpen(): void;
  isHome: boolean;
};

const MobileNav: FC<Props> = ({ isOpen, setIsOpen, isHome }) => {
  const pathname = usePathname();

  return (
    <div className='md:hidden w-full'>
      <motion.ul
        animate={isOpen ? 'show' : 'hidden'}
        initial={'hidden'}
        variants={container}
        className={`flex flex-col overflow-hidden w-full md:hidden md:w-0`}
      >
        {navJson.map((navItem) => (
          <motion.li key={navItem.text} variants={item} className='font-black'>
            <Link
              tabIndex={0}
              href={navItem.href}
              isActive={pathname === navItem.href}
            >
              {navItem.text}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <div className={`flex justify-between px-5 py-2`}>
        <div className={`flex justify-start flex-1`}>
          <button
            className='flex justify-center items-center md:hidden transition-all duration-500 hover:scale-110'
            onClick={setIsOpen}
          >
            <Icon icon='menu' type='round' />
            {!isHome && (
              <div className='p-4 md:hidden'>
                <Title asLink={!isHome} />
              </div>
            )}
          </button>
        </div>

        <div className='flex'>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
