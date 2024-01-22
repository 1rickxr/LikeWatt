// src/components/EditTable.tsx
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
  padding: 5px; 
  border: 1px solid #ddd;
  text-align: center;
  justify-content: center;
  font-size: 13px;
`;

const EditButton = styled.button`
  background-color: grey;
  color: #fff;
  border: none;
  padding: 3px 10px; /* Added 3px padding */
  cursor: pointer;
  margin-right: 5px;
`;

interface EditTableProps {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

const EditTable: React.FC<EditTableProps> = ({ data, setData }) => {
  if (!Array.isArray(data)) {
    console.error('data is not an array:', data);
    return <div>No data to display.</div>;
  }

  const handleEdit = (id: string, field: string, newValue: string | number | boolean) => {
    const newData = data.map((row: any) => {
      if (row.id === id) {
        return { ...row, [field]: newValue };
      }
      return row;
    });
    setData(newData);
  };

  const handleDelete = (id: string) => {
    const newData = data.filter((row: any) => row.id !== id);
    setData(newData);
  };

  return (
    <TableContainer>
      <h2 style={{ textAlign: 'center' }}>Edit Table</h2>
      <Table>
        <TableHeader>
          <tr>
            <th>ID</th>
            <th>Active</th>
            <th>Tilt</th>
            <th>Capacity</th>
            <th>Model</th>
            <th>Action</th>
          </tr>
        </TableHeader>
        <tbody>
          {data.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <input
                  type="checkbox"
                  checked={row.isActive}
                  onChange={(e) => handleEdit(row.id, 'isActive', e.target.checked)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="number"
                  value={row.tilt}
                  onChange={(e) => handleEdit(row.id, 'tilt', parseFloat(e.target.value))}
                />
              </TableCell>
              <TableCell>
                <input
                  type="number"
                  value={row.capacity}
                  onChange={(e) => handleEdit(row.id, 'capacity', parseFloat(e.target.value))}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.model}
                  onChange={(e) => handleEdit(row.id, 'model', e.target.value)}
                />
              </TableCell>
              <TableCell>
                <EditButton onClick={() => handleEdit(row.id, 'isActive', !row.isActive)}>
                  Toggle Active
                </EditButton>
                <EditButton onClick={() => handleDelete(row.id)}>Delete</EditButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default EditTable;
