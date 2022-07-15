import { shallowEqual } from "react-redux";
import { useAppSelector } from "../../redux/hooks";
import { moviesService } from "../../services/movies-service";
import { Column } from "../../styles/styles"
import { Header, Title, Text } from "../../styles/text"
import { MovieCard, MovieCardImage, MovieCardContent, MoviesList, Wrapper, ContentWrapper } from "./style"

const HomeRoute = () => {

    const { genres, popular } = useAppSelector(
        state => ({
            genres: state.movies.genres,
            popular: state.movies.popular
        }),
        shallowEqual,
    );

    return <Wrapper>
        <Column gap='24px'>
            <ContentWrapper>
                <Header>Popular</Header>
            </ContentWrapper>

            <MoviesList>
                {
                    popular.map((movie, index) => (
                        <MovieCard key={`${index}`}>
                            <MovieCardImage src={moviesService.getMovieImageUrl(movie)} />
                            <MovieCardContent>
                                <Title maxLines={1}>{movie.title} </Title>
                                <Text maxLines={1}>
                                    {
                                        movie.genre_ids.slice(0, 2).map(id =>
                                            genres.find(genre => genre.id === id)?.name
                                        ).filter(n => n !== undefined).join(', ')
                                    }
                                </Text>
                            </MovieCardContent>
                        </MovieCard>
                    ))
                }
            </MoviesList>
        </Column>
    </Wrapper>
}

export default HomeRoute