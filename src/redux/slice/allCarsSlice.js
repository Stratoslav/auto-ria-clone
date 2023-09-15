import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  errorPriceMessage: "",
  errorYearMessage: "",
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
      if (action.payload.status === false) {
        state.errorYearMessage = action.payload.message;
      } else {
        state.cars = action.payload;
        state.errorYearMessage = "";
      }
    },
    getFilteredCarByMoney: (state, action) => {
      if (action.payload.status === false) {
        state.errorPriceMessage = action.payload.message;
      } else {
        state.cars = action.payload;
        state.errorPriceMessage = "";
      }
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
