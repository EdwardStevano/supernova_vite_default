import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <Outlet />
    </div>
  )
}

export default Dashboard
