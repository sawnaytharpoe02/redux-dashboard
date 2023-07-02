import { apiCall } from '../../service/apiService';
import { setLoading } from './status';

export const getCategory = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await apiCall('categories', 'get');
    dispatch({
      type: 'SET_CATEGORY',
      payload: res.data,
    });
    dispatch(setLoading(false));
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
