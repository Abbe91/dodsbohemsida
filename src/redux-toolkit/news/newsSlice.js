import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  news: [],
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, { payload }) => {
      state.news = payload;
    },
  },
});
export const { addNews } = newsSlice.actions;
export const getNewsData = (state) => state.news.news;
export default newsSlice.reducer;
