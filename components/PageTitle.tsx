import { FC } from 'react';

import Title from '@/components/Title';
import TagLine from './TagLine';

type Props = {
  asLink?: boolean;
  className?: string;
};

const PageTitle: FC<Props> = ({ asLink, className }) => {
  const pageStyle = asLink
    ? 'text-left justify-start'
    : 'py-28 text-center justify-center';

  return (
    <div className={`flex flex-col ${pageStyle} ${className}`}>
      <Title asLink={asLink} />
      <TagLine asLink={asLink} />
    </div>
  );
};

export default PageTitle;
