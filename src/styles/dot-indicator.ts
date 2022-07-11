import styled, { css } from "styled-components";

export const DotIndicator = styled.div<{
    isActive: boolean
}>`
    position: absolute;
    top: 0;
    right: 0;
    margin: 2px;
    transform: translate(50%, -50%) scale(0, 0);
    
    box-sizing: content-box;
    height: 8px;
    width: 8px;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 50%;
    border: 3px solid ${props => props.theme.backgroundColor};

    opacity: 0;
    transition: all ease 300ms;

    ${props => props.isActive && css`
        opacity: 1;
        transform: translate(50%, -50%) scale(1, 1);
    `}
`