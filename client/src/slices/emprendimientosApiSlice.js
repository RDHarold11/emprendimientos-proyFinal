import { EMPRENDIMIENTO_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const emprendimientoApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: () => ({
                url: `${EMPRENDIMIENTO_URL}`,
                method: 'POST',
            })
        }),
        getEmprendimiento: builder.query({
            query: () => ({
                url: EMPRENDIMIENTO_URL,
            }),
            providesTags: ['Product'],

        })
    })
});

export const { useCreateEmprendimientoMutation, useGetEmprendimientoQuery } = emprendimientoApiSlice;