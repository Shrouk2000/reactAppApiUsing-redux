import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold IDs of items in the cart
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      if (!state.items.includes(id)) {
        state.items.push(id);
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(itemId => itemId !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
