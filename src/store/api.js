import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const classApi = createApi({
  reducerPath: "classApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
  }),
  tagTypes: ["classes"],
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
  }),
});

export const { useClassesQuery, useBookClassMutation } = classApi;
