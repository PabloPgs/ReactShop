const initialState = {
  items: [],
  cartItems: [],
  activeSort: 'all',
  totalCartItems: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SORT':
      return {
        ...state,
        activeSort: action.payload,
      };
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cartItems: action.payload.cartItems,
        totalCartItems: action.payload.totalCartItems,
      };
    case 'CHANGE_ITEM_COUNT':
      return {
        ...state,
        cartItems: action.payload.cartItems,
        totalCartItems: action.payload.totalCartItems,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        totalCartItems: 0,
      };
    case 'DELETE_CART_ITEM':
      const newItems = state.cartItems.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cartItems: newItems,
        totalCartItems: newItems.reduce((acc, item) => acc + item.count, 0),
      };
    default:
      return state;
  }
}
