import { FC } from 'react';

import Title from '@/components/title/Title';

type Props = {
  asLink?: boolean;
  className?: string;
};

const Header: FC<Props> = ({ asLink, className }) => {
  const pageStyle = asLink
    ? 'text-left justify-start'
    : 'py-28 text-center justify-center';

  return (
    <div className={`flex flex-col ${pageStyle} ${className}`}>
      <Title asLink={asLink} />
      <h5 className={`font-light ${asLink ? 'text-sm' : 'mt-4'}`}>
        The Sweet, The Tangy, and The Unexpected
      </h5>
    </div>
  );
};

export default Header;
