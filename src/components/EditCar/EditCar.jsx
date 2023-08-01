import React, { useState } from "react";
import { updateCar } from "../../API/car.api";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import "./edit.css";
function EditCar() {
  const location = useLocation();
  const data = location.state;
  const [name, setName] = useState(data.name);
  const [model, setModel] = useState(data.model);
  const [year, setYear] = useState(data.year);
  const [mileage, setMileage] = useState(data.mileage);
  const [city, setCity] = useState(data.city);
  const [dtp, setDtp] = useState(data.dtp);
  const [color, setColor] = useState(data.color);
  const [price, setPrice] = useState(data.price);
  const [phone, setPhone] = useState(data.phone);

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    await updateCar(
      name,
      model,
      year,
      mileage,
      city,
      dtp,
      color,
      price,
      phone,
      data?.id
    );
    navigate("/");
  };
  return (
    <div>
      <form
        className="add_form"
        onSubmit={submitForm}
        enctype="multipart/form-data"
      >
        <label for="name" class="add_form-label">
          Name
          <input
            class="add_form-input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            name="name"
            id="name"
            placeholder="Name"
          />
        </label>

        <label for="model" class="add_form-label">
          model
          <input
            class="add_form-input"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            type="text"
            name="model"
            id="model"
            placeholder="model"
          />
        </label>
        <label for="year" class="add_form-label">
          year
          <input
            class="add_form-input"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            type="number"
            name="year"
            id="year"
            placeholder="year"
          />
        </label>
        <label for="mileage" class="add_form-label">
          mileage
          <input
            class="add_form-input"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            type="text"
            name="mileage"
            id="mileage"
            placeholder="mileage"
          />
        </label>
        <label for="city" class="add_form-label">
          city
          <input
            class="add_form-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            name="city"
            id="city"
            placeholder="city"
          />
        </label>
        <label class="add_form-label select">
          <select
            class="add_form-input"
            name="dtp"
            onChange={(e) => setDtp(e.target.value)}
          >
            <option value="was">Не был в ДТП</option>
            <option value="Wasnt in dtp">Был в ДТП</option>
          </select>
        </label>

        <label for="color" class="add_form-label">
          color
          <input
            class="add_form-input"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="text"
            name="color"
            id="color"
            placeholder="color"
          />
        </label>

        <label for="price" class="add_form-label">
          price
          <input
            class="add_form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="price"
            id="price"
            placeholder="price"
          />
        </label>

        <label for="phone" className="add_form-label">
          phone
          <input
            className="add_form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            name="phone"
            id="phone"
            placeholder="phone"
          />
        </label>

        <button className="add_form-input btn_edit" type="submit">
          update
        </button>
        <NavLink className="back_link" to={`/cars/${data.id}`}>
          back
        </NavLink>
      </form>
    </div>
  );
}

export default EditCar;
