import React, { useState } from "react";
import UserTable from "../components/usersTable/UserTable";
import classes from "./Users.module.css";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { useData } from "../context/DataContext";
import UsersModal from "../utils/UserModal";
const Users = () => {
  const { tableData } = useData();
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  return (
    <div className="container p-3">
      <UsersModal user={user} show={show} setShow={setShow} />
      <h4>
        <strong className={classes.mainText}>Users</strong>
      </h4>
      <h5 className="my-2">Search</h5>
      <nav className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div className={"input-group " + classes.inp}>
          <span className="input-group-text">ID</span>
          <input type="text" className="form-control" placeholder="Search Id" />
        </div>
        <div className={"input-group " + classes.inp}>
          <span className="input-group-text">
            <MdEmail size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Email"
          />
        </div>
        <div className={"input-group " + classes.inp}>
          <span className="input-group-text">
            <FaUserAlt size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Username"
          />
        </div>
        <div className={"input-group " + classes.inp}>
          <span className="input-group-text">
            <BsTelephoneFill size={16} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Phone"
          />
        </div>
        <div>
          <button className={"btn " + classes.btnCustom}>Clear</button>
        </div>
      </nav>
      <UserTable
        data={tableData}
        user={user}
        setUser={setUser}
        show={show}
        setShow={setShow}
      />
      <nav
        className={
          "d-flex align-items-center justify-content-center " + classes.page
        }
        aria-label="users navigation "
      >
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Users;
