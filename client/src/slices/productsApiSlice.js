import { PRODUCTS_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: () => ({
                url: `${PRODUCTS_URL}`,
                method: 'POST',
            })
        }),
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            providesTags: ['Product'],

        })
    })
});

export const { useCreateProductMutation, useGetProductsQuery } = productsApiSlice;