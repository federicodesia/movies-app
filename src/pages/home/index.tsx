import { Column } from "../../styles/styles"
import { Header, Title, Text } from "../../styles/text"
import { MovieCard, MovieCardImage, MovieCardContent, MoviesList, Wrapper, ContentWrapper } from "./style"

const HomeRoute = () => {
    return <Wrapper>



        <Column gap='24px'>
            <ContentWrapper>
                <Header>Trending</Header>
            </ContentWrapper>

            <MoviesList>
                {
                    Array(5).fill({}).map((item, index) => (
                        <MovieCard key={`${index}`}>
                            <MovieCardImage src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chernobil-serie-hbo-6-1559474134.jpeg' />
                            <MovieCardContent>
                                <Title>Chernobyl</Title>
                                <Text>Description</Text>
                            </MovieCardContent>
                        </MovieCard>
                    ))
                }
            </MoviesList>
        </Column>
    </Wrapper>
}

export default HomeRoute