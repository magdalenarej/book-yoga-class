import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setCredentials: (state, { payload: { user, accessToken } }) => {
      state.user = user;
      state.token = accessToken;
    },
    register: (state, { payload: { user, accessToken } }) => {
      state.user = user;
      state.token = accessToken;
    },
  },
});

export const { setCredentials, register } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;
