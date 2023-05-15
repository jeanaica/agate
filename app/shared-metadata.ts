import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

export const sharedMetadata = {
  authors: [{ name: 'Jeanaica Suplido-Alinsub', url: 'https://jeanaica.com' }],
  generator: 'Next.js',
  applicationName: 'Life in Peach',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Christian',
    'Technology',
    'Art',
  ],
  creator: 'Jeanaica Suplido-Alinsub',
  publisher: 'Jeanaica Suplido-Alinsub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'personal',

  // robots
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const openGraph: OpenGraph = {
  title: 'Life in Peach',
  description:
    'Embark on a journey with Life in Peach, where we openly discuss our shared path towards better mental health, building a loving family, creating groundbreaking apps, and fostering a profound, personal bond with a higher power.',
  url: 'https://lifeinpeach.com',
  siteName: 'Life in Peach',
  locale: 'en-US',
  type: 'website',
};

export const twitter: Twitter = {
  card: 'summary_large_image',
  title: 'Life in Peach',
  description:
    'Embark on a journey with Life in Peach, where we openly discuss our shared path towards better mental health, building a loving family, creating groundbreaking apps, and fostering a profound, personal bond with a higher power.',
  site: '@frontendFairy',
  creator: '@frontendFairy',
};
