import React from "react";
import SortFromTo from "./SortFromTo";
import SortByYear from "./SortByYear";
import FilterByName from "./FilterByName";
import "./filter.css";
import FilterByPrice from "./FlterByPrice";
export default function FilterForm() {
  return (
    <div className="filterForm">
      <SortFromTo />
      <SortByYear />
      <FilterByPrice />
      <FilterByName />
    </div>
  );
}
