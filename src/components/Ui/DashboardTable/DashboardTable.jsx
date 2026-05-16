import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export default function DashboardTable() {
  const { context: outletContext, columns: tableColumns, data: outletData, path: outletPath } = useOutletContext();
  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center mb-4">
        <h2 className="text-capitalize">{outletContext}</h2>
        <Link
          to={`${outletPath}/add`}
          className="btn btn-primary d-flex align-items-center gap-2 mb-2 text-capitalize"
          style={{width: "fit-content"}}
        >
          <i className="fa-solid fa-plus"></i>
          Add {outletContext.slice(0, -1)}
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {tableColumns.map((column, index) => (
              <th key={index}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {outletData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableColumns.map((column, colIndex) => (
                <td key={colIndex}>
                    {row[column] || rowIndex+1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
