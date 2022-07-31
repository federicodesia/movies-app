import styled from "styled-components";

export const Table = styled.table`
    border-collapse: collapse;

    font-size: 13.5px;
    font-weight: 400;
    color: ${props => props.theme.textColor};
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
    height: 38px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    :last-child {
        border: none;
    }
`

export const TableHeader = styled.th`
    width: 1px;
    white-space: nowrap;

    padding: 0px;
    padding-right: 32px;

    color: ${props => props.theme.titleColor};
    font-weight: 400;
    text-align: left;
`

export const TableData = styled.td`
    max-width: 0;
    padding: 0px 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`