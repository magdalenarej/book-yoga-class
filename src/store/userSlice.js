import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { setCredentials } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;
