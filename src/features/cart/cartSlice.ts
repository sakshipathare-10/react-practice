import { createSlice } from "@reduxjs/toolkit";

// global cart state
interface CartState {
  count: number;
}

const initialState: CartState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.count += 1; // increase cart count
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
