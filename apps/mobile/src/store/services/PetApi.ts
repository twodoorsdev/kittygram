import { EmptyApi as api } from './EmptyApi';
export const addTagTypes = ['Images', 'Favourites', 'Votes'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getImagesSearch: build.query<
        GetImagesSearchApiResponse,
        GetImagesSearchApiArg
      >({
        query: (queryArg) => ({
          url: `/images/search`,
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
          params: {
            size: queryArg.size,
            mime_types: queryArg.mimeTypes,
            format: queryArg.format,
            has_breeds: queryArg.hasBreeds,
            order: queryArg.order,
            page: queryArg.page,
            limit: queryArg.limit,
          },
        }),
        providesTags: ['Images'],
      }),
      getImages: build.query<GetImagesApiResponse, GetImagesApiArg>({
        query: (queryArg) => ({
          url: `/images/`,
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
          params: {
            limit: queryArg.limit,
            page: queryArg.page,
            order: queryArg.order,
          },
        }),
        providesTags: ['Images'],
      }),
      postImagesUpload: build.mutation<
        PostImagesUploadApiResponse,
        PostImagesUploadApiArg
      >({
        query: (queryArg) => ({
          url: `/images/upload`,
          method: 'POST',
          body: queryArg.body,
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        invalidatesTags: ['Images'],
      }),
      deleteImagesByImageId: build.mutation<
        DeleteImagesByImageIdApiResponse,
        DeleteImagesByImageIdApiArg
      >({
        query: (queryArg) => ({
          url: `/images/${queryArg.imageId}`,
          method: 'DELETE',
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        invalidatesTags: ['Images'],
      }),
      getFavourites: build.query<GetFavouritesApiResponse, GetFavouritesApiArg>(
        {
          query: (queryArg) => ({
            url: `/favourites`,
            headers: {
              'Content-Type': queryArg['Content-Type'],
              'x-api-key': queryArg['x-api-key'],
            },
          }),
          providesTags: ['Favourites'],
        }
      ),
      postFavourites: build.mutation<
        PostFavouritesApiResponse,
        PostFavouritesApiArg
      >({
        query: (queryArg) => ({
          url: `/favourites`,
          method: 'POST',
          body: queryArg.body,
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        invalidatesTags: ['Favourites'],
      }),
      getFavouritesByFavouriteId: build.query<
        GetFavouritesByFavouriteIdApiResponse,
        GetFavouritesByFavouriteIdApiArg
      >({
        query: (queryArg) => ({
          url: `/favourites/${queryArg.favouriteId}`,
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        providesTags: ['Favourites'],
      }),
      deleteFavouritesByFavouriteId: build.mutation<
        DeleteFavouritesByFavouriteIdApiResponse,
        DeleteFavouritesByFavouriteIdApiArg
      >({
        query: (queryArg) => ({
          url: `/favourites/${queryArg.favouriteId}`,
          method: 'DELETE',
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        invalidatesTags: ['Favourites'],
      }),
      getVotes: build.query<GetVotesApiResponse, GetVotesApiArg>({
        query: (queryArg) => ({
          url: `/votes`,
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        providesTags: ['Votes'],
      }),
      postVotes: build.mutation<PostVotesApiResponse, PostVotesApiArg>({
        query: (queryArg) => ({
          url: `/votes`,
          method: 'POST',
          body: queryArg.body,
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        invalidatesTags: ['Votes'],
      }),
      getVotesByVoteId: build.query<
        GetVotesByVoteIdApiResponse,
        GetVotesByVoteIdApiArg
      >({
        query: (queryArg) => ({
          url: `/votes/${queryArg.voteId}`,
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        providesTags: ['Votes'],
      }),
      deleteVoteByVoteId: build.mutation<
        DeleteVoteByVoteIdApiResponse,
        DeleteVoteByVoteIdApiArg
      >({
        query: (queryArg) => ({
          url: `/vote/${queryArg.voteId}`,
          method: 'DELETE',
          headers: {
            'Content-Type': queryArg['Content-Type'],
            'x-api-key': queryArg['x-api-key'],
          },
        }),
        invalidatesTags: ['Votes'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as PetApi };
export type GetImagesSearchApiResponse = /** status 200 OK */ object;
export type GetImagesSearchApiArg = {
  'Content-Type'?: string;
  /** [optional] without it only the a basic set of images can be searched */
  'x-api-key'?: string;
  /** [optional] thumb , small, med or full - small is perfect for Discord */
  size?: string;
  /** [optional] a comma separated strig of types to return e.g. jpg,png for static, or gif for gifs */
  mimeTypes?: string;
  /** [optional] json | src */
  format?: string;
  /** [optional] - only return images with breed data */
  hasBreeds?: boolean;
  /** [optional] default:RANDOM - RANDOM | ASC | DESC */
  order?: string;
  /** [optional] paginate through results */
  page?: number;
  /** [optional] number of results to return, up to 25 with a valid API-Key */
  limit?: number;
};
export type GetImagesApiResponse = /** status 200 OK */ object;
export type GetImagesApiArg = {
  'Content-Type'?: string;
  /** - will return all the images from your account
   */
  'x-api-key': string;
  /** [Optional] number of images to return valid  1 to 10 - default: 1 */
  limit?: number;
  /** [Optional] only works if account_id is present to page through your own uploads */
  page?: number;
  /** [Optional] only works if account_id is present, either ASC or DESC - ascending or descending. */
  order?: string;
};
export type PostImagesUploadApiResponse = /** status 201 Created */ object;
export type PostImagesUploadApiArg = {
  'Content-Type'?: string;
  /** - saves the uploaded image to your account. */
  'x-api-key': string;
  body: {
    file?: Blob;
    /** [optional] - a string you can use to segment your images, e.g. knowing which of your own users uploaded it. */
    sub_id?: string;
    /** [optional] comma separated string of breed ids contained in the image */
    breed_ids?: string;
  };
};
export type DeleteImagesByImageIdApiResponse =
  /** status 200 Successful response */ Blob;
export type DeleteImagesByImageIdApiArg = {
  'Content-Type'?: string;
  'x-api-key'?: string;
  imageId: string;
};
export type GetFavouritesApiResponse = /** status 200 OK */ object;
export type GetFavouritesApiArg = {
  'Content-Type'?: string;
  'x-api-key': string;
};
export type PostFavouritesApiResponse = /** status 200 OK */ object;
export type PostFavouritesApiArg = {
  'Content-Type'?: string;
  'x-api-key': string;
  body: object;
};
export type GetFavouritesByFavouriteIdApiResponse =
  /** status 200 Successful response */ Blob;
export type GetFavouritesByFavouriteIdApiArg = {
  'Content-Type'?: string;
  'x-api-key': string;
  favouriteId: string;
};
export type DeleteFavouritesByFavouriteIdApiResponse =
  /** status 200 Successful response */ Blob;
export type DeleteFavouritesByFavouriteIdApiArg = {
  'Content-Type'?: string;
  'x-api-key': string;
  favouriteId: string;
};
export type GetVotesApiResponse = /** status 200 OK */ object;
export type GetVotesApiArg = {
  'Content-Type'?: string;
  'x-api-key': string;
};
export type PostVotesApiResponse = /** status 201 Created */ object;
export type PostVotesApiArg = {
  'Content-Type'?: string;
  'x-api-key': string;
  body: object;
};
export type GetVotesByVoteIdApiResponse =
  /** status 200 Successful response */ Blob;
export type GetVotesByVoteIdApiArg = {
  'Content-Type'?: string;
  'x-api-key': string;
  voteId: string;
};
export type DeleteVoteByVoteIdApiResponse =
  /** status 200 Successful response */ Blob;
export type DeleteVoteByVoteIdApiArg = {
  'Content-Type'?: string;
  'x-api-key': string;
  voteId: string;
};
export const {
  useGetImagesSearchQuery,
  useGetImagesQuery,
  usePostImagesUploadMutation,
  useDeleteImagesByImageIdMutation,
  useGetFavouritesQuery,
  usePostFavouritesMutation,
  useGetFavouritesByFavouriteIdQuery,
  useDeleteFavouritesByFavouriteIdMutation,
  useGetVotesQuery,
  usePostVotesMutation,
  useGetVotesByVoteIdQuery,
  useDeleteVoteByVoteIdMutation,
} = injectedRtkApi;
