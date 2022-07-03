import { configureStore } from "@reduxjs/toolkit";
import { classApi } from "./api";

export const store = configureStore({
  reducer: {
    [classApi.reducerPath]: classApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(classApi.middleware),
});
