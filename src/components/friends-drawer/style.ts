import styled from "styled-components";
import { DotIndicator } from "../../styles/dot-indicator";

export const Wrapper = styled.div`
    background-color: #1B1C22;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const CenteredColumn = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 32px;
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
    background-color: #B5EDB3;
    border-color: #1B1C22;
    margin: 5px;
`