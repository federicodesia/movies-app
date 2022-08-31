import axios, { AxiosResponse } from "axios";
const apiKey = import.meta.env.VITE_MOVIES_API_KEY

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    method: 'GET',
    params: {
        api_key: apiKey
    }
})

const handleResponse = <T>(response: AxiosResponse<T, any>) => {
    if (response.status >= 200 || response.status < 300) return response.data;
    return undefined;
}

export const moviesService = {
    axiosInstance: api
};