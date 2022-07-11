import styled, { css } from "styled-components";

const ActiveIndicator = styled.div<{
    isActive?: boolean
    side: 'left' | 'right'
}>`
    background-color: ${props => props.theme.primaryColor};
    width: 4px;
    height: 0px;
    opacity: 0;
    transition: all ease 300ms;

    ${props => props.isActive && css`
        height: 24px;
        opacity: 1;
    `}
    
    ${props => props.side == 'left'
        ? css`
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        `
        : css`
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        `
    }
`

export default ActiveIndicator