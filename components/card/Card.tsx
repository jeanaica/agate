import { FC } from 'react';

import DateDisplay from '../DateDisplay';
import Link from '../Link';
import Header from './Header';
import Summary from './Summary';

type Props = {
  slug?: string;
  title?: string;
  description?: string;
  publishedAt?: string;
};

const Card: FC<Props> = ({
  slug = '',
  title = '',
  description = '',
  publishedAt = '',
}) => (
  <li className='flex flex-col w-full min-h-[200px] border-t border-peach-600/30 dark:border-midnight-500/30 last-of-type:border-b last-of-type:mb-24 justify-center'>
    <Link
      className='flex-col py-8 text-justify md:p-8'
      href={slug}
      text={title}
    >
      <Header title={title} />
      <DateDisplay dateValue={publishedAt} />
      <Summary description={description} />
    </Link>
  </li>
);

export default Card;
