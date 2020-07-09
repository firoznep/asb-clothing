import { combineReducers } from 'redux';
import userReducer from './users/userReducers';
import CartReducer from './cart/cartReducer';

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
});
