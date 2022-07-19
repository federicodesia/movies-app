import styled from "styled-components";

export const Button = styled.button`
    border: none;
    background-color: ${props => props.theme.primaryColor};
    color: white;
    
    height: 42px;
    border-radius: 16px;
    cursor: pointer;
`

export const TextButton = styled(Button)`
    font-family: inherit;
    font-weight: 500;
    padding: 0px 24px;
`

export const CircleButton = styled(Button)`
    width: 42px;
    border-radius: 50%;
    transition: all ease 300ms;
    
    &:hover {
        border-radius: 16px;
    }
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

export const CircleIconButton = styled(CircleButton)`
    display: grid;
    * {
        margin: auto;
    }
`