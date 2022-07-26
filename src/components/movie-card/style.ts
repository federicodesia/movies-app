import { BsPlayCircle } from "react-icons/bs"
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Backdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    background-color: rgba(0, 0, 0, 0.65);
    transition: all ease 300ms;
`

export const Wrapper = styled.li`
    padding: 0;
    width: 185px;
    flex-shrink: 0;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    display: flex;
    flex-direction: column;
    gap: 16px;

    &:hover ${Backdrop} {
        opacity: 1
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    height: 130px;
    border-radius: 16px;
    overflow: hidden;
`

export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const PlayIcon = styled(BsPlayCircle)`
    height: 28px;
    width: 28px;
    color: white;
`