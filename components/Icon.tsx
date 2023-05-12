import { FC } from 'react';

type Props = {
  icon: string;
  className?: string;
  type?: 'filled' | 'outline' | 'round' | 'sharp' | 'two-tone';
};
const Icon: FC<Props> = ({ icon, className, type = 'filled' }) => (
  <span
    className={`select-none ${
      type !== 'filled' ? `material-icons-${type}` : 'material-icons'
    } ${className}  text-3xl `}
  >
    {icon}
  </span>
);

export default Icon;
