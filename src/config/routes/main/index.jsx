import React from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
import __MainPage from '@pages/main'
import __Home__Section from '@pages/main/content/home'


function MainRoutes() {
  return (
      <Routes>
        <Route path="/" element={<__MainPage />}>
            <Route index element={<__Home__Section />} />
            <Route path="/home" element={<__Home__Section />} />
        </Route>
      </Routes>
  );
}

export default MainRoutes;
