import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "info@dodsbo-jouren.se",
  phone: "031-7539060",
  business: "Dödsbo Jouren",
  adress: "Första Långgatan 11",
  zip: "413 28",
  city: "Göteborg",
  coords: { lat: 57.700097611245894, lng: 11.947820491799002 },
  weatherData: [],
  searchTerms: [
    "Dödsbo Hantering",
    "Flytt",
    "Städning",
    "Värdering",
    "Uppköp",
    "Sanering"
  ]
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setWeatherData: (state, { payload }) => {
      state.weatherData = payload;
    }
  }
});
export const { setWeatherData } = customerSlice.actions;
export const getCustomerData = (state) => state.customer;
export default customerSlice.reducer;
