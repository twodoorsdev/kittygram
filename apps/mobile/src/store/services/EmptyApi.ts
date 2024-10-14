import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Initialize an empty API service that we'll inject endpoints into later
export const EmptyApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {
      // @TODO In a real app, this should throw an error to be handled by an ErrorBoundary
      if (!process.env.EXPO_PUBLIC_CAT_API_KEY) {
        console.error('No API key set for Cat API');
        return headers;
      }

      headers.set('x-api-key', process.env.EXPO_PUBLIC_CAT_API_KEY);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
