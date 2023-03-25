import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  services: [],
  bohagsTyp: "",
  kontaktSatt: "",
  beskrivning: "",
  contacts: "",
  namn: ""
};

const snabbkollenSlice = createSlice({
  name: "snabbkollen",
  initialState,
  reducers: {
    setServices: (state = initialState, { payload }) => {
      state.services.push(payload);
    },
    setBohagstyp: (state = initialState, { payload }) => {
      state.bohagsTyp = payload;
    },
    setKontaktsatt: (state = initialState, { payload }) => {
      state.kontaktSatt = payload;
    },
    setBeskrivning: (state = initialState, { payload }) => {
      state.beskrivning = payload;
    },
    setContacts: (state = initialState, { payload }) => {
      state.contacts = payload;
    },
    setNamn: (state = initialState, { payload }) => {
      state.namn = payload;
    }
  }
});
export const {
  setServices,
  setBohagstyp,
  setKontaktsatt,
  setBeskrivning,
  setContacts,
  setNamn
} = snabbkollenSlice.actions;
export const getSnabbkollenData = (state) => state.snabbkollen;
export default snabbkollenSlice.reducer;
