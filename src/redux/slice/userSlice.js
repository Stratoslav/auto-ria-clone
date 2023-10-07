import { createSlice } from "@reduxjs/toolkit";
let isAuth =
  localStorage.getItem("isAuth") !== undefined
    ? JSON.parse(localStorage.getItem("isAuth"))
    : false;
let user =
  localStorage.getItem("user") !== undefined
    ? JSON.parse(localStorage.getItem("user"))
    : [];
const initialState = {
  isAuth: isAuth,
  errors: [],
  response: [],
  user: user,
};

const userSlice = createSlice({
  name: "user/slice",
  initialState: initialState,
  reducers: {
    getErrors: (state, action) => {
      state.errors = action.payload;
      state.response = action.payload;
    },
    isAuth: (state, action) => {
      state.isAuth = action.payload;
      localStorage.setItem("isAuth", JSON.stringify(state.isAuth));
    },
    getUser: (state, { payload }) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(state.user?.user));
    },
  },
});

export const { reducer: userSliceReducer, actions: userSliceActions } =
  userSlice;
