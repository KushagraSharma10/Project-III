import axios from "../api/axiosconfig";
import { loadUser } from "./userSlice";

export const asyncGetUsers = async () => {
  try {
    const users = await axios.get("/users");
    loadUser(users.data);
  } catch (error) {
    console.log(error);
  }
};
