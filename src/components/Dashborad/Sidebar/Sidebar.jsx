import style from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

const Links = [
    {
        name: "User Management",
        icon: <i className="fa-solid fa-users"></i>,
        path: "/users"
    },
    {
        name: "Projects Management",
        icon: <i className="fa-regular fa-building" ></i>,
        path: "/projects"
    },
    {
        name: "Developers Management",
        icon: <i className="fa-regular fa-building" ></i>,
        path: "/developers"
    },
    {
        name: "Website CMS",
        icon: <i className="fa-solid fa-globe"></i>,
        path: "/cms"
    },
    {
        name: "Live Chat",
        icon: <i className="fa-regular fa-comments"></i>,
        path: "/chat"
    }
]

export default function Sidebar() {
  return (
    <div className={`${style["sidebar"]} bg-primary w-25 d-flex flex-column`}>
        <h3 className="px-5 pt-4 text-uppercase">Dashboards</h3>
        <ul className="list-group d-flex flex-column gap-3 mt-3">
            {Links.map((link, index) => (
                <NavLink
                    key={index}
                    className={({ isActive }) => isActive ?  `${style["active"]} ${style["a"]}` : `${style["a"]}`}
                    to={link.path}
                >
                    <li className="list-group-item list-group-item-action">
                        {link.icon}
                        {link.name}
                    </li>
                </NavLink>
            ))}
        </ul>
    </div>
  )
}
