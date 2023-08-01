import React from "react";
import SortFromTo from "./SortFromTo";
import SortByYear from "./SortByYear";
import FilterByName from "./FilterByName";
import "./filter.css";
export default function FilterForm() {
  return (
    <div className="filterForm">
      <SortFromTo />
      <SortByYear />
      <FilterByName />
    </div>
  );
}
