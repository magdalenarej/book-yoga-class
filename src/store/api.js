import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const classApi = createApi({
  reducerPath: "classApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["classes", "user"],

  endpoints: (builder) => ({
    classes: builder.query({
      query: () => "/classes",
      providesTags: ["classes"],
    }),
    bookClass: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `classes/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["classes"],
    }),
    cancelBookingClass: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `classes/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["classes"],
    }),
    cancelClass: builder.mutation({
      query: ({ id }) => ({
        url: `classes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["classes"],
    }),
    addClass: builder.mutation({
      query: ({ ...body }) => ({
        url: `/classes`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["classes"],
    }),
    registerUser: builder.mutation({
      query: ({ ...body }) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useClassesQuery,
  useBookClassMutation,
  useCancelBookingClassMutation,
  useAddClassMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useCancelClassMutation,
} = classApi;
