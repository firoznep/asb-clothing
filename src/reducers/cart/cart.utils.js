const addItemsToCart = (items, newItem) => {
  const isNewItem = items.find((item) => item.id === newItem.id);

  if (isNewItem) {
    return items.map((item) =>
      item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : { ...item }
    );
  }

  return [...items, { ...newItem, quantity: 1 }];
};

export default addItemsToCart;
