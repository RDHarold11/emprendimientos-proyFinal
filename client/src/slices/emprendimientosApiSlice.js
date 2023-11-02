import { EMPRENDIMIENTOS_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const emprendimientoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEmprendimiento: builder.mutation({
      query: () => ({
        url: `${EMPRENDIMIENTOS_URL}`,
        method: "POST",
      }),
    }),
    getEmprendimientos: builder.query({
      query: () => ({
        url: EMPRENDIMIENTOS_URL,
      }),
      providesTags: ["Emprendimiento"],
    }),
    getSingleEmp: builder.query({
      query: (empId) => ({
        url: `${EMPRENDIMIENTOS_URL}/${empId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateEmprendimientoMutation,
  useGetEmprendimientosQuery,
  useGetSingleEmpQuery,
} = emprendimientoApiSlice;
