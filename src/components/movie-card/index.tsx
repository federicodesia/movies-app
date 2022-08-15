import { Movie } from "../../services/movies-service/dto"
import { Wrapper, ImageWrapper, Backdrop, PlayIcon, StyledLink } from "./style"
import { Title, Text } from "../../styles/text"
import { useAppSelector } from "../../redux/hooks"
import { Column } from "../../styles/styles"
import ProgressBar from "../progress-bar"
import { imagesService } from "../../services/images-service"
import { Img } from "../img"

interface MovieCardProps {
    movie: Movie
    showViewedPercentage?: boolean
}

const MovieCard = ({ movie, showViewedPercentage = false }: MovieCardProps) => {
    const genres = useAppSelector(state => state.movies.genres);

    return <Wrapper>
        <StyledLink to={`/movie/${movie.id}`}>
            <ImageWrapper>
                <Img src={imagesService.getBackdropUrl(movie.backdrop_path)} />
            
                <Backdrop>
                    <PlayIcon/>
                </Backdrop>
            </ImageWrapper>
            
            {
                // I use the length of the overview instead of generating a random percentage to avoid changes.
                showViewedPercentage && <ProgressBar percentage={((movie.overview?.length ?? 0) * 100) / 1000}/>
            }
            
            <Column gap='6px'>
                <Title maxLines={1}>
                    {movie.title}
                </Title>
                <Text maxLines={1}>
                    {
                        movie.genre_ids?.slice(0, 2).map(id =>
                            genres.find(genre => genre.id === id)?.name
                        ).filter(n => n !== undefined).join(', ')
                    }
                </Text>
            </Column>
        </StyledLink>
    </Wrapper>
}

export default MovieCard