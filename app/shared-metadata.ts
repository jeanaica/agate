import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

export const sharedMetadata = {
  metadataBase: new URL('https://lifeinpeach.com'),
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
  description:
    'A personal journey of faith, creativity, and wellness. Join as I navigate life as a Christian, artist, and software engineer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'personal',

  // robots
  robots: {
    index: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
    follow: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
    noindex: process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging',
    nofollow: process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging',
    nocache: true,
    googleBot: {
      index: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
      follow: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production',
      noindex: process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging',
      nofollow: process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging',
      noimageindex: process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging',
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const openGraph: OpenGraph = {
  title: 'Life in Peach',
  description:
    'A personal journey of faith, creativity, and wellness. Join as I navigate life as a Christian, artist, and software engineer',
  url: 'https://lifeinpeach.com',
  siteName: 'Life in Peach',
  locale: 'en-US',
  type: 'website',
  images: [
    {
      url: '/logo.png',
      alt: 'Life in Peach - The Sweet, The Tangy, and The Unexpected',
      width: 800,
      height: 600,
    },
  ],
};

export const twitter: Twitter = {
  card: 'summary_large_image',
  title: 'Life in Peach',
  description:
    'A personal journey of faith, creativity, and wellness. Join as I navigate life as a Christian, artist, and software engineer',
  site: '@frontendFairy',
  creator: '@frontendFairy',
  images: [
    {
      url: '/logo.png',
      alt: 'Life in Peach - The Sweet, The Tangy, and The Unexpected',
      width: 800,
      height: 600,
    },
  ],
};
