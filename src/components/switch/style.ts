import * as SwitchPrimitive from '@radix-ui/react-switch';
import styled from "styled-components";

export const StyledSwitch = styled(SwitchPrimitive.Root)`
    all: unset;
    width: 32px;
    height: 18px;
    border-radius: 18px;

    background-color: ${props => props.theme.switchBackgroundColor};
    transition: transform ease 300ms;
`

export const StyledThumb = styled(SwitchPrimitive.Thumb)`
    display: block;
    width: 14px;
    height: 14px;

    background-color: white;
    border-radius: 50%;

    transition: transform ease 100ms;
    transform: translateX(2px);
    
    &[data-state="checked"] {
        transform: translateX(16px);
    }
`