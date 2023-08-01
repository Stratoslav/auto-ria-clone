import React, { useState } from "react";
import { addCar } from "../../API/car.api";
import { useNavigate } from "react-router-dom";
import "./addCar.css";
function AddCar() {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [city, setCity] = useState("");
  const [dtp, setDtp] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("mileage", mileage);
    formData.append("city", city);
    formData.append("dtp", dtp);
    formData.append("color", color);
    formData.append("price", price);
    formData.append("phone", phone);

    await addCar(formData);
    navigate("/");
  };
  return (
    <div>
      <button className="back_button" onClick={() => navigate("/")}>
        {`<-- Back`}
      </button>
      <form
        className="add_form"
        method="post"
        onSubmit={submitForm}
        enctype="multipart/form-data"
      >
        <label for="name" class="add_form-label">
          Name
          <input
            class="add_form-input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </label>
        <label for="model" class="add_form-label">
          model
          <input
            class="add_form-input"
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
        </label>{" "}
        <label for="color" class="add_form-label">
          color
          <input
            class="add_form-input"
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
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="price"
            id="price"
            placeholder="price"
          />
        </label>
        <label for="phone" class="add_form-label">
          phone
          <input
            class="add_form-input"
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            name="phone"
            id="phone"
            placeholder="phone"
          />
        </label>
        <label for="image" class="add_form-label">
          <input
            class="add_form-input"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name="image"
            id="image"
          />
        </label>
        <button class="add_form-input" type="submit">
          post an ad
        </button>
      </form>
    </div>
  );
}

export default AddCar;
