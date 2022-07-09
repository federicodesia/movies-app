import styled from "styled-components";
import { DotIndicator } from "../../styles/dot-indicator";

export const Wrapper = styled.div`
    background-color: #1B1C22;
    color: rgba(255, 255, 255, 0.75);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CenteredColumn = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 32px;
    padding: 24px;
    overflow-y: overlay;
`

export const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const Item = styled.li`
    position: relative;
`

export const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const StyledDotIndicator = styled(DotIndicator)`
    background-color: #B5EDB3;
    border-color: #1B1C22;
    margin: 5px;
`