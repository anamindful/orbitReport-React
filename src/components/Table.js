

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data) => (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.orbitType}</td>
              <td>{data.launchData}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};


export default Table;