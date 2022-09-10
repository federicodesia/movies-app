import styled, { css } from "styled-components";
import { IconButton, CircleImageButton } from "../../styles/button";
import { DotIndicator } from "../../styles/dot-indicator";

export const Wrapper = styled.div`
    background-color: ${props => props.theme.menu.backgroundColor};
    
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: ${props => props.theme.shadows.xs};
`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 28px;

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

const hoverButton = css`
    height: 44px;
    width: 44px;

    transition: all ease 300ms;
    &:hover {
        border-radius: 16px;
    }
`

export const HoverIconButton = styled(IconButton)`${hoverButton}`
export const HoverImageButton = styled(CircleImageButton)`${hoverButton}`