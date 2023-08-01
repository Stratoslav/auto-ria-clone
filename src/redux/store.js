import { configureStore } from "@reduxjs/toolkit";
import { allCarsReducer } from "./slice/allCarsSlice";
const store = configureStore({
  reducer: {
    allCarsReducer,
  },
});

export default store;
