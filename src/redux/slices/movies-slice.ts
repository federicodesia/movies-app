import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { moviesService } from "../../services/movies-service";
import { Genre, Movie } from "../../services/movies-service/dto";

interface MoviesState {
    genres: Genre[]
    popular: Movie[];
};

const initialState: MoviesState = {
    genres: [],
    popular: [],
};

export const fetchGenres = createAsyncThunk(
    'movies/fetchGenres',
    async () => await moviesService.getGenres(),
);

export const fetchPopularMovies = createAsyncThunk(
    'movies/fetchPopularMovies',
    async () => (await moviesService.getPopularMovies())?.results,
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            if(action.payload) state.genres = [...state.genres, ...action.payload]
        }),
        
        builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
            if(action.payload) state.popular = [...state.popular, ...action.payload]
        })
    }
});

export const { } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;