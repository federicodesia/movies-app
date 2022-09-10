import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Header, SectionText, Text } from "../../styles/text"
import { down, between } from "../../styles/breakpoints";
import { AiOutlineMenu } from "react-icons/ai";

const collapsed = between('lg', 'xxl')

export const Wrapper = styled.div`
    background-color: ${props => props.theme.menu.backgroundColor};
    
    width: 240px;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;
    padding: 24px 0px;
    margin: 0px;
    gap: 12px;

    overflow-x: hidden;
    overflow-y: overlay;

    height: 100vh;
    ${collapsed} {
        width: 92px;
    }

    ${down('xs')} {
        width: 100vw;
    }
`

export const HeaderWrapper = styled.div`
    margin: 16px 32px;
`

export const StyledHeader = styled(Header)`
    line-height: 1;
`

export const ListTitle = styled(SectionText)`
    margin: 16px 32px;

    ${collapsed} {
        margin: 16px 0px;
        text-align: center;
    }
`

export const Item = styled.li`
    display: flex;
    align-items: center;

    padding: 0px 24px;
    padding-left: 0px;
    gap: 20px;
`

export const StyledLink = styled(Link) <{ $isActive?: boolean }>`
    flex: 1;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow-x: hidden;

    height: 44px;
    border-radius: 12px;
    color: ${props => props.theme.textColor};

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

export const ItemIconWrapper = styled.div`
    flex-shrink: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    padding: 0px 16px;

    ${collapsed} {
        padding: 0;
        width: 44px;
    }
`

export const StyledLinkText = styled(Text)`    
    color: inherit;
    line-height: inherit;

    ${collapsed} {
        opacity: 0;
    }
`