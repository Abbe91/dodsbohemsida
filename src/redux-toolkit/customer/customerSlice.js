import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "info@effectenergispar.se",
  phone: "070-3424117",
  business: "Effect Energispar",
  adress: "Hampmyrvägen 25",
  zip: "975 93",
  city: "Luleå",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
});

export const getCustomerData = (state) => state.customer;
export default customerSlice.reducer;
