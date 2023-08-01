import React, { useEffect } from "react";
import { getAllCar } from "../../API/car.api";
import { useDispatch, useSelector } from "react-redux";
import AllAutoComponent from "./AllAutoComponent";
import { allCarsActions } from "../../redux/slice/allCarsSlice";

function AllAuto() {
  const { cars, loading } = useSelector((s) => s.allCarsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === false) {
      getAllCar();
    }
    dispatch(allCarsActions.setLoading(true));
  }, [dispatch, loading]);

  return (
    <div>
      <AllAutoComponent allAuto={cars} />
    </div>
  );
}

export default AllAuto;
