import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NonEditableTable from './components/NonEditableTable';
import EditTable from './components/EditTable';
import Header from './components/Header';
import Footer from './components/Footer';

const BodyWrapper = styled.div`
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
`;



const App = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const API_URL = 'https://apitest.likewatt-infra.com/entry-test/2';
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <BodyWrapper>
      <Header title="Likewatt" />
      <AppContainer>
          <NonEditableTable data={data} arraySize={undefined} />
          <EditTable data={data} setData={setData} />
      </AppContainer>
      <Footer title="Likewatt" />
    </BodyWrapper>
  );
};

export default App;
