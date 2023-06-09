import { FC } from 'react';

type Props = {
  text?: string;
};

const Caption: FC<Props> = ({ text }) => (
  <span className='absolute left-4 bottom-0 text-xs opacity-50 rounded-sm text-midnight-900 bg-slate-200 p-1 mb-1'>
    {text}
  </span>
);

export default Caption;
