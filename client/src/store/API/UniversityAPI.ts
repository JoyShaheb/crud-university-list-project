import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UniversityAPI = createApi({
  reducerPath: "UniversityAPI",
  tagTypes: ["University"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_API_BASE_URL}/api/university`,
  }),
  endpoints: (builder) => ({
    getAllUniversities: builder.query({
      query: () => `/get-all`,
      providesTags: ["University"],
    }),
  }),
});

export const { useGetAllUniversitiesQuery } = UniversityAPI;
