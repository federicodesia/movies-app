import styled from "styled-components";
import { DotIndicator } from "../../styles/dot-indicator";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0px;
    gap: 32px;
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const DotIconWrapper = styled.div`
    position: relative;
    cursor: pointer;
`

export const StyledDotIndicator = styled(DotIndicator)`
    border: none;
`