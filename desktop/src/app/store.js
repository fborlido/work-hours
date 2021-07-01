import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import contentReducer from "../features/content/contentSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    content: contentReducer,
  },
});
