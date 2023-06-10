import { FC } from 'react';
import { usePathname } from 'next/navigation';

import Logo from '@/components/logo/Logo';
import ThemeToggle from '@/components/theme/ThemeToggle';

import MenuList from './MenuList';

const Menu: FC = () => {
  const pathname = usePathname();
  const isSecondaryPage = pathname !== '/';

  const alignStyle = isSecondaryPage ? 'justify-between' : 'justify-end';

  return (
    <div className='hidden md:flex md:justify-center md:w-full'>
      <div
        className={`w-5/6 md:w-4/5 lg:w-2/3 flex items-center ${alignStyle}`}
      >
        {isSecondaryPage && <Logo />}
        <div className='flex'>
          <MenuList />

          <div className={`flex justify-between w-5/6 md:w-4/5 lg:w-2/3`}>
            <ThemeToggle type='desktop' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
