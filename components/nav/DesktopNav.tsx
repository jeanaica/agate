import { FC } from 'react';

import navJson from './nav.json';
import { usePathname } from 'next/navigation';

type Props = {
  isOpen?: boolean;
};

const DesktopNav: FC<Props> = () => {
  const pathname = usePathname();

  return (
    <ul className={`hidden md:flex flex-1 md:h-[84px] md:justify-end`}>
      {navJson.map((navItem) => (
        <li key={navItem.text} className='flex justify-center items-center'>
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
  );
};

export default DesktopNav;
