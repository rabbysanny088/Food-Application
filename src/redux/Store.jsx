import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/slices/CartSlice";
import CategorySlice from "./features/slices/CategorySlice";
import SearchSlice from "./features/slices/SearchSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
  },
});

export default Store;
