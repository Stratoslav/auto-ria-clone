import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  loading: false,
  searchAutoQuery: "",
};

const allCarsSlice = createSlice({
  name: "allCar/slice",
  initialState: initialState,
  reducers: {
    getAllCars: (state, action) => {
      state.cars = action.payload;
    },
    getFilteredCar: (state, action) => {
      state.cars = action.payload;
    },
    getFilteredCarByYear: (state, action) => {
      state.cars = action.payload;
    },
    getFilteredCarByMoney: (state, action) => {
      state.cars = action.payload;
    },
    getFilteredCarFromTo: (state, action) => {
      state.cars = action.payload;
    },
    setAutoSearchQuery: (state, action) => {
      state.searchAutoQuery = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { reducer: allCarsReducer, actions: allCarsActions } =
  allCarsSlice;
