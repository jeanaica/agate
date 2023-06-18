import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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

  if (isSecondaryPage) {
    return (
      <Link
        href='/'
        className={`flex flex-col ${pageStyle} ${className} ${hoverStyle}`}
      >
        <LifeInPeach isSecondaryPage={isSecondaryPage} />
        <TagLine isSecondaryPage={isSecondaryPage} />
      </Link>
    );
  }

  return (
    <div className={`flex flex-col ${pageStyle} ${className} ${hoverStyle}`}>
      <LifeInPeach isSecondaryPage={isSecondaryPage} />
      <TagLine isSecondaryPage={isSecondaryPage} />
    </div>
  );
};

export default Logo;
