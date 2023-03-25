import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  news: undefined,
  bingNews: []
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, { payload }) => {
      state.news = payload;
    },
    setBingNews: (state, { payload }) => {
      state.bingNews = payload;
    }
  }
});
export const { addNews, setBingNews } = newsSlice.actions;
export const getNewsData = (state) => state.news.news;
export const getBingNews = (state) => state.news.bingNews;
export default newsSlice.reducer;
