import { FC } from 'react';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

type Props = {
  content?: string;
};

const Article: FC<Props> = ({ content = '' }) => {
  const window = new JSDOM('').window;
  const purify = DOMPurify(window);

  const clean = purify.sanitize(content, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ['target'],
  });

  return (
    <article
      className='min-h-[300px] mt-12 w-full prose dark:prose-invert prose-pre:whitespace-pre-wrap prose-pre:break-words prose-pre:overflow-x-hidden prose-p:mb-12 prose-p:text-xl prose-p:leading-[3rem] prose-strong:font-sans prose-strong:font-extrabold'
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};

export default Article;
