import { useParams } from "react-router-dom";
import { imagesService } from "../../services/images-service";
import { Header, Title, Text, SectionTitle } from "../../styles/text";
import OverlapPage from "../../components/overlap-page"
import { HeaderWrapper, GridArea, PosterCard, MovieContent, Section, CastSection, HeaderBackdrop, PosterHeaderWrapper, PosterHeaderCard, HeaderDetailsItem, CenteredHeader, FavoriteButton } from "./style";
import { Column, Row } from "../../styles/flex";
import { OutlineIconButton } from "../../styles/button";
import { MdFavorite, MdShare } from "react-icons/md"
import { TextIconButton, OutlineTextIconButton } from "../../components/text-icon-button";
import { IoPlay } from "react-icons/io5";
import { toHoursAndMinutes } from "../../utils/date";
import CircleProgressBar from "../../components/circle-progress-bar";
import HorizontalMovieList from "../../components/horizontal-movie-list";
import CastItem from "../../components/cast-item";
import { Chip } from "../../styles/chip";
import { TbCalendarMinus } from "react-icons/tb"
import { IoMdTime } from "react-icons/io"
import useMediaQuery from "../../hooks/use-media-query";
import { up } from "../../styles/breakpoints";
import { IconContext } from "react-icons/lib";
import { HiOutlineVideoCamera } from "react-icons/hi";
import StarRating from "../../components/star-rating";
import { useTheme } from "styled-components";
import { useGetMovieCreditsQuery, useGetMovieDetailsQuery, useGetSimilarMoviesQuery } from "../../redux/queries/movies-api";
import ReadMoreLess from "../../components/read-more-less";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFavoriteMovie, removeFavoriteMovie } from "../../redux/slices/user-slice";
import useDebounceFn from "../../hooks/use-debounce-fn";

const MoviePage = () => {
    const { id } = useParams();
    const parsedId = id ? parseInt(id) : undefined;
    const data = parsedId && {
        details: useGetMovieDetailsQuery(parsedId).data,
        credits: useGetMovieCreditsQuery(parsedId).data,
        similar: useGetSimilarMoviesQuery(parsedId).data?.results
    }

    const dispatch = useAppDispatch()
    const favorites = useAppSelector(state => state.userReducer.favoriteMoviesId)
    const isFavorite = parsedId ? favorites.some(id => id === parsedId) : false

    const handleFavoriteClick = useDebounceFn(() => {
        if (!parsedId) return
        if (isFavorite) dispatch(removeFavoriteMovie(parsedId));
        else dispatch(addFavoriteMovie(parsedId));
    }, 300)

    const theme = useTheme()
    const breakpoints = {
        upSm: useMediaQuery(up('sm'))
    }

    if (!data) return <></>

    const { details, credits, similar } = data
    const { backdrop_path, poster_path, title, genres, release_date, runtime, overview, vote_average, vote_count } = details ?? {}
    const compactVoteCount = Intl.NumberFormat('en', { notation: 'compact' }).format(vote_count ?? 0)

    return <OverlapPage header={{
        backdrop: <HeaderBackdrop src={imagesService.getBackdropUrl(backdrop_path, 'original')} />,

        children: breakpoints.upSm
            ? <HeaderWrapper>
                <GridArea area='headerLeft'>
                    <Row gap='12px' alignItems='center'>
                        <CircleProgressBar
                            progress={vote_average ?? 0}
                            maxProgress={10} />

                        <Column gap='2px'>
                            <Title maxLines={1}> {`${compactVoteCount} VOTES`} </Title>
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

            : <PosterHeaderWrapper>
                <PosterHeaderCard src={imagesService.getPosterUrl(poster_path)} />
            </PosterHeaderWrapper>
    }}>
        <Column gap='64px'>
            <MovieContent>
                <Row gap='64px'>

                    {
                        breakpoints.upSm && <Column gap='48px'>
                            <PosterCard src={imagesService.getPosterUrl(poster_path)} />

                            <Column gap='4px'>
                                <Header variant='thin'> {release_date && new Date(release_date).getFullYear()} </Header>
                                <Header variant='thin'> {runtime && toHoursAndMinutes(runtime).toUpperCase()} </Header>
                            </Column>
                        </Column>
                    }

                    <Row flex='1' gap='64px' changeDirection='lg'>

                        <Column gap='48px'>
                            <Column gap={breakpoints.upSm ? '18px' : '36px'}>
                                {
                                    breakpoints.upSm
                                        ? <Header>{title}</Header>

                                        : <Column alignItems='center' gap='12px'>
                                            <CenteredHeader>{title}</CenteredHeader>

                                            <IconContext.Provider value={{
                                                color: theme.textColor,
                                                size: '16px'
                                            }}>
                                                <Row alignItems='center' justifyContent='center' gap='8px' wrap='wrap'>
                                                    <HeaderDetailsItem>
                                                        <TbCalendarMinus />
                                                        <Text>{release_date && new Date(release_date).getFullYear()}</Text>
                                                    </HeaderDetailsItem>

                                                    <Text>|</Text>

                                                    <HeaderDetailsItem>
                                                        <IoMdTime />
                                                        <Text> {runtime && toHoursAndMinutes(runtime)} </Text>
                                                    </HeaderDetailsItem>

                                                    <Text>|</Text>

                                                    <HeaderDetailsItem>
                                                        <HiOutlineVideoCamera />
                                                        <Text> {genres?.slice(0, 2).map(genre => genre.name).join(', ')} </Text>
                                                    </HeaderDetailsItem>
                                                </Row>
                                            </IconContext.Provider >

                                            <StarRating value={vote_average ?? 0} maxValue={10} />
                                        </Column>
                                }

                                {
                                    breakpoints.upSm && <Row gap='8px' wrap='wrap'>
                                        {
                                            genres?.slice(0, 3).map((genre, index) => {
                                                return <Chip key={`${genre.id} ${index}`}>
                                                    {genre.name}
                                                </Chip>
                                            })
                                        }
                                    </Row>
                                }

                                <Row gap='8px'>
                                    <TextIconButton icon={<IoPlay />} text='Watch' />

                                    <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClick}>
                                        <MdFavorite size='16px' />
                                    </FavoriteButton>

                                    <OutlineIconButton>
                                        <MdShare size='16px' />
                                    </OutlineIconButton>
                                </Row>
                            </Column>

                            <Section>
                                <SectionTitle>STORYLINE</SectionTitle>
                                <ReadMoreLess collapsedHeight={134} text={overview} />
                            </Section>
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
                </Row>
            </MovieContent>

            <HorizontalMovieList header='More like this' movies={
                similar?.filter(movie => movie.id !== parsedId).slice(0, 12) ?? []
            } />
        </Column>
    </OverlapPage>
}

export default MoviePage