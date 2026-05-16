import { useOutletContext } from "react-router-dom";

export default function DashboardForm() {
    const { context: outletContext, columns: tableColumns } = useOutletContext();
  return (
    <>
      <section>
        <form className="row g-3 w-50">
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              {tableColumns[1]}
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              {tableColumns[2]}
            </label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              {tableColumns[3]}
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary text-capitalize mt-3">
              Add {outletContext.slice(0, -1)}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
