const intialState = {
  category: [],
};

export const categories = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'DELETE_CATEGORY':
      return {
        ...state,
        category: state.category.filter((c) => c.id !== action.payload),
      };
    default:
      return state;
  }
};
