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
  },
});

export default userSlice.reducer;
export const { loadUser } = userSlice.actions;
