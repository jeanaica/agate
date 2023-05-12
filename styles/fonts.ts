import { Poppins, Roboto_Mono, Clicker_Script } from 'next/font/google';

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-poppins',
});

export const clickerScript = Clicker_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-clicker-script',
});
