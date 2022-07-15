import axios, { AxiosResponse } from "axios";
import { GenreList, Movie, MovieList } from "./dto";

const apiKey = import.meta.env.VITE_MOVIES_API_KEY

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: apiKey
    }
})

const getMovieImageUrl = (movie: Movie) => {
    const path = movie.backdrop_path ?? movie.poster_path
    return `https://image.tmdb.org/t/p/w500${path}`
}

const getPopularMovies = async () => {
    const response = await api.get<MovieList>(`/movie/popular`);
    return handleResponse(response);
}

const getGenres = async () => {
    const response = await api.get<GenreList>(`/genre/movie/list`);
    return handleResponse(response)?.genres;
}

const handleResponse = <T>(response: AxiosResponse<T, any>) => {
    if (response.status >= 200 || response.status < 300) return response.data;
    return undefined;
}

export const moviesService = {
    getMovieImageUrl,
    getGenres,
    getPopularMovies
};