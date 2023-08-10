import React, { useEffect, useState } from "react";
import { getByFilterMoney } from "../../API/car.api";

import { NavLink } from "react-router-dom";

function FilterByPrice() {
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
            <span class="">Ціна </span>
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
                placeholder="From..."
              />
            </div>
          </div>
        </div>
        <NavLink to={"/select"}>
          <button onClick={() => filterByPrice()}>Search</button>
        </NavLink>
      </div>
    </div>
  );
}

export default FilterByPrice;
