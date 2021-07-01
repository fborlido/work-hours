import { createSlice } from "@reduxjs/toolkit";
import { sendEntry } from "./API";

const initialState = {
  status: "idle",
};

const submitSlice = createSlice({
  name: "submit",
  initialState,
  reducers: {
    loading(state) {
      if (state.status === "idle") {
        state.status = "waiting";
      }
    },
    done(state) {
      if (state.status === "waiting") {
        state.status = "success";
      }
    },
    idle(state) {
      state.status = "idle";
    },
    error(state) {
      state.status = "error";
    },
  },
});

export const { loading, done, idle, error } = submitSlice.actions;

export const sendData = (data) => async (dispatch) => {
  dispatch(loading());
  const response = await sendEntry(data);
  if (response.status === 200) {
    dispatch(done());
  } else {
    dispatch(error());
  }
};

export default submitSlice.reducer;
