const changeTheme = (theme: string): void => {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
}

export { changeTheme as default };