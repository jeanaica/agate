'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';

import navJson from '../nav.json';
import MenuItem from './MenuItem';
import NavLink from '../NavLink';

const MenuList: FC = () => {
  const pathname = usePathname();

  return (
    <ul className={`hidden md:flex flex-1 md:h-[84px] md:justify-end`}>
      {navJson.map((navItem) => (
        <MenuItem key={navItem.text}>
          <NavLink href={navItem.href} isActive={pathname === navItem.href}>
            {navItem.text}
          </NavLink>
        </MenuItem>
      ))}
    </ul>
  );
};

export default MenuList;
