import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  element: "Nav"
};

const scrollElementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    addElement: (state, { payload }) => {
      state.element = payload;
    }
  }
});

export const { addElement } = scrollElementSlice.actions;
export const getElement = (state) => state.element.element;
export default scrollElementSlice.reducer;
