import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const autoSlice = createSlice({
  name: "allCar/slice",
  initialState: initialState,
  reducers: {
    getCarImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { reducer: autoSliceReducer, actions: autoSliceActions } =
  autoSlice;
