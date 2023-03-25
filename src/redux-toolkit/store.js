import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customer/customerSlice";
import newsReducer from "./news/newsSlice";
import elementReducer from "./scrollElement/scrollElementSlice";
import contentReducer from "./content/contentSlice";
import leadsReducer from "./leads/leadsSlice";
import useReducer from "./userSlice";
import snabbkollenReducer from "./snabbkollenSlice";
export const store = configureStore({
  reducer: {
    customer: customerReducer,
    news: newsReducer,
    element: elementReducer,
    content: contentReducer,
    leads: leadsReducer,
    user: useReducer,
    snabbkollen: snabbkollenReducer
  }
});
