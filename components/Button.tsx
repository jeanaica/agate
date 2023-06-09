import { FC, MouseEventHandler, ReactNode } from 'react';

type Props = {
  onClick: MouseEventHandler;
  tabIndex?: number;
  children?: ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
};

const Button: FC<Props> = ({
  type = 'button',
  onClick,
  children,
  className = '',
}) => (
  <button
    type={type}
    className={`flex justify-center items-center rounded-md shadow-sm
      bg-midnight-100
      dark:bg-peach-800
      hover:bg-midnight-200 hover:dark:bg-peach-700 active:bg-midnight-300 active:dark:bg-peach-600
      ${className}`}
    onClick={onClick}
  >
    <span className='w-full inline-flex justify-center items-center min-h-[3rem] transition-all duration-500 hover:scale-110 font-sans uppercase text-base'>
      {children}
    </span>
  </button>
);

export default Button;
