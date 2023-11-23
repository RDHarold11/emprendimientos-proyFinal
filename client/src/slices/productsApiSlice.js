import { PRODUCTS_URL, UPLOAD_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: "POST",
      }),
      providesTags: ["Product"],
    }),
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      providesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreateProductMutation, useGetProductsQuery, useDeleteProductMutation } =
  productsApiSlice;
