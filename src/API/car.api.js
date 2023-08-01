import { allCarsActions } from "../redux/slice/allCarsSlice";
import store from "../redux/store";
const default_URI = "http://auto/cars";
export async function getAllCar() {
  try {
    const response = await fetch(default_URI, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();

    store.dispatch(allCarsActions.getAllCars(data));
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

export async function getOneCar(id, setCar) {
  try {
    const res = await fetch(`${default_URI}/${id}`, {
      method: "GET",
    });
    const data = await res.json();

    setCar(data);
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

export async function addCar(formData) {
  try {
    await fetch(default_URI, {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

export async function updateCar(
  name,
  model,
  year,
  mileage,
  city,
  dtp,
  color,
  price,
  phone,
  id
) {
  try {
    const data = {
      name: name,
      model: model,
      year: year,
      mileage: mileage,
      city: city,
      dtp: dtp,
      color: color,
      price: price,
      phone: phone,
    };
    await fetch(`${default_URI}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

export async function getFilteredCar(value) {
  try {
    const data = await fetch(`${default_URI}/filter?search=${value}`, {
      method: "GET",
    });
    const response = await data.json();
    store.dispatch(allCarsActions.getFilteredCar(response));
  } catch (e) {
    console.log("Error fetching data:", e.message);
  }
}

export async function getByFilterYears(from, to) {
  try {
    const data = await fetch(`${default_URI}/filter?from=${from}&to=${to}`, {
      method: "GET",
    });
    const response = await data.json();
    store.dispatch(allCarsActions.getFilteredCarByYear(response));
  } catch (e) {
    console.log("Error fetching data:", e.message);
  }
}

export async function sortFromTo(value) {
  try {
    const res = await fetch(`${default_URI}/filter?like=${value}`);
    const data = await res.json();
    store.dispatch(allCarsActions.getFilteredCarFromTo(data));
  } catch (e) {
    console.log("Error fetching data:", e);
  }
}
