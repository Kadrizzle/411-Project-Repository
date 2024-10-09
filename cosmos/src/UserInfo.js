import React from "react";

const DataInputTable = ({ data, setData }) => {
  const handleChange = (day, value) => {
    setData({ ...data, [day]: Number(value) });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((day) => (
          <tr key={day}>
            <td>{day}</td>
            <td>
              <input
                type="number"
                value={data[day]}
                onChange={(e) => handleChange(day, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataInputTable;
