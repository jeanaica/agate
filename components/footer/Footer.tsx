import { FC } from 'react';

const Footer: FC = () => (
  <footer id='footer' className='flex justify-center mt-auto py-4'>
    <span className='text-xs text-center'>
      Copyright ©2023 Jeanaica Suplido-Alinsub. All rights reserved.
      <br />
      Unless otherwise noted, all code snippets are available under the{' '}
      <a
        rel='license'
        target='_blank'
        referrerPolicy='no-referrer'
        href='https://spdx.org/licenses/Unlicense.html'
        className='underline not-italic font-serif font-normal dark:text-peach-800'
      >
        Unlicense
      </a>
      .
    </span>
  </footer>
);

export default Footer;
