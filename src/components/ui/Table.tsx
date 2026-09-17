type TableProps = {
  columns: string[];
  data: any[];
  striped?: boolean;
};

export const Table = ({ columns, data, striped = false }: TableProps) => {
  return (
    <table
      className="table"
      style={{ width: "100%", borderCollapse: "collapse" }}
    >
      <thead>
        <tr style={{ background: "#f1f1f1" }}>
          {columns.map((col, i) => (
            <th key={i} style={{ border: "1px solid #ccc", padding: "8px" }}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr
            key={idx}
            style={{
              background: striped && idx % 2 === 0 ? "#f9f9f9" : "white",
            }}
          >
            {Object.values(row).map((val: any, j) => (
              <td key={j} style={{ border: "1px solid #ccc", padding: "8px" }}>
                {val}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
