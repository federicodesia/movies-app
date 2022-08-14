import { css, keyframes } from "styled-components"

export const slideUpAndFade = keyframes`
  from { opacity: 0; transform: translateY(2px) }
  to { opacity: 1; transform: translateY(0) }
`

export const slideRightAndFade = keyframes`
  from { opacity: 0; transform: translateX(-2px) }
  to { opacity: 1; transform: translateX(0) }
`

export const slideDownAndFade = keyframes`
  from { opacity: 0; transform: translateY(-2px) }
  to { opacity: 1; transform: translateY(0) }
`

export const slideLeftAndFade = keyframes`
  from { opacity: 0; transform: translateX(2px) }
  to { opacity: 1; transform: translateX(0) }
`

export const slideFadeAnimation = css`
    &[data-side='top'] { animation-name: ${slideDownAndFade}; }
    &[data-side='right'] { animation-name: ${slideLeftAndFade}; }
    &[data-side='bottom'] { animation-name: ${slideUpAndFade}; }
    &[data-side='left'] { animation-name: ${slideRightAndFade}; }
`