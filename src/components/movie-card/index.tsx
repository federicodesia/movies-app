import { moviesService } from "../../services/movies-service"
import { Movie } from "../../services/movies-service/dto"
import { Wrapper, Image, ImageWrapper, Backdrop, PlayIcon } from "./style"
import { Title, Text } from "../../styles/text"
import { useAppSelector } from "../../redux/hooks"
import { Column } from "../../styles/styles"
import ProgressBar from "../progress-bar"

interface MovieCardProps {
    movie: Movie
    showViewedPercentage?: boolean
}

const MovieCard = ({ movie, showViewedPercentage = false }: MovieCardProps) => {
    const genres = useAppSelector(state => state.movies.genres);

    return <Wrapper>
        <ImageWrapper>
            <Image src={moviesService.getMovieImageUrl(movie)} />

            <Backdrop>
                <PlayIcon/>
            </Backdrop>
        </ImageWrapper>

        {
            // I use the length of the overview instead of generating a random percentage to avoid changes.
            showViewedPercentage && <ProgressBar percentage={(movie.overview.length * 100) / 1000}/>
        }

        <Column gap='6px'>
            <Title maxLines={1}>
                {movie.title}
            </Title>
            <Text maxLines={1}>
                {
                    movie.genre_ids.slice(0, 2).map(id =>
                        genres.find(genre => genre.id === id)?.name
                    ).filter(n => n !== undefined).join(', ')
                }
            </Text>
        </Column>
    </Wrapper>
}

export default MovieCard