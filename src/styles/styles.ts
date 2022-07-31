import styled, { css } from "styled-components"
import { Breakpoint, down } from "./breakpoints"

export const Row = styled.div<{
    gap?: string
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    changeDirection?: Breakpoint
}>`
    display: flex;
    flex-direction: row;

    ${props => css`
        align-items: ${props.alignItems};
        justify-content: ${props.justifyContent};
        gap: ${props.gap};
        flex-wrap: ${props.wrap};
    `}

    ${({ changeDirection }) => changeDirection && css`
        ${down(changeDirection)} {
            flex-direction: column;
        }
    `}
`

export const Column = styled(Row)`
    flex-direction: column;

    ${({ changeDirection }) => changeDirection && css`
        ${down(changeDirection)} {
            flex-direction: row;
        }
    `}
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

    ${props => css`
        flex: ${props.flex};

        width: ${props.width};
        min-width: ${props.minWidth};
        max-width: ${props.maxWidth};

        height: ${props.height};
        min-height: ${props.minHeight};
        max-height: ${props.maxHeight};
    `}
`