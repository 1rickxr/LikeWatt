// src/components/NonEditableTable.tsx
import React from 'react';
import styled from 'styled-components';


const TableContainer = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: red;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: black;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: grey;
  }
`;


const TableCell = styled.td`
  padding: 5px; /* Reduced padding */
  border: 1px solid #ddd;
  text-align: center;
  font-size: 14px; /* Reduced font size */
`;

interface NonEditableTableProps {
  data: any[];
}

const NonEditableTable: React.FC<NonEditableTableProps> = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error('data is not an array:', data);
    return <div>No data to display.</div>;
  }

  return (
    <TableContainer>
      <h2 style={{ textAlign: 'center' }}>Non-Editable Table</h2>
      <Table>
        <TableHeader>
          <tr>
            <th>ID</th>
            <th>Active</th>
            <th>Tilt</th>
            <th>Capacity</th>
            <th>Model</th>
          </tr>
        </TableHeader>
        <tbody>
          {data.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.isActive ? 'Active' : 'Inactive'}</TableCell>
              <TableCell>{row.tilt}</TableCell>
              <TableCell>{row.capacity}</TableCell>
              <TableCell>{row.model}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default NonEditableTable;
