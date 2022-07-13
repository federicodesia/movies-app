import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px 0px;
`

export const ContentWrapper = styled.div`
    padding: 0px 48px;
`

export const MoviesList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;

    display: flex;
    padding: 0px 48px;
    gap: 24px;
    overflow-y: overlay;
`

export const MovieCard = styled.li`
    padding: 0;
    width: 185px;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
`

export const MovieCardImage = styled.img`
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-radius: 16px;
`

export const MovieCardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    gap: 6px;
`