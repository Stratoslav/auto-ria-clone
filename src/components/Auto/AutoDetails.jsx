import React from "react";
import { useSelector } from "react-redux";

function AutoDetails() {
  const { description } = useSelector((s) => s.autoSliceReducer);
  const {
    id,
    descr,
    drive_unit,
    engine_power,
    engine_type,
    fuel_use_average,
    fuel_use_city,
    fuel_use_race,
    hp,
    transmittion,
  } = description;

  return (
    <div>
      <p>Drive unit: {drive_unit}</p>
      <p>Engine power: {engine_power}</p>
      <p>Engine Type: {engine_type}</p>
      <p>
        Fuel use: race - {fuel_use_race}; city - {fuel_use_city}; average - $
        {(fuel_use_average + fuel_use_city) / 2}
      </p>
      <p>HP: {hp}</p>
      <p>transmittion: {transmittion}</p>
      <p>description: {descr}</p>
    </div>
  );
}

export default AutoDetails;
