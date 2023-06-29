import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {};
const persistConfig = {
  key: 'persist-key',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);
const persistor = persistStore(store);

export { store, persistor };
