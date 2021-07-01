import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setDays(state, action) {
      let days = new Date(
        action.payload.year,
        action.payload.month,
        0
      ).getDate();
      state.days = [];
      for (let i = 0; i < days; i++) {
        let weekDay = new Date(
          action.payload.year,
          action.payload.month,
          i + 1
        ).getDay();
        state.days.push({
          day: i + 1,
          hours: weekDay === 0 || weekDay === 6 ? 0 : 8,
        });
      }
    },
    increaseDay(state, action) {
      let index = state.days.findIndex((day) => day.day === action.payload);
      state.days[index].hours++;
    },
    decreaseDay(state, action) {
      let index = state.days.findIndex((day) => day.day === action.payload);
      state.days[index].hours--;
    },
  },
});

export const { setDays, increaseDay, decreaseDay } = listSlice.actions;
export default listSlice.reducer;
