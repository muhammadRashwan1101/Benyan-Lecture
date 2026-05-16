import { Outlet } from "react-router-dom";


const users = [
  {
    "First Name": "John",
    "Last Name": "Doe",
    Email: "bEo9c@example.com",
  },
  {
    "First Name": "Jane",
    "Last Name": "Doe",
    Email: "o0V5E@example.com",
  },
  {
    "First Name": "Bob",
    "Last Name": "Smith",
    Email: "ZK3d2@example.com",
  }
]
export default function Users() {
  return (  
    <div className="mt-5 container-fluid pe-5">
        <Outlet context={
          {
            context: "users",
            columns: ["#", "First Name", "Last Name", "Email"],
            data: users,
            path: "/users"
          }
          }/>
    </div>
  )
}
