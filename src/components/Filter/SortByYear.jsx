import React, { useEffect, useState } from "react";
import { getByFilterYears } from "../../API/car.api";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function SortByYear() {
  const errorMessage = useSelector((s) => s.allCarsReducer.errorYearMessage);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    let select = document.getElementById("yearFrom");
    let select2 = document.getElementsByClassName("yearFrom");

    for (let i = 2023; i >= 1960; i--) {
      if (select.length < 64) {
        select.innerHTML += `
    <option value=${i}>${i}</option>`;
        select2[0].innerHTML += `
    <option value=${i}>${i}</option>`;
      }
    }
  }, []);
  const searchByYear = () => {
    getByFilterYears(from, to);
  };

  return (
    <div>
      <div class="col2">
        <div class="m-rows e-year">
          <label for="forYear" class="pseudoelement _grey">
            <div class="search__form-title">Year Of Issue</div>
          </label>
          <div class="popup-wrap">
            <label for="forYear" class="fold"></label>
            <div class="popup-body">
              <select
                onChange={(e) => setFrom(e.target.value)}
                id="yearFrom"
                name="s_yers[0]"
                data-placeholder="від"
                aria-labelledby="yearsLabel"
                aria-label="Від"
                class="e-form field _grey"
              >
                <option value="0" selected="selected">
                  Від
                </option>
              </select>
              <select
                onChange={(e) => setTo(e.target.value)}
                id="yearFrom"
                name="s_yers[1]"
                data-placeholder="До"
                aria-labelledby="yearsLabel"
                aria-label="До"
                class="e-form field _grey yearFrom"
              >
                <option value="0" selected="selected">
                  До
                </option>
              </select>
              <NavLink to={"/select"}>
                <button onClick={() => searchByYear()}>Search</button>
              </NavLink>
            </div>
            {errorMessage.length > 0 ? (
              <p style={{ color: "#ff7878" }}>{errorMessage}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortByYear;
