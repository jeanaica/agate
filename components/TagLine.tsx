import { FC } from 'react';

type Props = {
  asLink?: boolean;
};

const TagLine: FC<Props> = ({ asLink }) => (
  <h5 className={`font-light font-serif ${asLink ? 'text-sm' : 'mt-4'}`}>
    The Sweet, The Tangy, and The Unexpected
  </h5>
);

export default TagLine;
