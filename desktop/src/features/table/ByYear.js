import React from "react";

const ByUser = ({ days, data }) => {
  return (
    <>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>day</th>
            {data.map((entry) => (
              <th key={entry._id}>
                {entry.user}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td>{day + 1}</td>
              {data.map((entry) => {
                return entry.days[day] ? (
                  <td key={entry._id}>{entry.days[day].hours}</td>
                ) : (
                  <td key={entry._id}>NO</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ByUser;
