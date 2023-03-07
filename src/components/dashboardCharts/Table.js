import React from "react";
import classes from "./LineChart.module.css";
const Table = ({ data }) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr className={"table-dark " + classes.thead}>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Age</th>
          <th scope="col">Country</th>
          <th scope="col">Username</th>
          <th scope="col">Phone</th>
          <th scope="col">Join Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.fname}</td>
            <td>{item.lname}</td>
            <td>{item.age}</td>
            <td>{item.country}</td>
            <td>{item.username}</td>
            <td>{item.phoneNo}</td>
            <td>{item.joinDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
