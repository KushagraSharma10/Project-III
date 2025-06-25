import axios from "../api/axiosconfig";

export const asyncGetUsers = async () => {
  try {
    const users = await axios.get("/users");
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};
