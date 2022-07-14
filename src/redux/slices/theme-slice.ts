import { createSlice } from "@reduxjs/toolkit";

type ThemeMode = 'dark' | 'light';

interface ThemeState {
    mode: ThemeMode;
};

const initialState: ThemeState = {
    mode: 'dark',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { toggleThemeMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;