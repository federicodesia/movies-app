import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.backgroundColor};

  display: flex;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow: overlay;
`

export const RoutesWrapper = styled.div`
  flex: 1;
`