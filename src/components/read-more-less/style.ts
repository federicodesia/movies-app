import styled, { css } from "styled-components";
import { Paragraph } from "../../styles/text";

export const TextWrapper = styled.div<{
    isExpanded: boolean
    isOverflow: boolean
    collapsedHeight: string
}>`
    ${props => props.isOverflow && !props.isExpanded && css`
        mask-image: linear-gradient(
            to bottom,
            #000 60%,
            transparent 100%
        );
    `};

    max-height: ${props => !props.isOverflow || props.isExpanded ? '500px' : props.collapsedHeight};
    overflow: hidden;
    transition: all ease 300ms;
`

export const ToggleText = styled(Paragraph)`
    color: ${props => props.theme.primaryColor};
    font-weight: 400;
    cursor: pointer;
`