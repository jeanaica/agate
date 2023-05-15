import Image from 'next/image';

interface BannerProps {
  src?: string;
  alt?: string;
}

const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  if (!src) {
    return null;
  }

  return (
    <div className='relative w-screen h-[70vh] rounded-sm overflow-hidden'>
      <Image
        src={src}
        alt={alt || ''}
        sizes='(max-width: 768px) 100vw'
        fill
        priority
      />

      <Image
        src={src}
        alt={alt || ''}
        className='object-contain backdrop-blur-xl  bg-peach-300/40 dark:bg-midnight-300/40'
        sizes='(max-width: 768px) 100vw'
        fill
        priority
      />
    </div>
  );
};

export default Banner;
