import styled, { css } from "styled-components"

const base = css`
    margin: 0;
    line-height: 1.5;
    color: ${props => props.theme.textColor};
    transition: color ease 300ms;
`

const maxLines = (n: number) => css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${n};
            line-clamp: ${n}; 
    -webkit-box-orient: vertical;
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

export const Title = styled.h3<{
    maxLines?: number
}>`
    ${base}
    font-size: 13.5px;
    font-weight: 500;
    color: ${props => props.theme.titleColor};
    ${props => props.maxLines && maxLines(props.maxLines)}
`

export const Text = styled.p<{
    maxLines?: number
}>`
    ${base}
    font-size: 12.5px;
    font-weight: 500;
    ${props => props.maxLines && maxLines(props.maxLines)}
`

export const SectionText = styled.p`
    ${base}
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${props => props.theme.lightTextColor};
`