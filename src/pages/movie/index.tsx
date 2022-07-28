import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imagesService } from "../../services/images-service";
import { moviesService } from "../../services/movies-service";
import { Movie, MovieCredits, MovieDetail } from "../../services/movies-service/dto";
import { Header, Title, Text, Paragraph } from "../../styles/text";
import OverlapPage from "../../components/overlap-page"
import { HeaderWrapper, Grid, GridArea, PosterCard, GridWrapper, GenreChip } from "./style";
import { Column, Row } from "../../styles/styles";
import { OutlineIconButton } from "../../styles/button";
import { MdFavorite, MdShare } from "react-icons/md"
import { TextIconButton, OutlineTextIconButton } from "../../components/text-icon-button";
import { IoPlay } from "react-icons/io5";
import { toHoursAndMinutes } from "../../utils/date";
import CircleProgressBar from "../../components/circle-progress-bar";
import HorizontalMovieList from "../../components/horizontal-movie-list";
import CastItem from "../../components/cast-item";

const MoviePage = () => {
    const { id } = useParams();

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
    const { backdrop_path, poster_path, title, genres, release_date, runtime, overview, vote_average, vote_count } = details ?? {}
    const runHoursMinutes = runtime && toHoursAndMinutes(runtime, false)

    const compactFormatter = Intl.NumberFormat('en', { notation: 'compact' })

    return <OverlapPage header={{
        backdrop: <img src={imagesService.getBackdropUrl(backdrop_path, 'original')} />,
        children: <HeaderWrapper>

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
                    <OutlineTextIconButton icon={<IoPlay />} text='Trailer' />
                </Row>
            </GridArea>
        </HeaderWrapper>
    }}>
        <Column gap='64px'>
            <GridWrapper>
                <Grid>
                    <GridArea area='poster'>
                        <Column gap='48px'>
                            <PosterCard src={imagesService.getPosterUrl(poster_path)} />

                            <Column gap='4px'>
                                <Header variant='thin'>
                                    {release_date && new Date(release_date).getFullYear()}
                                </Header>

                                <Header variant='thin'>
                                    {runHoursMinutes && `${runHoursMinutes.hours}H ${runHoursMinutes.minutes}MIN`}
                                </Header>
                            </Column>
                        </Column>
                    </GridArea>

                    <GridArea area='main'>
                        <Column gap='18px' justifyContent='space-between'>
                            <Header>{title}</Header>

                            <Row gap='8px'>
                                {
                                    genres?.slice(0, 3).map((genre, index) => {
                                        return <GenreChip key={`${genre.id} ${index}`}>
                                            {genre.name}
                                        </GenreChip>
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
                    </GridArea>

                    <GridArea area='storyline'>
                        <Column gap='16px'>
                            <Title>STORYLINE</Title>
                            <Paragraph>{overview}</Paragraph>
                        </Column>
                    </GridArea>

                    <GridArea area='cast'>
                        <Column gap='16px'>
                            <Title>CAST</Title>
                            {
                                credits?.cast?.slice(0, 5).map((item, index) => {
                                    return <CastItem cast={item} key={`${item.id} ${index}`} />
                                })
                            }
                        </Column>
                    </GridArea>
                </Grid>
            </GridWrapper>

            <HorizontalMovieList header='More like this' movies={similar?.slice(0, 12) ?? []} />
        </Column>
    </OverlapPage>
}

export default MoviePage