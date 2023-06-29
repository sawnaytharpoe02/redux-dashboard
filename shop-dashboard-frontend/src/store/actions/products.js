import { apiCall } from '../../service/apiService';
import { setLoading } from './status';

export const getProducts = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await apiCall('get', 'https://fakestoreapi.com/products');
    dispatch({
      type: 'SET_PRODUCTS',
      payload: res.data,
    });
    dispatch(setLoading(false));
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: id,
    });
  };
};
