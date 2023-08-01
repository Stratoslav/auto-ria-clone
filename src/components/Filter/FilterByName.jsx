import React from "react";
import { getAllCar, getFilteredCar } from "../../API/car.api";
import { useDispatch, useSelector } from "react-redux";
import { allCarsActions } from "../../redux/slice/allCarsSlice";
import { NavLink } from "react-router-dom";
import "./filter.css";

function FilterByName() {
  const dispatch = useDispatch();
  const { searchAutoQuery } = useSelector((s) => s.allCarsReducer);

  const filterCarsByName = (e) => {
    dispatch(allCarsActions.setAutoSearchQuery(e.target.value));
  };

  const searchCars = () => {
    getFilteredCar(searchAutoQuery);
    dispatch(allCarsActions.setAutoSearchQuery(""));
  };

  return (
    <div>
      <input
        placeholder="search..."
        className="filterQuery_input"
        type="text"
        onChange={filterCarsByName}
        value={searchAutoQuery}
      />
      <NavLink to="/search">
        {searchAutoQuery.length ? (
          <button onClick={searchCars}>Search</button>
        ) : (
          <button onClick={() => getAllCar()}>Search</button>
        )}
      </NavLink>
    </div>
  );
}

export default FilterByName;
