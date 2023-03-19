import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
  password: "",
  loggedIn: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state = initialState, { payload }) => {
      state.user = payload;
    },
    setPassword: (state = initialState, { payload }) => {
      state.password = payload;
    },
    setLoggedIn: (state = initialState, { payload }) => {
      state.loggedIn = payload;
    }
  }
});
export const { setUser, setPassword, setLoggedIn } = userSlice.actions;
export const getUserData = (state) => state;
export default userSlice.reducer;
