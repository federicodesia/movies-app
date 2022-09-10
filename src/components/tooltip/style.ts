import styled from "styled-components"
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { slideFadeAnimation } from "../../styles/slide-fade";

export const StyledTooltipContent = styled(TooltipPrimitive.Content)`
  background-color: ${props => props.theme.tooltipBackgroundColor};
  box-shadow: ${props => props.theme.shadows.sm};
  padding: 16px 20px;
  border-radius: 8px;

  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;

  &[data-state='delayed-open'] {
      ${slideFadeAnimation}
  }
`

export const StyledHoverCardContent = styled(StyledTooltipContent)`
  width: 300px;
  padding: 20px;

  &[data-state='open'] {
    ${slideFadeAnimation}
  }
`

export const StyledArrow = styled(TooltipPrimitive.Arrow)`
    fill: ${props => props.theme.tooltipBackgroundColor};
`