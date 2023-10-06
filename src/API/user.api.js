import { userSliceActions } from "../redux/slice/userSlice";
import store from "../redux/store";

const default_URI = "http://auto";

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
