import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const NavItem: FC<Props> = ({ children }) => {
  return (
    <li className='flex justify-center items-center font-black'>{children}</li>
  );
};

export default NavItem;
