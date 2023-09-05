import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../config';
import { authRoutes } from './authRoutes';
import { loginSerializer } from './authSerializers';

export const authService = createApi({
  reducerPath: 'authService',
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      transformResponse: loginSerializer,
      query: ({ username, password }) => ({
        url: authRoutes.login,
        method: 'POST',
        body: {
          username,
          password,
        },
      }),
    }),
    signup: builder.mutation({
      query: ({ firstName, lastName, email, phoneNumber, password }) => ({
        url: authRoutes.signup,
        method: 'POST',
        body: {
          data: {
            attributes: {
              firstName,
              lastName,
              email,
              phoneNumber,
              password,
            },
          },
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authService;
