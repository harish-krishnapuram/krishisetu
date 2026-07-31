function Table({ headers = [], data = [], renderRow, emptyMessage = "No records found." }) {
  return (
    <div className="table-responsive bg-white rounded-4 shadow-sm border overflow-hidden">
      <table className="table table-hover align-middle mb-0">
        <thead className="table-light border-bottom">
          <tr>
            {headers.map((head, idx) => (
              <th key={idx} className="text-uppercase text-muted fw-bold py-3 px-4" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => renderRow(item, index))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center py-5 text-muted">
                <i className="bi bi-inbox fs-1 d-block mb-2 text-secondary opacity-50"></i>
                <span>{emptyMessage}</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
