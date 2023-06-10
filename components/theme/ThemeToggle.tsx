'use client';
import React, { useEffect, useState, KeyboardEvent } from 'react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';

import { useTheme } from '@/components/theme/ThemeContext';
import Icon from '@/components/Icon';

type Props = {
  type?: 'mobile' | 'desktop';
};

const ThemeToggle: React.FC<Props> = ({ type }) => {
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
    <div className='flex justify-center self-center items-center h-8 p-4 pr-0 cursor-pointer select-none'>
      <input
        tabIndex={-1}
        aria-label={`Theme ${theme} Toggle`}
        aria-labelledby={`${type}DarkModeToggleLabel`}
        role='switch'
        aria-checked={ariaActive}
        onKeyPress={handleKeypress}
        type='checkbox'
        id={`${type}DarkModeToggle`}
        className='sr-only'
        onClick={handleOnClick}
        checked={active}
        readOnly
      />
      <label
        tabIndex={0}
        id={`${type}DarkModeToggleLabel`}
        htmlFor={`${type}DarkModeToggle`}
        className={`relative p-2 overflow-hidden w-10 h-10 rounded-full border-3 flex flex-col items-center justify-center cursor-pointer transition-all  hover:scale-125 focus:scale-125 ${
          active ? 'bg-black text-blue-300' : 'bg-blue-300 text-yellow-200'
        } select-none`}
      >
        <Icon
          className={`h-10 transform transition-all duration-500 hover:scale-125 focus:scale-125 ${
            active ? 'translate-y-[15px]' : 'translate-y-20'
          }`}
        >
          <MdDarkMode />
        </Icon>
        <Icon
          className={`h-10 transform transition-all duration-500 hover:scale-125 focus:scale-125 ${
            active ? 'translate-y-20' : '-translate-y-[15px]'
          }`}
        >
          <MdWbSunny />
        </Icon>
      </label>
    </div>
  );
};

export default ThemeToggle;
