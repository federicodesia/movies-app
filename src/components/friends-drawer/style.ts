import styled from "styled-components";
import { DotIndicator } from "../../styles/dot-indicator";

export const Wrapper = styled.div`
    background-color: ${props => props.theme.menu.backgroundColor};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 24px 0px;
    overflow-y: overlay;
`

export const Item = styled.li`
    display: flex;
    align-items: center;

    padding: 0px 24px;
    padding-right: 0px;
    gap: 20px;
`

export const PositionRelative = styled.div`
    position: relative;
`

export const StyledDotIndicator = styled(DotIndicator)`
    background-color: ${props => props.theme.onlineColor};
    border-color: ${props => props.theme.menu.backgroundColor};
    margin: 5px;
`

export const ProfilePicture = styled.img`
    height: 42px;
    width: 42px;
    object-fit: cover;
    border-radius: 50%;
`