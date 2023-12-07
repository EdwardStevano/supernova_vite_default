import React from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
import __dashboard from '@pages/dashboard'
import __dashboard__Section from '@pages/dashboard/content/main/main'


function DashboardRoutes() {
  return (
      <Routes>
        <Route path="dashboard" element={<__dashboard />}>
            <Route index element={<__dashboard__Section />} />
            <Route path="main" element={<__dashboard__Section />} />
        </Route>
      </Routes>
  );
}

export default DashboardRoutes;
