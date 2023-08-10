import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  description: [],
};

const autoSlice = createSlice({
  name: "allCar/slice",
  initialState: initialState,
  reducers: {
    getCarImages: (state, action) => {
      state.images = action.payload;
    },
    getCarDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const { reducer: autoSliceReducer, actions: autoSliceActions } =
  autoSlice;
