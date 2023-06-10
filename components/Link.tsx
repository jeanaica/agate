import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

type Props = {
  text: string;
  href: string;
  tabIndex?: number;
  children?: ReactNode;
  isDisabled?: boolean;
  className?: string;
};

const Link: FC<Props> = ({
  text,
  href,
  tabIndex = 0,
  children,
  isDisabled,
  className = '',
}) => {
  const disabledStyle = isDisabled
    ? 'opacity-80 hover:scale-none focus:scale-none'
    : '';

  const defaultStyle =
    'hover:opacity-100 hover:scale-105 focus:scale-105 focus:opacity-100';

  return (
    <NextLink
      href={href}
      tabIndex={tabIndex}
      aria-roledescription={`${text} Article Link`}
      aria-label={`Navigates to ${text} Article`}
      aria-disabled={isDisabled}
      className={`flex w-full transform transition-all duration-300 relative ${defaultStyle} ${disabledStyle} ${className}`}
    >
      {children}
    </NextLink>
  );
};

export default Link;
