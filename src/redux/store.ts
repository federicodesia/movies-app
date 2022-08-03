import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./queries/movies-api";
import { moviesReducer } from "./slices/movies-slice";
import { themeReducer } from "./slices/theme-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        movies: moviesReducer,
        [moviesApi.reducerPath]: moviesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch