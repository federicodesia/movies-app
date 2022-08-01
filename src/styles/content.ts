import styled, { css } from "styled-components";
import { down } from "./breakpoints";

export const horizontalContentPadding = css`
    padding: 0px 48px;
    ${down('sm')} {
        padding: 0px 32px;
    }
`

export const verticalContentPadding = css`
    padding: 48px 0px;
`

export const Content = styled.div`
    ${horizontalContentPadding}
`