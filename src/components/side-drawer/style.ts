import styled, { css } from "styled-components";

export const BackdropWrapper = styled.div<{
    isOpen: boolean
}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    visibility: hidden;
    transition: all ease 300ms;

    ${props => props.isOpen && css`
        visibility: visible;
        background-color: ${props => props.theme.menu.backdropColor};
    `}

    display: flex;
`

export const ContentWrapper = styled.div<{
    isOpen: boolean
}>`
    transform: translateX(-100%);
    transition: all ease 300ms;

    ${props => props.isOpen && css`
        transform: translateX(0%);
    `}
`