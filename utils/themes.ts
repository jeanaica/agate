export const setTheme = (theme: string) => {
  document.documentElement.className = theme;
  document.documentElement.setAttribute('data-mode', theme);
  localStorage.setItem('theme', theme);
};
