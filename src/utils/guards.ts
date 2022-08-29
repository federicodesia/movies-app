import { Movie, MovieDetail } from "../services/movies-service/dto"

export const isMovie = (movie: Movie | MovieDetail): movie is Movie => {
    return (movie as Movie).genre_ids !== undefined
}