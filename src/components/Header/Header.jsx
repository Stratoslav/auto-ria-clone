import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <NavLink to="cars/create">add car</NavLink>
        <NavLink to="/">home</NavLink>
      </header>
    </div>
  );
}

export default Header;
