'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Nav from '@/components/nav/Nav';
import Header from '@/components/header/Header';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import Footer from '@/components/footer/Footer';
import LoadingScreen from '../loading/LoadingScreen';

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return false;
  }

  return (
    <ThemeProvider>
      <div className={`flex flex-col justify-center items-center min-h-screen`}>
        <Nav />
        <div id='content' className='w-5/6 md:w-3/5 lg:w-1/2'>
          {isHome && <Header asLink={!isHome} />}
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Providers;
