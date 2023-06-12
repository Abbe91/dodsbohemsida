import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  leads: []
};

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setNewLead: (state = initialState, { payload }) => {
      state.leads = payload;
    }
  }
});

export const getLeads = (state) => state.leads.leads;
export const { setNewLead } = leadsSlice.actions;
export default leadsSlice.reducer;
