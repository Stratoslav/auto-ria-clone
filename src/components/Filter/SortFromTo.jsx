import React, { useEffect, useState } from "react";
import { sortFromTo } from "../../API/car.api";
import "./filter.css";
function SortFromTo() {
  const [value, setValue] = useState("0");

  useEffect(() => {
    sortFromTo(value);
  }, [value]);
  return (
    <div>
      Сортувати:
      <select
        className="filterForm__selector"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option selected value="0">
          From expensive to cheap
        </option>
        <option value="1">From cheap to expensive</option>
      </select>
    </div>
  );
}

export default SortFromTo;
