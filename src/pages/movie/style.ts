import styled from "styled-components";
import { OutlineTextButton } from "../../styles/button";

export const HeaderWrapper = styled.div`
    height: 100%;
    padding: 48px 0px;
    max-width: 1200px;
    
    margin: auto;
    align-items: flex-end;
    justify-content: space-between;

    display: grid;
    grid-template-areas: 'headerLeft headerCenter headerRight';
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
`

export const GridWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0px 48px;
`

export const Grid = styled.div`
    max-width: 1200px;

    display: grid;
    grid-template-areas: 
        'poster main cast'
        'poster storyline cast';
    grid-template-columns: auto 1fr 220px;

    row-gap: 48px;
    column-gap: 64px;
`

export const GridArea = styled.div<{
    area: string
}>`
    grid-area: ${props => props.area};
    //border: 1px solid black;
`

export const PosterCard = styled.img`
    display: block;
    height: 300px;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    border-radius: 12px;
`

export const GenreChip = styled(OutlineTextButton)`
    height: 36px;
    font-size: 11px;
`