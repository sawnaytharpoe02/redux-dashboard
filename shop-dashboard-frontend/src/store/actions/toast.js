export const setToast = (message) => ({
  type: 'SHOW_TOAST',
  payload: message,
});

export const hideToast = () => ({
  type: 'HIDE_TOAST',
});
