import styled, { css } from "styled-components"
import { Breakpoint, down } from "./breakpoints"

export const Row = styled.div<{
    gap?: string
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    changeDirection?: Breakpoint
    flex?: string
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

    flex: ${props => props.flex};
`

export const Column = styled(Row)`
    flex-direction: column;

    ${({ changeDirection }) => changeDirection && css`
        ${down(changeDirection)} {
            flex-direction: row;
        }
    `}
`