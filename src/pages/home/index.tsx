import { shallowEqual } from "react-redux";
import HorizontalMovieList from "../../components/horizontal-movie-list";
import { useAppSelector } from "../../redux/hooks";
import { TextButton } from "../../styles/button";
import { Column } from "../../styles/styles";
import { Header, Text } from "../../styles/text";
import Page from "../main";
import { BackdropImage, HeaderWrapper, Wrapper } from "./style"

const HomeRoute = () => {

    const popular = useAppSelector(
        state => state.movies.popular,
        shallowEqual,
    );

    return <Page header={{
        backdrop: <BackdropImage src='https://image.tmdb.org/t/p/original/vjnLXptqdxnpNJer5fWgj2OIGhL.jpg'/>,
        children: <HeaderWrapper>
            <Column gap='6px'>
                <Header>Title</Header>
                <Text maxLines={1}>Genres</Text>
            </Column>

            <TextButton>Watch</TextButton>
        </HeaderWrapper>
    }}>
        <Wrapper>
            <HorizontalMovieList header='Continue watching' showViewedPercentage={true} movies={popular} />
            <HorizontalMovieList header='Popular' movies={popular} />
        </Wrapper>
    </Page>
}

export default HomeRoute