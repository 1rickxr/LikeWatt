import React from 'react';
import styled from 'styled-components';

// Define a styled component using styled-components
const StyledNonEditableTable = styled.div`
  border: 3px solid black;
  border-radius: 10px;
  padding: 4px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  padding: 0.5rem;
  border: 2px solid #003b58;
  background-color: #003b58;
  color: #fff;
  text-align: left;
`;
const StyledTr = styled.tr<{isActive?: boolean}>`
  padding: 0.5rem;
  border: 2px solid #003b58;
  background-color: ${({ isActive }) => isActive ? '#9ebe5aab' : '#cd000070'};
  color: black;
  text-align: left;
`;

const StyledTd = styled.td`
  padding: 0.5rem;
  border: 2px solid #003b58;
`;

const NonEditableTable = ({ data, arraySize }) => {
  if (!Array.isArray(data)) {
    console.error('data is not an array:', data);
    return <div>No data to display.</div>;
  }

  return (
    <StyledNonEditableTable className={`w-${arraySize > 0 ? `${arraySize + 1}/12` : 'full'}`}>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>Active</StyledTh>
            <StyledTh>Tilt</StyledTh>
            <StyledTh>Capacity</StyledTh>
            <StyledTh>Model</StyledTh>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <StyledTr isActive={row.isActive} key={row.id} >
              <StyledTd>{row.id}</StyledTd>
              <StyledTd>
                {row.isActive ? 'Active' : 'Inactive'}
              </StyledTd>
              <StyledTd>{row.tilt}</StyledTd>
              <StyledTd>{row.capacity}</StyledTd>
              <StyledTd>{row.model}</StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </StyledNonEditableTable>
  );
};

export default NonEditableTable;
