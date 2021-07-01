import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "user",
  selected: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    changeSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { changeFilter, changeSelected } = filterSlice.actions;
export default filterSlice.reducer;
