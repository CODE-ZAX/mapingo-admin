import { useState } from "react";
import Dashboard from "./outlets/Dashboard";
import Places from "./outlets/Places";
import Users from "./outlets/Users";
import PanelProtectedRoute from "./routes/PanelPrivateRoute";
import Login from "./views/Login";
import Panel from "./views/Panel";

import { Route, Routes } from "react-router-dom";
import { useUser } from "./context/UserContext";
import LoginProtectedRoute from "./routes/LoginPrivateRoute";
import Events from "./outlets/Events";
import Logs from "./outlets/Logs";
import Settings from "./outlets/Settings";
function App() {
  const { user } = useUser();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PanelProtectedRoute user={user}>
            <Panel />
          </PanelProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="places" element={<Places />} />
        <Route path="events" element={<Events />} />
        <Route path="logs" element={<Logs />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route
        path="/login"
        element={
          <LoginProtectedRoute user={user}>
            <Login />
          </LoginProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
