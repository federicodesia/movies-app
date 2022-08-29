import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { moviesApi } from "./queries/movies-api";
import { moviesReducer } from "./slices/movies-slice";
import { themeReducer } from "./slices/theme-slice";
import { userReducer } from "./slices/user-slice";

const rootReducer = combineReducers({
    themeReducer: themeReducer,
    userReducer: userReducer,
    moviesReducer: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['themeReducer', 'userReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredActionPaths: ['payload'],
            ignoredPaths: ['userReducer']
        }
    }).concat(moviesApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch