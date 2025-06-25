import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, actions) => {
      state.data = actions.payload
    },
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;
