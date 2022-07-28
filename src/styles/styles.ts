import styled, { css } from "styled-components"

export const Row = styled.div<{
    gap?: string
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}>`
    display: flex;
    flex-direction: row;
    ${props => props.alignItems && css`align-items: ${props.alignItems}; `};
    ${props => props.justifyContent && css`justify-content: ${props.justifyContent}; `};
    ${props => props.gap && css`gap: ${props.gap}; `};
    ${props => props.wrap && css`flex-wrap: ${props.wrap}; `};
`

export const Column = styled(Row)`
    flex-direction: column;
`

export const Container = styled.div<{
    width?: string
    minWidth?: string
    maxWidth?: string
    height?: string
    minHeight?: string
    maxHeight?: string
    flex?: number
}>`
    flex-shrink: 0;
    flex: ${props => props.flex};

    width: ${props => props.width};
    min-width: ${props => props.minWidth};
    max-width: ${props => props.maxWidth};

    height: ${props => props.height};
    min-height: ${props => props.minHeight};
    max-height: ${props => props.maxHeight};
`