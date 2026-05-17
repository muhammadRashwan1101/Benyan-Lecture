import { useContext, useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { DraftContext } from "../../../context/DraftContext";

export default function DashboardForm() {
    const { context: outletContext, columns: tableColumns } = useOutletContext();
    const { setDraft } = useContext(DraftContext);
    const path = useLocation().pathname;    

    const savedInput = `${path.split("/")[1]}`;
  
    const [formData, setFormData] = useState(() => {
      if (localStorage.getItem(savedInput)) {
        return JSON.parse(localStorage.getItem(savedInput));
      }
      
      const data = {}
      tableColumns.slice(1).forEach((column) => {
          data[`${column}`]= ""
      })
      return data
    })
   const hasContent = Object.values(formData).some(
    (value) => value.trim() !== ""
  );

    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
      
    }

    useEffect(() => { 
      if(hasContent) {    
        localStorage.setItem(savedInput, JSON.stringify(formData));
        setDraft(`/${path.split("/")[1]}`)
      } else {
        localStorage.removeItem(savedInput);
        setDraft(null)
      }
    },[hasContent, formData, path, savedInput, setDraft])

  return (
    <>
      <section>
        <form className="row g-3 w-50">
          <div className="col-md-6">
            <label htmlFor={tableColumns[1]} className="form-label">
              {tableColumns[1]}
            </label>
            <input type="text" className="form-control" id={tableColumns[1]} onChange={handleChange} name={tableColumns[1]} value={formData[tableColumns[1]] || ""} />
          </div>
          <div className="col-md-6">
            <label htmlFor={tableColumns[2]} className="form-label">
              {tableColumns[2]}
            </label>
            <input
              type="text"
              name={tableColumns[2]}
              className="form-control"
              id={tableColumns[2]}
              value={formData[tableColumns[2]] || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label htmlFor={tableColumns[3]} className="form-label">
              {tableColumns[3]}
            </label>
            <input
              name={tableColumns[3]}
              type="text"
              className="form-control"
              id={tableColumns[3]}
              onChange={handleChange}
              value={formData[tableColumns[3]] || ""}
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
