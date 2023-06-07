import { FC } from 'react';
import Link from 'next/link';

import DateDisplay from './DateDisplay';

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
  <section className='flex flex-col w-full min-h-[200px] border-t border-peach-600/30 dark:border-midnight-500/30 py-8 last-of-type:border-b last-of-type:mb-24 justify-center'>
    <h2 className='font-black hyphens-auto text-left text-peach'>
      <Link className='no-underline not-italic hover:no-underline' href={slug}>
        {title}
      </Link>
    </h2>
    <DateDisplay dateValue={publishedAt} />
    <span className='mt-4 line-clamp-5'>{description}</span>
  </section>
);

export default Card;
