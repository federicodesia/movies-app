import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SectionText, Text } from "../../styles/text"

export const Wrapper = styled.div`
    background-color: ${props => props.theme.menu.backgroundColor};

    width: 100%;
    max-width: 240px;

    display: flex;
    flex-direction: column;
    padding: 24px 0px;
    margin: 0px;
    gap: 12px;

    overflow-y: overlay;
`

export const HeaderWrapper = styled.div`
    display: flex;
    margin: 16px 32px;
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

export const ListTitle = styled(SectionText)`
    margin: 16px 32px;
`

export const StyledLink = styled(Link)<{ $isActive?: boolean }>`
    flex: 1;
    text-decoration: none;
    color: inherit;

    display: flex;
    align-items: center;
    gap: 16px;

    padding: 12px 16px;
    margin: 0px 16px;
    border-radius: 12px;

    color: ${props => props.theme.textColor};
    transition: all ease 300ms;

    &:hover {
        background-color: ${props => props.theme.menu.hoverColor};
    }

    ${props => props.$isActive && css`
        background-color: ${props => props.theme.menu.activeColor};
        color: ${props => props.theme.primaryColor};

        &:hover {
            background-color: ${props => props.theme.menu.activeHoverColor};
        }
    `}
`

export const StyledLinkText = styled(Text)<{ $isActive?: boolean }>`
    ${props => props.$isActive && css`
        color: ${props => props.theme.primaryColor};
    `}
`