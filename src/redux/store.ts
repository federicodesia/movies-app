import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { moviesApi } from "./queries/movies-api";
import { moviesReducer } from "./slices/movies-slice";
import { themeReducer } from "./slices/theme-slice";
import { userReducer } from "./slices/user-slice";

const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredActionPaths: ['payload'],
            ignoredPaths: ['user']
        }
    }).concat(moviesApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch