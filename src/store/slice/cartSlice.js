// src/store/slice/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartCount: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.cartCount += 1;
    },
    removeFromCart: (state) => {
      state.cartCount = Math.max(state.cartCount - 1, 0);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
