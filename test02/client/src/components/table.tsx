// src/components/Table.tsx
import React from 'react';
import styled from 'styled-components';
import RowData from '../types';

const TableContainer = styled.div`
  width: 50%;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f7f7f7;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

interface TableProps {
  data: RowData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer>
      <TableWrapper>
        <TableHeader>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Tilt</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Model</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.isActive ? 'Yes' : 'No'}</TableCell>
              <TableCell>{row.tilt}</TableCell>
              <TableCell>{row.capacity}</TableCell>
              <TableCell>{row.model}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableWrapper>
    </TableContainer>
  );
};

export default Table;
