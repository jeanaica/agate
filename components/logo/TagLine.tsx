import { FC } from 'react';

type Props = {
  isSecondaryPage?: boolean;
};

const TagLine: FC<Props> = ({ isSecondaryPage }) => {
  const fontStyle = isSecondaryPage ? 'text-sm' : 'mt-4';

  return (
    <h5 className={`font-light font-serif ${fontStyle}`}>
      The Sweet, The Tangy, and The Unexpected
    </h5>
  );
};

export default TagLine;
