import styled from "styled-components";
import { horizontalContentPadding, verticalContentPadding } from "../../styles/content";

const headerHeight = '350px';
const overlap = '0px';

export const PositionAbsolute = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const HeaderWrapper = styled.div`
    position: relative;
    height: ${headerHeight};
`

export const HeaderBackdrop = styled(PositionAbsolute)`
    mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        transparent 100%
    );
`

export const HeaderContent = styled(PositionAbsolute)`
    ${horizontalContentPadding}
    
    display: flex;
    flex-direction: column;
    color: white;

    margin-bottom: ${overlap};
`

export const HeaderChildren = styled.div`
    flex: 1;
`

export const PageContentWrapper = styled.div`
    position: absolute;
    top: ${headerHeight};
    left: 0;
    right: 0;
    
    margin-top: -${overlap};
    ${verticalContentPadding}
`