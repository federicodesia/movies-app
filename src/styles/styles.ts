import styled, { css } from "styled-components"

export const Title = styled.h3`
    margin: 0;
    color: white;
    font-size: 13.5px;
    font-weight: 400;
    line-height: 1.5;
`

export const Text = styled.p<{
    variant?: 'bold'
}>`
    margin: 0;
    color: rgba(255, 255, 255, 0.65);
    font-size: 12.5px;
    font-weight: 300;
    line-height: 1.5;

    ${props => props.variant == 'bold' && css`font-weight: 500; `};
`

export const Row = styled.div<{
    gap?: string
}>`
    display: flex;
    flex-direction: row;
    ${props => props.gap && css`gap: ${props.gap}; `};
`

export const Column = styled(Row)`
    flex-direction: column;
`