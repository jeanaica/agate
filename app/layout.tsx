import 'material-icons/iconfont/material-icons.css';

import { epilogue, marcellus } from '@/styles/fonts';
import '@/styles/globals.css';

import { openGraph, sharedMetadata, twitter } from './shared-metadata';

export const metadata = {
  ...sharedMetadata,
  title: {
    default: 'Life in Peach',
    template: '%s | Life in Peach',
  },
  openGraph,
  twitter,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${epilogue.variable} ${marcellus.variable}`}>
      <body className='min-h-screen bg-gradient-to-b from-white to-peach-100 dark:from-midnight-900 dark:to-midnight-700 overflow-x-hidden'>
        {children}
      </body>
    </html>
  );
}
