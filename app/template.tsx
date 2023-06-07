'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Nav from '@/components/nav/Nav';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

const Template: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider>
      <div className={`flex flex-col justify-center items-center min-h-screen`}>
        <Nav />
        <div id='content' className='flex flex-col w-full items-center'>
          {isHome && (
            <div className='px-4'>
              <Header asLink={!isHome} />
            </div>
          )}
          <div className='w-5/6 md:w-4/5 lg:w-2/3'>{children}</div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Template;
