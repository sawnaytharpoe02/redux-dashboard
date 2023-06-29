export const registerUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: 'REGISTER_USER',
      payload: user,
    });
  };
};

export const loginUser = (credentials) => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGIN_USER',
      payload: credentials,
    });
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT_USER',
    });
  };
};
