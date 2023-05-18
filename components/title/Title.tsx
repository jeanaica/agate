import { FC } from 'react';

type Props = {
  asLink?: boolean;
};

const Title: FC<Props> = ({ asLink = false }) => (
  <h1
    className={`text-center font-black ${
      asLink ? 'text-2xl tracking-normal' : ''
    }`}
  >
    <span className='dark:text-peach-100'>Life in </span>
    <span className='text-peach'>Peach</span>
  </h1>
);

export default Title;
