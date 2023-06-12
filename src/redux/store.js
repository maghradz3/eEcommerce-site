import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice";
import { productReducer } from "./slice/ProductSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
