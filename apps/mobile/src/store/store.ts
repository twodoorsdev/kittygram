import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import devToolsEnhancer from 'redux-devtools-expo-dev-plugin';

import { CatApi } from './services/CatApi';

export const store = configureStore({
  enhancers: (getDefaultEnhancers) =>
    __DEV__
      ? getDefaultEnhancers().concat(devToolsEnhancer())
      : getDefaultEnhancers(),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      CatApi.middleware
    ) as unknown as ReturnType<typeof getDefaultMiddleware>;
  },
  reducer: {
    // RTK-Query reducers
    [CatApi.reducerPath]: CatApi.reducer,
  },
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
