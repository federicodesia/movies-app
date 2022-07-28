import styled from "styled-components";
import { OutlineTextButton } from "./button";

export const Chip = styled(OutlineTextButton)`
    flex-shrink: 0;
    height: 38px;
    font-size: 11px;
    color: ${props => props.theme.textColor};
`