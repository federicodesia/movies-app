import styled, { css } from "styled-components"
import { Title } from "../../styles/text"

export const Wrapper = styled.div<{
    size: string
}>`
    flex-shrink: 0;
    position: relative;

    ${props => css`
        height: ${props.size};
        width: ${props.size};
    `};
`

export const Circle = styled.svg<{
    thickness: string
}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100%;
    width: 100%;

    circle {
        fill: none;
        stroke-width: ${props => props.thickness};
    }
`

export const Background = styled.circle`
    stroke: ${props => props.theme.progressBackgroundColor};
`

export const Progress = styled.circle<{
    dasharray: number
    dashoffset: number
}>`
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;

    ${props => css`
        stroke: ${props.theme.primaryColor};
        stroke-dasharray: ${props.dasharray};
        stroke-dashoffset: ${props.dashoffset};
        
    `};

    transition: stroke-dashoffset ease 300ms;
`

export const ProgressLabel = styled(Title)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`