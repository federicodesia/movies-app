import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { down } from "../../styles/breakpoints";
import { slideDownAndFade } from "../../styles/slide-fade";
import { Row } from "../../styles/styles";
import { Title } from "../../styles/text";
import { Img } from "../img";

export const Wrapper = styled.div`
    flex: 1;
`

export const InputWrapper = styled(Row)`
    height: 44px;
    max-width: 300px;
    
    align-items: center;
    padding: 0px 16px;
    gap: 16px;

    background-color: ${props => props.theme.backgroundColor};
    border-radius: 16px;
    overflow: hidden;
`

export const Input = styled.input`
    flex: 1;
    width: 100%;
    height: 100%;

    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    color: ${props => props.theme.textColor};

    font-family: inherit;
    font-size: 12.5px;
    &::placeholder {
        color: ${props => props.theme.textColor};
    }
`

export const SuggestionsWrapper = styled.div`
    z-index: 1;
    position: absolute;
    margin-top: 12px;

    background-color: ${props => props.theme.menu.backgroundColor};
    padding: 20px;
    border-radius: 16px;
    
    width: 100%;
    max-width: 450px;
    max-height: 240px;
    overflow: overlay;

    ${down('xs')} {
        max-height: 340px;
    }

    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;
    animation-name: ${slideDownAndFade};
`

export const Suggestion = styled(Link)`
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 16px;

    border-radius: 12px;
    padding: 12px;

    &:hover {
        background-color: ${props => props.theme.menu.hoverColor};
        cursor: pointer;
    }
    transition: all ease 300ms;
`

export const PosterCard = styled(Img)`
    height: 48px;
    width: auto;
    aspect-ratio: 2 / 3;
    border-radius: 8px;
`

export const SuggestionTitle = styled(Title)`
    padding: 4px 12px;
`