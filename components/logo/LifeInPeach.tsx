import { FC } from 'react';

type Props = {
  isSecondaryPage?: boolean;
  className?: string;
};

const LifeInPeach: FC<Props> = ({ isSecondaryPage = false, className }) => {
  const largeTextClass = isSecondaryPage && 'text-2xl tracking-normal';

  return (
    <h1 className={`font-black ${largeTextClass} ${className}`}>
      <span className='dark:text-peach-100'>Life in </span>
      <span className='text-peach'>Peach</span>
    </h1>
  );
};

export default LifeInPeach;
