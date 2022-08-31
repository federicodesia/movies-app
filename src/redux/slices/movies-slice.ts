import { createSlice } from "@reduxjs/toolkit";

interface MoviesState {
    isSideDrawerOpen: boolean
}

const initialState: MoviesState = {
    isSideDrawerOpen: false
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        toggleSideDrawer: (state) => {
            state.isSideDrawerOpen = !state.isSideDrawerOpen;
        },
    }
});

export const { toggleSideDrawer } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;