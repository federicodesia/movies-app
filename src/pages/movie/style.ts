import styled from "styled-components";
import { Column } from "../../styles/styles";

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

export const MovieContent = styled.div`
    box-sizing: content-box;
    max-width: 1200px;
    padding: 0px 48px;
    margin: auto;
`

export const PosterCard = styled.img`
    display: block;
    height: 300px;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    border-radius: 12px;
`

export const Section = styled(Column)`
    gap: 16px;
`