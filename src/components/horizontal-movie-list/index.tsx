import { Movie } from "../../services/movies-service/dto"
import { Content } from "../../styles/content"
import { Column } from "../../styles/flex"
import { Header } from "../../styles/text"
import HorizontalScroll from "../horizontal-scroll"
import MovieCard from "../movie-card"
import { List } from "./style"

interface MovieCardProps {
    header: string
    showViewedPercentage?: boolean
    movies: Movie[] | number[]
}

const HorizontalMovieList = ({ header, showViewedPercentage, movies }: MovieCardProps) => {
    const items = movies.map((item, index) => {
        const id = typeof item === 'number' ? item : item.id
        return <MovieCard
            key={`${id} ${index}`}
            showViewedPercentage={showViewedPercentage}
            movieOrId={item} />
    })

    if (items.some(i => i !== null)) return <Column gap='24px'>
        <Content>
            <Header>{header}</Header>
        </Content>

        <HorizontalScroll>
            <List>
                {items}
            </List>
        </HorizontalScroll>
    </Column>
    return null
}

export default HorizontalMovieList