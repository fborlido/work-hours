import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
};

const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    advanceMonth(state) {
      if (state.month === 12) {
        state.month = 1;
        state.year++;
      } else {
        state.month++;
      }
    },
    backMonth(state) {
      if (state.month === 1) {
        state.month = 12;
        state.year--;
      } else {
        state.month--;
      }
    },
  },
});

export const { advanceMonth, backMonth } = monthSlice.actions;
export default monthSlice.reducer;
