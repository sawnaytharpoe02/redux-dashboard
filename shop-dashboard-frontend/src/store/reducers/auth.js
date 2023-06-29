const initialState = {
  user: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { ...state, user: action.payload };
    case 'LOGIN_USER':
      return { ...state, user: action.payload };
    case 'LOGOUT_USER':
      return { ...state, user: null };
    default:
      return state;
  }
};
