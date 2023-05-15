import { openGraph, twitter } from '../shared-metadata';

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
      <h2 className='mb-8 font-black'>About</h2>

      <p>
        Hello and welcome to{' '}
        <strong className='font-bold font-sans'>Life in Peach</strong>, my
        personal corner of the internet where I share my journey through
        life&apos;s sweet and tangy moments. My name is Jeanaica
        Suplido-Alinsub, a newlywed exploring the intersection of faith, mental
        health, creativity, and technology.
      </p>

      <p>
        I&apos;m a software engineer by trade, but I wear many hats. I&apos;m an
        artist who loves to paint, sing, and write. I find that these creative
        outlets not only bring me joy but also help me navigate my mental health
        journey. They offer me a way to express my thoughts and feelings and
        bring color to my world.
      </p>

      <p>
        As a Christian, my faith plays an integral role in my life. It guides me
        through life&apos;s challenges and gives me hope and strength. I hope to
        share how my faith influences my path towards good mental health and how
        it intertwines with every aspect of my life.
      </p>

      <p>
        Marriage has brought a new and exciting chapter in my life. Being a
        newlywed comes with its own set of joys and challenges, and it&apos;s a
        journey I&apos;m thrilled to embark upon. I&apos;m learning every day
        and am eager to share my insights about maintaining mental health within
        a marriage.
      </p>

      <p>
        <strong className='font-bold font-sans'>Life in Peach</strong> is a
        phrase that symbolizes the softness, warmth, and unexpected surprises of
        life&apos;s journey. This blog is my canvas and my codebase, a place
        where faith, creativity, and emotional wellness intersect.
      </p>

      <p>
        Whether you&apos;re a fellow software engineer, an artist, or someone
        navigating your own mental health journey, I hope my blog resonates with
        you.
      </p>

      <p>
        Thank you for being here, and I hope you enjoy exploring{' '}
        <strong className='font-bold font-sans'>Life in Peach</strong>.
      </p>
    </main>
  );
}
