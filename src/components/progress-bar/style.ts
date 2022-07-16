import styled from "styled-components";

export const Background = styled.div`
    position: relative;
    height: 5px;
    border-radius: 5px;
    background-color: ${props => props.theme.progressBackgroundColor};
`

export const Indicator = styled.div <{
    percentage: number
}>`
    position: absolute;
    top: 0;
    left: 0;
    right: ${props => `${100 - props.percentage}%`};
    bottom: 0;

    border-radius: 5px;
    background-color: ${props => props.theme.primaryColor};
    transition: all ease 300ms;
`