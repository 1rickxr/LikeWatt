import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const EditTable = ({ data, setData }) => {
  const arraySize = data.length;

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
    <div className={`w-${arraySize > 0 ? `${arraySize + 1}/12` : 'full'} border-3 border-black p-4 rounded shadow-md bg-white border-opacity-100 border-opacity-100`} style={{ border: '3px solid black', borderRadius: '10px', width: 'fit-content' }}>
      <h2 className="bg-red-400">Edit Table</h2>
      <table>
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
          {data.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}>
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
                  className="relative overflow-hidden px-6 py-3 rounded-full bg-gray-200 text-gray-900 font-semibold text-lg transition-all duration-250 hover:text-white hover:bg-gray-800 hover:before:w-full"
                  onClick={() => handleEdit(row.id, 'isActive', !row.isActive)}
                >
                  Save
                  <span className="absolute top-0 left-0 h-full bg-gray-800 w-0 before:w-full"></span>
                </button>
                <button
                  className="relative overflow-hidden px-6 py-3 rounded-full bg-red-700 text-white font-semibold text-lg transition-all duration-250 hover:bg-red-800"
                  onClick={() => handleDelete(row.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
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
