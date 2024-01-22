import React from 'react';

const NonEditableTable = ({ data }) => {
  if (!Array.isArray(data)) {
    console.error('data is not an array:', data);
    return <div>No data to display.</div>;
  }

  return (
    <div className="w-1/2 border border-gray-300 p-4 rounded shadow-md bg-white">
    <div className="w-1/2 border border-gray-300 p-4 rounded shadow-md bg-white">
      <h2 className="text-center text-xl font-semibold">Non-Editable Table</h2>
      <table className="w-full border-collapse">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Active</th>
            <th className="p-2">Tilt</th>
            <th className="p-2">Capacity</th>
            <th className="p-2">Model</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={row.id % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}>
              <td className="p-2">{row.id}</td>
              <td className="p-2">{row.isActive ? 'Active' : 'Inactive'}</td>
              <td className="p-2">{row.tilt}</td>
              <td className="p-2">{row.capacity}</td>
              <td className="p-2">{row.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default NonEditableTable;
