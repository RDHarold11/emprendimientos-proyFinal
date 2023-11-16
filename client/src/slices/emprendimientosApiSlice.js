import { EMPRENDIMIENTOS_URL, UPLOAD_URL } from "../utils/constants";
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
    updateEmp: builder.mutation({
      query: (data) => ({
        url: `${EMPRENDIMIENTOS_URL}/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Emprendimiento"],
    }),
    uploadEmpImage: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateEmprendimientoMutation,
  useGetEmprendimientosQuery,
  useGetSingleEmpQuery,
  useUpdateEmpMutation,
  useUploadEmpImageMutation,
} = emprendimientoApiSlice;
