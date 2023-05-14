export const setTheme = (theme: string) => {
  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(theme);
  document.documentElement.setAttribute('data-mode', theme);
  localStorage.setItem('theme', theme);
};
