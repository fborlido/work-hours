import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAll } from "./API";

const initialState = {
  status: "idle",
  data: [],
  years: [],
  months: [],
  users: [],
};

export const fetchData = createAsyncThunk("content/fetch", async () => {
  const data = await fetchAll();
  return data.data;
});

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      action.payload.map((entry) => {
        state.users.push(entry.user);
        state.months.push({ month: entry.month, year: entry.year });
        state.years.push(entry.year);
        return 0
      });
      state.data = action.payload;
    });
  },
});

export const { changeStatus, loadData } = contentSlice.actions;
export default contentSlice.reducer;
