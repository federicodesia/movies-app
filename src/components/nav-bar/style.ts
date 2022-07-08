import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 48px;
    gap: 32px;
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const DotIconWrapper = styled.div`
    position: relative;
    cursor: pointer;
`

export const Dot = styled.div<{
    isActive: boolean
}>`
    position: absolute;
    top: 2px;
    right: 2px;
    transform: translate(50%, -50%) scale(0, 0);
    
    box-sizing: content-box;
    height: 8px;
    width: 8px;
    background-color: #9C71FC;
    border-radius: 50%;
    border: 3px solid #222329;

    opacity: 0;
    transition: all ease 300ms;

    ${props => props.isActive && css`
        opacity: 1;
        transform: translate(50%, -50%) scale(1, 1);
    `}
`