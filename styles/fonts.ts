import { Epilogue, Marcellus } from 'next/font/google';

export const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-epilogue',
});

export const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marcellus',
});
