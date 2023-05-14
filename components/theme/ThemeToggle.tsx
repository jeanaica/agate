'use client';
import React, { useEffect, useState, KeyboardEvent } from 'react';

import { useTheme } from '@/components/theme/ThemeContext';
import Icon from '@/components/icon/Icon';

const ThemeToggle: React.FC = () => {
  const [active, setActive] = useState(false);
  const [ariaActive, setAriaActive] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const changeThemeAndToggle = () => {
    const themeValue = theme === 'dark' ? 'light' : 'dark';

    toggleTheme();

    setActive(themeValue === 'dark');
    setAriaActive(themeValue !== 'dark');
  };

  const handleOnClick = () => {
    changeThemeAndToggle();
  };

  const handleKeypress = (e: KeyboardEvent<HTMLInputElement>) => {
    changeThemeAndToggle();
  };

  useEffect(() => {
    if (theme) {
      setActive(theme === 'dark');
      setAriaActive(theme !== 'dark');
    }
  }, [theme]);

  return (
    <div className='flex justify-center self-center items-center h-8 cursor-pointer select-none'>
      <input
        aria-label='dark mode toggle'
        role='switch'
        aria-checked={ariaActive}
        onKeyPress={handleKeypress}
        type='checkbox'
        id='toggle'
        className='sr-only'
        onClick={handleOnClick}
        checked={active}
        readOnly
      />
      <label
        htmlFor='toggle'
        className={`relative p-2 overflow-hidden w-10 h-10 rounded-full border-3 flex flex-col items-center justify-center cursor-pointer ${
          active ? 'bg-black text-blue-300' : 'bg-blue-300 text-yellow-200'
        } select-none`}
      >
        <Icon
          icon='dark_mode'
          type='round'
          className={`h-10 transform transition-all duration-500 ${
            active ? 'translate-y-[18px]' : 'translate-y-20'
          }`}
        />
        <Icon
          icon='wb_sunny'
          type='round'
          className={`h-10 transform transition-all duration-500 ${
            active ? 'translate-y-20' : '-translate-y-[18px]'
          }`}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;
