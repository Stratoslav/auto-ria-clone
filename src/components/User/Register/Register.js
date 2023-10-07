import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { register } from "../../../API/user.api";

function Register({ setIsHaveAccount }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState([]);

  const navigate = useNavigate("/");
  async function submitForm(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("surname", surname);
    await register(formData, setResponse);
  }
  if (response.message === "successful") {
    navigate("/login");
  }
  return (
    <>
      <div className="login">Register</div>;
      <form onSubmit={submitForm} enctype="multipart/form-data">
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={surname}
          name="surname"
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Surname"
        />
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Create profile</button>
      </form>
      <p>{response.message}</p>
      <div>
        You already have account?{" "}
        <NavLink to={"/login"} onClick={() => setIsHaveAccount("login")}>
          Login
        </NavLink>
      </div>
      <p>
        Ваші персональні дані будуть оброблені та захищені згідно до Політики
        приватності
      </p>
    </>
  );
}

export default Register;
