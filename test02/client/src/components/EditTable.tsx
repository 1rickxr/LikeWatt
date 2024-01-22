import React from 'react';

const EditTable = ({ data, setData }) => {
  if (!Array.isArray(data)) {
    console.error('data is not an array:', data);
    return <div>No data to display.</div>;
  }

  const handleEdit = (id, field, newValue) => {
    const newData = data.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: newValue };
      }
      return row;
    });
    setData(newData);
  };

  const handleDelete = (id) => {
    const newData = data.filter((row) => row.id !== id);
    setData(newData);
  };

  return (
    <div className="w-full border border-gray-300 p-4 rounded shadow-md bg-white">
      <h2 className="text-center text-xl font-semibold">Edit Table</h2>
      <table className="w-full border-collapse">
        <thead className="bg-black text-white">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Active</th>
            <th className="p-2">Tilt</th>
            <th className="p-2">Capacity</th>
            <th className="p-2">Model</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className={row.id % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}>
              <td className="p-2">{row.id}</td>
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={row.isActive}
                  onChange={(e) => handleEdit(row.id, 'isActive', e.target.checked)}
                />
              </td>
              <td className="p-2">
                <input
                  type="number"
                  value={row.tilt}
                  onChange={(e) => handleEdit(row.id, 'tilt', parseFloat(e.target.value))}
                />
              </td>
              <td className="p-2">
                <input
                  type="number"
                  value={row.capacity}
                  onChange={(e) => handleEdit(row.id, 'capacity', parseFloat(e.target.value))}
                />
              </td>
              <td className="p-2">
                <input
                  type="text"
                  value={row.model}
                  onChange={(e) => handleEdit(row.id, 'model', e.target.value)}
                />
              </td>
              <td className="p-2">
                <button
                  className="bg-gray-700 text-white border-none p-1 px-2 mr-2 cursor-pointer"
                  onClick={() => handleEdit(row.id, 'isActive', !row.isActive)}
                >
                  Toggle Active
                </button>
                <button
                  className="bg-gray-700 text-white border-none p-1 px-2 cursor-pointer"
                  onClick={() => handleDelete(row.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditTable;
