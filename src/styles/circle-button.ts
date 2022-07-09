import styled from "styled-components";

export const CircleButton = styled.div`
    background-color: #9C71FC;
    color: white;
    height: 42px;
    width: 42px;
    cursor: pointer;

    border-radius: 50%;
    overflow: hidden;
    transition: all ease 300ms;

    &:hover {
        border-radius: 16px;
    }
`

export const CircleIconButton = styled(CircleButton)`
    display: grid;
    * {
        margin: auto;
    }
`