import React from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
import __NotFound from '@pages/redirect/notFound'
import __Unauthorized from '@pages/redirect/unauthorized'

function NotFoundRoutes() {
  return (
      <Routes>
        <Route path="/*" element={<__NotFound />} />
        <Route path="/unauthorized" element={<__NotFound />} />
      </Routes>
  );
}

export default NotFoundRoutes;
