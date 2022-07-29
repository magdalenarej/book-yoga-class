import { configureStore } from "@reduxjs/toolkit";
import { classApi } from "./api";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    [classApi.reducerPath]: classApi.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(classApi.middleware),
});
