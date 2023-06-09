import { FC } from 'react';
import DateDisplay from './DateDisplay';

type Props = {
  title?: string;
  datePublished?: string;
  hasBanner?: boolean;
};

const Title: FC<Props> = ({ title = '', datePublished = '', hasBanner }) => {
  const withoutBannerStyle = !hasBanner && 'mt-16';

  return (
    <div
      className={`flex flex-col text-center items-center my-8 ${withoutBannerStyle}`}
    >
      <h1 className='font-black mb-4'>{title}</h1>
      {datePublished && <DateDisplay dateValue={datePublished} />}
    </div>
  );
};

export default Title;
