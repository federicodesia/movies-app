import styled from "styled-components";
import { down } from "../../styles/breakpoints";
import { Content } from "../../styles/content";

export const Wrapper = styled.div`
    position: relative;
`

export const ArrowWrapper = styled.div<{
    isVisible: boolean
}>`
    z-index: 1;
    display: flex;
    width: 250px;

    position: absolute;
    top: 0;
    bottom: 0;

    pointer-events: none;
    color: ${props => props.theme.iconColor};

    opacity: ${props => props.isVisible ? 1 : 0};
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    transition: all ease 300ms;
`

export const LeftArrowWrapper = styled(ArrowWrapper)`
    left: 0;
    background-image: linear-gradient(
        to right,
        ${props => props.theme.backgroundColor} 25%,
        transparent 100%
    );
`

export const RightArrowWrapper = styled(ArrowWrapper)`
    justify-content: flex-end;
    right: 0;
    background-image: linear-gradient(
        to left,
        ${props => props.theme.backgroundColor} 25%,
        transparent 100%
    );
`

export const ArrowButton = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    pointer-events: auto;
    cursor: pointer;

    padding: 0px 32px;
    ${down('sm')} {
        padding: 0px 24px;
    }
`

export const ScrolleableArea = styled(Content)`
    display: flex;
    overflow-x: overlay;
`