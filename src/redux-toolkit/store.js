import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customer/customerSlice";
import newsReducer from "./news/newsSlice";
import elementReducer from "./scrollElement/scrollElementSlice";
export const store = configureStore({
  reducer: {
    customer: customerReducer,
    news: newsReducer,
    element: elementReducer,
  },
});
