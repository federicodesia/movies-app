import { shallowEqual } from "react-redux";
import HorizontalMovieList from "../../components/horizontal-movie-list";
import { useAppSelector } from "../../redux/hooks";
import { TextButton } from "../../styles/button";
import { Column } from "../../styles/styles";
import { Header, Text } from "../../styles/text";
import OverlapPage from "../../components/overlap-page";
import { HeaderWrapper, Wrapper } from "./style"
import { Img } from "../../components/img";

const HomePage = () => {

    const popular = useAppSelector(
        state => state.movies.popular,
        shallowEqual,
    );

    return <OverlapPage header={{
        backdrop: <Img src='https://image.tmdb.org/t/p/original/vjnLXptqdxnpNJer5fWgj2OIGhL.jpg' />,

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
    </OverlapPage>
}

export default HomePage