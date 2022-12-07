import { createSlice } from "@reduxjs/toolkit";
import customerSlice from "../customer/customerSlice";

const initialState = {
  videoText:
    "För att vi skall kunna ge dig ett så ärligt pris som möjligt för ditt bohag, dödsbo, lösöre eller våra tjänster så erbjuder vi ett kostandsfritt besök för "
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setMainQuery: (state, { payload }) => {
      state.mainQuery = payload;
    }
  }
});

export const { setMainQuery } = contentSlice.actions;
export const getContentData = (state) => state.content;
export default contentSlice.reducer;
