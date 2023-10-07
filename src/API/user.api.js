import { userSliceActions } from "../redux/slice/userSlice";
import store from "../redux/store";

const default_URI = "http://autoria/auto-ria-clone_server";

export async function register(formData, setErrors) {
  try {
    const res = await fetch(`${default_URI}/signin`, {
      method: "POST",
      body: formData,
    });
    const data = res.json();
    let fetchData = data.then((d) => setErrors(d));
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}

export async function login(formData, setResponse) {
  try {
    const res = await fetch(`${default_URI}/login`, {
      method: "POST",
      body: formData,
    });
    const data = res.json();
    let fetchData = data.then((d) => {
      setResponse(d);
      console.log(d);
      if (d.status === true) {
        store.dispatch(userSliceActions.getUser(d));
      }
    });
  } catch (e) {
    console.log("Error fetching data:", e.message);
  }
}
