import { USERS_URL } from "../utils/constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    editData: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/micuenta`,
        method: "POST",
      }),
    }),
    editPass: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/myacount`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useEditDataMutation, useEditPassMutation, } =
  usersApiSlice;
