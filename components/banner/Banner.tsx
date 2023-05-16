'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BannerProps {
  src?: string;
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({ src = '', alt = '' }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [altValue, setAlt] = useState(alt);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    setImgSrc(src);
    setAlt(alt);
    setCaption('Copyright ©2023 by Jeanaica Suplido-Alinsub.');
  }, [src, alt]);

  return (
    <div className='relative w-screen h-[70vh] rounded-sm overflow-hidden'>
      <div className='100vw h-full bg-peach/30 dark:bg-midnight/30 absolute top-0 -z-20' />
      <Image
        src={imgSrc}
        alt={altValue}
        onError={() => {
          setImgSrc('/image-error.jpeg');
          setAlt('Error loading image');
          setCaption('Image courtesy of Adobe Stock.');
        }}
        className=' object-contain backdrop-blur-xl  bg-peach-300/40 dark:bg-midnight-300/40'
        sizes='(max-width: 768px) 100vw'
        fill
        priority
      />
      <caption className='absolute left-4 bottom-0 text-xs opacity-50'>
        {caption}
      </caption>
    </div>
  );
};

export default Banner;
