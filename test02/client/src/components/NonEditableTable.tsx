import React from 'react';

const NonEditableTable = ({ data, arraySize }) => {
  if (!Array.isArray(data)) {
    console.error('data is not an array:', data);
    return <div>No data to display.</div>;
  }

  return (
    <div className={`w-${arraySize > 0 ? `${arraySize + 1}/12` : 'full'} border-3 border-black p-4 rounded shadow-md bg-white border-opacity-100`} style={{ border: '3px solid black', borderRadius: '10px', width: 'fit-content' }}>
      <h2 className="text-center text-xl font-semibold">Non-Editable Table</h2>
      <table className="border-collapse border border-black">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Active</th>
            <th className="p-2 border">Tilt</th>
            <th className="p-2 border">Capacity</th>
            <th className="p-2 border">Model</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={row.id % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}>
              <td className="p-2 border bg-white">{row.id}</td>
              <td className="p-2 border">{row.isActive ? 'Active' : 'Inactive'}</td>
              <td className="p-2 border">{row.tilt}</td>
              <td className="p-2 border">{row.capacity}</td>
              <td className="p-2 border">{row.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NonEditableTable;
