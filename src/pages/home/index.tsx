import HorizontalMovieList from "../../components/horizontal-movie-list";
import { useAppSelector } from "../../redux/hooks";
import { TextButton } from "../../styles/button";
import { Column } from "../../styles/styles";
import { Header, Text } from "../../styles/text";
import OverlapPage from "../../components/overlap-page";
import { HeaderWrapper, Wrapper } from "./style"
import { Img } from "../../components/img";
import { useGetPopularMoviesQuery } from "../../redux/queries/movies-api";
import { Link } from "react-router-dom";

const headerMovie = {
    backdropImage: 'https://image.tmdb.org/t/p/original/ciKBP3tgzUxp7sHFNZxofBXUS8k.jpg',
    title: 'The Forever Purge',
    description: 'The rules are broken.',
    url: '/movie/602223'
}

const HomePage = () => {
    const favoritesId = useAppSelector(state => state.userReducer.favoriteMoviesId)
    const popular = useGetPopularMoviesQuery().data?.results ?? []

    return <OverlapPage
        showSearchBar={true}
        header={{
            backdrop: <Img src={headerMovie.backdropImage} />,
            children: <HeaderWrapper>
                <Column gap='6px'>
                    <Header>{headerMovie.title}</Header>
                    <Text maxLines={1}>{headerMovie.description}</Text>
                </Column>

                <Link to={headerMovie.url}>
                    <TextButton>Watch</TextButton>
                </Link>
            </HeaderWrapper>
        }}>
        <Wrapper>
            <HorizontalMovieList header='Continue watching' showViewedPercentage={true} movies={favoritesId} />
            <HorizontalMovieList header='Popular' movies={popular} />
        </Wrapper>
    </OverlapPage>
}

export default HomePage