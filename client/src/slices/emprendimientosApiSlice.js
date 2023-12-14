import {
  EMPRENDIMIENTOS_URL,
  PRODUCTS_URL,
  UPLOAD_URL,
} from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const emprendimientoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEmprendimiento: builder.mutation({
      query: () => ({
        url: `${EMPRENDIMIENTOS_URL}`,
        method: "POST",
      }),
      providesTags: ["Emprendimientos"],
    }),
    getEmprendimientos: builder.query({
      query: () => ({
        url: EMPRENDIMIENTOS_URL,
      }),
      providesTags: ["Emprendimiento"],
    }),
    getEmprendimientoById: builder.query({
      query: (id) => ({
        url: `${EMPRENDIMIENTOS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getSingleEmp: builder.query({
      query: (empId) => ({
        url: `${EMPRENDIMIENTOS_URL}/${empId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${EMPRENDIMIENTOS_URL}/${data.id}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Emprendimientos"],
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
    deleteEmp: builder.mutation({
      query: (empId) => ({
        url: `${EMPRENDIMIENTOS_URL}/${empId}`,
        method: "DELETE",
      }),
    }),
    getMyEmp: builder.query({
      query: () => ({
        url: `${EMPRENDIMIENTOS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),
    getTopEight: builder.query({
      query: () => ({
        url: `${EMPRENDIMIENTOS_URL}/topEight`,
      }),
      keepUnusedDataFor: 5,
    }),
    getLastFour: builder.query({
      query: () => ({
        url: `${EMPRENDIMIENTOS_URL}/lastFour`,
      }),
      keepUnusedDataFor: 5,
    }),
    getTopEmprendimientos: builder.query({
      query: () => ({
        url: `${EMPRENDIMIENTOS_URL}/top`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateEmprendimientoMutation,
  useGetEmprendimientosQuery,
  useGetSingleEmpQuery,
  useUpdateEmpMutation,
  useUploadEmpImageMutation,
  useDeleteEmpMutation,
  useGetMyEmpQuery,
  useGetLastFourQuery,
  useGetTopEightQuery,
  useGetEmprendimientoByIdQuery,
  useCreateReviewMutation,
  useGetTopEmprendimientosQuery,
} = emprendimientoApiSlice;
