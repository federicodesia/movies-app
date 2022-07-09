import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    max-width: 240px;
    background-color: #1B1C22;
    color: rgba(255, 255, 255, 0.75);

    display: flex;
    flex-direction: column;
    padding: 24px 0px;
    margin: 0px;
    gap: 12px;

    overflow-y: overlay;
`

export const HeaderWrapper = styled.div`
    display: flex;
    margin: 8px 32px;
`

export const Header = styled.h1`
    font-size: 18px;
    font-weight: 600;
    color: white;
    text-transform: uppercase;
`

export const LightHeader = styled(Header)`
    font-weight: 600;
    color: rgba(255, 255, 255, 0.75);
`

export const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style-type: none;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
`

export const ListTitle = styled.p`
    margin: 16px 32px;
    
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
`

export const StyledLink = styled(Link) <{
    $isActive?: boolean
}>`
    flex: 1;
    text-decoration: none;
    color: inherit;

    display: flex;
    align-items: center;
    gap: 16px;

    padding: 0px 16px;
    margin: 0px 16px;
    border-radius: 12px;
    
    font-size: 13px;
    transition: all ease 300ms;

    &:hover {
        background-color: rgba(156, 113, 252, 0.03);
    }

    ${props => props.$isActive && css`
        background-color: rgba(156, 113, 252, 0.05);
        color: #9C71FC;

        &:hover {
            background-color: rgba(156, 113, 252, 0.08);
        }
    `}
`

export const ActiveIndicator = styled.div<{
    isActive?: boolean
}>`
    width: 4px;
    background-color: #9C71FC;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    height: 0px;
    opacity: 0;
    transition: all ease 300ms;

    ${props => props.isActive && css`
        height: 24px;
        opacity: 1;
    `}
`