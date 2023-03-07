import React from "react";
import PanelSidebar from "../components/panelSidebar/PanelSidebar";
import { Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Panel = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <div className="row g-0">
        <PanelSidebar />
        <div className="col-md-8 col-lg-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Panel;
