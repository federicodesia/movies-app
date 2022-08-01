import styled from "styled-components"
import { horizontalContentPadding } from "../../styles/content"

export const HorizontalList = styled.ul`
    ${horizontalContentPadding}
    margin: 0;
    list-style-type: none;

    display: flex;
    gap: 24px;
    overflow-y: overlay;
`