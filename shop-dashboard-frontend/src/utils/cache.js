const appName = 'next-dashboard';

export const setToken = (value) => {
  localStorage.setItem(`${appName}_token`, value);
};

export const getToken = () => {
  return localStorage.getItem(`${appName}_token`);
};

export const removeToken = () => {
  localStorage.removeItem(`${appName}`);
};
