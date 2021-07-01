import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import monthReducer from "../features/month/monthSlice";
import listReducer from "../features/list/listSlice";
import submitReducer from "../features/submit/submitSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    month: monthReducer,
    list: listReducer,
    submit: submitReducer,
  },
});
