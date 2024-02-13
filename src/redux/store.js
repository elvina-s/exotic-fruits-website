import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import itemsSlice from "./itemsSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    items: itemsSlice,
  }
})
