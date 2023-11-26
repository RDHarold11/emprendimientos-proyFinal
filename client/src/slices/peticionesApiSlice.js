import { PETICIONES_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const peticionesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPeticion: builder.mutation({
      query: (data) => ({
        url: `${PETICIONES_URL}`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Peticion"],
    }),
    deletePeticion: builder.mutation({
      query: (peticionId) => ({
        url: `${PETICIONES_URL}/${peticionId}`,
        method: "DELETE",
      }),
    }),
    getPeticiones: builder.query({
      query: () => ({
        url: `${PETICIONES_URL}peticiones/me`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Peticiones"],
    }),
    getPeticionesByAdmin: builder.query({
      query: () => ({
        url: `${PETICIONES_URL}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["PeticionesAdmin"],
    }),
    markAsResolved: builder.mutation({
      query: (peticionId) => ({
        url: `${PETICIONES_URL}/${peticionId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Peticiones"],
    }),
  }),
});

export const {
  useCreatePeticionMutation,
  useDeletePeticionMutation,
  useGetPeticionesQuery,
  useGetPeticionesByAdminQuery,
  useMarkAsResolvedMutation,
} = peticionesApiSlice;
