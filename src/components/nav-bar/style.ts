import styled from "styled-components";
import { DotIndicator } from "../../styles/dot-indicator";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0px;
    gap: 32px;
`

export const SearchBarSuggestionsArea = styled.div`
    position: relative;
    flex: 1;
`

export const DotIconWrapper = styled.div`
    position: relative;
    cursor: pointer;
`

export const StyledDotIndicator = styled(DotIndicator)`
    border: none;
`