import { FC } from 'react';

type Props = {
  title?: string;
};

const Header: FC<Props> = ({ title = '' }) => {
  return (
    <div className='inline-block'>
      <h2 className='inline-block font-black hyphens-auto text-left mb-1 text-midnight dark:text-peach hover:opacity-80'>
        {title}
      </h2>
    </div>
  );
};

export default Header;
