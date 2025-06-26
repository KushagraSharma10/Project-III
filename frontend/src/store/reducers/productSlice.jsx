import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProduct: (state, actions) => {
      state.products = actions.payload;
    },
  },
});

export default productSlice.reducer;
export const { loadProduct } = productSlice.actions;
