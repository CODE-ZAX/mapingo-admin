import React from "react";
import { DoubleLineChart } from "../components/dashboardCharts/DoubleLineChart";
import { DougnutChart } from "../components/dashboardCharts/DoughnutChart";
import { LineChart } from "../components/dashboardCharts/LineChart";
import classes from "./Dashboard.module.css";
import Tickets from "../components/Places/Places";
import CountUp from "react-countup";

import { FaUserAlt, FaUserCheck, FaUserMinus } from "react-icons/fa";
import { BiNotification } from "react-icons/bi";
import Table from "../components/dashboardCharts/Table";
import { useData } from "../context/DataContext";

const Dashboard = () => {
  const { tickets, tableData } = useData();
  return (
    <div className={"p-3 " + classes.dashboardMain}>
      <div className="container">
        <h4>
          <strong>Dashboard</strong>
        </h4>
        <h5 className="my-4">Overall Status</h5>
        <div>
          <div className="d-flex justify-content-between flex-wrap">
            <div className={classes.bg + " p-2 " + classes.statsHolder}>
              <FaUserAlt size={28} />
              <div>
                <CountUp end={15} />
                <span>K+</span>
              </div>
              <h5>Users</h5>
            </div>
            <div className={classes.bg + " p-2 " + classes.statsHolder}>
              <FaUserCheck size={28} />
              <CountUp end={1153} />
              <h5>Active Users</h5>
            </div>
            <div className={classes.bg + " p-2 " + classes.statsHolder}>
              <FaUserMinus size={28} />
              <div>
                <CountUp end={32} />
                <span>K+</span>
              </div>
              <h5>Uninstalled</h5>
            </div>
            <div className={classes.bg + " p-2 " + classes.statsHolder}>
              <BiNotification size={28} />
              <div>
                <CountUp end={20} />
                <span>M+</span>
              </div>
              <h5>PN Enabled Users</h5>
            </div>
          </div>
        </div>
        <h5 className="my-4">Places Statistics</h5>
        <div className="d-lg-flex flex-wrap justify-content-between">
          <div className={"me-lg-4 mb-4 " + classes.bg}>
            <DougnutChart />
          </div>
          <div className={" " + classes.bg}>
            <Tickets tickets={tickets} />
          </div>
        </div>
        <h5 className="my-4">Users Statistics</h5>
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
          <div className={" " + classes.bg}>
            <LineChart />
          </div>
          <div className={" " + classes.bg}>
            <DoubleLineChart />
          </div>
        </div>
        <h5 className="my-4">Users Data</h5>
        <div className="mt-5 container">
          <div className={classes.tableResponsive + " table-responsive"}>
            <Table data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
