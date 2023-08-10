import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { addMoreFunctional } from "../../../API/car.api";

function AddFunctionalForm() {
  const params = useParams();

  const [engine_power, setEnginePower] = useState(0);
  const [engine_type, setEngineType] = useState("");
  const [fuel_use_race, setFuelUseRace] = useState(0);
  const [fuel_use_city, setFuelUseCity] = useState(0);
  const [hp, setHp] = useState(0);
  const [fuel_use_average, setFuelUseAverage] = useState(0);
  const [transmittion, setTransmittion] = useState("");
  const [drive_unit, setDriveUnt] = useState("");

  const [descr, setDescr] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("engine_power", engine_power);
    formData.append("engine_type", engine_type);
    formData.append("fuel_use_race", fuel_use_race);
    formData.append("fuel_use_city", fuel_use_city);
    formData.append("hp", hp);
    formData.append("fuel_use_average", fuel_use_average);
    formData.append("transmittion", transmittion);
    formData.append("descr", descr);
    formData.append("drive_unit", drive_unit);

    await addMoreFunctional(formData, params?.id);
    // navigate("/");
  };

  return (
    <div className="add__form-wrapper">
      <button className="back_button" onClick={() => navigate("/")}>
        {`<-- Back`}
      </button>
      <form
        className="add_form-func"
        method="post"
        onSubmit={submitForm}
        enctype="multipart/form-data"
      >
        <label for="engine_power" class="add_form-label">
          Engine Power
          <input
            class="add_form-input"
            onChange={(e) => setEnginePower(e.target.value)}
            type="number"
            name="engine_power"
            id="engine_power"
            placeholder="engine power"
          />
        </label>
        <label for="engine_type" class="add_form-label">
          Engine type
          <input
            class="add_form-input"
            onChange={(e) => setEngineType(e.target.value)}
            type="text"
            name="engine_type"
            id="engine_type"
            placeholder="engine type"
          />
        </label>
        <label for="hp" class="add_form-label">
          hp
          <input
            class="add_form-input"
            onChange={(e) => setHp(e.target.value)}
            type="number"
            name="hp"
            id="hp"
            placeholder="hp"
          />
        </label>
        <label for="fuel_use_race" class="add_form-label">
          Fuel use race
          <input
            class="add_form-input"
            onChange={(e) => setFuelUseRace(e.target.value)}
            type="number"
            name="fuel_use_race"
            id="fuel_use_race"
            placeholder="fuel_use_race"
          />
        </label>
        <label for="fuel_use_city" class="add_form-label">
          Fuel Use city
          <input
            class="add_form-input"
            onChange={(e) => setFuelUseCity(e.target.value)}
            type="number"
            name="fuel_use_city"
            id="fuel_use_city"
            placeholder="fuel_use_city"
          />
        </label>
        <label for="fuel_use_average" class="add_form-label">
          Fuel Use Average
          <input
            class="add_form-input"
            onChange={(e) => setFuelUseAverage(e.target.value)}
            type="number"
            name="fuel_use_average"
            id="fuel_use_average"
            placeholder="fuel_use_average"
          />
        </label>

        <label for="transmittion" class="add_form-label">
          Transmition
          <input
            class="add_form-input"
            onChange={(e) => setTransmittion(e.target.value)}
            type="text"
            name="transmittion"
            id="transmittion"
            placeholder="transmittion"
          />
        </label>
        <label for="drive_unit" class="add_form-label">
          drive unit
          <input
            class="add_form-input"
            onChange={(e) => setDriveUnt(e.target.value)}
            type="text"
            name="drive_unit"
            id="drive_unit"
            placeholder="drive_unit"
          />
        </label>

        <label for="descr" class="add_form-label">
          description
          <textarea
            class="add_form-input form_textarea"
            id="descr"
            name="descr"
            onChange={(e) => setDescr(e.target.value)}
          ></textarea>
        </label>
        <button class="add_form-input" type="submit">
          post an ad
        </button>
      </form>
    </div>
  );
}

export default AddFunctionalForm;
