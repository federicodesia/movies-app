import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imagesService } from "../../services/images-service";
import { moviesService } from "../../services/movies-service";
import { Movie, MovieCredits, MovieDetail } from "../../services/movies-service/dto";
import { Header, Title, Text, Paragraph, SectionTitle } from "../../styles/text";
import OverlapPage from "../../components/overlap-page"
import { HeaderWrapper, GridArea, PosterCard, MovieContent, Section, CastSection } from "./style";
import { Column, Container, Row } from "../../styles/styles";
import { OutlineIconButton } from "../../styles/button";
import { MdFavorite, MdShare } from "react-icons/md"
import { TextIconButton, OutlineTextIconButton } from "../../components/text-icon-button";
import { IoPlay } from "react-icons/io5";
import { toHoursAndMinutes } from "../../utils/date";
import CircleProgressBar from "../../components/circle-progress-bar";
import HorizontalMovieList from "../../components/horizontal-movie-list";
import CastItem from "../../components/cast-item";
import { Chip } from "../../styles/chip";
import { Table, TableBody, TableRow, TableData, TableHeader } from "../../styles/table";
import useMediaQuery from "../../hooks/use-media-query";
import { down } from "../../styles/breakpoints";

const MoviePage = () => {
    const { id } = useParams();

    const breakpoints = {
        downMd: useMediaQuery(down('sm')),
        downLg: useMediaQuery(down('md'))
    }

    const [data, setData] = useState<{
        details?: MovieDetail
        credits?: MovieCredits
        similar?: Movie[]
    } | undefined>()

    useEffect(() => {
        const movieId = id && parseInt(id)
        movieId && Promise.all([
            moviesService.getMovieDetails(movieId),
            moviesService.getMovieCredits(movieId),
            moviesService.getSimilarMovies(movieId)
        ]).then(([details, credits, similar]) => {
            setData({
                details: details,
                credits: credits,
                similar: similar?.results
            })
        })
    }, [])

    if (!data) return <></>

    const { details, credits, similar } = data
    const { backdrop_path, poster_path, title, genres, release_date, runtime, overview, vote_average, vote_count, production_countries, spoken_languages } = details ?? {}

    const compactFormatter = Intl.NumberFormat('en', { notation: 'compact' })

    return <OverlapPage header={{
        backdrop: <img src={imagesService.getBackdropUrl(backdrop_path, 'original')} />,
        children: !breakpoints.downLg && <HeaderWrapper>

            <GridArea area='headerLeft'>
                <Row gap='12px' alignItems='center'>
                    <CircleProgressBar
                        progress={vote_average ?? 0}
                        maxProgress={10} />

                    <Column gap='2px'>
                        <Title maxLines={1}>
                            {
                                `${compactFormatter.format(vote_count ?? 0)} VOTES`
                            }
                        </Title>
                        <Text maxLines={1}>
                            {
                                (vote_average ?? 0) >= 5
                                    ? 'Users are recommending it'
                                    : 'Few users are recommending it'
                            }
                        </Text>
                    </Column>
                </Row>
            </GridArea>

            <GridArea area='headerCenter'>
                <Row justifyContent='center'>
                    <OutlineTextIconButton icon={<IoPlay />} iconColor='primary' text='Trailer' />
                </Row>
            </GridArea>
        </HeaderWrapper>
    }}>
        <Column gap='64px'>
            <MovieContent>
                <Row gap='64px'>

                    {
                        !breakpoints.downLg && <Column gap='48px'>
                            <PosterCard src={imagesService.getPosterUrl(poster_path)} />

                            <Column gap='4px'>
                                <Header variant='thin'> {release_date && new Date(release_date).getFullYear()} </Header>
                                <Header variant='thin'> {runtime && toHoursAndMinutes(runtime).toUpperCase()} </Header>
                            </Column>
                        </Column>
                    }

                    <Container flex={1}>
                        <Row gap='64px' changeDirection='lg'>

                            <Column gap='48px'>
                                <Column gap='18px'>
                                    <Header>{title}</Header>

                                    <Row gap='8px' wrap='wrap'>
                                        {
                                            genres?.slice(0, 3).map((genre, index) => {
                                                return <Chip key={`${genre.id} ${index}`}>
                                                    {genre.name}
                                                </Chip>
                                            })
                                        }
                                    </Row>

                                    <Row gap='8px'>
                                        <TextIconButton icon={<IoPlay />} text='Watch' />

                                        <OutlineIconButton>
                                            <MdFavorite size='16px' />
                                        </OutlineIconButton>

                                        <OutlineIconButton>
                                            <MdShare size='16px' />
                                        </OutlineIconButton>
                                    </Row>
                                </Column>

                                <Section>
                                    <SectionTitle>STORYLINE</SectionTitle>
                                    <Paragraph>{overview}</Paragraph>
                                </Section>

                                {
                                    breakpoints.downLg && <Section>
                                        <SectionTitle>DETAILS</SectionTitle>

                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableHeader>Runtime</TableHeader>
                                                    <TableData>{runtime && toHoursAndMinutes(runtime)}</TableData>
                                                </TableRow>

                                                <TableRow>
                                                    <TableHeader>Release date</TableHeader>
                                                    <TableData>
                                                        {
                                                            release_date && new Date(release_date).toLocaleDateString('en', {
                                                                day: 'numeric',
                                                                month: 'long',
                                                                year: 'numeric'
                                                            })
                                                        }
                                                    </TableData>
                                                </TableRow>

                                                <TableRow>
                                                    <TableHeader>Production countries</TableHeader>
                                                    <TableData> {production_countries?.map(country => country.name).join(', ')} </TableData>
                                                </TableRow>

                                                <TableRow>
                                                    <TableHeader>Languages</TableHeader>
                                                    <TableData> {spoken_languages?.map(language => language.name).join(', ')} </TableData>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Section>
                                }
                            </Column>

                            <CastSection>
                                <SectionTitle>CAST</SectionTitle>
                                {
                                    credits?.cast?.slice(0, 5).map((item, index) => {
                                        return <CastItem cast={item} key={`${item.id} ${index}`} />
                                    })
                                }
                            </CastSection>
                        </Row>
                    </Container>
                </Row>
            </MovieContent>

            <HorizontalMovieList header='More like this' movies={similar?.slice(0, 12) ?? []} />
        </Column>
    </OverlapPage>
}

export default MoviePage