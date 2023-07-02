const initialState = {
  showToast: false,
  toastMessage: '',
};

export const toast = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_TOAST':
      return {
        ...state,
        showToast: true,
        toastMessage: action.payload,
      };
    case 'HIDE_TOAST':
      return {
        ...state,
        showToast: false,
        toastMessage: '',
      };
    default:
      return state;
  }
};
