import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ShopApp from '../reducers/index'
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();
const store =  createStore(ShopApp, persistedState, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;