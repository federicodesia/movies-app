import { Movie, MovieDetail } from "../../services/movies-service/dto"
import { Wrapper, ImageWrapper, Backdrop, PlayIcon, StyledLink } from "./style"
import { Title, Text } from "../../styles/text"
import { Column } from "../../styles/styles"
import ProgressBar from "../progress-bar"
import { imagesService } from "../../services/images-service"
import { Img } from "../img"
import { useGetGenresQuery, useGetMovieDetailsQuery } from "../../redux/queries/movies-api"
import { useMemo } from "react"
import { isMovie } from "../../utils/guards"

interface Props {
    showViewedPercentage?: boolean
}

interface MovieCardProps extends Props { movieOrId: Movie | number }
interface MovieIdCardProps extends Props { id: number }
interface MovieDataCardProps extends Props { movie: Movie | MovieDetail }

const MovieCard = ({ movieOrId, ...rest }: MovieCardProps) => {
    if (typeof movieOrId === 'number') return <MovieIdCard id={movieOrId} {...rest} />
    return <MovieDataCard movie={movieOrId} {...rest} />
}

const MovieIdCard = ({ id, ...rest }: MovieIdCardProps) => {
    const movie = useGetMovieDetailsQuery(id).data
    if (movie) return <MovieDataCard movie={movie} {...rest} />
    return null
}

const MovieDataCard = ({ movie, showViewedPercentage = false }: MovieDataCardProps) => {
    const genres = useGetGenresQuery().data?.genres ?? []

    const movieGenres = useMemo(() => {
        return ((isMovie(movie)
            ? movie.genre_ids?.slice(0, 2).map(id => genres.find(g => g.id === id)?.name)
            : movie.genres?.slice(0, 2).map(g => g.name)
        ) ?? []).filter(n => n !== undefined).join(', ')
    }, [movie, genres])

    return <Wrapper>
        <StyledLink to={`/movie/${movie.id}`}>
            <ImageWrapper>
                <Img src={imagesService.getBackdropUrl(movie.backdrop_path)} />

                <Backdrop>
                    <PlayIcon />
                </Backdrop>
            </ImageWrapper>

            {
                // I use the length of the overview instead of generating a random percentage to avoid changes.
                showViewedPercentage && <ProgressBar percentage={((movie.overview?.length ?? 0) * 100) / 1000} />
            }

            <Column gap='6px'>
                <Title maxLines={1}>
                    {movie.title}
                </Title>
                <Text maxLines={1}>
                    {movieGenres}
                </Text>
            </Column>
        </StyledLink>
    </Wrapper>
}

export default MovieCard