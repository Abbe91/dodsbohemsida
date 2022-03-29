import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "info@effectenergispar.se",
  phone: "070-3424117",
  business: "Effect Energispar",
  adress: "Hampmyrvägen 25",
  zip: "975 93",
  city: "Luleå",
  coords: { lat: 65.56615126993924, lng: 21.7915225295041 },
  weatherData: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setWeatherData: (state, { payload }) => {
      state.weatherData = payload;
    },
  },
});
export const { setWeatherData } = customerSlice.actions;
export const getCustomerData = (state) => state.customer;
export default customerSlice.reducer;
