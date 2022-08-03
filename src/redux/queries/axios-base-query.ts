import { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"

const axiosBaseQuery = (instance: AxiosInstance): BaseQueryFn<AxiosRequestConfig> => async (config) => {
    return await instance.request(config)
        .then(response => ({
            data: response.data
        }))
        .catch((err: Error | AxiosError): { error: FetchBaseQueryError } => ({
            error: axios.isAxiosError(err)
                ? {
                    status: err.response?.status || 204,
                    data: err.response?.data,
                }
                : {
                    status: 'CUSTOM_ERROR',
                    error: err.message
                }
        }))
}

export default axiosBaseQuery