import axios, { AxiosResponse } from "axios";
import { GenreList, MovieList } from "./dto";

const apiKey = import.meta.env.VITE_MOVIES_API_KEY

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    method: 'GET',
    params: {
        api_key: apiKey
    }
})

const getGenres = async () => {
    const response = await api.get<GenreList>(`/genre/movie/list`);
    return handleResponse(response);
}

const getPopularMovies = async () => {
    const response = await api.get<MovieList>(`/movie/popular`);
    return handleResponse(response);
}

const handleResponse = <T>(response: AxiosResponse<T, any>) => {
    if (response.status >= 200 || response.status < 300) return response.data;
    return undefined;
}

export const moviesService = {
    axiosInstance: api,
    getGenres,
    getPopularMovies
};