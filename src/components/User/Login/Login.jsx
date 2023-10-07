import React, { useState } from "react";
import { NavLink, redirect, useLocation, useNavigate } from "react-router-dom";

import { login } from "../../../API/user.api";
import { userSliceActions } from "../../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [isHaneAccount, setIsHaveAccount] = useState("login");
  const [response, setResponse] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  async function submitForm(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    await login(formData, setResponse);
  }
  if (response.status === true) {
    dispatch(userSliceActions.isAuth(true));
    navigate("/");
  }
  return (
    <>
      <div className="login">Login</div>
      <form onSubmit={submitForm} enctype="multipart/form-data">
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Login</button>
      </form>
      <p>{response.status === false ? response.message : null}</p>
      <div>
        Hasn't account yet?{" "}
        <NavLink to={"/signin"} onClick={() => setIsHaveAccount("signin")}>
          Register
        </NavLink>
      </div>
    </>
  );
}

export default Login;
