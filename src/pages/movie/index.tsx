import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imagesService } from "../../services/images-service";
import { moviesService } from "../../services/movies-service";
import { MovieDetail } from "../../services/movies-service/dto";
import { Header } from "../../styles/text";
import OverlapPage from "../../components/overlap-page"
import { PosterCard, Wrapper } from "./style";

const MoviePage = () => {
    const { id } = useParams();
    const [details, setDetails] = useState<MovieDetail | undefined>()

    useEffect(() => {
        Promise.all([
            moviesService.getMovieDetails(parseInt(id ?? '0'))
        ]).then(([details]) => {
            setDetails(details)
        })
    }, [])

    if (!details) return <></>
    return <OverlapPage header={{
        backdrop: <img src={imagesService.getBackdropUrl(details.backdrop_path, 'original')} />,
        children: <Header>{details.title}</Header>
    }}>
        <Wrapper>
            <PosterCard src={imagesService.getPosterUrl(details.poster_path)} />
        </Wrapper>
    </OverlapPage>
}

export default MoviePage