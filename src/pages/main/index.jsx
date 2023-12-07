import React from 'react'
import { Outlet } from 'react-router-dom'

function main() {
  return (
    <div className='main-container'>
      <Outlet />
    </div>
  )
}

export default main
