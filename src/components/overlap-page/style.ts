import styled from "styled-components";

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
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;

        mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1) 0%,
            transparent 100%
        );
    }
`

export const HeaderContent = styled(PositionAbsolute)`
    display: flex;
    flex-direction: column;
    padding: 0px 48px;
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
    padding: 48px 0px;
`