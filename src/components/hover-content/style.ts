import styled, { keyframes } from "styled-components"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

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

export const StyledContent = styled(HoverCardPrimitive.Content)`
  background-color: #131417;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;

  width: 300px;
  padding: 20px;
  border-radius: 8px;

  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  animation-fill-mode: forwards;

  &[data-state='open'] {
      &[data-side='top'] { animation-name: ${slideDownAndFade}; }
      &[data-side='right'] { animation-name: ${slideLeftAndFade}; }
      &[data-side='bottom'] { animation-name: ${slideUpAndFade}; }
      &[data-side='left'] { animation-name: ${slideRightAndFade}; }
  }
`

export const StyledArrow = styled(HoverCardPrimitive.Arrow)`
    fill: #131417;
`