import cartActionType from './cartActionType';

const INITIAL_STATE = {
  toggleCart: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART:
      return { ...state, toggleCart: !state.toggleCart };

    default:
      return state;
  }
};

export default CartReducer;
