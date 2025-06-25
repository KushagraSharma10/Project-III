import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./reducers/productSlice";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer : productSlice,
    cartReducer : cartSlice
  },
});

