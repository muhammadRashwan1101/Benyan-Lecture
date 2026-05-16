import { Outlet } from "react-router-dom";

const developers = [
  {
    Name: "Talaat Harb",
    Specialziation: "Construction",
    Location: "Cairo, EG",
  },
  {
    Name: "El Sweedy",
    Specialziation: "Electicals",
    Location: "Sharkia, EG",
  },
  {
    Name: "Hassan Ali",
    Specialziation: "Plumbing",
    Location: "Cairo, EG",
  },
];
export default function Developers() {
  return <>
    <div className="mt-5 container-fluid pe-5">
      <Outlet
        context={{
          context: "developers",
          columns: ["#", "Name", "Specialziation", "Location"],
          data: developers,
          path: "/developers",
        }}
      />
    </div>
  </>;
}
