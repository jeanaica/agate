import Icon from '@/components/Icon';
import { FC } from 'react';

import { MdMenu } from 'react-icons/md';

type Props = {
  onClick(): void;
};

const MenuButton: FC<Props> = ({ onClick }) => (
  <button
    aria-label='Menu Button'
    className='md:hidden flex justify-center items-center transition-all duration-500 hover:scale-125 focus:scale-125'
    onClick={onClick}
  >
    <Icon>
      <MdMenu />
    </Icon>
  </button>
);

export default MenuButton;
