import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Slices/CartSlice"; // Change from CartSlice to cartSlice

export const store = configureStore({
  reducer: {
    cart: cartSlice, // Change from CartSlice to cartSlice
  },
});
