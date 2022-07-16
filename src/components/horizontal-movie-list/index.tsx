import { Movie } from "../../services/movies-service/dto"
import { Column } from "../../styles/styles"
import { Header } from "../../styles/text"
import MovieCard from "../movie-card"
import { HeaderWrapper, HorizontalList } from "./style"

interface MovieCardProps {
    header: string
    showViewedPercentage?: boolean
    movies: Movie[]
}

const HorizontalMovieList = ({ header, showViewedPercentage, movies }: MovieCardProps) => {

    return <Column gap='24px'>
        <HeaderWrapper>
            <Header>{header}</Header>
        </HeaderWrapper>

        <HorizontalList>
            {
                movies.map((movie, index) => (
                    <MovieCard
                        key={`${movie.id} ${index}`}
                        showViewedPercentage={showViewedPercentage}
                        movie={movie} />
                ))
            }
        </HorizontalList>
    </Column>
}

export default HorizontalMovieList