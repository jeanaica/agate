import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  className?: string;
};

const Icon: FC<Props> = ({ children, className }) => (
  <span className={`select-none ${className}  text-3xl `}>{children}</span>
);

export default Icon;
