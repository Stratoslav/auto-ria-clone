import { configureStore } from "@reduxjs/toolkit";
import { allCarsReducer } from "./slice/allCarsSlice";
import { autoSliceReducer } from "./slice/autoSlice";
const store = configureStore({
  reducer: {
    allCarsReducer,
    autoSliceReducer,
  },
});

export default store;
