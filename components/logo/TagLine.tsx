import { FC } from 'react';

type Props = {
  isSecondaryPage?: boolean;
};

const TagLine: FC<Props> = ({ isSecondaryPage }) => {
  const fontStyle = isSecondaryPage ? 'text-sm' : 'text-2xl mt-4';

  return (
    <h2 className={`font-light font-serif ${fontStyle}`}>
      The Sweet, The Tangy, and The Unexpected
    </h2>
  );
};

export default TagLine;
