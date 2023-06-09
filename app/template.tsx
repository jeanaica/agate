'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Nav from '@/components/nav/Nav';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import Footer from '@/components/Footer';
import Logo from '@/components/logo/Logo';

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
        <main id='content' className='flex flex-col w-full items-center'>
          {isHome && <Logo />}
          <div className='w-5/6 md:w-4/5 lg:w-2/3'>{children}</div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Template;
