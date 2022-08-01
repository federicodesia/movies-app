import { Movie } from "../../services/movies-service/dto"
import { Content } from "../../styles/content"
import { Column } from "../../styles/styles"
import { Header } from "../../styles/text"
import MovieCard from "../movie-card"
import { HorizontalList } from "./style"

interface MovieCardProps {
    header: string
    showViewedPercentage?: boolean
    movies: Movie[]
}

const HorizontalMovieList = ({ header, showViewedPercentage, movies }: MovieCardProps) => {

    return <Column gap='24px'>
        <Content>
            <Header>{header}</Header>
        </Content>

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