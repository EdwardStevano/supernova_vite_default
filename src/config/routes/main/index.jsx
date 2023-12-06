import React from "react";
import { Route, Routes } from "react-router-dom";

// Main pages importation
import __MainPage from '@pages/main'
import __Banner__Section from '@pages/main/section/banner/banner'


function MainRoutes() {
  return (
      <Routes>
        <Route path="/" element={<__MainPage />}>
            <Route index element={<__Banner__Section />} />
            <Route path="/home" element={<__Banner__Section />} />
        </Route>
      </Routes>
  );
}

export default MainRoutes;
