import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, actions) => {
      state.users = actions.payload;
    },
    removeUser: (state, actions) => {
      state.users = null;
    },
  },
});

export default userSlice.reducer;
export const { loadUser, removeUser } = userSlice.actions;
