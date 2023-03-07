import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ImStatsDots, ImListNumbered } from "react-icons/im";
import { BsPinMapFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { BsCalendarEventFill, BsFillGearFill, BsSearch } from "react-icons/bs";
import classes from "./PanelSidebar.module.css";
import { useUser } from "../../context/UserContext";
const PanelSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useUser();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <nav
      id="sidebarMenu"
      className={"col-md-4 col-lg-3 d-md-block collapse " + classes.sidebar}
    >
      <div className="position-sticky pt-3">
        <div>
          <h2 className={classes.logo}>Admin Panel</h2>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item px-2 mb-3">
            <div className={"p-2 " + classes.search}>
              <BsSearch size={20} className={"text-light"} />
              <input type="text" placeholder="Search..." />
            </div>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link " + classes.active : "nav-link";
              }}
              aria-current="page"
              to={"/dashboard"}
            >
              <ImStatsDots size={20} className={"me-2"} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link " + classes.active : "nav-link ";
              }}
              to={"/users"}
            >
              <HiUsers size={20} className={"me-2"} />
              <span>Users</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link " + classes.active : "nav-link";
              }}
              to={"/places"}
            >
              <BsPinMapFill size={20} className={"me-2"} />
              <span>Places</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link " + classes.active : "nav-link";
              }}
              to={"/logs"}
            >
              <ImListNumbered size={20} className={"me-2"} />
              Logs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "nav-link " + classes.active : "nav-link";
              }}
              to={"/settings"}
            >
              <BsFillGearFill size={20} className={"me-2"} />
              Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <div
              className={"nav-link text-danger "}
              onClick={() => {
                logout().then(() => navigate("/login"));
              }}
            >
              <MdLogout size={20} className={"me-2"} />

              <span style={{ cursor: "pointer" }}>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PanelSidebar;
