import { FC } from 'react';

import formatDate from '@/utils/formatDate';

type Props = {
  dateValue?: string;
};

const DateDisplay: FC<Props> = ({ dateValue = '' }) => (
  <h5 className='text-base font-sans opacity-50 font-semibold'>
    {formatDate(dateValue)}
  </h5>
);

export default DateDisplay;
