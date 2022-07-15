import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/movies-slice";
import { themeReducer } from "./slices/theme-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        movies: moviesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch