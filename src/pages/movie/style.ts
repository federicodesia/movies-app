import styled from "styled-components";
import { Img } from "../../components/img";
import { down, up } from "../../styles/breakpoints";
import { Content } from "../../styles/content";
import { Column, Row } from "../../styles/styles";
import { Header } from "../../styles/text";

export const HeaderBackdrop = styled(Img)`
    ${down('sm')} {
        opacity: 0.75;
        filter: blur(8px);
    }
`

export const PosterHeaderWrapper = styled(Column)`
    height: 100%;
    justify-content: end;
    align-items: center;
`

export const CenteredHeader = styled(Header)`
    text-align: center;
`

export const PosterHeaderCard = styled(Img)`    
    width: 165px;
    height: auto;
    aspect-ratio: 2 / 3;
    border-radius: 12px;
`

export const HeaderDetailsItem = styled(Row)`
    align-items: center;
    gap: 4px;
`

export const HeaderWrapper = styled.div`
    height: 100%;
    align-items: flex-end;
    padding: 48px 0px;

    max-width: 1200px;
    margin: auto;

    display: grid;
    grid-template-areas: 'headerLeft headerCenter headerRight';
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
`

export const GridArea = styled.div<{
    area: string
}>`
    grid-area: ${props => props.area};
`

export const MovieContent = styled(Content)`
    box-sizing: content-box;
    max-width: 1200px;
    margin: auto;
`

export const PosterCard = styled(Img)`
    width: 200px;
    height: auto;
    aspect-ratio: 2 / 3;
    border-radius: 12px;

    ${down('xl')} {
        width: 100px;
    }
`

export const Section = styled(Column)`
    gap: 16px;
`

export const CastSection = styled(Section)`
    ${up('lg')} {
        flex-shrink: 0;
        width: 220px;
    }
`