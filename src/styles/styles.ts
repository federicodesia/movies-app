import styled, { css } from "styled-components"

export const Row = styled.div<{
    gap?: string
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
}>`
    display: flex;
    flex-direction: row;
    ${props => props.alignItems && css`align-items: ${props.alignItems}; `};
    ${props => props.justifyContent && css`justify-content: ${props.justifyContent}; `};
    ${props => props.gap && css`gap: ${props.gap}; `};
`

export const Column = styled(Row)`
    flex-direction: column;
`