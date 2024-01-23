import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const StyledTableContainer = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  padding: 4px;
  border-color: #003b58;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  padding: 0.5rem;
  border: 2px solid #003b58;
  background-color: #003b58;
  color: #fff;
  text-align: left;
`;

const StyledTd = styled.td`
  padding: 0.5rem;
  border: 2px solid #003b58;

  &:nth-child(2) {
    width: 80px;
  }
  &:nth-child(3) {
    width: 80px;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    border-radius: 5px;
    border-bottom: 3px solid #003b58;
  }
`;

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 15px;
  background-color: #e8e8e8;
  font-weight: 1000;
  font-size: 17px;
  transition: all 250ms;
  color: #003b58;
`;

const EditTable = ({ data, setData }) => {
  const handleEdit = (id, field, newValue) => {
    let sanitizedValue = newValue;
    const newData = data.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: sanitizedValue };
      }
      return row;
    });

    setData(newData);
  };

  const handleDelete = (id) => {
    const newData = data.filter((row) => row.id !== id);
    setData(newData);
  };

  const handleAdd = () => {
    const newId = uuidv4();
    const tiltInput = document.getElementById('tilt-input') as HTMLInputElement;
    const capacityInput = document.getElementById('capacity-input') as HTMLInputElement;
    const modelInput = document.getElementById('model-input') as HTMLInputElement;

    const newRow = {
      id: newId,
      isActive: false,
      tilt: parseFloat(tiltInput.value),
      capacity: parseFloat(capacityInput.value),
      model: modelInput.value,
    };

    setData((prevData) => [...prevData, newRow]);
  };

  return (
    <StyledTableContainer className="p-4">
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Active</StyledTh>
            <StyledTh>Tilt</StyledTh>
            <StyledTh>Capacity</StyledTh>
            <StyledTh>Model</StyledTh>
            <StyledTh>Action</StyledTh>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={row.id % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}>
              <StyledTd>
                <input
                  title="Active"
                  type="checkbox"
                  checked={row.isActive}
                  onChange={(e) => handleEdit(row.id, 'isActive', e.target.checked)}
                />
              </StyledTd>
              <StyledTd>
                <input
                  title="Tilt"
                  type="number"
                  max={180}
                  min={0}
                  value={row.tilt}
                  onChange={(e) => handleEdit(row.id, 'tilt', parseFloat(e.target.value))}
                />
              </StyledTd>
              <StyledTd>
                <input
                  title="Capacity"
                  type="number"
                  value={row.capacity}
                  onChange={(e) => handleEdit(row.id, 'capacity', parseFloat(e.target.value))}
                />
              </StyledTd>
              <StyledTd>
                <input
                  title="Model"
                  type="text"
                  value={row.model}
                  onChange={(e) => handleEdit(row.id, 'model', e.target.value)}
                />
              </StyledTd>
              <StyledTd>
                <StyledButton onClick={() => handleDelete(row.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </StyledButton>
              </StyledTd>
            </tr>
          ))}
          <tr>
            <StyledTd>
              <input id="active-input" defaultChecked={true} type="checkbox" placeholder="Active" />
            </StyledTd>
            <StyledTd>
              <input max={180} min={0} defaultValue={0} id="tilt-input" type="number" placeholder="Tilt" />
            </StyledTd>
            <StyledTd>
              <input id="capacity-input" defaultValue={0} type="number" placeholder="Capacity" />
            </StyledTd>
            <StyledTd>
              <input id="model-input" type="text" placeholder="Model" />
            </StyledTd>
            <StyledTd>
              <StyledButton onClick={handleAdd}>Add</StyledButton>
            </StyledTd>
          </tr>
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default EditTable;
