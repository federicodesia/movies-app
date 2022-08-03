import { createApi } from '@reduxjs/toolkit/query/react'
import { moviesService } from '../../services/movies-service'
import { MovieCredits, MovieDetail, MovieList } from '../../services/movies-service/dto'
import axiosBaseQuery from './axios-base-query'

export const moviesApi = createApi({
    baseQuery: axiosBaseQuery(moviesService.axiosInstance),
    endpoints: (builder) => ({
        getMovieDetails: builder.query<MovieDetail, number>({
            query: (id) => ({ url: `movie/${id}` }),
        }),
        getMovieCredits: builder.query<MovieCredits, number>({
            query: (id) => ({ url: `movie/${id}/credits` }),
        }),
        getSimilarMovies: builder.query<MovieList, number>({
            query: (id) => ({ url: `movie/${id}/similar` }),
        }),
    }),
})

export const {
    useGetMovieDetailsQuery,
    useGetMovieCreditsQuery,
    useGetSimilarMoviesQuery
} = moviesApi