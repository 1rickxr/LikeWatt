import React, { useEffect, useState } from 'react';
import NonEditableTable from './components/NonEditableTable';
import EditTable from './components/EditTable';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // Replace 'any' with your data type

  useEffect(() => {
    // Fetch data from the API and populate the state
    const API_URL = 'https://apitest.likewatt-infra.com/entry-test/2';
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
    <div className="flex flex-wrap">
      <div className="w-1/2 p-6">
        <NonEditableTable data={data} />
      </div>
      <div className="w-1/2 p-6">
        <EditTable data={data} setData={setData} />
      </div>
    </div>
  );
};

export default App;
