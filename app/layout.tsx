import 'material-icons/iconfont/material-icons.css';
import { roboto_mono, poppins } from '../styles/fonts';
import './globals.css';

import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/Header';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Life in Peach',
  description:
    'Embark on a journey with Life in Peach, where we openly discuss our shared path towards better mental health, building a loving family, creating groundbreaking apps, and fostering a profound, personal bond with a higher power.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang='en' className={`${poppins.variable} ${roboto_mono.variable}`}>
        <body className='bg-gradient-to-b from-white to-peach-200 dark:from-midnight-900 dark:to-midnight-600'>
          <div className='flex flex-col justify-center items-center'>
            <Nav />
            <div id='content' className='w-5/6 md:w-3/5 lg:w-1/2'>
              <Header />
              {children}
            </div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
