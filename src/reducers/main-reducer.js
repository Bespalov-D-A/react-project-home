import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  status: 'Это стандартный статус. Измените его',
  isChange: false
};

const mainReducer = createSlice({
  name: "main",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload.status
    },
    setIsChange: (state, action) => {
      state.isChange = !state.isChange
    }
  },
});
export const { setStatus, setIsChange  } = mainReducer.actions;
export default mainReducer.reducer;
