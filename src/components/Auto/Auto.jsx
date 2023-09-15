/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  getCarImages,
  getOneCar,
  // getOneCarDescr,
  postImageToCar,
} from "../../API/car.api";
import "./car.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AddFunctionalForm from "./AddFunctionalForm/AddFunctionalForm";
import AutoDetails from "./AutoDetails";
function AllAutoComponent() {
  const [car, setCar] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const params = useParams();
  const location = useLocation();
  const { images, description } = useSelector((s) => s.autoSliceReducer);

  useEffect(() => {
    if (car.length === 0) {
      getOneCar(params.id, setCar);
      getCarImages(params.id);
    }
  }, [car.length, params.id]);

  const getMoreDetails = () => {
    setIsShow(true);
  };
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
    <div className="auto__wrapper">
      <NavLink className={"back_button"} to={`/`}>
        {"<-- back"}
      </NavLink>
      <div
        className="car"
        style={
          location.pathname === `/cars/add/${car.id}`
            ? { maxWidth: "900px" }
            : null
        }
      >
        <div className="auto">
          <div>
            <h3 className="auto__title">
              <NavLink
                className="car__edit-link"
                to={{
                  pathname: `/cars/update/${car.id}`,
                }}
                state={data}
              >
                <FontAwesomeIcon icon={faPencil} />
              </NavLink>
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
              <>
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
                <input
                  onChange={addImageToCar}
                  type="file"
                  className="add__image-input"
                />
              </>
            )}
          </div>
          <div className="auto__details-wrapper">
            <p>mileage - {car.mileage}km</p>
            <p>price - {car.price}$</p>
            <p>city - {car.city}</p>
            <p>color - {car.color}</p>
            <p>phone - {car.phone_number}</p>
            {isShow && description !== null ? <AutoDetails /> : null}
            <p>{car.dtp}</p>
            {description.length === 0 ? (
              <NavLink to={`/cars/add/${car.id}`}>add description</NavLink>
            ) : (
              <NavLink to={`/cars/details/${car.id}`}>
                {description !== null || description.length !== 0 ? (
                  !isShow ? (
                    <button className="showButton" onClick={getMoreDetails}>
                      more details <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                  ) : (
                    <>
                      <button
                        className="showButton"
                        onClick={() => setIsShow(false)}
                      >
                        less details <FontAwesomeIcon icon={faCaretUp} />
                      </button>
                      <NavLink to={`/cars/add/${car.id}`}>
                        add description
                      </NavLink>
                    </>
                  )
                ) : null}
              </NavLink>
            )}
          </div>

          {location.pathname === `/cars/add/${car.id}` ? (
            <AddFunctionalForm />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default AllAutoComponent;
