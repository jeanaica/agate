'use client';

import { FC } from 'react';

import LifeInPeach from '@/components/logo/LifeInPeach';
import ThemeToggle from '@/components/theme/ThemeToggle';

import MenuButton from './MenuButton';
import MenuList from './MenuList';

type Props = {
  isOpen: boolean;
  setIsOpen(): void;
  isHome: boolean;
};

const Menu: FC<Props> = ({ isOpen, setIsOpen, isHome }) => {
  const hideTitle = isHome && 'hidden';

  return (
    <div className='md:hidden w-full'>
      <MenuList animate={isOpen} />

      <div className='flex justify-between px-5 py-2 h-[80px]'>
        <div className='flex justify-start flex-1'>
          <MenuButton onClick={setIsOpen} />
          <LifeInPeach
            isSecondaryPage={!isHome}
            className={`${hideTitle} p-4 md:hidden`}
          />
        </div>
        <ThemeToggle type='mobile' />
      </div>
    </div>
  );
};

export default Menu;
