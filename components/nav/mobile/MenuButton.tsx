import { FC } from 'react';

import Icon from '@/components/Icon';

type Props = {
  onClick(): void;
};

const MenuButton: FC<Props> = ({ onClick }) => (
  <button
    className='md:hidden flex justify-center items-center transition-all duration-500 hover:scale-125 focus:scale-125'
    onClick={onClick}
  >
    <Icon icon='menu' type='round' />
  </button>
);

export default MenuButton;
