const data = [
  { id: 1, name: 'electronics' },
  { id: 2, name: 'jewelery' },
  { id: 3, name: "men's clothing" },
  { id: 4, name: "women's clothing" },
];

export const getCategory = () => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_CATEGORY',
      payload: data,
    });
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    dispatch({
      type: 'DELETE_CATEGORY',
      payload: id,
    });
  };
};
