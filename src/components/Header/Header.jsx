import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const { isAuth } = useSelector((s) => s.userSliceReducer);
  return (
    <div>
      <header className="header">
        <div className="left_bar">
          <NavLink to="cars/create">add car</NavLink>
          <NavLink to="/">home</NavLink>
        </div>
        <div className="right_bar">
          {!isAuth ? (
            <>
              <NavLink to="/signin">Sign Up</NavLink>
              <NavLink to="/login">login</NavLink>
            </>
          ) : (
            <NavLink to="/logout">logout</NavLink>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
