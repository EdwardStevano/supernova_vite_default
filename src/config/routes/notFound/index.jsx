import React from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
import __NotFound from '@pages/notFound'


function NotFoundRoutes() {
  return (
      <Routes>
        <Route path="/*" element={<__NotFound />} />
      </Routes>
  );
}

export default NotFoundRoutes;
