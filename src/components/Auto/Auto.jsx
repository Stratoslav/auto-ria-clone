import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getOneCar } from "../../API/car.api";
import "./car.css";

function AllAutoComponent() {
  const [car, setCar] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (car.length === 0) {
      getOneCar(params.id, setCar);
    }
  }, [car.length, params.id]);
  const data = {
    name: car?.name,
    model: car.model,
    year: car.year,
    image: car.image,
    mileage: car.mileage,
    price: car.price,
    city: car.city,
    color: car.color,
    phone: car.phone_number,
    id: car.id,
  };
  return (
    <div>
      <div className="car">
        <h3>
          {car.name} {car.model} - {car.year}
        </h3>
        <img
          className="car_img"
          src={`http://auto/img/${car.image}`}
          alt="img"
          width={200}
        />
        <p>mileage - {car.mileage}km</p>
        <p>price - {car.price}$</p>
        <p>city - {car.city}</p>
        <p>color - {car.color}</p>
        <p>phone - {car.phone_number}</p>
        <p>{car.dtp}</p>
      </div>
      <NavLink to={`/`}>back</NavLink>
      <NavLink
        className="car__list-link"
        to={{
          pathname: `/cars/update/${car.id}`,
        }}
        state={data}
      >
        edit
      </NavLink>
    </div>
  );
}

export default AllAutoComponent;
