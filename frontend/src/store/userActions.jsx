import axios from "../api/axiosconfig";
import { loadUser } from "./reducers/userSlice";

export const asyncGetUsers = () => async (dispatch, getState) => {
  try {
    const users = await axios.get("/users");
    // console.log(users.data)
    console.log("Current State >>>>",  getState())
    dispatch(loadUser(users.data));
  } catch (error) {
    console.log(error);
  }
};
