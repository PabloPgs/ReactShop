import { store } from './store';

export function setItems(items) {
  return {
    type: 'SET_ITEMS',
    payload: items,
  };
}

export function setActiveSort(sort) {
  return {
    type: 'SET_SORT',
    payload: sort,
  };
}

export function addToCart(product) {
  let newItems;
  const state = store.getState();
  const alreadyExists = state.cartItems.find((item) => item.id === product.id);

  if (alreadyExists) {
    newItems = state.cartItems.map((item) => {
      if (item.id === product.id) {
        item.count += 1;
        return item;
      }
      return item;
    });
  } else {
    product.count = 1;
    newItems = [...state.cartItems, product];
  }

  const totalCartItems = newItems.reduce((acc, item) => (acc += item.count), 0);

  return {
    type: 'ADD_CART_ITEM',
    payload: {
      cartItems: newItems,
      totalCartItems,
    },
  };
}

export function changeItemCount(id, num) {
  const state = store.getState();
  const modifiedItems = state.cartItems
    .map((item) => {
      if (item.id === id) {
        item.count += num;
        return item;
      }
      return item;
    })
    .filter((item) => item.count > 0);

  return {
    type: 'CHANGE_ITEM_COUNT',
    payload: {
      cartItems: modifiedItems,
      totalCartItems: modifiedItems.reduce((acc, item) => (acc += item.count), 0),
    },
  };
}

export function clearCart() {
  return {
    type: 'CLEAR_CART',
  };
}

export function deleteCartItem(id) {
  return {
    type: 'DELETE_CART_ITEM',
    payload: id,
  };
}
