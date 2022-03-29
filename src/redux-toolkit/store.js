import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customer/customerSlice";
export const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
});
