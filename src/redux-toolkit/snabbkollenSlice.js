import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  services: [],
  bohagsTyp: "",
  kontaktSatt: "",
  beskrivning: "",
  contacts: "",
  namn: "",
  nummer: "",
  email: "",
  area: "",
  when: ""
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
    },
    setNummer: (state = initialState, { payload }) => {
      state.nummer = payload;
    },
    setEmail: (state = initialState, { payload }) => {
      state.email = payload;
    },
    setArea: (state = initialState, { payload }) => {
      state.area = payload;
    },
    setWhen: (state = initialState, { payload }) => {
      state.when = payload;
    }
  }
});
export const {
  setServices,
  setBohagstyp,
  setKontaktsatt,
  setBeskrivning,
  setContacts,
  setNamn,
  setNummer,
  setEmail,
  setArea,
  setWhen
} = snabbkollenSlice.actions;
export const getSnabbkollenData = (state) => state.snabbkollen;
export default snabbkollenSlice.reducer;
