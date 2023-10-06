import { configureStore } from "@reduxjs/toolkit";
import { allCarsReducer } from "./slice/allCarsSlice";
import { autoSliceReducer } from "./slice/autoSlice";
import { userSliceReducer } from "./slice/userSlice";
const store = configureStore({
  reducer: {
    allCarsReducer,
    autoSliceReducer,
    userSliceReducer,
  },
});

export default store;
