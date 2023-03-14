import React from "react";
import classes from "./UserTable.module.css";
const UserTable = ({ data, show, user, setShow, setUser }) => {
  return (
    <div className="container ">
      <div className="table-responsive ">
        <table className="table table-striped table-hover">
          <thead>
            <tr className={"table-dark " + classes.thead}>
              <th scope="col">#id</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">email</th>
              <th scope="col">Country</th>
              <th scope="col">Username</th>
              <th scope="col">Phone</th>
              <th scope="col">Join Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                onClick={() => {
                  setUser(item);
                  setShow(true);
                }}
              >
                <th scope="row">{index + 1}</th>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.username}</td>
                <td>{item.phoneNo}</td>
                <td>{item.joinDate}</td>
                <td>
                  <button className={"btn btn-outline-primary me-2"}>
                    Edit
                  </button>
                  <button className="btn btn-outline-danger ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
