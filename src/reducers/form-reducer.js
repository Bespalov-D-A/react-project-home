import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  prjCity: "",
  prjPass: "",
  prjPassRepeat: "",
  prjMail: "",
  prjCheckbox: true,
};

const formReducer = createSlice({
  name: "formReducer",
  initialState,
  reducers: {
    setPrjCity: (state, action) => {
      state.prjCity = action.payload;
    },
    setPrjCheckbox: (state, action) => {
      state.prjCheckbox = action.payload;
    },
    setPrjMail: (state, action) => {
      state.prjMail = action.payload;
    },
    setPrjPass: (state, action) => {
      state.prjPass = action.payload;
    },
    setPrjPassRepeat: (state, action) => {
      state.prjPassRepeat = action.payload;
    },
  },
});
export const { setPrjMail, setPrjPass, setPrjPassRepeat, setPrjCity, setPrjCheckbox } = formReducer.actions;
export default formReducer.reducer;
