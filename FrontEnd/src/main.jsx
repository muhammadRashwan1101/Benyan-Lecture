import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Status from "./pages/Status/Status.jsx";
import CMS from "./pages/CMS/CMS.jsx";
import Chat from "./pages/Chat/Chat.jsx";
import Developers from "./pages/Developers/Developers.jsx";
import DashboardTable from "./components/Ui/DashboardTable/DashboardTable.jsx";
import DashboardForm from "./components/Ui/DashboardForm/DashboardForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>  
          <Route index element={<Status />} />
          <Route path="/users" element={<Users />}>
            <Route index element={<DashboardTable />} />
            <Route path="add" element={<DashboardForm />} />
          </Route>
          <Route path="/projects" element={<Projects />}>
            <Route index element={<DashboardTable />} />
            <Route path="add" element={<DashboardForm />} />
          </Route>
          <Route path="/developers" element={<Developers />}>
            <Route index element={<DashboardTable />} />
            <Route path="add" element={<DashboardForm />} />
          </Route>
          <Route path="/cms" element={<CMS />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
