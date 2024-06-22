import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../users/authSlice";

const store = configureStore({
  reducer: {
    registration: authSlice,
  },
});

export default store;
