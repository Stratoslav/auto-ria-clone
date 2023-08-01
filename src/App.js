import "./App.css";

import { Route, Routes } from "react-router-dom";

import AddCar from "./components/AddAuto/AddCar";
import EditCar from "./components/EditCar/EditCar";
import "./components/Header/header.css";
import Header from "./components/Header/Header";
import Auto from "./components/Auto/Auto";
import AllAuto from "./components/AllAuto/AllAuto";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<AllAuto />} />
        <Route path="/search" element={<AllAuto />} />
        <Route path="/select" element={<AllAuto />} />
        <Route path="cars/:id" element={<Auto />} />
        <Route path="cars/create" element={<AddCar />} />
        <Route path="cars/update/:id" element={<EditCar />} />
      </Routes>
    </div>
  );
}

export default App;
