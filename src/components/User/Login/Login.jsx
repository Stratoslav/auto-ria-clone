import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Register from "../Register/Register";

function Login() {
  const [isHaneAccount, setIsHaveAccount] = useState("login");

  return (
    <>
      {isHaneAccount === "login" ? (
        <>
          <div className="login">Login</div>
          <div>
            Dont have account yet?
            <NavLink to={"/signin"} onClick={() => setIsHaveAccount("signin")}>
              Register
            </NavLink>
          </div>
        </>
      ) : (
        <Register setIsHaveAccount={setIsHaveAccount} />
      )}
    </>
  );
}

export default Login;
