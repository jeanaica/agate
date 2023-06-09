import Article from '@/components/Article';
import Title from '@/components/Title';

import { openGraph, twitter } from '../shared-metadata';
import content from './content.json';

export const metadata = {
  title: 'About',
  openGraph: {
    ...openGraph,
    title: 'About',
  },
  twitter: {
    ...twitter,
    title: 'About',
  },
};

export default function About() {
  return (
    <main className='flex flex-col items-center justify-between py-16'>
      <Title title='About' datePublished='' />
      <Article content={content.content} />
    </main>
  );
}
