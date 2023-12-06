import React from 'react'
import { Routes, Route } from 'react-router-dom'

// pages importation
import __MainPage from '@pages/main/main'
import __AuthPage from '@pages/auth/auth'
import __NotFoundPage from '@pages/notFound/notFound'


function RouteConfig() {
  return (
    <Routes>
        <Route path="/" element={<__MainPage />}>
            <Route index element={<__AuthPage />} />
            <Route path="/home" element={<__AuthPage />} />
            <Route path="/test" element={<__NotFoundPage />} />
        </Route>
    </Routes>
  )
}

export default RouteConfig
