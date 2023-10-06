import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  errors: [],
};

const userSlice = createSlice({
  name: "user/slice",
  initialState: initialState,
  reducers: {
    getErrors: (state, action) => {
      state.errors = action.payload;
    },
    // getCarImages: (state, action) => {
    //   state.images = action.payload;
    // },
    // getCarDescription: (state, action) => {
    //   state.description = action.payload;
    // },
  },
});

export const { reducer: userSliceReducer, actions: userSliceActions } =
  userSlice;
