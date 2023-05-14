import 'material-icons/iconfont/material-icons.css';

import { epilogue, marcellus } from '@/styles/fonts';
import '@/styles/globals.css';

import Providers from '@/components/providers/Providers';

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
    <html lang='en' className={`${epilogue.variable} ${marcellus.variable}`}>
      <body className='min-h-screen bg-gradient-to-b from-white to-peach-100 dark:from-midnight-900 dark:to-midnight-600 overflow-x-hidden'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
