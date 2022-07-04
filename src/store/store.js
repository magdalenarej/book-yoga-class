import { configureStore, createSlice } from "@reduxjs/toolkit";
import { classApi } from "./api";

const initialUser = {
  id: 1,
  name: "Jan",
  surname: "Kowalski",
  classes: [],
  type: "student",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {},
});

export const store = configureStore({
  reducer: {
    [classApi.reducerPath]: classApi.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(classApi.middleware),
});
