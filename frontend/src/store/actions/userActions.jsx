import axios from "../../api/axiosconfig";


export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/users?Email=${user.email}&Password=${user.password}`)
    console.log(res);    
  } catch (error) {
    console.log(error)
  }
}

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}