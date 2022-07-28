import styled, { css } from "styled-components";
import { OutlineTextButton, TextButton } from "../../styles/button";

const style = css`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const StyledButton = styled(TextButton)`${style}`
export const StyledOutlineButton = styled(OutlineTextButton)`${style}`

export const RightSpace = styled.div<{
    iconSize: string
}>`
    width: ${props => props.iconSize};
`