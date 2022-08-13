import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./queries/movies-api";
import { moviesReducer } from "./slices/movies-slice";
import { themeReducer } from "./slices/theme-slice";
import { userReducer } from "./slices/user-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        movies: moviesReducer,
        [moviesApi.reducerPath]: moviesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActionPaths: ['payload'],
            ignoredPaths: ['user']
        }
    }).concat(moviesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch