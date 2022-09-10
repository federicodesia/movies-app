import { BsPlayCircle } from "react-icons/bs"
import { Link } from "react-router-dom";
import styled from "styled-components";
import { down } from "../../styles/breakpoints";

const resize = down('sm')

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

    ${resize} {
        width: 135px;
    }
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

    ${resize} {
        height: 165px;
    }
`