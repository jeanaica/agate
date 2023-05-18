'use client';

import { FC, useEffect, useState } from 'react';

import Nav from '@/components/nav/Nav';
import { ThemeProvider } from '@/components/theme/ThemeContext';
import Footer from '@/components/footer/Footer';
import { usePathname } from 'next/navigation';
import Banner from '@/components/banner/Banner';
import Header from '@/components/header/Header';
import Title from '@/components/title/Title';

type Props = {
  children: React.ReactNode;
  error: any;
};

const Template: FC<Props> = ({ children, error }) => {
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
        <div
          id='content'
          className='flex flex-col w-full items-center relative pb-4'
        >
          <div className='flex flex-col items-center z-50 pb-8 '>
            <Title />
            <h5 className={`font-light font-serif mt-2`}>
              will soon be online
            </h5>
          </div>
          <Banner
            src='/launching-soon.jpeg'
            alt='Website will be launching soon'
            caption='Image courtesy of Adobe Stock.'
          />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Template;
