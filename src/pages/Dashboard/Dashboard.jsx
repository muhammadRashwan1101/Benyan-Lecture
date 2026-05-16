import { Outlet } from "react-router-dom";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import Footer from "../../components/Dashborad/Footer/Footer";

function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex gap-5">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
