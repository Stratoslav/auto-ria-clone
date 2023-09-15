import React, { useEffect, useState } from "react";
import { getByFilterMoney } from "../../API/car.api";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function FilterByPrice() {
  const errorMessage = useSelector((s) => s.allCarsReducer.errorPriceMessage);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const filterByPrice = () => {
    getByFilterMoney(from, to);
  };

  return (
    <div>
      <div class="col2">
        <div class="m-rows e-year">
          <label for="forYear" class="pseudoelement _grey">
            <div class="search__form-title">Sort By Price </div>
          </label>
          <div class="popup-wrap">
            <label for="forYear" class="fold"></label>
            <div class="popup-body">
              <input
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="From..."
              />
              <input
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="To..."
              />
              <NavLink to={"/select"}>
                <button onClick={() => filterByPrice()}>Search</button>
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

export default FilterByPrice;
