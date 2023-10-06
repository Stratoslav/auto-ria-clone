import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import AddCar from "./components/AddAuto/AddCar";
import EditCar from "./components/EditCar/EditCar";
import "./components/Header/header.css";
import Header from "./components/Header/Header";
import Auto from "./components/Auto/Auto";
import AllAuto from "./components/AllAuto/AllAuto";
import { useSelector } from "react-redux";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";

function App() {
  const { isAuth } = useSelector((s) => s.userSliceReducer);

  return (
    <div className="App">
      <Header />
      {
        <Routes>
          {!isAuth ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Register />} />

              <Route path="*" element={<Navigate replace to={"/login"} />} />
            </>
          ) : (
            <>
              <Route index path="/" element={<AllAuto />} />
              <Route path="/search" element={<AllAuto />} />
              <Route path="/select" element={<AllAuto />} />
              <Route path="cars/:id" element={<Auto />} />
              <Route path="cars/add/:id" element={<Auto />} />
              <Route path="cars/details/:id" element={<Auto />} />
              <Route path="cars/create" element={<AddCar />} />
              <Route path="cars/update/:id" element={<EditCar />} />
            </>
          )}
        </Routes>
      }
    </div>
  );
}

export default App;
