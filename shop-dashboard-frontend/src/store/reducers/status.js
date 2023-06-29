const intialState = {
  loading: false,
};

export const status = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
