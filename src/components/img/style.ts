import styled from "styled-components";
import { Text } from "../../styles/text";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const StyledImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`

export const Fallback = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: inherit;
    background-color: ${props => props.theme.fallbackColor};
`

export const AltText = styled(Text)`
    color: ${props => props.theme.titleColor};
    font-weight: 500;
`