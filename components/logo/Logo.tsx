import { FC } from 'react';
import { usePathname } from 'next/navigation';

import LifeInPeach from './LifeInPeach';
import TagLine from './TagLine';

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className = '' }) => {
  const pathname = usePathname();
  const isSecondaryPage = pathname !== '/';

  const pageStyle = isSecondaryPage
    ? 'text-left justify-start'
    : 'px-4 py-28 text-center justify-center';

  const hoverStyle = isSecondaryPage
    ? 'transition-all hover:scale-110 hover:ml-4'
    : '';

  const Tag = isSecondaryPage ? 'a' : 'div';
  const tagAttributes = isSecondaryPage && {
    href: '/',
  };

  return (
    <Tag
      {...tagAttributes}
      className={`flex flex-col ${pageStyle} ${className} ${hoverStyle}`}
    >
      <LifeInPeach isSecondaryPage={isSecondaryPage} />
      <TagLine isSecondaryPage={isSecondaryPage} />
    </Tag>
  );
};

export default Logo;
