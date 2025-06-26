import axios from "../../api/axiosconfig";


export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const {data} = await axios.get(`/users?Email=${user.email}&Password=${user.password}`)
    console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]))    
  } catch (error) {
    console.log(error)
  }
}

export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.setItem("user", null)    
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