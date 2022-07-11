import styled, { css } from "styled-components"

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