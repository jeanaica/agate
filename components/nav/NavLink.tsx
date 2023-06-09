import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

type Props = {
  href: string;
  tabIndex?: number;
  children?: ReactNode;
  isActive?: boolean;
  className?: string;
};

const NavLink: FC<Props> = ({
  href,
  tabIndex = 0,
  children,
  isActive,
  className = '',
}) => {
  const activeStyle = isActive
    ? 'cursor-default hover:scale-none'
    : 'opacity-70 hover:opacity-100 hover:scale-105 focus:scale-105 focus:opacity-100 md:hover:scale-125 md:focus:scale-125';

  const underlineStyle = isActive ? 'underline underline-offset-8' : '';

  return (
    <NextLink
      href={href}
      tabIndex={tabIndex}
      aria-roledescription={`${href} link`}
      aria-details={`changes the page to ${href}`}
      aria-disabled={isActive}
      className={`flex w-full p-4 transform transition-all duration-300 relative ${activeStyle} ${className}`}
    >
      <span className={`${underlineStyle}`}>{children}</span>
    </NextLink>
  );
};

export default NavLink;
