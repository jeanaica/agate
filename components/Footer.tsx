import { FC } from 'react';

const Footer: FC = () => (
  <footer id='footer' className='flex justify-center mt-auto py-4 w-full'>
    <div className='flex flex-col text-center w-5/6 md:w-4/5 lg:w-2/3'>
      <span className='text-sm'>
        Copyright ©2023 by Jeanaica Suplido-Alinsub. All rights reserved.
      </span>
      <span className='text-xs opacity-50'>
        All code snippets, unless otherwise noted, are freely available under
        the{' '}
        <a
          rel='license'
          target='_blank'
          referrerPolicy='no-referrer'
          href='https://spdx.org/licenses/Unlicense.html'
          className=' not-italic font-serif font-normal dark:text-peach-100'
          tabIndex={-1}
        >
          Unlicense
        </a>
        .
      </span>
    </div>
  </footer>
);

export default Footer;
