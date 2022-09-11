import { createApi } from '@reduxjs/toolkit/query/react'
import { moviesService } from '../../services/movies-service'
import { GenreList, MovieCredits, MovieDetail, MovieList } from '../../services/movies-service/dto'
import axiosBaseQuery from './axios-base-query'

export const moviesApi = createApi({
    baseQuery: axiosBaseQuery(moviesService.axiosInstance),
    endpoints: (builder) => ({
        getGenres: builder.query<GenreList, void>({
            query: () => ({ url: `/genre/movie/list` }),
        }),
        getPopularMovies: builder.query<MovieList, void>({
            query: () => ({ url: `/movie/popular` }),
        }),
        getMovieDetails: builder.query<MovieDetail, number>({
            query: (id) => ({ url: `movie/${id}` }),
        }),
        getMovieCredits: builder.query<MovieCredits, number>({
            query: (id) => ({ url: `movie/${id}/credits` }),
        }),
        getSimilarMovies: builder.query<MovieList, number>({
            query: (id) => ({ url: `movie/${id}/similar` }),
        }),
        searchMovie: builder.query<MovieList, string>({
            query: (query) => ({ url: `search/movie?query=${query}` }),
        }),
    }),
})

export const {
    useGetGenresQuery,
    useGetPopularMoviesQuery,
    useGetMovieDetailsQuery,
    useGetMovieCreditsQuery,
    useGetSimilarMoviesQuery,
    useSearchMovieQuery
} = moviesApi