import styled from "styled-components";

const overlap = '100px';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 40%;
    min-height: 300px;
    color: white;
`

export const PositionAbsolute = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const HeaderContent = styled(PositionAbsolute)`
    display: flex;
    flex-direction: column;
    padding: 0px 48px;

    margin-bottom: ${overlap};
`

export const HeaderChildren = styled.div`
    flex: 1;
`

export const BackdropWrapper = styled(PositionAbsolute)`
    mask-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        transparent 100%
    );
`

export const PageContentWrapper = styled.div`
    margin-top: -${overlap};
`