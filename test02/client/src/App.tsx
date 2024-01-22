// src/components/App.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NonEditableTable from './components/NonEditableTable';
import EditTable from './components/EditTable';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const RightContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const API_URL = 'https://apitest.likewatt-infra.com/entry-test/2';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // Replace 'any' with your data type

  useEffect(() => {
    // Fetch data from the API and populate the state
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data); // Assuming the data is under the 'data' key
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <AppContainer>
      <LeftContainer>
        <NonEditableTable data={data} />
      </LeftContainer>
      <RightContainer>
        <EditTable data={data} setData={setData} />
      </RightContainer>
    </AppContainer>
  );
};

export default App;
