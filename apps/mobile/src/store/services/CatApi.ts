import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ImagePickerAsset } from 'expo-image-picker';

export type Breed = {
  id: number;
  name: string;
  wikipedia_url: string;
};

export type ApiImage = {
  id: string;
  url: string;
  width: number | null;
  height: number | null;
  mime_type: string;
  entities: [];
  breeds: Breed[];
  animals: [];
  categories: [];
};

export const CatApi = createApi({
  reducerPath: 'catsApi',
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
  tagTypes: ['Images'],
  endpoints: (build) => ({
    getMyImages: build.query<ApiImage[], { limit?: number; page?: number }>({
      // The API defaults to `limit=1`, which is ridiculous so we re-set it to 10 here.
      query: ({ page = 0, limit = 10 }) => `images?page=${page}&limit=${limit}`,
      providesTags: (result) =>
        (result ?? []).map(({ id }) => ({ type: 'Images', id })),
    }),

    uploadImage: build.mutation<ApiImage, ImagePickerAsset>({
      query: (image) => {
        const body = new FormData();

        // This is a hack/trick (tr-hack? hatrick?) because React Native/Expo
        // Blob/File objects are FUBAR.
        body.append('file', {
          uri: image.uri,
          type: image.type,
          name: image.fileName,
        } as unknown as Blob);
        body.append('sub_id', image.fileName ?? Math.random().toString());

        return {
          url: 'images/upload',
          method: 'POST',
          body,
        };
      },
      // transformErrorResponse(baseQueryReturnValue, meta, arg): unknown {
      //   console.log({ baseQueryReturnValue, meta, arg });
      //   return baseQueryReturnValue.data;
      // },
      // transformResponse(baseQueryReturnValue, meta, arg) {
      //   console.log({ baseQueryReturnValue, meta, arg });
      //   return baseQueryReturnValue.data;
      // },
      invalidatesTags: ['Images'],
    }),

    deleteImage: build.mutation<void, string>({
      query: (id) => {
        return {
          url: `images/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (_, __, originalId) => [
        { type: 'Images', id: originalId },
      ],
    }),
  }),
});

export const { endpoints, useGetMyImagesQuery, useUploadImageMutation } =
  CatApi;
