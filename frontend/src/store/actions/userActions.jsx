import axios from "../../api/axiosconfig";

export const asyncRegisterUser = (user) => async (dispatchEvent, getState) => {
  try {
    const res = await axios.post("/users", user)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}