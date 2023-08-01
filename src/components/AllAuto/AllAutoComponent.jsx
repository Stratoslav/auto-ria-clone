import React from "react";
import { NavLink } from "react-router-dom";
import "./auto.css";
import FilterForm from "../Filter/FilterForm";

function AllAutoComponent({ allAuto }) {
  return (
    <div>
      <FilterForm />
      <ul>
        {allAuto.map((d) => (
          <li className="car__list-item" key={d.id}>
            <h3>
              {" "}
              {d.name} {d.model} - {d.year} <br />
              price: {d.price} $
            </h3>
            <img src={`http://auto/img/${d.image}`} alt="img" width={300} />
            <div>
              <NavLink className="car__list-link" to={`/cars/${d.id}`}>
                Details
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllAutoComponent;
