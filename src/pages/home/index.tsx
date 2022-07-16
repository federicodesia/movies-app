import { shallowEqual } from "react-redux";
import HorizontalMovieList from "../../components/horizontal-movie-list";
import { useAppSelector } from "../../redux/hooks";
import { Wrapper } from "./style"

const HomeRoute = () => {

    const popular = useAppSelector(
        state => state.movies.popular,
        shallowEqual,
    );

    return <Wrapper>
        <HorizontalMovieList header='Continue watching' showViewedPercentage={true} movies={popular} />
        <HorizontalMovieList header='Popular' movies={popular} />
    </Wrapper>
}

export default HomeRoute