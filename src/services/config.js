import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Config } from 'react-native-config';

const DEFAULT_TIMEOUT = 15000;

export const baseUrl = Config.API_BASE_URL;

export function prepareHeaders(headers, { getState }) {
  let token = getState().auth.credentials?.token;

  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Token ${token}`);
  }

  return headers;
}

const baseFetch = fetchBaseQuery({ baseUrl, prepareHeaders });

export const baseQuery = (args, api, extraOptions) => {
  return Promise.race([
    baseFetch(args, api, extraOptions),
    new Promise((resolve) =>
      setTimeout(
        () => resolve({ error: { message: 'timed out' } }),
        extraOptions?.timeout ?? DEFAULT_TIMEOUT
      )
    ),
  ]);
};
