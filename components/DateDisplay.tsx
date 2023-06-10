import { FC } from 'react';

import formatDate from '@/utils/formatDate';

type Props = {
  dateValue?: string;
};

const DateDisplay: FC<Props> = ({ dateValue = '' }) => (
  <span className='text-base font-sans opacity-50 font-semibold'>
    {formatDate(dateValue)}
  </span>
);

export default DateDisplay;
