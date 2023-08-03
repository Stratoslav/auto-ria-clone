/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCarImages, getOneCar, postImageToCar } from "../../API/car.api";
import "./car.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function AllAutoComponent() {
  const [car, setCar] = useState([]);
  const params = useParams();
  const { images } = useSelector((s) => s.autoSliceReducer);

  useEffect(() => {
    if (car.length === 0) {
      getOneCar(params.id, setCar);
      getCarImages(params.id);
    }
  }, [car.length, params.id]);

  const addImageToCar = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    postImageToCar(params.id, formData);
    getCarImages(params.id);
  };
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
        {images.length === 0 ? (
          <img
            className="car_img"
            src={`http://auto/img/${car.image}`}
            alt="img"
            width={200}
          />
        ) : (
          <div className="carousel">
            <Carousel width={500} showThumbs={false}>
              {images?.map((image) => (
                <div className="carousel__img-item" key={image.id}>
                  <img
                    className="carousel__img"
                    src={`http://auto/img/${image.image}`}
                    alt="image"
                    width={200}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
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
      <input
        onChange={addImageToCar}
        type="file"
        className="add__image-input"
      />
    </div>
  );
}

export default AllAutoComponent;
