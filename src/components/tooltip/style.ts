import styled, { css, keyframes } from "styled-components"
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const slideUpAndFade = keyframes`
  from { opacity: 0; transform: translateY(2px) }
  to { opacity: 1; transform: translateY(0) }
`

const slideRightAndFade = keyframes`
  from { opacity: 0; transform: translateX(-2px) }
  to { opacity: 1; transform: translateX(0) }
`

const slideDownAndFade = keyframes`
  from { opacity: 0; transform: translateY(-2px) }
  to { opacity: 1; transform: translateY(0) }
`

const slideLeftAndFade = keyframes`
  from { opacity: 0; transform: translateX(2px) }
  to { opacity: 1; transform: translateX(0) }
`

const animationData = css`
    &[data-side='top'] { animation-name: ${slideDownAndFade}; }
    &[data-side='right'] { animation-name: ${slideLeftAndFade}; }
    &[data-side='bottom'] { animation-name: ${slideUpAndFade}; }
    &[data-side='left'] { animation-name: ${slideRightAndFade}; }
`

export const StyledTooltipContent = styled(TooltipPrimitive.Content)`
  background-color: #131417;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
  padding: 16px 20px;
  border-radius: 8px;

  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;

  &[data-state='delayed-open'] {
      ${animationData}
  }
`

export const StyledHoverCardContent = styled(StyledTooltipContent)`
  width: 300px;
  padding: 20px;

  &[data-state='open'] {
    ${animationData}
  }
`

export const StyledArrow = styled(TooltipPrimitive.Arrow)`
    fill: #131417;
`