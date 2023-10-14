import { EMPRENDIMIENTOS_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const emprendimientoApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createEmprendimiento: builder.mutation({
            query: () => ({
                url: `${EMPRENDIMIENTOS_URL}`,
                method: 'POST',
            })
        }),
        getEmprendimientos: builder.query({
            query: () => ({
                url: EMPRENDIMIENTOS_URL,
            }),
            providesTags: ['Emprendimiento'],

        })
    })
});

export const { useCreateEmprendimientoMutation, useGetEmprendimientosQuery } = emprendimientoApiSlice;