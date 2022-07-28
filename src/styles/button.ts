import styled, { css } from "styled-components";

const defaultSize = '48px'

const BaseButton = styled.button<{
    size?: string
}>`
    box-sizing: border-box;
    font-family: inherit;
    height: ${props => props.size ?? defaultSize};
    border-radius: ${props => props.size ?? defaultSize};
    cursor: pointer;
`

export const Button = styled(BaseButton)`
    border: none;
    background-color: ${props => props.theme.primaryColor};
    color: white;
`

export const OutlineButton = styled(BaseButton)`
    border: 1px solid ${props => props.theme.outlineButton.borderColor};;
    background-color: transparent;
    color: ${props => props.theme.titleColor};

    transition: all ease 300ms;
    :hover {
        background-color: ${props => props.theme.outlineButton.hoverColor};
    }
`

const text = css`
    line-height: 1;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 24px;
`

export const TextButton = styled(Button)`${text}`
export const OutlineTextButton = styled(OutlineButton)`${text}`

export const CircleButton = styled(Button)`
    padding: 0px;
    width: ${props => props.size ?? defaultSize};
    border-radius: 50%;
`

export const OutlineCircleButton = styled(OutlineButton)`
    padding: 0px;
    width: ${props => props.size ?? defaultSize};
    border-radius: 50%;
`

export const CircleImageButton = styled(CircleButton)`
    position: relative;
    overflow: hidden;
    background-color: inherit;
    
    img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const icon = css`
    display: grid;
    * {
        margin: auto;
    }
`

export const IconButton = styled(CircleButton)`${icon}`
export const OutlineIconButton = styled(OutlineCircleButton)`${icon}`