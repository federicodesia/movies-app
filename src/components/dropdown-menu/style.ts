import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import styled from "styled-components";
import { slideFadeAnimation } from "../../styles/slide-fade";

export const StyledDropdownContent = styled(DropdownMenuPrimitive.Content)`
    z-index: 1;
    min-width: 250px;

    background-color: ${props => props.theme.tooltipBackgroundColor};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
    padding: 20px;
    border-radius: 8px;

    animation-duration: 300ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;

    &[data-state='open'] {
        ${slideFadeAnimation}
    }
`

export const StyledArrow = styled(DropdownMenuPrimitive.Arrow)`
    fill: ${props => props.theme.tooltipBackgroundColor};
`

export const DropdownItem = styled(DropdownMenuPrimitive.Item)`
    all: unset;
    user-select: none;
    
    height: 44px;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    border-radius: 12px;
    gap: 16px;

    &[data-highlighted] {
        cursor: pointer;
        background-color: ${props => props.theme.menu.hoverColor};
    }
`

export const DropdownRightSlot = styled.div`
    margin-left: auto;
`

export const DropdownSeparator = styled(DropdownMenuPrimitive.Separator)`
    height: 1px;
    background-color: ${props => props.theme.separatorColor};
    margin: 0px 5px;
`