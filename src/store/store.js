import { configureStore } from "@reduxjs/toolkit";
import garbageReducer from "../store/garbageSlice";

export const store = configureStore({
  reducer: {
    garbage: garbageReducer,
  },
});

export default store;
