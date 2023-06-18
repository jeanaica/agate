'use client';

import { FC } from 'react';
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

  const isHome = pathname === '/';

  return (
    <ThemeProvider>
      <div className={`flex flex-col justify-center items-center min-h-screen`}>
        <Nav />
        <main id='content' className='flex flex-col w-full items-center'>
          {isHome && <Logo />}
          <section className='w-5/6 md:w-4/5 lg:w-2/3'>{children}</section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Template;
