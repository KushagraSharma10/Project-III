import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, actions) => {
      console.log(actions);
    },
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;
