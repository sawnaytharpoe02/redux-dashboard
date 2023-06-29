import { combineReducers } from 'redux';
import { products } from './products';
import { categories } from './category';
import { status } from './status';
import { auth } from './auth';

export const rootReducer = combineReducers({
  products,
  categories,
  status,
  auth,
});
