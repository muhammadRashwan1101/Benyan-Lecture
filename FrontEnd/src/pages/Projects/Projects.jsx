import { Outlet } from "react-router-dom";

const projects = [
  {
    Name: "Project 1",
    Date: "2026-05-01",
    Status: "In Progress",
  },
  {
    Name: "Project 2",
    Date: "2026-06-01",
    Status: "Completed",
  },
  {
    Name: "Project 3",
    Date: "2026-07-01",
    Status: "In Progress",
  },
  {
    Name: "Project 4",
    Date: "2026-08-01",
    Status: "Not Started",
  },
];
export default function Projects() {
  return (
    <div className="mt-5 container-fluid pe-5">
      <Outlet
        context={{
          context: "projects",
          columns: ["#", "Name", "Date", "Status"],
          data: projects,
          path: "/projects",
        }}
      />
    </div>
  );
}
