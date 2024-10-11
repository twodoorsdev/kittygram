import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

type PostsResponse = ApiImage[];

export const CatApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', process.env.EXPO_PUBLIC_CAT_API_KEY ?? '');
      return headers;
    },
  }),
  tagTypes: ['Images'],
  endpoints: (build) => ({
    getMyImages: build.query<PostsResponse, void>({
      query: () => 'images',
      providesTags: (result) =>
        (result ?? []).map(({ id }) => ({ type: 'Images', id })),
    }),

    uploadImage: build.mutation<ApiImage, Partial<ApiImage>>({
      query: (body) => ({
        url: `images/upload`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Images'],
    }),

    // getImage: build.query<ApiImage, string>({
    //   query: (id) => `images/${id}`,
    //   providesTags: (item) => [{ type: 'Images', id: item?.id }],
    // }),

    // getPosts: build.query<PostsResponse, void>({
    //   query: () => 'posts',
    //   provides: (result) => result.map(({ id }) => ({ type: 'Posts', id })),
    // }),
    // addPost: build.mutation<Post, Partial<Post>>({
    //   query(body) {
    //     return {
    //       url: `posts`,
    //       method: 'POST',
    //       body,
    //     };
    //   },
    //   invalidates: ['Posts'],
    // }),
    // getPost: build.query<Post, number>({
    //   query: (id) => `posts/${id}`,
    //   provides: (_, id) => [{ type: 'Posts', id }],
    // }),
    // updatePost: build.mutation<Post, Partial<Post>>({
    //   query(data) {
    //     const { id, ...body } = data;
    //     return {
    //       url: `posts/${id}`,
    //       method: 'PUT',
    //       body,
    //     };
    //   },
    //   invalidates: (_, { id }) => [{ type: 'Posts', id }],
    // }),
    // deletePost: build.mutation<{ success: boolean; id: number }, number>({
    //   query(id) {
    //     return {
    //       url: `posts/${id}`,
    //       method: 'DELETE',
    //     };
    //   },
    //   invalidates: (_, id) => [{ type: 'Posts', id }],
    // }),
  }),
});

export const { endpoints, useGetMyImagesQuery, useUploadImageMutation } =
  CatApi;
