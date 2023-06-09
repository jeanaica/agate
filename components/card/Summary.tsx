import { FC } from 'react';

type Props = {
  description?: string;
};

const Summary: FC<Props> = ({ description = '' }) => (
  <span className='text-justify mt-4 line-clamp-5 font-serif text-midnight-900 dark:text-peach-100'>
    {description}
  </span>
);

export default Summary;
