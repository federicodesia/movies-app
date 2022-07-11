import styled, { css } from "styled-components"

const base = css`
    margin: 0;
    line-height: 1.5;
    color: ${props => props.theme.textColor};
    transition: color ease 300ms;
`

export const Header = styled.h1<{
    variant?: 'light' 
}>`
    ${base}
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.variant === 'light'
        ? props.theme.lightTextColor
        : props.theme.titleColor
    };
`

export const Title = styled.h3`
    ${base}
    font-size: 13.5px;
    font-weight: 500;
    color: ${props => props.theme.titleColor};
`

export const Text = styled.p`
    ${base}
    font-size: 12.5px;
    font-weight: 500;
`

export const SectionText = styled.p`
    ${base}
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.theme.lightTextColor};
`