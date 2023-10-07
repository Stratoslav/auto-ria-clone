import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userSliceActions } from "../../redux/slice/userSlice";

function Header() {
  const { isAuth, user } = useSelector((s) => s.userSliceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth === false) {
    }
  }, [isAuth]);
  function logout() {
    console.log(isAuth);
    dispatch(userSliceActions.isAuth(false));
    dispatch(userSliceActions.getUser([]));
  }
  return (
    <div>
      <header className="header">
        <div className="left_bar">
          <NavLink to="cars/create" className="header__link">
            add car
          </NavLink>
          <NavLink to="/" className="header__link">
            home
          </NavLink>
        </div>
        <div className="right_bar">
          {!isAuth ? (
            <>
              <NavLink to="/signin" className="header__link">
                Sign Up
              </NavLink>
              <NavLink to="/login" className="header__link">
                login
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/user" className="header__link">
                {user.name}
              </NavLink>
              <button onClick={logout}>logout</button>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
