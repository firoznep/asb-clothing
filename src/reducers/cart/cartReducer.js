import cartActionType from './cartActionType';
import addItemsToCart from './cart.utils';

const INITIAL_STATE = {
  toggleCart: true,
  addItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART:
      return { ...state, toggleCart: !state.toggleCart };
    case cartActionType.ADD_ITEM_TO_CART:
      return {
        ...state,
        addItems: addItemsToCart(state.addItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
