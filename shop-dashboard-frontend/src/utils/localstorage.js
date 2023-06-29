export const setItem = (theme) => {
  localStorage.setItem('theme', theme);
};

export const getItem = () => {
  return localStorage.getItem('theme');
};
