import cartActionType from './cartActionType';

export const cartAction = () => ({
  type: cartActionType.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM_TO_CART,
  payload: item,
});
